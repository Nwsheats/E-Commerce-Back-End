# E-Commerce Back End

![Badge](https://img.shields.io/badge/LICENSE-None-pink?style=for-the-badge&logo=github)

## Table of Contents
  
- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Mock Up](#mock-up)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)


## Description

The back end for an e-commerce site. It uses an Express.js API with Sequelize to interact with a MySQL database.

## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

## Mock-Up

The following animation shows the application's GET routes to return all categories, all products, and all tags being tested in Insomnia:

![In Insomnia, the user tests “GET tags,” “GET Categories,” and “GET All Products.”.](./Assets/13-orm-homework-demo-01.gif)

The following animation shows the application's GET routes to return a single category, a single product, and a single tag being tested in Insomnia:

![In Insomnia, the user tests “GET tag by id,” “GET Category by ID,” and “GET One Product.”](./Assets/13-orm-homework-demo-02.gif)

The following animation shows the application's POST, PUT, and DELETE routes for categories being tested in Insomnia:

![In Insomnia, the user tests “DELETE Category by ID,” “CREATE Category,” and “UPDATE Category.”](./Assets/13-orm-homework-demo-03.gif)


## Installation
  
No installation instructions at this time.
  
  
## Usage
  
Run NPM install, then use MySQL to run the schema file. Following that, use 'npm run seed' to seed the data. Then 'npm run start' to start the application.
  
  
## License
  
This application is utilizing the following License: None
  
  
## Contributing
  
N/A

  
## Tests
  
N/A

  
  
## Questions
  
  
GitHub Repository Link: https://github.com/nwsheats/

Video Walkthrough Link: https://www.youtube.com/watch?v=nxT_I0DFiKw
  
If you have additional questions, please reach out to me at nwsheats@gmail.com
  
--
  
  