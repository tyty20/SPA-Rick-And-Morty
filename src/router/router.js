import {pages} from '../views/index'

import getUrl from '../utils/getUrl'

import Header from '../template/Header'


const content= null || document.getElementById('content')
const header = null || document.getElementById('header')

const router = async (routes) => {

    const URL = await getUrl();

    header.innerHTML = await Header()
    
    switch(routes){
        case '#/': {
            return content.innerHTML = await pages.presentation()
        }
        case '#/characters': {
            return content.innerHTML = await pages.home()
        }
        case '#/about': {
            return content.innerHTML = await pages.about()
        }
        case `${URL}`:{
            return content.innerHTML = await pages.character()
        }
        default:{
            return content.innerHTML = await pages.error404()
        }
    }
}

export {router}