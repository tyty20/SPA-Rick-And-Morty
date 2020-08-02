const getUrl = () => {
    let x = window.location.hash;
    if(x.length <= 3 ) {
        return x
    }
}

export {getUrl}