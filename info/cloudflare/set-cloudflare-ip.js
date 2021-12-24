import fetch from "node-fetch";
const fs = require("fs");
const path = require("path");
const util = require("util");
const exec = util.promisify(require("child_process").exec);

/**
 *
 * @param {4|6} version
 */
const getCPip = async (version) => {
  // const ip = (await axios.get(`https://www.cloudflare.com/ips-v${version}`)).data;
  const ip = await (await fetch(`https://www.cloudflare.com/ips-v${version}`)).json();
  return ip
    .replace(/[\r\n\v\t\b\f]/g, "\n")
    .split("\n")
    .map((r) => `set_real_ip_from ${r};`)
    .join("\n");
};

const getContentIp = async () => {
  try {
    const ip4 = await getCPip(4);
    const ip6 = await getCPip(6);

    if (!ip4 || !ip6) return "";

    // prettier-ignore
    const content = `
#Cloudflare nginx set-up  

# - IPv4
${ip4}

# - IPv6
${ip6}

real_ip_header CF-Connecting-IP;
    `;
    return content;
  } catch (error) {
    return "";
  }
};

const getOriSetup = (filePath) => {
  return new Promise((resolve, _) => {
    if (!fs.existsSync(filePath)) {
      resolve(" ");
    }

    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        resolve(" ");
      }
      resolve(data);
    });
  });
};

const setUpNginxIp = async () => {
  const _CLOUDFLARE_FILE_PATH = "./cloudflare";
  const CLOUDFLARE_FILE_PATH =
    process.platform === "linux" ? "/etc/nginx/cloudflare" : path.join(__dirname, _CLOUDFLARE_FILE_PATH);
  const oriContent = await getOriSetup(CLOUDFLARE_FILE_PATH);

  const removeOri = async () => {
    if (fs.existsSync(CLOUDFLARE_FILE_PATH)) {
      await exec(`rm "${CLOUDFLARE_FILE_PATH}"`);
    }
  };

  try {
    await removeOri();
    const _content = await getContentIp();
    const content = !!_content ? _content : oriContent;

    fs.writeFile(CLOUDFLARE_FILE_PATH, content, (err) => {
      if (err) {
        throw err;
      }
    });
  } catch (error) {
    // console.log(`from error setup:\n`, oriContent);
    await removeOri();

    fs.writeFile(CLOUDFLARE_FILE_PATH, oriContent, (err) => {
      if (err) {
        return;
      }
    });
  }
};

setUpNginxIp();

/*
#Cloudflare nginx set-up

# - IPv4
set_real_ip_from 173.245.48.0/20;
set_real_ip_from 103.21.244.0/22;
set_real_ip_from 103.22.200.0/22;
set_real_ip_from 103.31.4.0/22;
set_real_ip_from 141.101.64.0/18;
set_real_ip_from 108.162.192.0/18;
set_real_ip_from 190.93.240.0/20;
set_real_ip_from 188.114.96.0/20;
set_real_ip_from 197.234.240.0/22;
set_real_ip_from 198.41.128.0/17;
set_real_ip_from 162.158.0.0/15;
set_real_ip_from 104.16.0.0/13;
set_real_ip_from 104.24.0.0/14;
set_real_ip_from 172.64.0.0/13;
set_real_ip_from 131.0.72.0/22;

# - IPv6
set_real_ip_from 2400:cb00::/32;
set_real_ip_from 2606:4700::/32;
set_real_ip_from 2803:f800::/32;
set_real_ip_from 2405:b500::/32;
set_real_ip_from 2405:8100::/32;
set_real_ip_from 2a06:98c0::/29;
set_real_ip_from 2c0f:f248::/32;

real_ip_header CF-Connecting-IP;

*/
