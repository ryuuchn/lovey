let attempts = 0;

function checkPassword() {
    const password = document.getElementById("password-input").value;
    const message = document.getElementById("wrong-pass");

    if (password === "0204") {
        document.getElementById("password-screen").classList.add("hidden");
        document.getElementById("valentine-screen").classList.remove("hidden");
    } else {
        attempts++;
        if (attempts === 1) {
            message.textContent = "luh, dali-dali lang nyan.";
        } else if (attempts === 2) {
            message.textContent = "kaya mo yan :P";
        } else if (attempts === 3) {
            message.textContent = "clue ba? :P kelan tayo unang nag-usap?";
        }
        message.classList.remove("hidden");
    }
}

function showLetter() {
    goTo('valentine-screen', 'letter-screen');
}

function showPlaylist() {
    stopMusic();
    goTo('letter-screen', 'playlist-screen');
}

function showReasons() {
    goTo('playlist-screen', 'reasons-screen');
}

function showCrying() {
    alert("BAWAL BLEH HAHAHAHHAHA. CLICK MO ULIT YES");
}

function goBack(current, previous) {
    goTo(current, previous);
}

function goTo(current, next) {
    document.getElementById(current).classList.add("hidden");
    document.getElementById(next).classList.remove("hidden");
}

function stopMusic() {
    document.getElementById("bg-music").pause();
}
