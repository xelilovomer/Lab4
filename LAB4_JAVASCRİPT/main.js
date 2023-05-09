let number = prompt("Zəhmət olmasa rəqəm daxil edin: ");

if (isNaN(number)) {
    alert("Siz düzgün rəqəm daxil etmədiniz!");
} else {
    if (number % 2 == 0 && number >= 0) {
        alert("Rəqəm cüt və müsbətdir.");
    } else if (number % 2 == 0 && number < 0) {
        alert("Rəqəm cüt və mənfidir.");
    } else if (number % 2 != 0 && number >= 0) {
        alert("Rəqəm tək və müsbətdir.");
    } else {
        alert("Rəqəm tək və mənfidir.");
    }
}
