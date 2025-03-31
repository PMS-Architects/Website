const projects = {
    "NAIDU_HALL": {
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
        ],
        prev: '/pages/project.html?name=SILVER_LADY',
        next: '/pages/project.html?name=ARSHAD_RESIDENCE'
    },
    "ARSHAD_RESIDENCE": {
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
        ],
        prev: '/pages/project.html?name=NAIDU_HALL',
        next: '/pages/project.html?name=KUMAR_RESIDENCE'
    },
    "KUMAR_TRADING_COMPANY": {
        images: [
            "final_1_Photo.jpg",
            "final_2_Photo.jpg",
            "final_3_Photo.jpg",
            "final_4_Photo.jpg",
            "final_5_Photo.jpg",
        ],
        prev: '/pages/project.html?name=KUMAR_RESIDENCE',
        next: '/pages/project.html?name=SILVER_LADY'
    },
    "KUMAR_RESIDENCE": {
        images: [
            "01.jpg",
            "02.jpg",
            "03.jpg",
            "04.jpg",
            "05.jpg",
            "06.jpg",
            "07.jpg",
        ],
        prev: '/pages/project.html?name=ARSHAD_RESIDENCE',
        next: '/pages/project.html?name=KUMAR_TRADING_COMPANY'
    },
    "SILVER_LADY": {
        images: [
            "DSC03782.JPG",
            "DSC03790.JPG",
            "DSC03791.JPG",
            "DSC03794.JPG",
            "DSC03796.JPG",
            "DSC03809.JPG",
        ],
        prev: '/pages/project.html?name=KUMAR_TRADING_COMPANY',
        next: '/pages/project.html?name=NAIDU_HALL'
    }
}

// Function to get query parameters from URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Get the 'name' query param value
const projectName = getQueryParam('name');
const formattedProjectName = trim(projectName);

function trim(projectName) {
    return projectName.replaceAll("_", " ");
}

// Set the title dynamically
if (projectName) {
    document.title = formattedProjectName + " - PMS Architects ";
    document.getElementById('project-title').textContent = formattedProjectName;
    document.getElementById('section-header').textContent = formattedProjectName;
}

// Dynamically set project images from the project selected based on the query param
function loadProjects() {

    const projectSlides = document.getElementById('project-slides');
    const project = projects[projectName];

    project.images.forEach(imagePath => {
        const slide = document.createElement('div');
        slide.className = 'slide'
        const backgroundImagePath = `/images/projects/${projectName}/${imagePath}`;
        slide.style.backgroundImage = `url(${backgroundImagePath})`;
        projectSlides.appendChild(slide);
    })

    const projectsContainer = document.getElementById('projects');

    // Create a project div
    const projectDiv = document.createElement('div');
    projectDiv.className = 'project';

    // Create an image container
    const imagesContainer = document.createElement('div');
    imagesContainer.className = 'image-container';

    // Add images
    project.images.forEach(imagePath => {
        const imageContainer = document.createElement('div');
        imageContainer.className = 'image';

        const img = document.createElement('img');
        img.src = `/images/projects/${projectName}/${imagePath}`;
        img.alt = `${projectName} Project Images`;
        img.onclick = () => openModal(img.src, formattedProjectName);
        
        imageContainer.appendChild(img);
        imagesContainer.appendChild(imageContainer);
    });

    projectDiv.appendChild(imagesContainer);
    projectsContainer.appendChild(projectDiv);

    // Get Links
    const linkToPrev = document.getElementById("prev-project");
    const linkToProjects = document.getElementById("our-project");
    const linkToNext = document.getElementById("next-project");

    linkToPrev.href = project.prev;
    linkToNext.href = project.next;
    linkToProjects.href = '/pages/testimonials.html';
}

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

// Run after DOM is loaded
document.addEventListener('DOMContentLoaded', loadProjects);