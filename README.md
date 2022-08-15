# e-commerce-back-end

## Table of Contents

* [Description](#description)
* [Access](#access)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)

## Description

My goal for this project was to build the back end for an e-commerce site. 

To achieve this, I used Javascript and mySQL.

![Screenshot of application](./assets/images/screenshot-of-application.png)

During this project, I consolidated my understanding of databases and MySQL. In particular, I re-inforced what I have learnt about routing.

## Access

To access the repository where the code is saved, click [here](https://github.com/hayleyarodgers/e-commerce-back-end).

To access a video walkthrough tutorial of the application, click [here]() to access it directly or [here]() to access it via GoogleDrive.

## Installation

To install necessary dependencies, run the following command:

```
npm i
```

## Usage

To use the application:
1. Open the repository in your terminal or bash.
2. Add a .env file in the same format as [this file](.env.EXAMPLE).
3. Log into MySQL in the command line.
4. Create the database by entering ```SOURCE ./db/schema.sql;```.
5. Quit MySQL by entering ```quit```.
6. (Optional) Seed the database with sample data by entering ```npm run seed``` in the command line.
7. Start the server by entering ```npm start``` in the command line.

## Credits

- I used the [MySQL2](https://www.npmjs.com/package/mysql2) package to connect to my MySQL database and perform queries.
- I used the [Inquirer](https://www.npmjs.com/package/inquirer/v/8.2.4) package to interact with the user via the command line.
- I used the [dotenv](https://www.npmjs.com/package/dotenv) package to use environment variables to store sensitive data needed to run the application.