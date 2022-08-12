'use strict'




function renderGallery() {
    const imgs = getImgsForDisplay()
    const strHtmls = imgs.map(
        (img) => `<img src="${img.url}" onclick="onImgSelect('${img.id}')"/>`
    )
    document.querySelector('.images-container').innerHTML = strHtmls.join('')
}

// function renderGallery() {
//     let strHtml = ''
//     for (let i = 1; i < 19; i++) {
//         strHtml += `
//         <img onclick="onImgSelect(this)" src="img/gallery/${i}.jpg"/>
//         `
//     }
//     const elGallery = document.querySelector('.gallery-img')
//     elGallery.innerHTML = strHtml
// }

function onImgSelect(id) {
    document.querySelector('.gallery').hidden = true
    document.querySelector('.meme-editor').hidden = false
    createMemeImg(id)
    renderMeme()
}

function onOpenGallery() {
    document.querySelector('.gallery').hidden = false
    document.querySelector('.meme-editor').hidden = true
}