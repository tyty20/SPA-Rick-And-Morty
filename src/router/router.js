import {pages} from '../views/index'
import {getUrl} from '../utils/getUrl'

const content= document.getElementById('content')

const router = async (routes) => {
    const url = getUrl();
    content.innerHTML = '';
    switch(routes){
        case '#/': {
            return content.innerHTML = await pages.home()
        }
        case '#/about': {
            return content.innerHTML = await pages.about()
        }
        case `${url}`:{
            return content.innerHTML = await pages.character()
        }
        default: {
            return content.innerHTML = `
                <h2>pipo</h2>
            `
        }
    }
}

export {router}