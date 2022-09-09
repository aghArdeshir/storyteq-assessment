# NOTES

## Project creation, setup and process

- I used `create-vue` to create project and removed unnecessary files
- to see the result:
- - either head to https://aghardeshir.github.io/storyteq-assessment/
- - or clone the repository and do `npm i ; npm run dev` and open the link
- - or clone the repository and do `npm i ; npm run build-only -- --base=/ ; npx serve dist` and open the link
- you can see the whole history of work in git, all commits are available and I tried my best to be comprehensive as well

- I did **not** use TDD mainly because I was unfamiliar with vue and was doing more of an exploration or prototyping with lots of trials and error. So most of the tests are written after development and manually testing the functionality.
- I tried a little to work on accessibilty (like closing list with escape, on click outside, on focus, etc...)

# TODO

- instead of `any` in AutoComplete, see if there is any possible way to use type templates on vue components
- Is it a correct decision to have available options as a state? It does not seem like a wise decision. Check if there is any other workaround
