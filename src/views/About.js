const About = () => {
    const view = `
        
        <div class="About">

            <div class="about__section1">
                <div class="about__title">
                    <h2>Que es Rick And Morty?</h2>
                </div>
                <div class="about__presentation">
                    <figure>
                        <img src="../media/rickandmorty1.png">
                        <img src="../media/rickandmorty2.png">
                        <img src="../media/rickandmorty3.png">
                        <img src="../media/rickandmorty1.png">
                        <img src="../media/rickandmorty2.png">
                    </figure>
                </div>
            </div>

            <div class="about__section2">
                <div class="about__decoration1">
                    <img src="../media/rickandmortyDecorate.png" alt="Rick And Morty">
                </div>
                <div class="about__text">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, dolores labore asperiores distinctio porro illum cupiditate dignissimos consequuntur nisi quas iste beatae nesciunt veniam molestias expedita provident corrupti ducimus consequatur.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, dolores labore asperiores distinctio porro illum cupiditate dignissimos consequuntur nisi quas iste beatae nesciunt veniam molestias expedita provident corrupti ducimus consequatur.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, dolores labore asperiores distinctio porro illum cupiditate dignissimos consequuntur nisi quas iste beatae nesciunt veniam molestias expedita provident corrupti ducimus consequatur.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, dolores labore asperiores distinctio porro illum cupiditate dignissimos consequuntur nisi quas iste beatae nesciunt veniam molestias expedita provident corrupti ducimus consequatur.</p>
                </div>
                <div class="about__decoration2">
                    <img src="../media/rickandmortyDecorate2.png" alt="Rick And Morty">
                </div>
            </div>

            <div class="about__section3">
                <div class="about__presentation">
                    <figure>
                        <img src="../media/samuraijack.png">
                        <img src="../media/aquateenforce.png">
                        <img src="../media/samuraijack.png">
                        <img src="../media/spaceghost.png">
                        <img src="../media/aquateenforce.png">
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
                            <img src="../media/aquateenforce.png" alt="AquaTeen Force">
                        </div>
                        <div class="about__card--text">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, dolores labore asperiores distinctio porro illum cupiditate dignissimos consequuntur nisi quas iste beatae nesciunt veniam molestias expedita provident corrupti ducimus consequatur</p>
                            <span><a href="#">Mas informacion</a></span>
                        </div>
                    </div>

                    <div class="about__card">
                        <div class="about__card--title">
                            <h2> Samurai Jack</h2>
                        </div>
                        <div class="about__card--img">
                            <img src="../media/samuraijack.png" alt="Samurai Jack">
                        </div>
                        <div class="about__card--text">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, dolores labore asperiores distinctio porro illum cupiditate dignissimos consequuntur nisi quas iste beatae nesciunt veniam molestias expedita provident corrupti ducimus consequatur</p>
                            <span><a href="#">Mas informacion</a></span>
                        </div>
                    </div>

                    <div class="about__card">
                        <div class="about__card--title">
                            <h2>Space Ghost</h2>
                        </div>
                        <div class="about__card--img">
                            <img src="../media/spaceghost.png" alt="Space Ghost">
                        </div>
                        <div class="about__card--text">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, dolores labore asperiores distinctio porro illum cupiditate dignissimos consequuntur nisi quas iste beatae nesciunt veniam molestias expedita provident corrupti ducimus consequatur</p>
                            <span><a href="#">Mas informacion</a></span>
                        </div>
                    </div>

                    <div class="about__card">
                        <div class="about__card--title">
                            <h2>Family Guy</h2>
                        </div>
                        <div class="about__card--img">
                            <img src="../media/familyguy.png" alt="Family Guy">
                        </div>
                        <div class="about__card--text">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, dolores labore asperiores distinctio porro illum cupiditate dignissimos consequuntur nisi quas iste beatae nesciunt veniam molestias expedita provident corrupti ducimus consequatur</p>
                            <span><a href="#">Mas informacion</a></span>
                        </div>
                    </div>
                
                    <div class="about__card">
                        <div class="about__card--title">
                            <h2>The Brak Show </h2>
                        </div>
                        <div class="about__card--img">
                            <img src="../media/thebrakshow.png" alt ="The Brak Show">
                        </div>
                        <div class="about__card--text">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, dolores labore asperiores distinctio porro illum cupiditate dignissimos consequuntur nisi quas iste beatae nesciunt veniam molestias expedita provident corrupti ducimus consequatur</p>
                            <span><a href="#">Mas informacion</a></span>
                        </div>
                    </div>

                    <div class="about__card">
                        <div class="about__card--title">
                            <h2>Bob's Burgers</h2>
                        </div>
                        <div class="about__card--img">
                            <img src="../media/bobburgers.png" alt="Bob's Burgers">
                        </div>
                        <div class="about__card--text">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, dolores labore asperiores distinctio porro illum cupiditate dignissimos consequuntur nisi quas iste beatae nesciunt veniam molestias expedita provident corrupti ducimus consequatur</p>
                            <span><a href="#">Mas informacion</a></span>
                        </div>
                    </div>
                </div>
            </div>
                        
            <div class="about__section5">
                <div class="about__title">
                    <h2>Muchas gracias por haber llegado hasta aca, la api con la cual me base para sacar los datos de los personajes la puedes encontrar <a target="blank" href="https://rickandmortyapi.com/">aca</a></h2>
                </div>
            </div>
        </div>
    `

    return view;
}

export default About;