function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; //stop the function
    audio.currentTime = 0; //rewind to the start
    audio.play();	//playa audio
    key.classList.add('playing'); //add a class
}

 function removeTransition(e){
	if (e.propertyName !== 'transform') return; //skip if it is not a transform
	this.classList.remove('playing'); // remove the class
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);