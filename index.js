const root = document.querySelector(':root')
const audio = document.getElementById('audio')

const playPauseBtn = document.getElementById('play-pause')

// global variables
const CLICK = 'click'

setTimeout(() => {
	root.style.setProperty('--audio--played', '80%')
}, 5000)

let currentSongIndex = 0

const playSong = () => {
	audio.play()
	playPauseBtn.classList.remove('fa-play')
	playPauseBtn.classList.add('fa-pause')
}

const pauseSong = () => {
	audio.pause()
	playPauseBtn.classList.remove('fa-pause')
	playPauseBtn.classList.add('fa-play')
}

const handlePlayPause = () => {
	if (audio.paused) {
		playSong()
		return true
	}

	pauseSong()
}

playPauseBtn.addEventListener(CLICK, handlePlayPause)
