'use strict'


let gElImg
let gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

const gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'Enter your line',
            fontSize: 30,
            align: 'top',
            color: 'black'
        },
        {
            txt: 'Enter your line',
            fontSize: 30,
            align: 'bottom',
            color: 'black'
        }
    ]
}

function getMeme() {
	return gMeme
}

function getImgs() {
	return gImgs
}

function getElImg() {
	return gElImg
}

function createMemeImg(id) {
	const img = gImgs.find((img) => img.id === id)
	const elImg = new Image()
	elImg.src = img.url
	gElImg = elImg
	gMeme.selectedImgId = id
}

function setLineTxt(txt) {
	gMeme.lines[gMeme.selectedLineIdx].txt = txt
}

function setTextColor(color) {
	gMeme.lines[gMeme.selectedLineIdx].color = color
}

function increaseFontSize() {
	const currLine = gMeme.lines[gMeme.selectedLineIdx]
	currLine.size++
}

function decreaseFontSize() {
	const currLine = gMeme.lines[gMeme.selectedLineIdx]
	currLine.size--
}

function switchLines() {
	gMeme.selectedLineIdx++
	if (gMeme.selectedLineIdx > gMeme.lines.length - 1) gMeme.selectedLineIdx = 0
}

