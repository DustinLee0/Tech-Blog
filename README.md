# 14 Model-View-Controller (MVC): Tech Blog
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

The task was to build a CMS style blog site where users can login and create, edit and delete posts. Posts will be saved to a mysql database using [sequelize](https://www.npmjs.com/package/sequelize) to create the connection. Users are able to view posts they have created as well as posts made by other users. A user can also leave a comment on existing posts. The site follows the MVC (Model, View, Controller) paradigm and renders pages with data retrieved from queries using sequelize. 

## Installation
Dependencies:
  1.  [dotenv](https://www.npmjs.com/package/dotenv)
  2.  [express](https://www.npmjs.com/package/express)
  3.  [mysql2](https://www.npmjs.com/package/mysql2)
  4.  [sequelize](https://www.npmjs.com/package/sequelize)
  5.  [bcryptjs](https://www.npmjs.com/package/bcryptjs)
  6.  [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize)
  7.  [express-handlebars](https://www.npmjs.com/package/express-handlebars)
  8.  [express-session](https://www.npmjs.com/package/express-session)

Express session and connect session sequelize libraries are used to create a session instance to be able to pass in values to check if user is logged in etc. Sessions are also used to set a timeout feature where if the user is inactive for 5 minutes, the session expires and the user is required to re-login.  
To install the dependencies, run:
```
npm i
```

## Usage
To invoke the app navigate to the corresponding directory then run:
```
node server.js
```  
Once the server has started, navigate to your browser and enter in:  
[http://localhost:3001](http://localhost:3001) to navigate to the homepage,  
  
OR
  
[https://cms-tech-blog-app.herokuapp.com/](https://cms-tech-blog-app.herokuapp.com/)


![homepage](./Assets/homepage%20Large.jpeg)
![dashboard](./Assets/dashboard%20Large.jpeg)
![single-post](./Assets/single-post%20Large.jpeg)
![update](./Assets/update%20Large.jpeg)


## License
This application is licensed under the [MIT License](https://opensource.org/licenses/MIT).