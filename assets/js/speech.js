var keepOn = false;
if (!speechSynthesis.speaking) {
    speechSynthesis.cancel();
    speechSynthesis.speaking = false;
}
// muteSpeech.style.display = 'none';
readAloud.addEventListener("click", () => {
    keepOn = true;
    readAloud.style.display = 'none';
    muteSpeech.style.display = 'block';
    let msg = new SpeechSynthesisUtterance();
    msg.text = "you have turned on read aloud for this page, click on any text element and I will start reading for you";
    let voices = speechSynthesis.getVoices();
    msg.voice = voices[0];
    let tags = document.querySelectorAll('p,h1,h2,h3,h4,h5,h6,.card-body,.msg-header,.accordion-title,div.card-deck');
    speechSynthesis.speak(msg)
    if (keepOn) {
        tags.forEach((tag) => {
            tag.addEventListener('click', (e) => {
                if (speechSynthesis.speaking) {
                    speechSynthesis.cancel();
                    speechSynthesis.speaking = false;
                } else {
                    if (keepOn) {

                        console.log(tag)
                        msg.text = e.target.innerText;
                        if (tag.classList.contains("card-deck")) {}else{
                            tag.style.backgroundColor = "#fc466ac9";
                            tag.style.color = "#fff";
                        }
                        speechSynthesis.speak(msg);
                        let interval = setInterval(() => {
                            if (!speechSynthesis.speaking) {
                                tag.style.removeProperty('background-color');
                                tag.style.color = "#000";
                                clearInterval(interval);
                            }
                        }, 100);
                    }
                }
            });
        });
    }
})
muteSpeech.addEventListener("click", () => {
    keepOn = false;
    speechSynthesis.cancel();
    speechSynthesis.speaking = false;
    readAloud.style.display = 'block';
    muteSpeech.style.display = 'none';
})