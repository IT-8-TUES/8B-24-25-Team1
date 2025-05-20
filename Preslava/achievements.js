const totalclicks =  parseInt(localStorage.getItem("totalClicks") || 0);
const bought = parseInt(localStorage.getItem("achi3") || 0);


const a1 = document.getElementById("1");
const a2 = document.getElementById("2");
const a3 = document.getElementById("3");
const a4 = document.getElementById("4");
const a5 = document.getElementById("5");
const a6 = document.getElementById("6");
const a7 = document.getElementById("7");
const a8 = document.getElementById("8");

if (totalclicks >= 1){
    a1.style.backgroundColor = "#657d75";
    a1.style.color = "white";
    localStorage.setItem('ach1', 'unlocked');
}
if (totalclicks >= 15){
    a2.style.backgroundColor = "#657d75";
    a2.style.color = "white";
    localStorage.setItem('ach2', 'unlocked');
}

if (totalclicks >= 100){
    a3.style.backgroundColor = "#657d75";
    a3.style.color = "white";
    localStorage.setItem('ach3', 'unlocked');
}
if (totalclicks >= 1000){
    a6.style.backgroundColor = "#657d75";
    a6.style.color = "white";
    localStorage.setItem('ach6', 'unlocked');
}

if (bought === 1){
    a5.style.backgroundColor = "#657d75";
    a5.style.color = "white";
    localStorage.setItem('ach5', 'unlocked');
}