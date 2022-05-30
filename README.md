# Code Translator

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# About

This project was built using React and the OpenAI API. I've themed this project around being a code translator. The app will take in a code snippet as input from the text box then send it to the OpenAI API. OpenAI will then parse the give code snippet and translate it into natural language so it is more easily understandable.

There are 3 options for the code snippet's language, those being Python 3, Java, and C++. The app will still take input if the langauge is doesn't match your selected version or if it isn't even a code snippet, but the output might not be accurate if you choose to do so.

A Dark/Light mode is also included in the application for your viewing preference. I also have a link to the OpenAI documentation and a link to this GitHub repo to view the code.

# Object Oriented Design

My application is divided into many different component using React. We combine all of these components into a working application in App.js

## Header.jsx

This component contains the title and OpenAI logo button which allows the user to visit the webpage to learn more about OpenAI

## Prompt.jsx

Prompt contains the text box which allows the user to input code snippets and the submit button. This component also houses the location of the ResponseList component which renders all the responses from the API in newest to oldest. The Prompt component also makes the call to the API and contains the functionality of manipulating the API output.

## ResponseList.jsx

Performs the operations on the API input and output to create the Response components in the ordered list.

## Response.jsx

Houses how the API input and output is visualized to the user.

## Filters.jsx

Allows the user to changes which type of code snippet that they would like to input. Filters.jsx uses different variable to keep track of which button is turned on and passes that info to the Prompt component in order to for Prompt to tell the API how to parse the data.

## GitHubButton.jsx and ColorScheme.jsx

These components are fairly straight forward, in that GitHubButton allow the user to easily access this GitHub which houses my code and ColorScheme lets the user change to color scheme by updating a State variable in App.js

# Local Testing

To run this project on your machine, download the files, navigate into the CodeTranslator folder, then run npm start. The app will then load in localhost:3000

# Online Link

If you would like to view this app online, please visit https://main--dancing-marzipan-9ccd4b.netlify.app/
Enjoy!
