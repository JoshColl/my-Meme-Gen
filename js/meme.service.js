'use strict'


var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I sometimes eat Falafel',
            size: 20,
            align: 'left',
            color: 'red'
        }
    ]
}

function getMeme() {
    return gMeme
}

function getImg() {
    const elImg = new Image()
    elImg.src = gImgs[0].url
    return elImg
}

function setLineTxt(memeLine) {
    console.log(memeLine)
    gMeme.lines[0].txt = memeLine
}