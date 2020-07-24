import {pages} from '../controllers/index'
import {getData} from '../utils/getData'

const content= document.getElementById('content')


const router = async (routes) => {
    const characters = await getData();
    content.innerHTML = '';
    switch(routes){
        case '#/': {
            return content.innerHTML = await pages.home()
        }
        case '#/about': {
            return content.appendChild(pages.about())
        }
        case `#/${characters.id}`:{
            return content.innerHTML = await pages.character()
        }
        default: {
            return content.innerHTML = "fuiste pipo"
        }
    }
}

export {router}