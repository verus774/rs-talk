export function getImgUrl(city = 'Minsk') {
    const clientId = '495dce78be509b81738b1a4af45f868ac6c2ade3fc3e6d89dc0fa5bbed473d2f';
    const url = `https://api.unsplash.com/photos/random?query=town,${city}&client_id=${clientId}`;

    return fetch(url)
        .then(res => res.json())
        .then(data => data.urls.small);
}

export function drawImg(context, url, {width, height}) {
    const img = new Image(width, height);
    img.crossOrigin = 'anonimous';

    img.addEventListener('load', ev => {
        context.drawImage(ev.target, 0, 0);
    });

    img.src = url;
}
