# NOTES

## Project creation, setup, and progress

- I used `create-vue` to create the project and removed unnecessary boilerplate files afterward
- to see the result:
- - either head to https://aghardeshir.github.io/storyteq-assessment/
- - or clone the repository and do `npm i; npm run dev` and open the link
- - or clone the repository and do `npm i; npm run build; npx serve dist` and open the link
- you can see the whole history of work in git, all commits are available and I tried my best for the commit messages to be comprehensive as well

## Development, code, and application (and excuses)

- I did **not** use TDD mainly because I was unfamiliar with vue and was doing more of an exploration or prototyping with lots of trials and error. So most of the tests are written after development and manually testing the functionality. (I don't think TDD is a good option for prototyping and early stages of development)
- I tried a little to work on accessibility (like closing the list with escape, on click outside, on focus, etc...). It is still buggy, I left it incomplete for the sake of simplicity and time. But by the way, make sure to try it out.
- technologies and libraries used:
- - `vue`, well ...
- - `vitest` for test
- - `@vueuse/components` for easy `OnClickOutside` detection
- - Pure CSS or styling
- - TypeScript
- - gh-pages for easy deployment to GitHub pages
- I used `any` a lot as type inside the `Autocomplete` component because I didn't know how to define type templates for components and also didn't want to go too deep into how to do it for the sake of time and simplicity
- `Chips` should have been a separate component (from a clean-code point of view), but I didn't do it
- Did not work much on mobile view for the sake of time & simplicity (Just did a simple vertical/horizontal layout on mobile/desktop)
- I'm not sure if it was a wise choice to keep `availableItems` (based on user search) in the store. I'd rather it be a one-way data flow: all books -> user search -> filtered books (options). But I just got along with it.
- Last, but not least, I'm not fluent in vue and I don't know its design patterns and best practices. This is not my best! :)

The total time consumed for this assignment solely is 2 evenings, between 4 & 5 hours
