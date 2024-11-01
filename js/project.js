
const projects = [
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
            "11.jpg",
            "12.jpg",
            "13.jpg",
            "14.jpg",
            "15.jpg",
            "16.jpg",
            "17.jpg",
            "18.jpg",
            "19.jpg"
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
            "08.jpg",
            "09.jpg",
            "10.jpg",
            "11.jpg",
            "12.jpg",
            "13.jpg",
            "14.jpg",
            "15.jpg"
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
            "final_6 - Photo.jpg",
            "final_7 - Photo.jpg",
            "final_8 - Photo.jpg",
            "final_9 - Photo.jpg",
            "final_10 - Photo.jpg",
            "final_11 - Photo.jpg"
        ]
    },
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
            "DSC01998.JPG",
            "DSC02000.JPG",
            "DSC02012.JPG",
            "DSC02013.JPG",
            "DSC02018.JPG",
            "DSC02019.JPG",
            "DSC02040.JPG",
            "DSC02043.JPG",
            "DSC02047.JPG",
            "DSC02053.JPG",
            "DSC02058.JPG",
            "DSC02061.JPG",
            "DSC02065.JPG",
            "DSC02071.JPG",
            "DSC02080.JPG",
            "DSC02084.JPG",
            "DSC02098.JPG",
            "DSC02105.JPG",
            "DSC02117.JPG",
            "DSC02121.JPG",
            "DSC02124.JPG",
            "DSC02125.JPG",
            "DSC02126.JPG",
            "DSC02130.JPG",
            "DSC02131.JPG",
            "DSC02133.JPG",
            "DSC02137.JPG",
            "DSC02141.JPG",
            "DSC02142.JPG",
            "DSC02144.JPG",
            "DSC02147.JPG",
            "DSC02149.JPG",
            "DSC02153.JPG",
            "DSC02156.JPG",
            "DSC02158.JPG",
            "DSC02160.JPG",
            "DSC02162.JPG",
            "DSC02167.JPG",
            "DSC02169.JPG",
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
            "DSC03811.JPG",
            "DSC03816.JPG",
            "DSC03820.JPG",
            "DSC03832.JPG",
            "DSC03833.JPG",
            "DSC03842.JPG",
            "DSC03846.JPG",
            "DSC03849.JPG",
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
