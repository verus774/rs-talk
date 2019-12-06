export function drawImg(context, url, {width, height}) {
    const img = new Image(width, height);
    img.crossOrigin = 'anonimous';

    img.addEventListener('load', ev => {
        context.drawImage(ev.target, 0, 0);
    });

    img.src = url;
}
