document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const sliderNav = document.querySelector('.slider-nav');
    const leftArrow = document.querySelector('.slider-arrow.left');
    const rightArrow = document.querySelector('.slider-arrow.right');
    const totalSlides = document.querySelectorAll('.slide').length;
    let currentSlide = 0;

    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('span');
        dot.classList.add('slider-dot');
        if (i === 0) dot.classList.add('active');
        sliderNav.appendChild(dot);
    }

    const dots = document.querySelectorAll('.slider-dot');

    function showSlide(index) {
        slides.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    leftArrow.addEventListener('click', prevSlide);
    rightArrow.addEventListener('click', nextSlide);

    let startX, moveX;
    let isDragging = false;

    slides.addEventListener('touchstart', (e) => {
        startX = e.touches[0].pageX;
        isDragging = true;
    });

    slides.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        moveX = e.touches[0].pageX;
        const diff = moveX - startX;
        slides.style.transform = `translateX(calc(-${currentSlide * 100}% + ${diff}px))`;
    });

    slides.addEventListener('touchend', (e) => {
        isDragging = false;
        const diff = moveX - startX;
        if (Math.abs(diff) > 100) {
            if (diff > 0) prevSlide();
            else nextSlide();
        } else {
            showSlide(currentSlide);
        }
    });

    slides.addEventListener('mousedown', (e) => {
        startX = e.pageX;
        isDragging = true;
    });

    slides.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        moveX = e.pageX;
        const diff = moveX - startX;
        slides.style.transform = `translateX(calc(-${currentSlide * 100}% + ${diff}px))`;
    });

    slides.addEventListener('mouseup', () => {
        isDragging = false;
        const diff = moveX - startX;
        if (Math.abs(diff) > 100) {
            if (diff > 0) prevSlide();
            else nextSlide();
        } else {
            showSlide(currentSlide);
        }
    });

    slides.addEventListener('mouseleave', () => {
        if (isDragging) {
            isDragging = false;
            showSlide(currentSlide);
        }
    });
  
    let autoSlideInterval = setInterval(nextSlide, 6000);

    slides.addEventListener('mouseenter', () => {
        clearInterval(autoSlideInterval);
    });

    slides.addEventListener('mouseleave', () => {
        autoSlideInterval = setInterval(nextSlide, 6000);
    });

    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.addEventListener('mouseenter', () => {
            option.style.transform = 'translateY(-10px) scale(1.05)';
        });
        option.addEventListener('mouseleave', () => {
            option.style.transform = 'translateY(0) scale(1)';
        });
    });
});