const cuteMsg1 = document.getElementById("cutemsg1");
const custMsg3 = document.getElementById("cutemsg3");
const cuteMsg4 = document.getAnimations("cutemsg4");
const heroImg = document.getElementById("homeHero");
let homeIntroImg = document.querySelectorAll('.home-intro-img');
let justifier = document.querySelectorAll('.justifier');
a = 0;
b = 0;
c = 0;
document.getElementById("cutemsg1").addEventListener("click", () => {
    changeTextMsg1();
});
function changeTextMsg1(){
    msg = "";
    console.log(a);
    a++;
    a %= 7;
    switch(a){
        case 0:
            msg = "Ở đây có nhiều sự đáng yêu";
            break;
        case 1:
            msg = "Đúng chỗ rùi!!!";
            break;
        case 2:
            msg = "Website này anh làm dthw hok 😍";
            break;
        case 3:
            msg = "Bíc dthw ùi hihi😽😽😽😽";
            break;
        case 4:
            msg = "Anh yêu bé Phương của anh nhìu lắm";
            break;
        case 5:
            msg = "Anh cảm ơn em bé của anh nhìu nhennnnn";
            break;
        case 6:
            msg = "💖💖💖💖";
            break;
    }
    cuteMsg1.innerHTML= msg;
}
document.getElementById("cutemsg3").addEventListener("click", () => {
    changeImage();
});

function changeImage(){
    b++;
    b %= 5;
    switch(b){
        case 0:
            heroImg.style.background = "url('./assets/graphics assets/Miki/we-kyyeu.jpeg')";
            break;
        case 1:
            heroImg.style.background = "url('./assets/graphics assets/Baby/miki1.jpeg')";
            break;
        case 2:
            heroImg.style.background = "url('./assets/graphics assets/Baby/miki2.jpeg')";
            break;
        case 3:
            heroImg.style.background = "url('./assets/graphics assets/Baby/miki3.jpeg')";
            break;
        case 4:
            heroImg.style.background = "url('./assets/graphics assets/Baby/miki4.jpeg')";
            break;
    }
    heroImg.style.backgroundSize = "cover";
}

document.getElementById("cutemsg4").addEventListener("click", () =>{
    changeImage2();
});

function changeImage2(){
    c++;
    c %= 2;
    switch(c){
        case 0:
            heroImg.style.background = "url('./assets/graphics assets/Miki/we-kyyeu.jpeg')";
            break;
        case 1:
            heroImg.style.background = "url('./assets/graphics assets/Miki/afterhaircut.jpeg')";
            break;
    }
    heroImg.style.backgroundSize = "cover";
}

document.getElementById("cutemsg2").addEventListener("click", () => {
    createHeart();
});

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";

    // Random position
    heart.style.left = Math.random() * 100 + "vw";
    
    // Random size
    const size = Math.random() * 20 + 20;
    heart.style.fontSize = size + "px";

    // Random animation duration
    const duration = Math.random() * 2 + 3;
    heart.style.animationDuration = duration + "s";

    document.body.appendChild(heart);

    // Remove heart after animation
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}
function revealItems(){
    let windowHeight = window.innerHeight;

    homeIntroImg.forEach(img => {
        let position = img.getBoundingClientRect().top;
        if (position < windowHeight - 100) {
            console.log("class added");
            img.classList.add('visible');
        }
    });

    justifier.forEach(justify =>{
        let pos = justify.getBoundingClientRect().top;
        if (pos < windowHeight - 100) {
            justify.classList.add('visible');
        }
    })
}

window.addEventListener('scroll', revealItems);
revealItems();
