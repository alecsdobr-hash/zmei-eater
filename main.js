let food = document.createElement("img");
food.style.width = "5%";
food.style.height = "5%";
//food.style.backgroundColor = "red";
food.style.position = "absolute";
food.style.left = "0px";
food.style.top = "51%";
food.style.zIndex = "1";
food.src = "assets/food/1.png";
document.body.appendChild(food);

let openMounth = document.getElementById("openMouthImg");
let nyaMounth = document.getElementById("nyaMouthImg");
let pleasureEyes = document.getElementById("pleasureEyesImg");

function onfoodCome() {
    food.style.opacity = "0";
    openMounth.style.opacity = "0";
    nyaMounth.style.opacity = "1";
    pleasureEyes.style.opacity = "1";
    setTimeout(function() {
        food.style.left = "-100%";
        food.style.opacity = "1";
    }, 700);
    setTimeout(function() {
        nyaMounth.style.opacity = "0";
        pleasureEyes.style.opacity = "0";
    }, 1400);
}

function movefood() {
    let currentLeft = parseInt(food.style.left);
    
    let foodRight = currentLeft + parseInt(food.style.width) * 0.1;
    let openMounthStyles = getComputedStyle(openMounth);
    let openMounthLeft = parseInt(openMounthStyles.left) + parseInt(openMounthStyles.width) * 0.45;
    let closer = openMounthLeft - window.innerWidth * 0.15;
    
    if (foodRight < openMounthLeft) {
        if (foodRight > closer) {
            openMounth.style.opacity = "1";
        }
        food.style.left = (currentLeft + 5) + "px";
    } else {
        setTimeout(function() {
        onfoodCome();
        }, 50);
    }
    requestAnimationFrame(movefood);
}

requestAnimationFrame(movefood);