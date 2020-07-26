import {getPost} from '../utils/getPost'

const About = async () => {
    const posts = await getPost();
    const view = `
        
        <div class="About">
        ${posts.map(post => `
            <div class="about__presentation">
            <h2>${post.title}</h2>
             </div>
            <div class="about__text">
                <p>${post.body}</p>
            </div>`).join('')}
        </div>
    `

    return view;
}

export default About;