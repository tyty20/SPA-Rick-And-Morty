import {pages} from '../controllers/index'

const content= document.getElementById('content')

const router = (routes) => {
    content.innerHTML = '';
    switch(routes){
        case '#/': {
            return content.appendChild(pages.home())
        }
        case '#/about': {
            return content.appendChild(pages.about())
        }
    }
}

export {router}