const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');
const currTime = document.querySelector('#currTime');
const durTime = document.querySelector('#durTime');

const checkbox = document.querySelector('.checkbox');
const list = document.getElementById('Songs');

// song titles
const songs = ['hey', 'summer', 'ukulele'];

// default song index
let songIndex = songs.length - 1;

// display availabe songs
songs.forEach(item => {
    let li = document.createElement('li');
    li.innerText = item;
    li.addEventListener('click', () => {
        songIndex = songs.indexOf(item);
        loadSong(item);
        playSong();
    });
    list.appendChild(li);
});

// changes the audio,title and image of song.
function loadSong(song) {
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpg`;
}

// This loads the song
loadSong(songs[songIndex]);

// adding play class in the musicContainer class div
function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');

    audio.play();
}

// adding play class in the musicContainer class div
function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');

    audio.pause();
}

function playPause() {
    const isPlaying = musicContainer.classList.contains('play')
    if (isPlaying) {
        pauseSong();
    }
    else {
        playSong();
    }
}

function prevSong() {
    songIndex = songIndex - 1;
    if (songIndex < 0) songIndex = songs.length - 1;
    loadSong(songs[songIndex]);

    // if the previous song was playing then keep playing else pause
    const isPlaying = musicContainer.classList.contains('play')
    isPlaying ? playSong() : pauseSong;
}

function nextSong() {
    songIndex = songIndex + 1;
    if (songIndex >= songs.length) songIndex = 0;
    loadSong(songs[songIndex]);

    // if the previous song was playing then keep playing else pause
    const isPlaying = musicContainer.classList.contains('play')
    isPlaying ? playSong() : pauseSong;
}

function updateProgress() {
    const ct = audio.currentTime; // This gives current time of audio
    const td = audio.duration; // This gives total duration of audio
    const progressPercent = 100 * (ct / td);

    // console.log(progressPercent); // got percentage of song complete

    progress.style.width = `${progressPercent}%`;

}

function setProgress(e) {
    const width = this.clientWidth; // We get total width of progress container
    const clickX = e.offsetX; // We get distance from x axis
    // console.log(clickX);
    // console.log(width);

    const td = audio.duration;
    audio.currentTime = (clickX / width) * td;
}

function autoplay() {
    if (checkbox.checked) {
        nextSong();
    }
    else pauseSong();
}

playBtn.addEventListener('click', playPause);

prevBtn.addEventListener('click', prevSong);

nextBtn.addEventListener('click', nextSong);

audio.addEventListener('timeupdate', updateProgress);

audio.addEventListener('ended', autoplay);

progressContainer.addEventListener('click', setProgress);
