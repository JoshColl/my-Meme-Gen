'use strict'

let gElCanvas
let gCtx




function onInit() {
    gElCanvas = document.getElementById('meme-canvas')
    console.log(gElCanvas);
    gCtx = gElCanvas.getContext('2d')
    renderMeme()
}

function renderMeme() {
    const meme = getMeme()
    const memeTxt = meme.lines[0].txt
    renderImg()

    drawText(memeTxt, 60, 60)
}

function drawText(txt, x, y) {
    gCtx.beginPath()
    gCtx.textBaseline = 'middle';
    gCtx.textAlign = 'center';
    gCtx.lineWidth = 1;
    gCtx.font = '40px david';
    gCtx.fillStyle = 'yellow';
    gCtx.fillText(txt, x, y);
    gCtx.strokeStyle = 'green';
    gCtx.strokeText(txt, x, y);
    gCtx.closePath()
}

function renderImg() {
    const elImg = getImg()
    elImg.onload = () =>
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
}

function onSetLineTxt(ev, elForm) {
    // ev.preventDefault()
    // ev.stopPropagation()
    const memeLine = elForm.querySelector('input').value
    console.log(memeLine)
    setLineTxt(memeLine)
    renderMeme()
}