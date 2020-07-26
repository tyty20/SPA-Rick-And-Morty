const API = 'https://jsonplaceholder.typicode.com/posts'

const getPost = async () => {
    const data = await fetch(API)
    try{
        const response = data.json();
        return response;
    }
    catch(error){
        console.log('Fetch error', error)
    }
}

export {getPost}