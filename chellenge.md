# Frontend challenge

## Autocomplete challenge

Build a Vue.js application that lets users search for a cities and books in a provided list.

- [x] Capture key presses from a text input and use the current value of the input to match items in the list (shown below).
- [x] The application should output the results under the input field as soon as you type at least 3 characters.
- [x] If you type less than 3 characters in the text field, it should not output any results. (It can show a prompt to type at least 3 characters)
- [x] If there are no results for the search, you should let the user know.
- [x] When the page loads the search field should be selected automatically, so you can start typing (similar to when you go to https://www.google.com/)
- [ ] Use some type of data store to store the results that your components will consume.
- [ ] You can use any approach for getting the store state into your components. The **important part is that you use one or more stores to store your datasets and query results.**
- [x] There should be two autocompletes on the final page, one for the `cities` and one for `books`. The `books` autocomplete should show primarily the book title and secondarily the author for every matched result.
- [ ] Include at least three unit tests. You can select the units of code to test based on what you find most important. You are free to use any testing framework of choice.
- [x] For the `cities` autocomplete, search through this list for approximate matches. For example, if the user enters `san`, it should match `san`, `santiago`, `san francisco`, `santa rosa`, etc. If they enter `sant`, it should only match `santiago` and `santa rosa`.
- [x] For the `books` autocomplete, search through the list of `book.title`s. For example, if the user enters `don` it should show a suggestion for 'Don Quixote'.

**The dataset**

```javascript
const cities = [
  "san jose",
  "santiago",
  "san francisco",
  "santa rosa",
  "san juan",
  "sabadell",
  "salamanca",
  "salt lake city",
  "salinas",
  "salem",
  "sausalito",
  "taipei",
  "tel aviv",
  "tempe",
  "termez",
  "temuco",
  "tiajuna",
  "tieling",
  "thousand oaks",
  "thunder bay",
  "tokyo",
  "tulsa",
];

const books = [
  {
    title: "Don Quixote",
    author: "Miguel De Cervantes",
  },
  {
    title: "Pilgrim's Progress",
    author: "John Bunyan",
  },
  {
    title: "Robinson Crusoe",
    author: "Daniel Defoe",
  },
  {
    title: "Gulliver's Travels",
    author: "Jonathan Swift",
  },
  {
    title: "Tom Jones",
    author: "Henry Fielding",
  },
  {
    title: "Clarissa",
    author: "Samuel Richardson",
  },
  {
    title: "Tristram Shandy",
    author: "Laurence Sterne",
  },
];
```

### Build setup

This coding challenge is not in place to evaluate how you set up your Vue.js / Babel / Webpack build, but to give you a chance to build something small so we can see how you approach it.
In order to adhere to the 2-3 hour target time, we _highly_ recommend that you use [vue create](https://cli.vuejs.org/guide/creating-a-project.html).

### Requirements

- [x] Use [Vue.js](https://vuejs.org/)
- [ ] Provide a `README` file and add information on how to build and/or run the project locally. This file can also include your thought process and any explanation.
- [ ] Push the application to a public github repo and provide us with a link.

### Implementation

- [x] If you want to, feel free to use any boilerplate projects and `gulp`, `grunt`, `webpack` that bootstap the project for you, (but we recommend [vue create](https://cli.vuejs.org/guide/creating-a-project.html), as noted above).
- [ ] If you are using any js processors, **include both source and distribution files**.
- [ ] Add some styles, make it pretty.
- [x] Do not cheat. There are lots of autocomplete projects out there, we're not interested in those. We want to see **how you think**.
- [ ] If you want to go above and beyond, by adding additional functionality such as some sort of list view that shows your selected cities or a more advanced autocomplete feel free to, **as long as you still satisfy the original requirements**.

### What we're evaluating

- [ ] Does `README.md` contain sufficient information to run the project?
- [ ] Does it work?
- [ ] How are the components structured?
- [ ] How clean is the code?
- [ ] Does the end result have a clean user experience?

### Tips

- [ ] DRY code is not the only thing that matters, we also care about things getting too complex. Finding the line between writing simple and DRY code is part of the challenge.
- [ ] One of the core challenges here is how to structure components and stores around two types of data (strings and objects), it is important to recognize that before you start writing your code.

### Timeframe

Take as much time as you need. We're expecting this will take you one or two evenings. (Somewhere up to 2-3 hours if you're new to Vue.)

### More Questions?

Please reach out to your hiring manager, we're happy to help!
