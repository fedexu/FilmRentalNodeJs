# FilmRentalNodeJs how to

Hello everyone, here we are still struggling with FilmRental, this time in the Node.js version.

For an easy installation i suggest to download ofc Node.js and MongoDb.
Next step is to open a terminal into the FilmRentalNodeJs folder and type "npm install" 
for a full installation of all the collection into MongoDb and all dependency required 
for the start of the application.

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
