var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false) {
    guess = prompt("Есть 7 ячеек по-горизонтали. В трех из них находится мой корабль. Попробуй его потопить :)) Готов? Целься! ОГОООНЬ! (выбери цифру 0-6):");
    if (guess < 0 || guess > 6) {
        alert("Введи число в верном диапазоне от 0 до 6!");
    } else {
        guesses = guesses + 1;

        if (guess == location1 || guess == location2 || guess == location3) {
            alert ("Бооольно!")
            hits = hits + 1;
            if (hits ==3) {
                isSunk = true;
                alert("Иду ко дну!");
            }
        } else {
            alert ("Надень очки, мимо");
        }
    }
}

var stats = "Тебе понадобилось " + guesses + " попыт(-ок/ки), чтобы потопить корабль, " + "так что твоя меткость была равна " + (3/guesses);
alert(stats);
