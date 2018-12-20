# techcompgui

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

---

This website allows for users to create accounts as well as create different types of products/devices. 
These products may be either tablets, phones or laptopsas well as specify product specs such as camera quality, screen size, battery size etc. 

Users can add and delete products as they wish, as well as search products by fuzzy search or by ID. They can also upvote each product.

Each product or device can be viewed from within a table, where they can also be edited and deleted.

Users alike can be viewed from a table and deleted.

## USER MODEL:
The user model contains the following fields:
- ‘Username’: A required username for the account
- ‘Email’: A required email associated with the account
- ‘Password’: A required password for the account

## PRODUCT MODEL:
The product model contains the following information:
- ‘productname’: The product name
- ‘producttype’: The product type (phone, laptop or
- ‘price’: The price of the product
- ‘rating’: The products rating (must be between 0-5 inclusive)
- ‘upvotes’: The number of upvotes the product has
- ‘specs’: Array of product specifications
  - ‘cameraquality’
  - ‘ram’
  - ‘processor’
  - ‘screensize’
  - ‘batterysize

# REFERENCES
The following material was used in the creation of this web app:
- Overall structure and original code – David Drohan (https://ddrohan.github.io/wit-wad-2-2018/)
- Particles.js - https://github.com/creotip/vue-particles
- Vue-burger-menu - https://vue-burger-menu.netlify.com/
- Vue-typer - https://github.com/cngu/vue-typer
