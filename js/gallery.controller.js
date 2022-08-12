'use strict'




function renderGallery() {
    const imgs = getImgsForDisplay()
    const strHtmls = imgs.map(
        (img) => `<img src="${img.url}" onclick="onImgSelect('${img.id}')"/>`
    )
    document.querySelector('.images-container').innerHTML = strHtmls.join('')
}

function onImgSelect(id) {
    document.querySelector('.gallery').hidden = true
    document.querySelector('.meme-editor').hidden = false
    createMemeImg(id)
    // setImg(id)
    renderMeme()
}

function onOpenGallery() {
    document.querySelector('.gallery').hidden = false
    document.querySelector('.meme-editor').hidden = true
}