const btn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');

btn.addEventListener('click', ()=>{
    if(!btn.classList.contains('slide')){
        video.pause();
        return btn.classList.add('slide');
    }
    video.play();
    btn.classList.remove('slide');
});

const preloader = document.querySelector('.preloader');

window.addEventListener('load', (e)=>{
    preloader.classList.add('hide-preloader');
})