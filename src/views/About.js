import {images} from '../../assets/media/images'

const About = () => {
    const view = `
        
        <div class="about">

            <div class="about__section1">
                <div class="about__title">
                    <h2>Que es Rick And Morty?</h2>
                </div>
                <div class="about__presentation">
                    <figure>
                        <img src=${images.rickandmorty1} alt="rick And Morty 1">
                        <img src=${images.rickandmorty2} alt="Rick And Morty 2">
                        <img src=${images.rickandmorty3} alt="Rick And Morty 3">
                        <img src=${images.rickandmorty1} alt="Rick And Morty 4">
                        <img src=${images.rickandmorty2} alt="Rick And Morty 5">
                    </figure>
                </div>
            </div>

            <div class="about__section2">
                <div class="about__decoration1" >
                    <img src=${images.rickandmortyfondo1} id="image1" alt="Rick And Morty">
                </div>
                <div class="about__presentation">
                    <div class="about__presentation--text">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, dolores labore asperiores distinctio porro illum cupiditate dignissimos consequuntur nisi quas iste beatae nesciunt veniam molestias expedita provident corrupti ducimus consequatur.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, dolores labore asperiores distinctio porro illum cupiditate dignissimos consequuntur nisi quas iste beatae nesciunt veniam molestias expedita provident corrupti ducimus consequatur.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, dolores labore asperiores distinctio porro illum cupiditate dignissimos consequuntur nisi quas iste beatae nesciunt veniam molestias expedita provident corrupti ducimus consequatur.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, dolores labore asperiores distinctio porro illum cupiditate dignissimos consequuntur nisi quas iste beatae nesciunt veniam molestias expedita provident corrupti ducimus consequatur.</p>
                    </div>
                </div>
                <div class="about__decoration2">
                    <img src=${images.rickandmortyfondo2} id="image2" alt="Rick And Morty">
                </div>
            </div>

            <div class="about__section3">
                <div class="about__presentation">
                    <figure>
                        <img src=${images.samuraijack} alt="Samurai Jack">
                        <img src=${images.aquateenforce} alt="Aqua Teen Force">
                        <img src=${images.samuraijack2} alt="Samurai Jack">
                        <img src=${images.spaceghost2} alt="Space Ghost">
                        <img src=${images.aquateenforce} alt="Aqua Teen Force">
                    </figure>
                </div>
                <div class="about__title">
                    <h2>Otros programas que emite Adult Swim.</h2>
                </div>
            </div>

            <div class="about__section4">
                <div class="about__cards">
                    <div class="about__card">
                        <div class="about__card--title">
                            <h2>AquaTeen Force</h2>
                        </div>
                        <div class="about__card--img">
                            <img src=${images.aquateenforce} alt="Aqua Teen Force">
                        </div>
                        <div class="about__card--text">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, dolores labore asperiores distinctio porro illum cupiditate dignissimos consequuntur nisi quas iste beatae nesciunt veniam molestias expedita provident corrupti ducimus consequatur</p>
                            <span><a target="blank" href="https://aqua-teen-hunger-force.fandom.com/wiki/Aqua_Teen_Hunger_Force">Mas informacion</a></span>
                        </div>
                    </div>

                    <div class="about__card">
                        <div class="about__card--title">
                            <h2> Samurai Jack</h2>
                        </div>
                        <div class="about__card--img">
                            <img src=${images.samuraijack} alt="Samurai Jack">
                        </div>
                        <div class="about__card--text">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, dolores labore asperiores distinctio porro illum cupiditate dignissimos consequuntur nisi quas iste beatae nesciunt veniam molestias expedita provident corrupti ducimus consequatur</p>
                            <span><a target="blank" href="https://samuraijack.fandom.com/es/wiki/Samurai_Jack">Mas informacion</a></span>
                        </div>
                    </div>

                    <div class="about__card">
                        <div class="about__card--title">
                            <h2>Space Ghost</h2>
                        </div>
                        <div class="about__card--img">
                            <img src=${images.spaceghost} alt="Space Ghost">
                        </div>
                        <div class="about__card--text">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, dolores labore asperiores distinctio porro illum cupiditate dignissimos consequuntur nisi quas iste beatae nesciunt veniam molestias expedita provident corrupti ducimus consequatur</p>
                            <span><a target="blank" href="https://spaceghost.fandom.com/wiki/Space_Ghost">Mas informacion</a></span>
                        </div>
                    </div>

                    <div class="about__card">
                        <div class="about__card--title">
                            <h2>Family Guy</h2>
                        </div>
                        <div class="about__card--img">
                            <img src=${images.familyguy} alt="Family Guy">
                        </div>
                        <div class="about__card--text">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, dolores labore asperiores distinctio porro illum cupiditate dignissimos consequuntur nisi quas iste beatae nesciunt veniam molestias expedita provident corrupti ducimus consequatur</p>
                            <span><a target="blank" href="https://familyguy.fandom.com/wiki/Family_Guy">Mas informacion</a></span>
                        </div>
                    </div>
                
                    <div class="about__card">
                        <div class="about__card--title">
                            <h2>The Brak Show </h2>
                        </div>
                        <div class="about__card--img">
                            <img src=${images.thebrakshow} alt ="The Brak Show">
                        </div>
                        <div class="about__card--text">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, dolores labore asperiores distinctio porro illum cupiditate dignissimos consequuntur nisi quas iste beatae nesciunt veniam molestias expedita provident corrupti ducimus consequatur</p>
                            <span><a target="blank" href="https://cartoonnetwork.fandom.com/wiki/The_Brak_Show">Mas informacion</a></span>
                        </div>
                    </div>

                    <div class="about__card">
                        <div class="about__card--title">
                            <h2>Bob's Burgers</h2>
                        </div>
                        <div class="about__card--img">
                            <img src=${images.bobburgers} alt="Bob's Burgers">
                        </div>
                        <div class="about__card--text">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, dolores labore asperiores distinctio porro illum cupiditate dignissimos consequuntur nisi quas iste beatae nesciunt veniam molestias expedita provident corrupti ducimus consequatur</p>
                            <span><a target="blank" href="https://bobs-burgers.fandom.com/wiki/Bob%27s_Burgers_Wiki">Mas informacion</a></span>
                        </div>
                    </div>
                </div>
            </div>
                        
            <div class="about__section5">
                <div class="about__title">
                    <h2>Muchas gracias por haber llegado hasta aca, la api con la cual me base para sacar los datos de los personajes la puedes encontrar <a target="blank" href="https://rickandmortyapi.com/">aca</a></h2>
                </div>
                <div class="about__image">
                    <img src=${images.api} alt ="Api Rick And Morty">
                </div>
            </div>
        </div>
    `

    return view;
}

export default About;