# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Understanding the folder structure 

![img.png](https://www.oreilly.com/library/view/javascript-by-example/9781788293969/assets/a86830bb-53a6-463d-ad47-f58a926041a3.png)

### Actions
Where the ajax calls, query manipulation in the process. You create actions when you have some information important to the application. Apart from the component state, there is also an application state. The information in the action is part of application state and can be accessed by all the component. 

### Reducers & Store
Reducers recieve the information after the action has fetched the data. Do some processing on the information returned from actions and return it into store.

### Containers
Sends everything back to the component. Wrapper that handles the props of the component