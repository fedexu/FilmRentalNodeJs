# FilmRentalNodeJs how to

Hello everyone, here we are still struggling with FilmRental, this time in the Node.js version.

For an easy installation i suggest to download ofc Node.js and MongoDb. 
Next step is to open a terminal into the FilmRentalNodeJs folder and type "npm install" for a full installation of all the collection into MongoDb and all dependency required for the start of the application.

After the installation the application is ready to go for develop all the features required in the previous project.

To start the app you need to type "npm run dev" to run the application in debug mode with nodemon module, that help you 
with an instant redeploy when a resources is modified. 

To start the app normally gust type "npm start".

Make sure to read the Express.js standard to understand the framework used and all the lines of code written up until now
(i'm not joking, there are only a few line of code) to fully understand what is going on in a Node.Js application.

# Develop with VScode

I suggest this launch.json for remote debugging. Just click on the right node process when start:

{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "attach",
            "name": "Node: Nodemon",
            "processId": "${command:PickProcess}",
            "restart": true,
            "protocol": "inspector",
        },
    ]
}

# Integration with Angular

I've finally added the integration with Angular for develop and exercise with this nice framework.

I've removed the view and public folder since last commit and the index controller too. This project is become a full Back-end project couse we want only to help the Angular application to communicate with MongoDb and do some theoretical security check, this stuff that is better to do in Back-end side.

To develop the application download this project and the Angular project too (fedexu/FilmRentalAngularApp). 
The nodeJs server will run on localhost:3000, the Angular app instead will run on localhost:4200 so for develop you can type npm start on both the project and see all the stuff going on. 

For more information about Angular read the README on the Angular folder.

# Assignment

For the beck-end side of the FilmRental applicaion we want to develop and serve some core functionality that can make the Front-end application work correctly. 

What is develop: 
The application is develop with the basic feature for read the film data. 
The Assignment is to develop the other feature for a FilmRental application (develp with Angular strarting from https://github.com/fedexu/BlankAngularApp )


# Full installation
Make sure of have installed:
-   Node.js
-   MongoDb

For a full installation you need to:
-   git clone https://github.com/fedexu/FilmRentalNodeJs.git
-   cd FilmRentalNodeJs
-   npm install

A preinstallation script will be lounched and create a FilmRental DB on MongoDb.
With this few step you are ready to go!
