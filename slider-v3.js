const btnToBack = document.getElementById ('arrows__back');
const btnToForward = document.getElementById ('arrows__forward');

const slidesWrapper = document.querySelector('.feedbacks_list-wrapper');
const slides = document.querySelector('.feedbacks_list');

const SlideToShow = 4;
const slideCount = slides.children.length;
const slideWidth = slidesWrapper.clientWidth/4;
console.log(slideWidth);
// console.log(slideCount);
let currentIndex = SlideToShow;

// Клонируем слайды для бесконечной прокрутки
const firstFourSlides = Array.from(slides.children).slice(0, 4).map(slide => slide.cloneNode(true));
const lastFourSlides = Array.from(slides.children).slice(-4).map(slide => slide.cloneNode(true));

// Добавляем клонированные слайды в начало и конец
firstFourSlides.forEach(slide => slides.appendChild(slide));
lastFourSlides.reverse().forEach(slide => slides.insertBefore(slide, slides.firstChild));
console.log(slides.children.length);
// Обновляем ширину контейнера слайдов
slides.style.width = `${(slideCount + 8) * slideWidth}px`; // +8 из-за клонированных слайдов

//перерисовываем со смещением из-за 4-х клонированных слайдов в начале
slides.style.transform = `translateX(${-SlideToShow * slideWidth}px)`;

function goToSlide(index) {
    currentIndex = index;
    const offset = - (currentIndex ) * slideWidth; // +4 из-за клонированных слайдов в начале
    slides.style.transform = `translateX(${offset}px)`;
}

function nextSlide() {
    console.log('start ', currentIndex, slides.children.length);
    if (currentIndex >= slides.children.length - 4 ) {
        // Если это последние слайды, переходим к клонированным первым
        slides.style.transition = 'none';
        goToSlide(SlideToShow);
        // Принудительно вызываем перерисовку со смещением влево на один слайд
        setTimeout(() => {
            slides.style.transition = 'transform 0.5s ease-in-out';
            goToSlide(SlideToShow + 1);
        }, 0);
        console.log('if ',currentIndex)
    } else {
        goToSlide(currentIndex + 1);
        slides.style.transition = 'transform 0.5s ease-in-out';
        console.log(currentIndex)
    }
}

function prevSlide() {
    console.log('startPrev ', currentIndex, slides.children.length);
    if (currentIndex <= SlideToShow) {
        // Если это первые слайды, переходим к клонированным последним
        slides.style.transition = 'none';
        goToSlide((slides.children.length - 4));
        // Принудительно вызываем перерисовку
        setTimeout(() => {
            slides.style.transition = 'transform 0.5s ease-in-out';
            goToSlide(slides.children.length - 5);
        }, 0);
        console.log('ifPrev ',currentIndex);
    } else {
        goToSlide(currentIndex - 1);
        slides.style.transition = 'transform 0.5s ease-in-out';
        console.log(currentIndex);
    }
}

// Обработчики кнопок
btnToForward.addEventListener('click', nextSlide);
btnToBack.addEventListener('click', prevSlide);