//import of the function 'router' for navigation to routes

import {router} from './router/router'

// Sass styles for the SPA

import sass from './styles/views/main.scss'

//Sass styles for the responsive Design

import responsive from './styles/responsive/mainResponsive.scss'
import observer from './utils/getObserver'

//Event for navegation to routes

window.addEventListener('hashchange', () => {
    router(window.location.hash)
})
