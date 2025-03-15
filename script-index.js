function navigateToHomePage() {
    window.location.href = "home.html";
}

function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("heart");
    document.querySelector(".love-animation").appendChild(heart);

    const size = Math.random() * 20 + 10;
    heart.style.top = Math.random() * 100 + "vh";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = size + "px";
    heart.style.animationDuration = Math.random() * 3 + 10 + "s";
    
    setTimeout(() => {
        heart.remove();
    }, 4000);
}
setInterval(createHeart, 300);