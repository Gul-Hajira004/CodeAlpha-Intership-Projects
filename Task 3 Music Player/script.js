
const songs = [
    {
        title: "Song 1",
        src: "song1.mp3",
        cover: "https://images.pexels.com/photos/12085606/pexels-photo-12085606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        title: "Song 2",
        src: "song2.mp3",
        cover: "https://images.pexels.com/photos/15987884/pexels-photo-15987884/free-photo-of-bird-perching-on-twig.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        title: "Song 3",
        src: "song3.mp3",
        cover: "https://images.pexels.com/photos/6518212/pexels-photo-6518212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
];

let currentSongIndex = 0;
const audioPlayer = document.getElementById('audio-player');
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const songTitle = document.getElementById('song-title');
const progressBar = document.getElementById('progress-bar');
const currentTimeElement = document.getElementById('current-time');
const durationElement = document.getElementById('duration');
const albumCover = document.getElementById('album-cover');
const volumeBar = document.getElementById('volume-bar');


function loadSong(index) {
    const song = songs[index];
    songTitle.innerText = song.title;
    audioPlayer.src = song.src;
    albumCover.style.backgroundImage = `url('${song.cover}')`; // Update album cover dynamically
    audioPlayer.load();
}


function playSong() {
    audioPlayer.play();
    playBtn.style.display = 'none';
    pauseBtn.style.display = 'inline';
}


function pauseSong() {
    audioPlayer.pause();
    playBtn.style.display = 'inline';
    pauseBtn.style.display = 'none';
}


function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    playSong();
}


function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    playSong();
}


function updateProgressBar() {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.value = progress;

    const currentMinutes = Math.floor(audioPlayer.currentTime / 60);
    const currentSeconds = Math.floor(audioPlayer.currentTime % 60);
    currentTimeElement.innerText = `${currentMinutes}:${currentSeconds < 10 ? '0' : ''}${currentSeconds}`;

    const durationMinutes = Math.floor(audioPlayer.duration / 60);
    const durationSeconds = Math.floor(audioPlayer.duration % 60);
    durationElement.innerText = `${durationMinutes}:${durationSeconds < 10 ? '0' : ''}${durationSeconds}`;
}


function setProgress() {
    const seekTime = (progressBar.value / 100) * audioPlayer.duration;
    audioPlayer.currentTime = seekTime;
}


function setVolume() {
    audioPlayer.volume = volumeBar.value;
}


playBtn.addEventListener('click', playSong);
pauseBtn.addEventListener('click', pauseSong);
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
audioPlayer.addEventListener('timeupdate', updateProgressBar);
progressBar.addEventListener('input', setProgress);
volumeBar.addEventListener('input', setVolume);


loadSong(currentSongIndex);
