# BlueCity

Blue City backend repository

## Getting Started

Download links:

From Github: https://github.com/Sebastian197/bluecity.git

## Prerequisites

You need a working environment with:
* [Git](https://git-scm.com) - You can install it from https://git-scm.com/downloads.
* [MySQL](https://www.mysql.com) o [MariaDB](https://mariadb.org) - You can install it from https://www.mysql.com/downloads/ and https://mariadb.org/dowload respetively.
* [Node.js](https://nodejs.org) - Install node.js from https://nodejs.org/es/download/. It's advisable to install the LTS version.

## General Installation instructions

The best option to start with this project is cloning it in your PC:

```
git clone https://github.com/Sebastian197/bluecity.git
```

You need a node.js working environment. The LTS is recommended: https://nodejs.org/es/

Once you have cloned your project install all dependencies.

```
cd bluecity
npm install
```

1. You need a MySQL/MariaDB server working.

2. You have to edit the file bluecity/src/keys/keys.js, depending on your environment.

```
host: '127.0.0.1',
user: 'root',
password: 'your_password',
database: 'bluecity_db',
port: 3306,
dialect: 'mysql'
```

3. Create the mysql database, that in our case is "bluecity_db". Follow this diagram.

![Diagram](https://github.com/Sebastian197/Bluecity/raw/master/Diagram.png)

Finally to start enjoying this project.

```
cd bluecity
npm start
```

Enjoy!!!

## Built With

* [Visual Studio Code](https://code.visualstudio.com/) - The Editor used in this project
* [Node.js](https://nodejs.org/) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
* [sequelize](https://sequelize.org/) - Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. It features solid transaction support, relations, eager and lazy loading, read replication and more.
* [express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js.
* [MySQL Workbench](https://www.mysql.com/products/workbench/) - MySQL Workbench is a unified visual tool for database architects, developers, and DBAs.
* [DBeaver CE](https://dbeaver.io/) - Free multi-platform database tool for developers, database administrators, analysts and all people who need to work with databases.
* [Postman](https://www.postman.com/) - Postman is a collaboration platform for API development.
* [Insomnia](https://insomnia.rest/) - API design platform and REST client.
* [nodemon](https://nodemom.io) - Utility that will monitor for any changes in your source and automatically restart your server.
* [mysql](https://www.npmjs.com/package/mysql) and [mysql2](https://www.npmjs.com/package/mysql2) - APIs for MySQL/MariaDB

## Authors
* Daniel del Pino Bolaños
* María Adelaida Ferrer Santana
* Echedey López Romero
* Sebastián Moreno Saavedra

## Acknowledgments
* José Juan Rodríguez Martínez because of his dedication to teach us.
