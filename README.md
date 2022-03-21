React app using the Free Dictionary API 


This application is made up of two parts, one with the client input and the other is displaying results. 

 - When inputting a word in the search , it is  stored to a state, then triggers an API call to the "https://api.dictionaryapi.dev/api/". 
 - After that the API call is made, the word is stored and the  API reaction in another state variable.

React and packages Install instructions:
1: Create a react application:
$ npx create-react-app dictionary-app
2: Now, go to the project folder running the following command:
$ cd dictionary-app
3: npm packages:
$ npm install axios
$ npm install react-icons --save
