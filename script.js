const loadingScreen = document.getElementById('loading-screen');
const WHITE_KEYS = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', '=']
const BLACK_KEYS = ['w', 'e', 't', 'y', 'u', 'o', 'p']

const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');
const spacebarSound = document.getElementById('spacebar');
const spacebar = document.querySelector('.spacebar');

window.addEventListener('load', function () { //Wait until the page loads...
  loadingScreen.className += " loaderHidden"; //then remove the loading
});

keys.forEach(key => {
  key.addEventListener('click', () => playNote(key))
})


document.addEventListener('keydown', e => {
  if (e.repeat) return
  const key = e.key
  const whiteKeyIndex = WHITE_KEYS.indexOf(key)
  const blackKeyIndex = BLACK_KEYS.indexOf(key)

  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
})

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note);
  noteAudio.currentTime = 0;
  noteAudio.play();
  key.classList.add('active');
  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active');
  })
}

// Spacebar functionality 

spacebarSound.addEventListener('click', () => {
  playVoldy();
  spacebar.classList.add('active');
  spacebarSound.addEventListener('ended', () => {
    spacebar.classList.remove('active');
    })
})
document.addEventListener('keydown', e => {
  if (e.code === 'Space') {
    if (e.repeat) return;
    playVoldy(e);
  }
})

function playVoldy(){
  spacebarSound.play();
    spacebarSound.currentTime = 0; 
    spacebarSound.play();
    spacebar.classList.add('active');
    spacebarSound.addEventListener('ended', () => {
      spacebar.classList.remove('active');
      })
    }
