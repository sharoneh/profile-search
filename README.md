# Profile Search App
Profile search app using [Nuxt](https://nuxtjs.org/).
This application is live on Heroku and can be accessed [here](https://bravado-profile-search.herokuapp.com/).

## Features
This is a **responsive** web application that lists the 20000 users contained in a JSON file, with **infinite scrolling**.

**Search and highlight**: When typing in the search field, the list is updated with the profiles that contain the search term in any field and the term is highlighted in the profile card.

**Mark as suitable**: When marking a profile as suitable, the profile card is outlined.
When skipping the selection, the card returns to its initial state.

**Stateful search**: Accessing the URL in `/search/Boris`, for example, will display the search results for `Boris` when the page is loaded.

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate

# deploy
$ git push heroku master
```

## Dependencies
- `Vue-infinite-loading` for the list's infinite loading feature
- `Sass` for styling
- `ESLint` and `Prettier` for code linting and formatting