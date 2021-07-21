const text = document.querySelector('p');
const img = document.querySelector('.intro-img')

const scrollEffect = (element) => {
    const screenPosition = window.innerHeight / 1.6;
    const elementPosition = element.getBoundingClientRect().top;

    if (elementPosition < screenPosition) {
        element.classList.add('appear');
    }
    console.log(`window : ${screenPosition}`);
    console.log(`element : ${elementPosition}`)
}

window.addEventListener('scroll', scrollEffect.bind(this, text));
window.addEventListener('scroll', scrollEffect.bind(this, img));

