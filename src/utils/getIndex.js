import {pages} from '../views/index'


const getIndex = () => {
    return content.innerHTML = pages.presentation()
}

export {getIndex}