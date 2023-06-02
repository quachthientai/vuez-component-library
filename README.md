# vue-theme-project

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### User guides
* Components:
    - Button:
        1. Our template provides use with our own version of button with pre-defined and customizable details
        2. Import the Button component into your file using <!! import Button from "_dirrname/Button/Button.vue">
        3. PASS or BINDED value to our button are welcome!
        4. PROPS for Button components:
            a. text="someString" its default value is null, value type is STRING, this is the text that show on the Button
            b. routeLink="someString" its default value is '', value type is STRING or URI/URL/Path, this is the redirection link of the Button
            c. icon="someString" its default value is null, value type is STRING of iconify icon name.
            d. iconPosition="someString" its default value is null, set value to 'left' or 'right' to indicate the position of icon.
            e. isUpperCase=Boolean its default value is false, set value to true to make the button become disable.
            
            
        text: {
            type: String,
            default: null
         },
         routeLink: {
            type: String,
            default: ''
         },
         icon: {
            type: String,
            default: null,
         },
         iconPosition: {
            type: String,
            default: null
         },
         isUppercase: {
            type: Boolean,
            default: false
         },
         isDisabled: {
            type: Boolean,
            default: false
         }, 
         btnClass: {
            type: String,
            default: 'btn btn-primary',
            required: true
         },
         isLoading: {
            type: Boolean,
            default: false,
         },
         externalLink: {
            type: String,
            default: null
         }