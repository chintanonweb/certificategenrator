const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const nameInput = document.getElementById('name')
const downloadBtn = document.getElementById('download-btn')

const image = new Image()
image.src = 'certificate.png'
image.onload = function () {
	drawImage()
}

function drawImage() {
	// ctx.clearRect(0, 0, canvas.width, canvas.height)
	var ratio = image.naturalWidth / image.naturalHeight;
	var width = canvas.width;
	var height = width / ratio;
	ctx.drawImage(image, 0, 0, width, height);
	// ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
	ctx.font = '40px monotype corsiva'
	ctx.fillStyle = '#D5AC51'
	ctx.fillText(nameInput.value, 120, 200)
}

nameInput.addEventListener('input', function () {
	drawImage()
})

downloadBtn.addEventListener('click', function () {
	downloadBtn.href = canvas.toDataURL('image/jpg')
	downloadBtn.download = 'Certificate - ' + nameInput.value
})