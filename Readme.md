# Column Encryption using Postgres and CypherStash

This is a sample project that showcase how to use CypherStash to encrypt your Postgres columns.

## Create a postgres database

You can use the following SQL commands to create the database and the table:

```sql
CREATE DATABASE my_database;

CREATE TABLE customer_data (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone_number VARCHAR(255) NOT NULL,
    __name_encrypted text,
    __name_ore text,
    __name_match integer[],
    __name_unique text,
    __email_encrypted text,
    __email_ore text,
    __email_match integer[],
    __email_unique text
);
```

## Populate Sample Data

```bash
node populate_data.js
```

You should see an output indicating that the records have been added to your database. The output should look similar to the following

```bash
…output omitted…
30 sample records inserted
Data population completed.
```

> Note : Replace `<your_postgres_host>` with your PostgreSQL server's hostname or IP address, and `<your_database_name>` , `<your_postgres_username>` , `<your_postgres_password>` with your PostgreSQL database name, username and password, respectively. Also, make sure to replace `your_postgres_port` with your port number.

## Run the Tandem Proxy Service

Make sure that you have docker running, open your terminal or command prompt and run the Tandem image

```bash
docker-compose up
```

From your docker desktop dashboard you should see your Tandem image running

> Note : `YOUR_DATABASE_PORT`, `YOUR_DATABASE_NAME`, `YOUR_DATABASE_USERNAME`, `YOUR_DATABASE_PASSWORD`, `YOUR_CIPHERSTASH_WORKSPACE_ID`, `YOUR_CIPHERSTASH_CLIENT_ID`, `YOUR_CIPHERSTASH_KEY`, and `YOUR_CIPHERSTASH_ACCESS_KEY` should be replaced with your actual configuration data.

## Encrypt and Decrypt Data

To run the application from your terminal or command prompt:

```bash
node app.js
```

To get all users run the following command

```bash
curl --request GET 'http://localhost:3000/users'
```

To encrypt data, run the following command:

```bash
curl --request POST 'http://localhost:3000/encrypt-data'
```

Author : Lucien Chemaly
