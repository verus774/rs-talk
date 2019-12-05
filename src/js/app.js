import {getImgUrl, drawImg} from './canvas.js';

const canvas = document.querySelector('#mainCanvas');
const ctx = canvas.getContext('2d');
const {width, height} = canvas;
const loadForm = document.querySelector('#loadForm');
const dataUrl = localStorage.getItem('canvas');

if (dataUrl) {
    drawImg(ctx, dataUrl, {width, height});
}

loadForm.addEventListener('submit', evt => {
    evt.preventDefault();

    const {value} = evt.target.elements[0];
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    getImgUrl(value).then(imgUrl => {
        drawImg(ctx, imgUrl, {width, height});
    });
});

window.addEventListener('beforeunload', () => {
    localStorage.setItem('canvas', canvas.toDataURL());
});
