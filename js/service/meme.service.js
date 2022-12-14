'use strict'

const STORAGE_KEY = 'memesDB'

const gDefaultLines = [{
    text: 'Enter your line',
    size: null,
    align: 'center',
    borderColor: 'black',
    fillColor: 'white',
    height: null
},
{
    text: 'Enter your line',
    size: null,
    align: 'center',
    borderColor: 'black',
    fillColor: 'white',
    height: null
}]

var gMeme = {
    selectedImgId: null,
    selectedLineIdx: 0,
    lines: JSON.parse(JSON.stringify(gDefaultLines))
}

var gSavedMemes = getSavedMemes()

function setLineText(text) {
    const currLine = gMeme.lines[gMeme.selectedLineIdx]
    currLine.text = text
}

function setInitialMeme(imgId) {
    gMeme.selectedImgId = imgId
    gMeme.selectedLineIdx = 0
    gMeme.lines = JSON.parse(JSON.stringify(gDefaultLines))
}

function setBorderColor(color) {
    const currLine = gMeme.lines[gMeme.selectedLineIdx]
    currLine.borderColor = color
}

function setFillColor(color) {
    const currLine = gMeme.lines[gMeme.selectedLineIdx]
    currLine.fillColor = color
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

function alignLeft() {
    const currLine = gMeme.lines[gMeme.selectedLineIdx]
    currLine.align = 'left'
}

function alignRight() {
    const currLine = gMeme.lines[gMeme.selectedLineIdx]
    currLine.align = 'right'
}

function centerText() {
    const currLine = gMeme.lines[gMeme.selectedLineIdx]
    currLine.align = 'center'
}

function addLine() {
    const newLine = _createNewLine()
    const linesLength = gMeme.lines.length
    let newLineIdx
    if (!linesLength) {
        gMeme.lines.push(newLine)
        newLineIdx = 0
    } else if (linesLength === 1 || linesLength === 2) {
        if (linesLength === 1 && gMeme.lines[0].height > 70) newLineIdx = 0
        else newLineIdx = 1
        gMeme.lines.splice(newLineIdx, 0, newLine)
    } else {
        newLineIdx = linesLength - 2
        gMeme.lines.splice(newLineIdx, 0, newLine)
    }
    gMeme.selectedLineIdx = newLineIdx
}

function removeLine() {
    gMeme.lines.splice(gMeme.selectedLineIdx, 1)
    switchLines()
}

function setLineHeight(lineIdx, lineHeight) {
    const currLine = gMeme.lines[lineIdx]
    currLine.height = lineHeight
}

function moveLineUp() {
    const currLine = gMeme.lines[gMeme.selectedLineIdx]
    currLine.height = currLine.height - 15
}

function moveLineDown() {
    const currLine = gMeme.lines[gMeme.selectedLineIdx]
    currLine.height = currLine.height + 15
}

function getMeme() {
    return gMeme
}

function saveMeme() {
    const memeToSave = JSON.parse(JSON.stringify(gMeme))
    gSavedMemes.push(memeToSave)
    saveToStorage(STORAGE_KEY, gSavedMemes)
}

function setTextSize(defaultTextSize) {
    gMeme.lines.forEach(line => line.size = defaultTextSize)
}

function _createNewLine() {
    return gDefaultLines[0]
}

function getSavedMemes() {
    let savedMemes = loadFromStorage(STORAGE_KEY)
    if (!savedMemes || !savedMemes.length) savedMemes = []
    return savedMemes
}
