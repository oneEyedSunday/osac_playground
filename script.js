function onload() {
    const item = document.querySelector('footer > span');

    item.innerHTML = `${new Date().toGMTString()}`;
}

(onload())