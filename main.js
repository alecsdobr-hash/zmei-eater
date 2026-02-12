let square = document.createElement("div");
square.style.width = "100px";
square.style.height = "100px";
square.style.backgroundColor = "red";
square.style.position = "absolute";

square.style.left = "0px";
square.style.top = "60px";
document.body.appendChild(square);

let circle = document.createElement("div");
circle.style.width = "150px";
circle.style.height = "150px";
circle.style.backgroundColor = "blue";
circle.style.borderRadius = "50%";
circle.style.position = "absolute";

circle.style.left = window.innerWidth - 150 + "px";
circle.style.top = "30px";

circle.onSquareCome = function() {
    requestAnimationFrame(function() {
        circle.style.backgroundColor = "green";
    });
    requestAnimationFrame(function() {
        setTimeout(function() {
            circle.style.backgroundColor = "blue";
        }, 500);
    });
};

document.body.appendChild(circle);


function moveSquare() {
    let currentLeft = parseInt(square.style.left);
    if (currentLeft + parseInt(square.style.width)/100 * 5 < parseInt(circle.style.left)) {
        square.style.left = (currentLeft + 5) + "px";
    } else {
        square.style.left = "0px";
        circle.onSquareCome();
    }
    requestAnimationFrame(moveSquare);
}

requestAnimationFrame(moveSquare);
