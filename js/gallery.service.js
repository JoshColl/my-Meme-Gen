'use strict'

var gImgs = [{ id: 1, url: 'img/gallery/1.jpg', keywords: ['funny', 'cat'] }]



function _createImg(url, keywords) {
    return {
        id: makeId(),
        url: url,
        keywords: keywords,
    }
}