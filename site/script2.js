const title = document.querySelector('#title')
const cover = document.querySelector('#cover')
const audio = document.querySelector('#audio')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const progress = document.querySelector('.progress')
const musicContainer = document.querySelector('.music-container')
const progressContainer = document.querySelector('.progress-container')

// Song titles
const songs = ['hey', 'summer', 'ukulele']

// Keep track of songs
let songIndex = 2

// Initially load song into document
loadSong(songs[songIndex])

// Update song details
function loadSong(song) {
  title.innerText = song;
  audio.src = 'music/${song}.mp3'
  cover.src = 'images/${song}.jpg'
}
