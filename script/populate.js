const projects = [
    {
        project_img_path: "../../../images/desktop-preview.jpg",
        project_title: "Blogr-landing-page",
        project_desc: `A challenge from frontendmentor.io, with a little bit of sauce from yours truly`,
    },
    {
        project_img_path: "../../../images/desktop-design.jpg",
        project_title: "Huddle-landing-page",
        project_desc: `A challenge from frontendmentor.io, with a little bit of sauce from yours truly`,
    },
    {
        project_img_path: "../../../images/desktop-desin.jpg",
        project_title: "Base-apparel-coming",
        project_desc: `A challenge from frontendmentor.io, with a little bit of sauce from yours truly`,
    },
];

const project_card = (img_path, title, desc) => {
    return `<div class="project-card">
    <div class="project-img"></div>
    <div class="project-details">
        <h3 class="project-details__title">${title}</h3>
        <p class="project-details__desc">
            ${desc}
        </p>

        <div class="buttons-container">
            <a href="#" target="_blank">
                <button class="btn more-btn">
                    More
                    <span class="btn-img"></span>
                </button>
            </a>
            <a href="#" target="_blank">
                <button class="btn view-site-btn">
                    View Site
                    <span class="btn-img"></span>
                </button>
            </a>
            <a href="#" target="_blank">
                <button class="btn source-code-btn">
                    Source code
                    <span class="btn-img"></span>
                </button>
            </a>
        </div>
    </div>
</div>`;
};
