import {getData} from '../utils/getData'


let state = {
    nextPage:1,
    loading:true,
    error:null,
    data:{
        results:[]
    }
}


const fetchCharacter = async () => {
    state = {nextPage:state.nextPage + 1, loading:true, error:null, data:{results:state.data.results}}

    console.log(state)
    
    

    try {

        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${state.nextPage}`)
        const data = await response.json()


        if(data.results){
            console.log('pipo')
            state = {
                nextPage: state.nextPage + 1,
                loading:false,
                error:null,
                data:{
                    results:[].concat(
                        state.data.results,
                        data.results
                    )
                }
            }
        }

        return state
                
    }
    catch(error){
        state = {
            error:error,
            loading:false,
            data:{
                results:'hola'
            }
        }

    }
}

console.log(state)


const Home = async () => {
    await fetchCharacter()
    console.log(state.data)
    const view = `
        ${state.loading === true && (
            'Loading'
        )}
        <div class="characters">
            ${state.data.results.map( character => `
                <article class="characters__presentation">
                    <a href="#/${character.id}">
                        <img src="${character.image} " alt="${character.name}">
                        <h2>${character.name}</h2>
                    </a>
                </article>
            `).join('')}
        </div>
        <div class="characters__more">
            <button onclick="${() => fetchCharacter()}">Click me</button> 
        </div>
    `
    return view
}

export default Home