'use strict'

function onInit() {
    closeMemeEditor()
    renderGallery()
}

function renderGallery() {
    const elImagesContainer = document.querySelector('.images-container')
    const images = getImages()
    const imagesStr = images.map(img => `<img src="${img.url}" onclick="onImgSelect('${img.id}')" />`)
    elImagesContainer.innerHTML = imagesStr.join('')
}

function onImgSelect(imgId) {
    setInitialMeme(imgId)
    openMemeEditor()
}

function openMenu() {
    document.body.classList.add('menu-opened')
}

function closeMenu() {
    document.body.classList.remove('menu-opened')
}

function onOpenSavedMemes() {
    renderSavedMemes()
}

function renderSavedMemes() {
    const savedMemes = getSavedMemes()
    const elImagesContainer = document.querySelector('.images-container')
}

function onOpenGallery() {
    closeMemeEditor()
    closeMenu()
    renderGallery()
}

