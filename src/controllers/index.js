import Home from './home.controller'
import About from './about.controller'
import Character from './character.controller'
import Error404 from './error404.controller'

const pages = {
    home: Home,
    about: About,
    character: Character,
    error404: Error404,
}

export {pages}