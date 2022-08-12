'use strict'

let gImgs = []

_createImgs()

function getImgsForDisplay() {
	return gImgs
}

function _createImgs() {
	for (let i = 0; i < 18; i++) {
		const img = _createImg(makeId(5), `img/gallery/${i + 1}.jpg`, [
			'Puki',
			'Muki',
		])
		gImgs.push(img)
	}
}

function _createImg(id, url, keywords) {
	return {
		id,
		url,
		keywords,
	}
}

function makeId(length) {
	let text = ''
	const possible = '0123456789'
	for (let i = 0; i < length; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length))
	}
	return text
}

