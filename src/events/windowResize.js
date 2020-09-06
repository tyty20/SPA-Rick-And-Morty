const windowResize = () => {
    const aboutTitle = document.getElementById('about__title')
    const aboutSection1 = document.getElementById('about__section1')
    const aboutPresentation = document.getElementById('about__presentation')
    const aboutTitle3 = document.getElementById('about__title3')
    const aboutSection3 = document.getElementById('about__section3')
    const aboutPresentation3 = document.getElementById('about__presentation3')
    aboutPresentation.classList[1] == 'zoom' ? aboutPresentation.classList.remove('zoom') : false;
    aboutTitle.classList[1] == 'hidden' ? aboutTitle.classList.remove('hidden') : false;
    aboutSection1.classList[1] == 'absolute' ? aboutSection1.classList.remove('absolute') : false;
    aboutTitle3.classList[1] == 'hidden' ? aboutTitle3.classList.remove('hidden') : false;
    aboutSection3.classList[1] == 'absolute' ? classList.remove('absolute') : false;
    aboutPresentation3.classList[1] == 'zoom' ? classList.remove('zoom') : false;
}

export default windowResize