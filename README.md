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

1. You need a mysql/mariadb server working.

2. You have to edit the file bluecity/backend/config/config.json, depending on your environment.

```
    "username": "root",
    "password": "your password",
    "database": "bluecity_development",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": 0
```

4. Create the mysql database, that in our case is "bluecity_development".

5. Do the migration creating the tables with the contents of /bluecity/migrations 

```
npx sequelize-cli db:migrate
```

6. And populating the tables with data with the contents of /bluecity/seeders

```
npx sequelize-cli db:seed:all
```

Finally to start enjoying this project.

```
cd bluecity/frontend
npm start

cd bluecity/backend
npm start
```

Enjoy!!!

## Built With

* [Visual Studio Code](https://code.visualstudio.com/) - The Editor used in this project
* [React](https://reactjs.org/) - React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
* [Node.js](https://nodejs.org/) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
* [Leaflet](https://leafletjs.com/) - an open-source JavaScript library for mobile-friendly interactive maps.
* [react-fontawesome](https://github.com/FortAwesome/react-fontawesome) - React package integrating all icons in fontawesome.
* [react-bootstrap](https://react-bootstrap.github.io/) - React-Bootstrap replaces the Bootstrap JavaScript. Each component has been built from scratch as a true React component, without unneeded dependencies like jQuery.
* [react-leaflet](https://react-leaflet.js.org/) - React-Leaflet uses ⚛️ React's lifecycle methods to call the relevant Leaflet handlers, which has a few consequences.
* [sequelize](https://sequelize.org/) - Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. It features solid transaction support, relations, eager and lazy loading, read replication and more.
* [express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js.
* [MySQL Workbench](https://www.mysql.com/products/workbench/) - MySQL Workbench is a unified visual tool for database architects, developers, and DBAs.
* [dotenv](https://www.npmjs.com/package/dotenv) - Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.

## Acknowledgments
* José Juan Rodríguez Martínez because of his dedication to teach us.
