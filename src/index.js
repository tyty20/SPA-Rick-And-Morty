//import the folder 'animations' of extension Sass

import animations from './styles/animations/animations.scss'

//import the function for 'observer' elements in the document

import observer from './utils/getObserver'

//import of the function 'router' for navigation to routes

import {router} from './router/router'

//Import the folder 'views' Sass styles for the SPA

import sass from './styles/views/main.scss'

//import the folder 'responsive' of extension Sass

import responsive from './styles/responsive/mainResponsive.scss'

//Event for navegation to routes

window.addEventListener('hashchange', () => {
    router(window.location.hash)
})

//Event for animations in about 

window.addEventListener('hashchange', () => {
    const image1 = window.location.hash === '#/about' ? document.getElementById('image1') : null
    const image2 = window.location.hash === '#/about' ? document.getElementById('image2') : null
    observer.observe(image1)
    observer.observe(image2)
})
