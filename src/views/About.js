import {images} from '../../assets/media/images'

const About = () => {
    const view = `
        
        <div class="about">

            <div class="about-section1" id="about__section1">
                <div class="about-section1__name" id="about__title">
                    <h2 class="about-section1__title">Que es Rick And Morty?</h2>
                </div>
                <div class="about-section1__presentation" id="about__presentation">
                    <figure class="about-section1__figure">
                        <img class="about-section1__img" src=${images.rickandmorty1} name="Rick And Morty" alt="Rick And Morty 1">
                        <img class="about-section1__img" src=${images.rickandmorty2} name="Rick And Morty" alt="Rick And Morty 2">
                        <img class="about-section1__img" src=${images.rickandmorty3} name="Rick And Morty" alt="Rick And Morty 3">
                        <img class="about-section1__img" src=${images.rickandmorty1} name="Rick And Morty" alt="Rick And Morty 4">
                        <img class="about-section1__img" src=${images.rickandmorty2} name="Rick And Morty" alt="Rick And Morty 5">
                    </figure>
                </div>
            </div>

            <div class="about-section2">
                <div class="about-section2__decoration1">
                    <img class="about-section2__img" src=${images.rickandmortyfondo1} id="image1" alt="Rick And Morty">
                </div>
                <div class="about-section2__presentation">
                    <div class="about-section2__info">
                        <p class="about-section2__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, dolores labore asperiores distinctio porro illum cupiditate dignissimos consequuntur nisi quas iste beatae nesciunt veniam molestias expedita provident corrupti ducimus consequatur.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, dolores labore asperiores distinctio porro illum cupiditate dignissimos consequuntur nisi quas iste beatae nesciunt veniam molestias expedita provident corrupti ducimus consequatur.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, dolores labore asperiores distinctio porro illum cupiditate dignissimos consequuntur nisi quas iste beatae nesciunt veniam molestias expedita provident corrupti ducimus consequatur.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, dolores labore asperiores distinctio porro illum cupiditate dignissimos consequuntur nisi quas iste beatae nesciunt veniam molestias expedita provident corrupti ducimus consequatur.</p>
                    </div>
                </div>
                <div class="about-section2__decoration2">
                    <img class="about-section2__img" src=${images.rickandmortyfondo2} id="image2" alt="Rick And Morty">
                </div>
            </div>

            <div class="about-section3" id="about__section3">
                <div class="about-section3__presentation" id="about__presentation3">
                    <figure class="about-section3__figure">
                        <img class="about-section3__img" src=${images.samuraijack} name="Adult Swim" alt="Samurai Jack">
                        <img class="about-section3__img" src=${images.spaceghost2} name="Adult Swim" alt="Aqua Teen Force">
                        <img class="about-section3__img" src=${images.samuraijack2} name="Adult Swim" alt="Samurai Jack">
                        <img class="about-section3__img" src=${images.spaceghost2} name="Adult Swim" alt="Space Ghost">
                        <img class="about-section3__img" src=${images.samuraijack2} name="Adult Swim" alt="Aqua Teen Force">
                    </figure>
                </div>
                <div class="about-section3__name" id="about__title3">
                    <h2 class="about-section3__title">Otros programas que emite Adult Swim.</h2>
                </div>
            </div>

            <div class="about-section4">
                <div class="about-section4__cards">
                    <div class="about-section4__card">
                        <div class="about-section4__name">
                            <h2 class="about-section4__title">
                                AquaTeen
                                Force
                            </h2>
                        </div>
                        <div class="about-section4__background">
                            <img class="about-section4__img" src=${images.aquateenforce} alt="Aqua Teen Force">
                        </div>
                        <div class="about-section4__info">
                            <p class="about-section4__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, dolores labore asperiores distinctio porro illum cupiditate dignissimos consequuntur nisi quas iste beatae nesciunt veniam molestias expedita provident corrupti ducimus consequatur</p>
                            <span class="about-section4__span"><a class="about-section4__link" target="blank" href="https://aqua-teen-hunger-force.fandom.com/wiki/Aqua_Teen_Hunger_Force">Mas informacion</a></span>
                        </div>
                    </div>

                    <div class="about-section4__card">
                        <div class="about-section4__name">
                            <h2 class="about-section4__title">
                                Samurai
                                Jack
                            </h2>
                        </div>
                        <div class="about-section4__background">
                            <img class="about-section4__img" src=${images.samuraijack} alt="Samurai Jack">
                        </div>
                        <div class="about-section4__info">
                            <p class="about-section4__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, dolores labore asperiores distinctio porro illum cupiditate dignissimos consequuntur nisi quas iste beatae nesciunt veniam molestias expedita provident corrupti ducimus consequatur</p>
                            <span class="about-section4__span"><a class="about-section4__link" target="blank" href="https://samuraijack.fandom.com/es/wiki/Samurai_Jack">Mas informacion</a></span>
                        </div>
                    </div>

                    <div class="about-section4__card">
                        <div class="about-section4__name">
                            <h2 class="about-section4__title">
                                Space Ghost
                            </h2>
                        </div>
                        <div class="about-section4__background">
                            <img class="about-section4__img" src=${images.spaceghost} alt="Space Ghost">
                        </div>
                        <div class="about-section4__info">
                            <p class="about-section4__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, dolores labore asperiores distinctio porro illum cupiditate dignissimos consequuntur nisi quas iste beatae nesciunt veniam molestias expedita provident corrupti ducimus consequatur</p>
                            <span class="about-section4__span"><a class="about-section4__link" target="blank" href="https://spaceghost.fandom.com/wiki/Space_Ghost">Mas informacion</a></span>
                        </div>
                    </div>

                    <div class="about-section4__card">
                        <div class="about-section4__name">
                            <h2 class="about-section4__title">
                                Family Guy
                            </h2>
                        </div>
                        <div class="about-section4__background">
                            <img class="about-section4__img" src=${images.familyguy} alt="Family Guy">
                        </div>
                        <div class="about-section4__info">
                            <p class="about-section4__text" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, dolores labore asperiores distinctio porro illum cupiditate dignissimos consequuntur nisi quas iste beatae nesciunt veniam molestias expedita provident corrupti ducimus consequatur</p>
                            <span class="about-section4__span"><a class="about-section4__link" target="blank" href="https://familyguy.fandom.com/wiki/Family_Guy">Mas informacion</a></span>
                        </div>
                    </div>
                
                    <div class="about-section4__card">
                        <div class="about-section4__name">
                            <h2 class="about-section4__title">
                                The Brak Show
                            </h2>
                        </div>
                        <div class="about-section4__background">
                            <img class="about-section4__img" src=${images.thebrakshow} alt ="The Brak Show">
                        </div>
                        <div class="about-section4__info">
                            <p class="about-section4__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, dolores labore asperiores distinctio porro illum cupiditate dignissimos consequuntur nisi quas iste beatae nesciunt veniam molestias expedita provident corrupti ducimus consequatur</p>
                            <span class="about-section4__span"><a class="about-section4__link" target="blank" href="https://cartoonnetwork.fandom.com/wiki/The_Brak_Show">Mas informacion</a></span>
                        </div>
                    </div>

                    <div class="about-section4__card">
                        <div class="about-section4__name">
                            <h2 class="about-section4__title">
                                Bob's 
                                Burgers
                            </h2>
                        </div>
                        <div class="about-section4__background">
                            <img class="about-section4__img" src=${images.bobburgers} alt="Bob's Burgers">
                        </div>
                        <div class="about-section4__info">
                            <p class="about-section4__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, dolores labore asperiores distinctio porro illum cupiditate dignissimos consequuntur nisi quas iste beatae nesciunt veniam molestias expedita provident corrupti ducimus consequatur</p>
                            <span class="about-section4__span"><a class="about-section4__link" target="blank" href="https://bobs-burgers.fandom.com/wiki/Bob%27s_Burgers_Wiki">Mas informacion</a></span>
                        </div>
                    </div>
                </div>
            </div>
                        
            <div class="about-section5">
                <div class="about-section5__name">
                    <h2 class="about-section5__title">Muchas gracias por haber llegado hasta aca, la api con la cual me base para sacar los datos de los personajes la puedes encontrar <a class="about-section5__link" target="blank" href="https://rickandmortyapi.com/">aca</a></h2>
                </div>
                <div class="about-section5__background">
                    <img class="about-section5__img" src=${images.api} alt ="Api Rick And Morty">
                </div>
            </div>
        </div>
    `

    return view;
}

export default About;