# crontab

list cron list

```
 crontab -l

 // no crontab from currentUser
```

edit crontab
node use absolute path as possible

> crontab -e

run everyday at 0 minute 2am
run bash command /bin/sh  
where bash script in /home/zmenka/kinodes/back/admin/run-backup.sh

```
# ┌───────────── minute (0 - 59)
# │ ┌───────────── hour (0 - 23)
# │ │ ┌───────────── day of month (1 - 31)
# │ │ │ ┌───────────── month (1 - 12)
# │ │ │ │ ┌───────────── day of week (0 - 6) (Sunday to Saturday;
# │ │ │ │ │                                       7 is also Sunday on some systems)
# │ │ │ │ │
# │ │ │ │ │
# * * * * *  command_to_execute



###### Sample crontab ######

# backup with bash script & node js
# everyday at 2am
0 2 * * * /bin/sh /home/zmenka/kinodes/back/admin/run-backup.sh

# Empty temp folder every Friday at 5am
0 5 * * 5 rm -rf /tmp/*

# Backup images to Google Drive every night at midnight
0 0 * * * rsync -a ~/Pictures/ ~/Google\ Drive/Pictures/
```

## bash script in run-backup.sh

line
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

is to make sure bash script aware of nvm node version manager

$(which node) /absoluteToScriptPath

```
#!/usr/bin/env node
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
$(which node) /home/zmenka/kinodes/back/backup.js
echo 'hello' >> /home/zmenka/kinodes/back/admin/test.txt
# push 'hello' to test.txt for debug purpose; delete in prod
```

## node script

backup node script & node_module are at the same folder level

```
#!/usr/bin/env node
require = require("esm")(module /*, options*/);
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "./env/config.env") });
const { AdminErrors } = require("./src/models/admin/errors");
const Knex = require("knex");
const format = require("date-fns/format");
const AdmZip = require("adm-zip");
const util = require("util");
const S3Bucket = require("./src/utils/s3-bucket");
const { backup: backupLinux } = require("./src/utils/backup-linux");
const { backup: backupWindow } = require("./src/utils/backup-window");
const exec = util.promisify(require("child_process").exec);
const getEndOfMonth = require("date-fns/endOfMonth");
const getDayDiff = require("date-fns/differenceInCalendarDays");
const Model = require("objection").Model;

const backupFnc = process.platform === "linux" ? backupLinux : backupWindow;
const s3 = new S3Bucket();

// clean old data
const cleanData = async () => {
  const cleanPath = path.join(__dirname, "./admin/data");
  await exec(`rm -rf "${cleanPath}"`);
  await exec(`mkdir "${cleanPath}"`);
  // throw Error("some errors");
};

// prettier-ignore
const getErrorData = (err)=>{

  return {
    errors_stack: (err.stack || "-").toString().slice(0, 1100),
    errors_code: 501,
    errors_name: "backup error",
    ip: '-',
    agent: '-',
    method: '-',
    url: "-",
    body: '-',
    http_version: '-',
  };

}

// gzip

const createZip = (dbPath) => {
  return new Promise((resolve, reject) => {
    const date = format(new Date(), "yyyy-MM-dd_HH-mm-ss");
    const assetPath = path.join(__dirname, "./assets");
    const outPath = path.join(__dirname, `./admin/data/backup_${date}.zip`);
    const zip = new AdmZip();

    zip.addLocalFile(dbPath);
    zip.addLocalFolder(assetPath, "./assets");
    zip.writeZip(outPath, (err) => {
      if (err) {
        reject(err);
      } else {
        exec(`rm -rf "${dbPath}"`)
          .then(() => {
            resolve(outPath);
          })
          .catch(() => reject("clean db error"));
      }
    });
  });
};

const clearOldBackup = async (age = 45) => {
  const current = new Date();
  const endOfMonth = getEndOfMonth(current);
  const isEndOfMonth = getDayDiff(current, endOfMonth) === 0;

  if (isEndOfMonth) {
    const fileLists = await s3.fileLists();
    if (fileLists.length === 0) return;
    const deleteFiles = fileLists.filter((r) => {
      const modified = new Date(r.LastModified);
      return getDayDiff(current, modified) > age;
    });

    if (deleteFiles.length === 0) return;

    await s3.deleteFiles(deleteFiles.map((r) => r.Key));
  }
};

const connection = () => {
  const isProd = process.env.NODE_ENV === "production";
  const database = process.env.PG_DATABASE;
  const user = process.env.PG_USER;
  const password = process.env.PG_PASSWORD;
  const port = process.env.PG_PORT;
  const host = process.env.PG_HOST;
  const knex = new Knex({
    client: "pg",
    connection: {
      database: isProd ? database : "zmenka_dev",
      user: isProd ? user : "postgres",
      password: isProd ? password : "123456",
      port: isProd ? port : 5432,
      host: isProd ? host : "localhost",
    },
    pool: {
      min: 0,
      max: 1,
    },
  });
  Model.knex(knex);
  // console.log(`from knex connection`);
  return knex;
};

const backup = async () => {
  try {
    await cleanData();
    const dbOutPath = await backupFnc(path.join(__dirname, `./admin/data/psql.tar`));
    const zipDataPath = await createZip(dbOutPath);
    await clearOldBackup(45);
    await s3.upload(zipDataPath);
  } catch (err) {
    // console.log(`from error:\n`, err);
    const _knex = connection();
    await AdminErrors.query().insert(getErrorData(err));
    _knex.destroy();

    // process.exit(1);
  }
};

backup().catch((err) => {
  // console.log(`from error:\n`, err);
});

// (function () {
//   const v = process.platform;
//   console.log(`from node`, { v });
// })();

```
