[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#-)

![airIBM](https://raw.githubusercontent.com/carlosblanc0/air-ibm/master/frontend/src/assets/logo.svg)

![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Backend](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![DevOps](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)

AirIBM is what Workplaces@IBM were to be modeled after a famous unicorn startup, Airbnb. I have, however, added some IBM look and feel to it, making the overall design look more mature.

This is single page application built using React. I've tried sticking to, namely, the MVC (Model View Controller) design pattern, as I believe this pattern fits well with this type of application. The app is being served by Heroku on the backend, and Netlify deploys the frontend.

## Run Locally

Clone the project

```bash
  git clone  git@github.com:carlosblanc0/air-ibm.git
```

Go to the project directory

```bash
  cd air-ibm
```

Install dependencies

```bash
npm install
```

Spin up a noSQL database (I've used [MongoDB Atlas](https://www.mongodb.com/atlas/database) free tier for demoing purposes)

```bash
touch .env
```

```bash
# MongoDB Atlas
MONGO_URI=mongodb+srv://<username>:<password>@airibm.gldqv.mongodb.net/<databse-name>?retryWrites=true&w=majority

# Node.js Routing
PORT=8080
```

Start the server

```bash
  npm start
```

## Design

> [Figma](https://www.figma.com/file/rd3Q6rsaooqCVvo1rry5OZ/IBM-team-library)

## Live Demo

> Coming soon on https://air-ibm.herokuapp.com

## Official Repo

- [airibm](https://github.com/carlosblanc0/air-ibm)

###### tags: `Netlify`, `Heroku`, `Express`, `Basics`, `Nodemon`, `dotenv`, `mongoose`, `multer`, `axios`, `ESLint`, `cors`

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#-)

