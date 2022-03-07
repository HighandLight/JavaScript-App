const vertical = document.querySelector('.vertical');
const horozontal = document.querySelector('.horozontal');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;

    console.log(`${event.x} ${event.y}`);

    vertical.style.left = `${x}px`;  //vertical 선 ㅁ우스 따라다님.
    horozontal.style.top = `${y}px`;  //horozontal 선 ㅁ우스 따라다님.
    target.style.left = `${x}px`;
    target.style.top = `${y}px`; 
    tag.style.left = `${x}px`;
    tag.style.top = `${y}px`; 

    tag.innerHTML = `${x}px, ${y}px`;
});