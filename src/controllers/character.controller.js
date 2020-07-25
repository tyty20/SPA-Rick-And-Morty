import {getData} from '../utils/getData'
import {getHash} from '../utils/getHash'

export default async () => {
    const hash = getHash()
    const characters = await getData(hash)
    const view = `
        <div class="character">
            <article class="character__presentation">
                <img src="${characters.results.image}" alt="${characters.name}">
                <h2>${characters.results.name}</h2>
            </article>
            <article class="character__description">
                <h3>Status:<span></span></h3>
                <h3>Episodes:<span></span></h3>
                <h3>Species:<span></span></h3>
                <h3>Gender:<span></span></h3>
                <h3>Origin:<span></span></h3>
                <h3>Location:<span></span></h3>
            </article>
        </div>
    `
    return view;
}