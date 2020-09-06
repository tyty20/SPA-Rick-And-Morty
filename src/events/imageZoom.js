const imageZoom = (e) => {
        const aboutTitle = document.getElementById('about__title')
        const aboutSection1 = document.getElementById('about__section1')
        const aboutPresentation = document.getElementById('about__presentation')
        const aboutTitle3 = document.getElementById('about__title3')
        const aboutSection3 = document.getElementById('about__section3')
        const aboutPresentation3 = document.getElementById('about__presentation3')
        switch(e.target.name){
            case 'Rick And Morty':{
                let image = e.target.parentElement.parentElement
                image.classList.add('zoom')
                aboutTitle.classList.add('hidden')
                aboutSection1.classList.add('absolute')
                aboutTitle3.classList[1] == 'hidden' ? aboutTitle3.classList.remove('hidden') : false;
                aboutSection3.classList[1] == 'absolute' ? aboutSection3.classList.remove('absolute') : false;
                aboutPresentation3.classList[1] == 'zoom_2' ? aboutPresentation3.classList.remove('zoom_2') : false;
                break;
            }
            case 'Adult Swim':{
                let image = e.target.parentElement.parentElement
                image.classList.add('zoom_2')
                aboutTitle3.classList.add('hidden')
                aboutSection3.classList.add('absolute')
                aboutTitle.classList[1] == 'hidden' ? aboutTitle.classList.remove('hidden') : false;
                aboutSection1.classList[1] == 'absolute' ? aboutSection1.classList.remove('absolute') : false;
                aboutPresentation.classList[1] == 'zoom' ? aboutPresentation.classList.remove('zoom') : false;
                break;
            } 
            default: {
                aboutTitle.classList[1] == 'hidden' ? aboutTitle.classList.remove('hidden') : false;
                aboutSection1.classList[1] == 'absolute' ? aboutSection1.classList.remove('absolute') : false;
                aboutPresentation.classList[1] == 'zoom' ? aboutPresentation.classList.remove('zoom') : false;
                aboutTitle3.classList[1] == 'hidden' ? aboutTitle3.classList.remove('hidden') : false;
                aboutSection3.classList[1] == 'absolute' ? aboutSection3.classList.remove('absolute') : false;
                aboutPresentation3.classList[1] == 'zoom_2' ? aboutPresentation3.classList.remove('zoom_2') : false;
            }
        }
}

export default imageZoom;

