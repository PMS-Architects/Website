const allProjects = [
    {
        name: "SILVER_LADY",
        image: "DSC03820.JPG",
    },
    {
        name: "NAIDU_HALL",
        image: "DSC01957.JPG"
    },
    {
        name: "ARSHAD_RESIDENCE",
        image: "03.jpg"
    },
    {
        name: "KUMAR_RESIDENCE",
        image: "01.jpg",
    },
    {
        name: "KUMAR_TRADING_COMPANY",
        image: "final_1 - Photo.jpg"
    }
]

const allProjectsContainer = document.getElementById('all-projects');
allProjectsContainer.className = 'display-flex';

allProjects.forEach(project => {

    const projectName = project.name.replaceAll("_", " ");

    // Anchor Wrapper
    const anchorContainer = document.createElement('a');
    anchorContainer.href = `/pages/project.html?name=${project.name}`;

    // Image Container
    const imageContainer = document.createElement('div');
    imageContainer.className = 'image-container';

    // Image Element
    const img = document.createElement('img');
    img.src = `/images/projects/${project.name}/${project.image}`;
    img.alt = `${project.name} Project Images`;
    img.className = "image";
    imageContainer.appendChild(img);

    // Caption Overlay
    const captionContainer = document.createElement('div');
    captionContainer.className = 'caption-overlay';
    

    // Caption Text
    const captionTextContainer = document.createElement('p');
    captionTextContainer.textContent = projectName;
    captionTextContainer.className = 'caption-text';

    captionContainer.appendChild(captionTextContainer);
    imageContainer.appendChild(captionContainer);
    anchorContainer.appendChild(imageContainer);
    allProjectsContainer.appendChild(anchorContainer);
});
