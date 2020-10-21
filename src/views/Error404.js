const Error404 = () => {
    const view = `
        <div class="error404">
            <div class="error404__presentation">
                <h2 class="error404__title">Error 404</h2>
            </div>
            <div class="error404__info">
                <p class="error404__text">The route wasn't find it</p>
            </div>
        </div>
    `
    return view;
}

export default Error404