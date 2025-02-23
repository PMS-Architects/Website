
const projects = [
    {
        name: "NAIDU_HALL",
        images: [
            "DSC01824.JPG",
            "DSC01927.JPG",
            "DSC01932.JPG",
            "DSC01941.JPG",
            "DSC01948.JPG",
            "DSC01957.JPG",
            "DSC01961.JPG",
            "DSC01968.JPG",
            "DSC01975.JPG",
            "DSC01989.JPG",
        ]
    },
    {
        name: "SILVER_LADY",
        images: [
            "DSC03782.JPG",
            "DSC03790.JPG",
            "DSC03791.JPG",
            "DSC03794.JPG",
            "DSC03796.JPG",
            "DSC03809.JPG",
        ]
    },
    {
        name: "ARSHAD_RESIDENCE",
        images: [
            "01.jpg",
            "02.jpg",
            "03.jpg",
            "04.jpg",
            "05.jpg",
            "06.jpg",
            "07.jpg",
            "08.jpg",
            "09.jpg",
            "10.jpg",
        ]
    },
    {
        name: "KUMAR_RESIDENCE",
        images: [
            "01.jpg",
            "02.jpg",
            "03.jpg",
            "04.jpg",
            "05.jpg",
            "06.jpg",
            "07.jpg",
        ]
    },
    {
        name: "KUMAR_TRADING_COMPANY",
        images: [
            "final_1 - Photo.jpg",
            "final_2 - Photo.jpg",
            "final_3 - Photo.jpg",
            "final_4 - Photo.jpg",
            "final_5 - Photo.jpg",
        ]
    }
];

const projectsContainer = document.getElementById('projects');

projects.forEach(project => {
    // Create a project div
    const projectDiv = document.createElement('div');
    projectDiv.className = 'project';

    const projectName = project.name.replaceAll("_", " ");

    // Add project title
    const projectTitle = document.createElement('h2');
    projectTitle.textContent = projectName;
    projectDiv.appendChild(projectTitle);

    // Create an image container
    const imageContainer = document.createElement('div');
    imageContainer.className = 'image-container';

    // Add images
    project.images.forEach(imagePath => {
        const img = document.createElement('img');
        img.src = `/images/projects/${project.name}/${imagePath}`;
        img.alt = `${project.name} Project Images`;
        img.onclick = () => openModal(img.src, projectName);
        imageContainer.appendChild(img);
    });

    projectDiv.appendChild(imageContainer);
    projectsContainer.appendChild(projectDiv);
});

// Modal functions
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-image");
const captionText = document.getElementById("caption");

function openModal(src, caption) {
    modal.style.display = "block";
    modalImg.src = src;
    captionText.innerHTML = caption;
    document.body.classList.add('modal-open')
}

function closeModal() {
    modal.style.display = "none";
    document.body.classList.remove('modal-open')
}

// Close modal when clicking outside
window.onclick = function (event) {
    if (event.target == modal) {
        closeModal();
    }
}
