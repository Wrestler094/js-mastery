function playSound(evt) {
    const audio = document.querySelector(`audio[data-key="${evt.key}"]`);
    const key = document.querySelector(`div[data-key="${evt.key}"]`);

    playAndAnimate(audio, key);
}

function playSoundClick() {
    const audio = document.querySelector(`audio[data-key="${this.dataset.key}"]`);
    const key = document.querySelector(`div[data-key="${this.dataset.key}"]`);

    playAndAnimate(audio, key);
}

function playAndAnimate(audio, key) {
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

function removeTransition(evt) {
    if (evt.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
keys.forEach(key => key.addEventListener('click', playSoundClick));
window.addEventListener('keydown', playSound);