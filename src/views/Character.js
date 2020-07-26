import {getData} from '../utils/getData'
import {getUrl} from '../utils/getUrl'

const Character = async () => {
    const url = getUrl();
    const id = await url.slice(1).toLocaleLowerCase().split('/')[1] - 1;
    const data = await getData()
    const characters = data.results[id]
    const view = `
        <div class="character">
            <article class="character__presentation">
                <img src="${characters.image}" alt="${characters.name}">
                <h2>${characters.name}</h2>
            </article>
            <article class="character__description">
                <h3>Status:<span>${characters.status}</span></h3>
                <h3>Episodes:<span>${characters.episode.length}</span></h3>
                <h3>Species:<span>${characters.species}</span></h3>
                <h3>Gender:<span>${characters.gender}</span></h3>
                <h3>Origin:<span>${characters.origin.name}</span></h3>
                <h3>Location:<span>${characters.location.name}</span></h3>
            </article>
        </div>
    `
    return view;
}

export default Character