import getData from '../utils/getData'

const Home = async () => {
    const characters = await getData()
    const view = `
        <div class="characters">
            ${characters.results.map( character => `
                <article class="characters__presentation">
                    <a class="characters__link" href="#/${character.id}">
                        <img class="characters__img" src="${character.image}" alt="${character.name}">
                        <h2 class="characters__title">${character.name}</h2>
                    </a>
                </article>
            `).join('')}
        </div>
    `
    return view
}

export default Home