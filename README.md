# NOTES

## Project creation, setup and progress

- I used `create-vue` to create project and removed unnecessary boilerpolate files
- to see the result:
- - either head to https://aghardeshir.github.io/storyteq-assessment/
- - or clone the repository and do `npm i ; npm run dev` and open the link
- - or clone the repository and do `npm i ; npm run build ; npx serve dist` and open the link
- you can see the whole history of work in git, all commits are available and I tried my best for the commit messages to be comprehensive as well

## Development, code and application (and excuses)

- I did **not** use TDD mainly because I was unfamiliar with vue and was doing more of an exploration or prototyping with lots of trials and error. So most of the tests are written after development and manually testing the functionality. (I don't think TDD is a good option for prototyping and early stages of development)
- I tried a little to work on accessibilty (like closing list with escape, on click outside, on focus, etc...). It is still is buggy, I left it uncomplete for the sake of simplicity ant time
- technologies and libraries used:
- - `vue`, well ...
- - `vitest` for test
- - `@vueuse/components` for easy `onClickOutside` detection
- - Pure CSS or styling
- - TypeScript
- - gh-pages for easy-deployment to GitHub pages
- I used `any` a lot as type inside `Autocomplete` because I didn't know how to define type templates for components and also didn't want to go too deep into how to do it for the sake of time and simplicity
- `Chips` should have been a separate component (from clean-code point of view), but I didn't do it
- Did not work much on mobile view for the sake of time & simplicity
- Last, but not least, I'm not fluent in vue and I don't know its design patterns. This is not my best! :)
# TODO

- instead of `any` in AutoComplete, see if there is any possible way to use type templates on vue components
- Is it a correct decision to have available options as a state? It does not seem like a wise decision. Check if there is any other workaround
- Put the whole README.md into grammarly
