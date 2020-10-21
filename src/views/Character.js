import getData from '../utils/getData'
import getUrl from '../utils/getUrl'

const Character = async () => {
    const url = getUrl();
    const id = await url.slice(1).toLocaleLowerCase().split('/')[1] - 1;
    const data = await getData()
    const characters =  data.results[id]
    const view = `
        <div class="character">
            <article class="character__presentation">
                <img class="character__img" src="${characters.image}" alt="${characters.name}">
                <h2 class="character__title">${characters.name}</h2>
            </article>
            <article class="character__description">
                <h3 class="character__text">Status:<span class="character__span">${characters.status}</span></h3>
                <h3 class="character__text">Episodes:<span class="character__span">${characters.episode.length}</span></h3>
                <h3 class="character__text">Species:<span class="character__span">${characters.species}</span></h3>
                <h3 class="character__text">Gender:<span class="character__span">${characters.gender}</span></h3>
                <h3 class="character__text">Origin:<span class="character__span">${characters.origin.name}</span></h3>
                <h3 class="character__text">Location:<span class="character__span">${characters.location.name}</span></h3>
            </article>
        </div>
    `
    return view;
}

export default Character