'use strict'

let gElCanvas
let gCtx



function onInit() {
	gElCanvas = document.getElementById('meme-canvas')
	gCtx = gElCanvas.getContext('2d')
	renderGallery()
}

function renderMeme() {
	const meme = getMeme()
	const elImg = getElImg()
	drawImg(elImg)
	drawText(meme)
}

function drawText(meme) {
	const txtLine = meme.lines[meme.selectedLineIdx]
	gCtx.beginPath()
	gCtx.textBaseline = 'center'
	gCtx.textAlign = txtLine.align
	gCtx.lineWidth = 0.5
	gCtx.font = `${txtLine.size}px Impact`
	gCtx.fillStyle = txtLine.color
	gCtx.fillText(txtLine.txt, 0, 50 * (meme.selectedLineIdx + 1))
	gCtx.strokeStyle = 'black'
	gCtx.strokeText(txtLine.txt, 0, 50 * (meme.selectedLineIdx + 1))
	gCtx.closePath()
}

function drawImg(elImg) {
	elImg.onload = () =>
		gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
}

function onSetLineTxt(txt) {
	setLineTxt(txt)
	renderMeme()
}

function onSetTextColor(color) {
	setTextColor(color)
	renderMeme()
}

function onIncreaseFontSize() {
	increaseFontSize()
	renderMeme()
}

function onDecreaseFontSize() {
	decreaseFontSize()
	renderMeme()
}

function onSwitchLine() {
	switchLines()
	renderMeme()
	const meme = getMeme()
	const selectedLine = meme.lines[meme.selectedLineIdx]
	const elTextInput = document.querySelector('input[class="txt-input"]')
	elTextInput.value = selectedLine.text
}