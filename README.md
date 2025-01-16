# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

### `How to populate data`

Use the features.json file for entering the data under src/data folder

json data format:

features:[
    {
        "id":"string",     (compulsory) should be unique
        "heading":"string" (compulsory)
        "likes":number,    (compulsory)
        "contents" :[
            {    
               "description":"string",       (compulsory)
               "image":"name of the image",  (optional)
               "points":["point1", "point2"] (optional) (this will rendered as points)
            }
        ] 
        "endDescription":"string" (optional)  
    }
]

### `where to store the images`

place the images in this path public/assets/images