# pgSql

## enum

```javascript
exports.up = async function (knex) {
  /**
   *
   * @param {import('knex').Knex} knex
   * @returns
   */
  const post = async (knex) => {
    const tblName = "post";
    const seqName = `${tblName}_id_seq`;
    const start = 1;
    await knex.schema
      .raw(`create sequence "${seqName}" start ${start}`)
      .raw(`create table "${tblName}"(id bigint unique DEFAULT NEXTVAL('${seqName}'))`)
      .table(tblName, (tbl) => {
        tbl.timestamps(true, true);
        tbl.string("title");
        tbl.string("photo_url");
        tbl.string("description");
        tbl.string("platform_icon_url");
        tbl.string("platform_link");
        tbl.string("platform_name");
        tbl.string("github_repo");
        tbl.string("coupon");
        tbl.index(["platform_name"]);
      });

    await knex.raw(` 
    ALTER TABLE "${tblName}" ADD "search" tsvector;
    CREATE INDEX "${tblName}_search_index" ON ${tblName} USING gin("search");
    `);
  };
};

exports.down = async function (knex) {
  await knex.schema
    .dropTableIfExists("user_company")
    .raw("drop sequence if exists user_company_id_seq");
};
```

## get all sequence name & delete sequence

```javascript
// select all sequence
  SELECT
      relname sequence_name
  FROM
      pg_class
  WHERE
      relkind = 'S';

// delete all sequence
SELECT 'drop sequence ' || c.relname || ';' FROM pg_class c WHERE (c.relkind = 'S');
```

## objectionJs

### simple query

```javascript
await HrmHoliday.query()
  .where("company_id", company.id)
  .whereRaw('(extract(year from "date") <> extract(year from now()))')
  .delete();
```

```javascript
const holidays = await HrmHoliday.query().where("company_id", company.id);
/*
return array of holidays as instance of HrmHoliday;
so
holidays.$toJson() will not working as it is simple array
holidays[0].$toJson() will work if not empty

*/
```

### eager join withGraphFetched

```javascript
const companyQuery = await Company.query()
  .findById(company.id)
  .withGraphFetched("[users,bill,setting]"); //.withGraphFetched("users")
```

### eager join withGraphJoined

```javascript
/*

 withGraphJoined can be used just like withGraphFetched. In addition you can refer to the related items from the root query because they are all joined:

*/

const superior = await User.query()
  .withGraphJoined("companies")
  .where({ "user.id": superiorId })
  .where({ "companies.company_id": company.id });
```

### get last row from last

```javascript
const absences = await HrmAbsence.query()
  .where({ company_id: company.id })
  .orderBy("id", "DESC")
  .limit(maxItem)
  .offset(offset(page, maxItem));
```

### trigger function

```javascript
const counterUser = async (knex) => {
  return await knex.schema.raw(`
    CREATE OR REPLACE FUNCTION user_increment()
      RETURNS TRIGGER
      LANGUAGE PLPGSQL  
      AS
    $$
    BEGIN
      UPDATE "counter_user" SET active = active + 1 WHERE id = 1;
      RETURN NEW;
    END;
    $$
  `).raw(`
    CREATE OR REPLACE FUNCTION user_decrement()
      RETURNS TRIGGER
      LANGUAGE PLPGSQL  
      AS
    $$
    BEGIN
      if NEW.deactivated  then
        UPDATE "counter_user" SET inactive = inactive + 1 WHERE id = 1;
      end if;
      RETURN NEW;
    END;
    $$
  `).raw(`
    CREATE TRIGGER tr_user_increment
    AFTER INSERT
    ON "user"
    EXECUTE PROCEDURE user_increment();
  `).raw(`
    CREATE TRIGGER tr_user_decrement
    BEFORE UPDATE
    ON "user"
    FOR EACH ROW
    EXECUTE PROCEDURE user_decrement();
  `);
};

module.exports = counterUser;
```

## command line

### create db under postgres username

> createdb -U postgres zmenkarDev

### connect to postgres with username 'postgres'

> psql -U postgres

### connect to database with name 'zmenka_dev'

> \c zmenka_dev zmenka_dev

### list all table

> \d or \dt

### clear screen

> \! clear

### import sql from command line - navigate to current directory

> psql -U postgres zmenka_dev < db_import.sql

### insert sql to CURRENT database

> zmenka_dev=# \i d:/download/test.sql;

### full english text search

select \* from card
where to_tsvector(name || ' ' || artist || ' ' || text) @@ to_tsquery('Avon');

to_tsvector(columnName)
-meaning that psql will create index on the fly before search
-useing this way is slow, so we need to create index first

```javascript
await knex.raw(` 
    ALTER TABLE acc_payable ADD CONSTRAINT check_left_payable check ("left" >= 0)
    `);
```

then now we could perform full text search without to_tsvector function

select \* from card
where textsearchable_index_col @@ to_tsquery('Avon');

### trigger

```javascript

CREATE FUNCTION public.hrm_absence_on_approved()
    RETURNS trigger
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE NOT LEAKPROOF
AS $BODY$
DECLARE
  oldTable record;
  oldApprove text;
  newApprove text;
  currentYear int;
  BEGIN
  raise info 'old %',old;
  raise info 'new %',new;
  oldApprove = old.approving_status;
  newApprove = new.approving_status;
  currentYear = extract(year from now());
  raise info 'old approving %', oldApprove;
  raise info 'new approving %', newApprove;


    select * from "hrm_absence_counter" where "company_id" = new.company_id and "user_id" = new.user_id and "year" = currentYear into oldTable;
    raise info 'old table %',found;

    if newApprove = 'rejected' and found then
      case oldApprove
      when 'pending' then
        update "hrm_absence_counter"
        set "pending" = "pending" - 1,
        "rejected" = "rejected" + 1
        where "company_id" = new.company_id and "user_id" = new.user_id and "year" = currentYear;
      when 'approved' then
        update "hrm_absence_counter"
        set "approved" = "approved" - 1,
        "rejected" = "rejected" + 1
        where "company_id" = new.company_id and "user_id" = new.user_id and "year" = currentYear;
    end case;

    elsif newApprove = 'approved' and found then
      case oldApprove
      when 'pending' then
        update "hrm_absence_counter"
        set "pending" = "pending" - 1,
        "approved" = "approved" + 1
        where "company_id" = new.company_id and "user_id" = new.user_id and "year" = currentYear;
      when 'rejected' then
        update "hrm_absence_counter"
        set "rejected" = "rejected" - 1,
        "approved" = "approved" + 1
        where "company_id" = new.company_id and "user_id" = new.user_id and "year" = currentYear;
    end case;

    -- case add new table
    elsif newApprove = 'pending' and not found then
    insert into "hrm_absence_counter" (company_id, user_id, "year", pending, approved, rejected)
    values (new.company_id,new.user_id,currentYear,1,0,0);

    end if;
    select * from "hrm_absence_counter"
    where "company_id" = new.company_id and "user_id" = new.user_id and "year" = currentYear into oldTable;
    raise info 'new table %',found;

    RETURN NEW;
  END;
$BODY$;

ALTER FUNCTION public.hrm_absence_on_approved()
    OWNER TO postgres;


```

### triggerer function

```javascript
CREATE TRIGGER tr_hrm_absence_on_approved
  BEFORE INSERT OR UPDATE
  ON public.hrm_absence
  FOR EACH ROW
  EXECUTE PROCEDURE public.hrm_absence_on_approved();

```

### currency

```javascript
tbl.decimal("price", 14, 2).notNullable().defaultTo(0);
```

### raw

```javascript
await knex.raw(` 
    ALTER TABLE acc_payable ADD CONSTRAINT check_left_payable check ("left" >= 0)
    `);
```
