# Jest-MySQL-TEST
20190911

## install sequelize cli
```
$ npm install -g sequelize-cli
```


## install sequelize and mysql
```
$ npm install --save sequelize
$ npm install --save mysql2
```

## Initialize Sequelize

```
$ sequelize init
```

## Modify config.json
### example
```
development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
```

## Create Database
```
$ sequelize db:create
```

## Create User Model
```
$ sequelize model:generate --name User --attributes name:string,password:string,role:string
```

## Create other models
```
$ sequelize model:generate --name Project --attributes name:string
$ sequelize model:generate --name Task --attributes name:string,point:integer
$ sequelize model:generate --name TimeLog --attributes timeInHour:decimal(3,1)
```

## Modify TASK and Timelog relationship to User and Projects
Modify files in migrationsxxxxx-create-task.js
Modify files in migrationsxxxxx-create-time.js
(Need to survey)
```
userId: {
  type: Sequelize.INTEGER,
  onDelete: 'CASCADE',
  references: {
    model: 'Users',
    key: 'id',
    as: 'userId'
  }
},
projectId: {
  type: Sequelize.INTEGER,
  onDelete: 'CASCADE',
  references: {
    model: 'Projects',
    key: 'id',
    as: 'projectId'
  }
}
```

## create tables
```
$ sequelize db:migrate
```