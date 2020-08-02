const callbackFunction = (entries) => {
    if(entries[0].intersectionRatio > 0){
        entries[0].target.style.animation = 'passing 4s forwards ease-out'
    }
    else {
        entries[0].target.style.none = 'none'
    }
}

const observer = new IntersectionObserver(callbackFunction);

export default observer;