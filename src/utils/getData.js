const API = 'https://rickandmortyapi.com/api/character/'

const getData = async (id) => {
    try {
        const apiUrl = id ? `${API}${id}`: API
        const resolve = await fetch(apiUrl);
        const data = resolve.json();
        return data;
    }
    catch(error){
        console.log('Error Fetch', error)
    }
}

export default getData;