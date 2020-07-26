import {router} from './router/router'
import sass from './styles/views/main.scss'


window.addEventListener('hashchange', () => {
    router(window.location.hash)
})
