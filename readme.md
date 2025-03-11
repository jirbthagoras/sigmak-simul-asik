# Storage Drive

#### Table of Contents:

- [Overview](#overview)

  - [Pre-Requisite](#pre-requisite)

- [Build Setup](#build-setup)

  - [Setup Environment Variables](#setup-environment-variables)
  - [Build App](#build-app)
  - [Bundle App](#bundle-app)

- [Elastic Beanstalk Configuration](#elastic-beanstalk-configuration)

  - [Environment Variables](#environment-variables)
  - [Database Migrations](#database-migration)
  - [Mounting File System](#mounting-file-system)
  - [Adjust Nginx Configuration](#adjust-nginx-configuration)
  - [Procfile](#procfile)

---

## Overview

### Pre-Requisite

1. Make sure you have [Node.js v20](https://nodejs.org/en) installed.
2. Clone this repository.
3. Enter the repository and install the dependencies via `npm` or `yarn`:

   ```sh
   npm install
   ```

   or

   ```sh
   yarn
   ```

---

## Build Setup

### Setup Environment Variables

The application require some environment variables to run properly. Create `.env` file in root directory. Template for environment variables available at [.env.example](./.env.example).

### Build App

To build application you can use the following command:

```sh
npm run build
```

or

```sh
yarn run build
```

The code that has been built will be available in the `dist/` directory.

### Bundle App

File and folder need to be included:

1. `dist/` folder
2. `package.json`
3. `package-lock.json` or `yarn.lock`
4. `.sequelizerc`
5. `.env`
6. `Procfile`


Bundle your application to zip file with following command:


```sh
zip -r storageapp.zip dist/ package.json yarn.lock .sequelizerc .env Procfile
```

### Start application locally

1. Start the server:

   ```sh
    npm run start
   ```

   or

   ```sh
   yarn start
   ```

2. application should now be up and running at `http://<host>:<port>`. E.g [http://localhost:3000](http://localhost:3000)

---

## Elastic Beanstalk Configuration

### Environment Variables

Since the application will be deploy in Elastic Beanstalk, you need to set all environment variables using option settings inside `node-env.config` located in `.ebextensions/` directory.

Example:

```yaml
option_settings:
  - option_name: ENV_KEY
    value: ENV_VALUE
```

### Database Migrations

> **Note** </br>
> The command must be executed using prebuild hook script

Perform migration to create required tables in database with following command:

```
npm run db:migrate
```

The migration script depends on the following environment variables:

```
DB_TYPE=
DB_HOST=
DB_PORT=
DB_NAME=
DB_USERNAME=
DB_PASSWORD=
```

### Mounting File System

Complete the script in the `.ebextensions/hooks/postdeploy/90_setup_efs.sh` folder to mount EFS.

The script should depends on the following environment variables:

```
FILE_SYSTEM_ID=
STORAGE_PATH=
```

### Adjust Nginx Configuration

Adjust the application port in the `./.ebextensions/nginx/conf.d/00_application.conf` at the following line:

```conf
    proxy_pass http://127.0.0.1:<port>;
```

> For production stage, you need to change main nginx configuration at `./.ebextensions/nginx/nginx.conf` to enable HTTPS. SSL certificate can be found at `./src/cert/nginx-selfsigned.crt` and SSL certificate key can be found at `./src/cert/nginx-selfsigned.key`.

### Procfile

Create and configure `Procfile` in the root directory to ensure Elastic Beanstalk run the application properly.

