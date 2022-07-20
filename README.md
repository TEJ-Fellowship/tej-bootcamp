# 🔥 TEJ Bootcamp

## 💚 Junior Phase

The junior phase will comprise of 10 sections, with each section taking roughly 1 week of classes.

### Course material

- Our main curriculum will follow the [Fullstack open curriculum](https://fullstackopen.com/en/) from the University of Helsinki
- For our intro on pure react & tooling, we will follow the 'No frills react' and 'JS tools' chapters from [Complete Intro to React v7](https://btholt.github.io/complete-intro-to-react-v7) by Brian Holt

<details><summary>Useful links: Click to open</summary>

- [git basics](https://git-scm.com/book/en/v2)

</details>

---

## Week 1

HTTP call, pure react, modern react dev setup, component, state, event handler, modules, forms

1. [PART 0: Fundamentals of web apps](https://fullstackopen.com/en/part0/fundamentals_of_web_apps)
1. [PART 1: Introduction to react](https://fullstackopen.com/en/part1)
1. [PART 2: Communicating with server](https://fullstackopen.com/en/part2)

<details><summary>Daily schedule</summary>

---

**DAY 1: PART 1-a,b**

**_TO-LEARN_**

- HTTP call
- pure react
- modern react dev setup
- React concepts: component, JSX, props

**_PRE-WORK:_**

- [PART 0: Read only the 'HTTP GET' section](https://fullstackopen.com/en/part0/fundamentals_of_web_apps)
- [watch this video on eventloop](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
- master these Array methods: [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [Filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), [Reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce), [forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach), [Includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes), [Some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some), [Every](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

**_TO-STUDY_**

- [PART 0-b: HTTP request](https://fullstackopen.com/en/part0/fundamentals_of_web_apps#http-get)
- [Complete Intro to React v7: Pure react](https://btholt.github.io/complete-intro-to-react-v7/lessons/no-frills-react/pure-react)
- [Complete Intro to React v7: JS tools](https://btholt.github.io/complete-intro-to-react-v7/lessons/js-tools/npm)
- [PART 1-a: Intro to React](https://fullstackopen.com/en/part1/introduction_to_react)
- [PART 1-b: Javascript](https://fullstackopen.com/en/part1/java_script)

**_LECTURE-VIDEO_**

- [Pure react](https://youtu.be/Pzkcxt9j23U)
- [Components with props, dev setup, JSX](https://youtu.be/xBJBrULUm0E)

**_TO-DO:_**

- [1.1-1.2](https://fullstackopen.com/en/part1/introduction_to_react#exercises-1-1-1-2)
- [1.3-1.5](https://fullstackopen.com/en/part1/java_script#exercises-1-3-1-5)

_Instructions for TO-DO_

1. create a new git repository called `fullstackopen` in your local computer
1. create a repository in github to push your local `fullstackopen`
1. create a folder called `part1` inside `fullstackopen`
1. create folder called `courseinfo` inside of `part1` to put your code for exercise 1.1-1.5
   - You can create `courseinfo` project either by using `parcel`, as we did for the class today. You can clone this [starter kit](https://github.com/TEJ-Fellowship/react-start-kit)
   - Or you can create `courseinfo` project using `create-react-app` as described in the [`introduction to react`](https://fullstackopen.com/en/part1/introduction_to_react) section of the course

_note_: You will need to delete the `.git` directory inside the clone

---

**DAY 2: PART 1-c**

**_TO-LEARN_**

- stateful component
- event handler

**_TO-STUDY_**

- [PART 1-c: Component state, event handlers](https://fullstackopen.com/en/part1/component_state_event_handlers)

**_LECTURE-VIDEO_**

- [Starting a react project](https://youtu.be/BGrie4SO-88)
- [Component manual re-render](https://youtu.be/6RCRVL7Z-Nc)
- [React state](https://youtu.be/uCGdWjuhhg4)
- [React event handling](https://youtu.be/x0vodxNdm0c)

**_TO-DO:_**

- [1.6-1.14](https://fullstackopen.com/en/part1/a_more_complex_state_debugging_react_apps#exercises-1-6-1-14)

---

**DAY 3: PART 1-d**

**_TO-LEARN_**

- a more complex state
  - array, object in state: don't mutate state!
- conditional rendering of component
- debugging React apps

**_TO-STUDY_**

- [PART 1-d: A more complex state, debugging React apps](https://fullstackopen.com/en/part1/a_more_complex_state_debugging_react_apps)

**_LECTURE-VIDEO_**

- [Using array in state](https://youtu.be/2F7NNlAe68g)
- [Conditional rendering in component](https://youtu.be/uCGdWjuhhg4)
- [React Class, debugging, and notes on hooks](https://youtu.be/a6VNdOtzd8w)
- [Exercise 1.1 to 1.14 guide](https://youtu.be/H18zHpNDKwg)

**_TO-DO:_**

- [1.6-1.14](https://fullstackopen.com/en/part1/a_more_complex_state_debugging_react_apps#exercises-1-6-1-14)

---

**DAY 4: PART 2-a**

**_PRE-WORK:_**

- [watch at least first 3 parts of this youtube playlist](https://www.youtube.com/playlist?list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84)

**_TO-LEARN_**

- rendering collection [Array or Object]
  - don't mutate state! especially if state is Array or Object
- Array.map
- Array.reduce
- debugging React apps
  - use console through all components & calls
  - most common problems
    - the props are expected to be of a different type,
    - or called with a different name than they actually are, and destructuring fails as a result

**_TO-STUDY_**

- [PART 2-a: Rendering a collection, modules](https://fullstackopen.com/en/part2/rendering_a_collection_modules)

**_LECTURE-VIDEO_**

- [Using Array.map to show data in React](https://youtu.be/Mpk_FVc8A0Q)
- [Using key in React lists, and further debugging notes](https://youtu.be/-Qg0t48bWNA)

**_TO-DO:_**

- [2.1-2.5](https://fullstackopen.com/en/part2/rendering_a_collection_modules#exercises-2-1-2-5)

</details>

---

## Week 2

Getting data from server, altering data in server, programming a server with NodeJS and Express

1. [PART 2: Communicating with server](https://fullstackopen.com/en/part2)
2. [PART 3: Programming a server with NodeJS and Express](https://fullstackopen.com/en/part3)

<details><summary>Daily schedule</summary>

---

**DAY 1: PART 2-b**

**_TO-LEARN_**

**Main concepts**

- controlled component
- filtering displayed elements

**Side notes**

- form onSubmit event handler needs event.preventDefault()
- form in App
- controlled component: using onChange
- ternary expression
- Map.filter

**_TO-STUDY_**

- [PART 2-b: Forms](https://fullstackopen.com/en/part2/forms)

**_LECTURE-VIDEO_**

- [Getting started with create react app to part2-a](https://youtu.be/JM0sv09GIwc)
- [Controlled component](https://youtu.be/KDzgcoe4KUg)
- [From controlled component to add to list](https://youtu.be/DCcOnuY9a-o)
- [Filtering notes](https://youtu.be/GtgBC_bUMYI)

**_TO-DO:_**

- [2.6-2.10](https://fullstackopen.com/en/part2/forms#exercises-2-6-2-10)

---

**DAY 2: PART 2-c**

**_TO-LEARN_**

- getting data from server
  - using [JSON Server](https://medium.com/codingthesmartway-com-blog/create-a-rest-api-with-json-server-36da8680136d) to simulate server
- understanding [promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
- using [Axios](https://axios-http.com/docs/intro) to call server
- [effect hooks](https://reactjs.org/docs/hooks-effect.html)

**_TO-STUDY_**

- [PART 2-c: Getting data from server](https://fullstackopen.com/en/part2/getting_data_from_server)

**_LECTURE-VIDEO_**

- [Changing data source in frontend to come from backend](https://youtu.be/JM0sv09GIwc)
- [Setting up json server](https://youtu.be/D6ClUvVAkrk)
- [Using Axios in frontend to access data from backend](https://youtu.be/wSGw6JUFcPU)
- [Understanding promises and async nature of axios](https://youtu.be/olCyK-TXO34)
- [Using useEffect to call axios from React component](https://youtu.be/izc1acO3eUc)

**_TO-DO:_**

- [2.11-2.14](https://fullstackopen.com/en/part2/getting_data_from_server#exercises-2-11-2-14)

---

**DAY 3: PART 2-d**

**_TO-LEARN_**

- understanding [REST](https://www.codecademy.com/article/what-is-crud)
  - routes
  - CRUD (Create, Read, Update, Delete) actions on REST routes
  - [Axios methods corresponding to CRUD actions](https://www.freecodecamp.org/news/axios-react-how-to-make-get-post-and-delete-api-requests/)
- Sending data to the Backend Server
  - [creating new data](https://fullstackopen.com/en/part2/altering_data_in_server#sending-data-to-the-server)
  - [updating existing data using Axios.put](https://fullstackopen.com/en/part2/altering_data_in_server#changing-the-importance-of-notes)
  - [handling Error in Promise using Promise.catch](https://fullstackopen.com/en/part2/altering_data_in_server#promises-and-errors)

**Side notes**

- Array.find
- Review
  - Array.map
  - Array.filter

**_TO-STUDY_**

- [PART 2-d: Altering data in server](https://fullstackopen.com/en/part2/altering_data_in_server)

**_LECTURE-VIDEO_**

- []()

**_TO-DO:_**

- [2.15-2.18](https://fullstackopen.com/en/part2/altering_data_in_server#exercises-2-15-2-18)

---

**DAY 4: PART 2-e**

**_TO-LEARN_**

- Adding styles to React app

**_TO-STUDY_**

- [PART 2-e: Adding styles to React app](https://fullstackopen.com/en/part2/adding_styles_to_react_app)

**_LECTURE-VIDEO_**

- []()

**_TO-DO:_**

- [2.19-2.20](https://fullstackopen.com/en/part2/adding_styles_to_react_app#exercises-2-19-2-20)

---

**DAY 5: PART 3-a**

**_TO-LEARN_**

- Node.js
- Express

**_PRE-WORK:_**

**_TO-STUDY_**

- [PART 3-a: Node.js and Express](https://fullstackopen.com/en/part3/node_js_and_express)

**_LECTURE-VIDEO_**

- []()

**_TO-DO:_**

- [3.1-3.6](https://fullstackopen.com/en/part3/node_js_and_express#exercises-3-1-3-6)
- [3.7-3.8](https://fullstackopen.com/en/part3/node_js_and_express#exercises-3-7-3-8)

</details>

---

## Week 3

programming a server with NodeJS and Express

1. [PART 3: Programming a server with NodeJS and Express](https://fullstackopen.com/en/part3)

<details><summary>Daily schedule</summary>

---

**DAY 1: PART 3-b**

**_TO-LEARN_**

- Deploying app to internet

**_TO-STUDY_**

- [PART 3-b: Deploying app to internet](https://fullstackopen.com/en/part3/deploying_app_to_internet)

**_LECTURE-VIDEO_**

- []()

**_TO-DO:_**

- [3.9-3.11](https://fullstackopen.com/en/part3/deploying_app_to_internet#exercises-3-9-3-11)

---

**DAY 2 / 3: PART 3-c**

**_TO-LEARN_**
Saving data to MongoDB

**_TO-STUDY_**

- [PART 3-c: Saving data to MongoDB](https://fullstackopen.com/en/part3/saving_data_to_mongo_db)

**_LECTURE-VIDEO_**

- []()

**_TO-DO:_**

- [3.12](https://fullstackopen.com/en/part3/saving_data_to_mongo_db#exercise-3-12)
- [3.13-3.14](https://fullstackopen.com/en/part3/saving_data_to_mongo_db#exercises-3-13-3-14)
- [3.15-3.18](https://fullstackopen.com/en/part3/saving_data_to_mongo_db#exercises-3-15-3-18)

---

**DAY 4: PART 3-d**

**_TO-LEARN_**
Validation and ESLint

**_TO-STUDY_**

- [PART 3-d: Validation and ESLint](https://fullstackopen.com/en/part3/validation_and_es_lint)

**_LECTURE-VIDEO_**

- []()

**_TO-DO:_**

- [3.19-3.21](https://fullstackopen.com/en/part3/validation_and_es_lint#exercises-3-19-3-21)
- [3.22](https://fullstackopen.com/en/part3/validation_and_es_lint#exercise-3-22)

</details>

---

<details><summary>TEMPLATE</summary>

---

**DAY : PART -**

**_TO-LEARN_**

**_PRE-WORK:_**

**_TO-STUDY_**

- [PART -: ]()

**_TO-DO:_**

- [.-.]()

**_LECTURE-VIDEO_**

- []()

**_TO-HAVE-LEARNT:_**

</details>
