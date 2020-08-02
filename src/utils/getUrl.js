import Error404 from "../views/Error404";

const getUrl = () => {
    let x = window.location.hash;
    let z = x.split('/').splice('')[1]
    let o = parseInt(z)
    if(o < 21) {
        return x;
    }
}

export {getUrl}