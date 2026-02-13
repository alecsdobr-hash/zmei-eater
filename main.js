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
let grumpyMounth = document.getElementById("grumpyMounthImg");

let weights = [1, 1, 1];
let currentFood = 1;

function weightedRandom(weights) {

    const totalWeight = weights.reduce((sum, w) => sum + w, 0);
    
    const random = Math.random() * totalWeight;
    
    let cumulative = 0;
    for (let i = 0; i < weights.length; i++) {
        cumulative += weights[i];
        if (random < cumulative) {
            return i + 1;
        }
    }
    
    return weights.length;
}


function onfoodCome() {
    food.style.opacity = "0";
    food.style.left = "-1000%";
    openMounth.style.opacity = "0";

    let previousFood = currentFood;
    
    if(previousFood == 3){
        grumpyMounth.style.opacity = "1";
    }
    else{
        nyaMounth.style.opacity = "1";
        pleasureEyes.style.opacity = "1";
    }

    weights = weights.map((weight, index) => {
        if (index + 1 === previousFood) { 
            return Math.max(0.1, weight - 0.5);
        } else {
            return weight + Math.random();
        }
    });
    
    currentFood = weightedRandom(weights);
    food.src = `assets/food/${currentFood}.png`;

    setTimeout(function() {
        food.style.opacity = "1";
    }, 700);
    
    setTimeout(function() {
        grumpyMounth.style.opacity = "0";   
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
        food.style.left = currentLeft + (window.innerWidth * 0.005) + "px";
    } else {
        onfoodCome();
    }
    requestAnimationFrame(movefood);
}

requestAnimationFrame(movefood);