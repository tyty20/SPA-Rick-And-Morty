//import the folder with styles for events

import others from './styles/others/_imageZoom.scss'

//Import the file with variables of Sass

import variables from './styles/variables/_variables.scss'

//Import the folder with the images of project

import {images} from '../assets/media/images'

//import the folder 'animations' of extension Sass

import animations from './styles/animations/_animations.scss'

//Import the function 'imageZoom' for images

import imageZoom from './events/imageZoom'

//Import the function for handle the resize of about

import windowResize from './events/windowResize'

//import the function for 'observer' elements in the document

import observer from './utils/getObserver'

//import of the function 'router' for navigation to routes

import {router} from './router/router'

//Import the folder 'views' Sass styles for the SPA

import sass from './styles/views/main.scss'

//import the folder 'responsive' of extension Sass

import responsive from './styles/responsive/_mainResponsive.scss'


//Event for loading page

window.addEventListener('load', router(window.location.hash))

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

//Event for zoom to the images

window.addEventListener('click', e => {
    if(window.location.hash === '#/about' && window.innerWidth > 1023){
        imageZoom(e)
    }
    else {
       false;
    }
})

//Event for change to the images and return own size

window.addEventListener('resize', (e) => {
    let screen = e.currentTarget.screen.width
    if(window.location.hash === '#/about' && screen < 1023){
        windowResize()
    }
    else {
        false;
    }
})
 


