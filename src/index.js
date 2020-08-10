//Import the file with variables of Sass

import variables from './styles/variables/variables.scss'

//Import the folder with the images of project

import {images} from '../assets/media/images'

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
    if(window.location.hash === '#/about'){
        const image1 = document.getElementById('image1');
        const image2 = document.getElementById('image2');
        observer.observe(image1)
        observer.observe(image2)
    }
})
