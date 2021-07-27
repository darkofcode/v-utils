# Knex

## knex cli for common javascript

```javascript
// up grate to latest schema
knex migrate:latest

// rollback to clean state
knex migrate:rollback

// create migration directory

knex migrate:make acc_income

this will create knex migration directory with


  exports.up = function(knex) {

  };

  exports.down = function(knex) {

  };



// run knex seed
knex seed:run

```

## knex cli with esm

```javascript
// up grate to latest schema
knex --esm migrate:latest

// rollback to clean state
knex --esm migrate:rollback

// run knex seed
knex --esm seed:run
node -r esm "some-path.js"
```
