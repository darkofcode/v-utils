# sql relation

```info
There are 3 cases:

> 1 to 0-1 relationship(pseudo one to one)
> 1 to * relationship(one to many)
> * to * relationship(many to many)

Now you should decide which one to choose.

If one employee can have multiple addresses you can go with option 2.

If one employee can have multiple addresses and one address can have multiple employees(from your data it sounds like it can be because 2 employees can live in the same town on the same street) then you should stick to option 3.

If neither of the above is true then just pick option 1.

Now the technical part for those options:

```

## 1 to 0-1 relationship (pseudo one to one)

```sql
create table Employees(employee_id int, --will be PK
                       first_name varchar(50)
                       last_name varchar(50)
                       ....)

create table EmployeeAddresses(employee_id int, --will be PK and FK on Employees.employee_id
                               town varchar(50)
                               street varchar(50)
                               ....)

```

## 1 to \* relationship(one to many)

### If one employee can have multiple addresses

```sql
create table Employees(employee_id int, --will be PK
                       first_name varchar(50)
                       last_name varchar(50)
                       ....)

create table EmployeeAddresses(address_id int, --will be PK
                               employee_id int, --will be FK on Employees.employee_id
                               town varchar(50)
                               street varchar(50)
                               ....)

```

### If one address can have multiple employees

```sql
create table Employees(employee_id int, --will be PK
                       address_id int, --will be PK and FK on Addresses.address_id
                       first_name varchar(50)
                       last_name varchar(50)
                       ....)

create table Addresses(address_id int, --will be PK
                       town varchar(50)
                       street varchar(50)
                       ....)

```

## \* to \* relationship(many to many)

```sql
create table Employees(employee_id int, --will be PK
                       first_name varchar(50)
                       last_name varchar(50)
                       ....)

create table Addresses(address_id int, --will be PK
                       town varchar(50)
                       street varchar(50)
                       ....)

create table EmployeeAddresses(
                              id int, --will be PK
                              employee_id int, --will be FK on Employees.employee_id
                              address_id int, --will be FK on Addresses.address_id)


```

## knex relation

```javascript
exports.up = async function (knex) {
  try {
    await knex.schema.createTable("dog", (table) => {
      table.increments();
      table.string("name", 70).notNullable();
    });
    await knex.schema.createTable("owner", (table) => {
      table.increments();
      table.string("name", 70).notNullable();
    });
    await knex.schema.createTable("dog_owner", (table) => {
      table.increment();
      table.integer("dog_id").references("id").inTable("dog");
      table.integer("owner_id").references("id").inTable("owner");
    });
  } catch (error) {
    // console.trace(error);
  }
  return true;
};

exports.down = async function (knex) {
  try {
    await knex.schema.dropTableIfExists("dog_owner");
    await knex.schema.dropTableIfExists("dog");
    await knex.schema.dropTableIfExists("owner");
  } catch (error) {
    // console.trace(error);
  }
  return true;
};
```
