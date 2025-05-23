
const buyButtons = document.querySelectorAll("button[id^='btn']");
const loveDisplay = document.querySelector("#love");

let stojnost = getfromStorage("loveCount") || 0;
loveDisplay.textContent = stojnost;

function getfromStorage(key) {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
}

function updateLoveCount() {
    localStorage.setItem("loveCount", JSON.stringify(stojnost));
    loveDisplay.textContent = stojnost;
}

let achi3 = 0;


document.addEventListener('DOMContentLoaded', () => {
  const order = JSON.parse(localStorage.getItem('stockOrder'));
  const parent = document.querySelector('.shop'); 
  if (order && parent) {
    order.forEach(id => {
      const div = document.getElementById(id);
      if (div) parent.appendChild(div);
    });
  }
});


buyButtons.forEach((button, index) => {
    const itemCosts = [50, 5000, 100000, 30, 40000, 30000, 100, 100000];

    button.addEventListener("click", () => {
        const itemCost = itemCosts[index];
        if (stojnost >= itemCost) {
            stojnost -= itemCost;
            achi3 = 1;
            localStorage.setItem("achi3", JSON.stringify(achi3));
            updateLoveCount();
             const stock1 = button.closest('.stock');
             if (stock1 && stock1.parentNode) {
              stock1.parentNode.appendChild(stock1);

              button.textContent = "Bought";
              button.disabled = true;
              button.style.backgroundColor = "#8d7566";
              button.style.color = "white";
              button.style.cursor = "not-allowed";

              const allStocks = Array.from(stock1.parentNode.querySelectorAll('.stock'));
              const order = allStocks.map(div => div.id); 
              localStorage.setItem('stockOrder', JSON.stringify(order));
          }

        } else {
            alert("You do not have enough love to buy this item!");
        }
    });
});

buyButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        if(index === 0) buyItem1();
        else if(index === 1) buyItem2();
        else if(index === 2) buyItem3();
        else if(index === 3) buyItem4();
        else if(index === 4) buyItem5();
        else if(index === 5) buyItem6();
        else if(index === 6) buyItem7();
        else if(index === 7) buyItem8();
    });
});

function addMultiplier(value) {
    let multipliers = JSON.parse(localStorage.getItem('multipliers')) || [];
    multipliers.push(value);
    localStorage.setItem('multipliers', JSON.stringify(multipliers));
}

function addTemporaryMultiplier(value, durationMs) {
    const expires = Date.now() + durationMs;
    localStorage.setItem('tempMultiplier', JSON.stringify({ value, expires }));
}

export function buyItem1() {
  addMultiplier(0.05);
}

export function buyItem2() {
  addMultiplier(0.15);
}

export function buyItem3() {
  addMultiplier(0.5);
}

export function buyItem4() {
  addTemporaryMultiplier(0.5, 60000);
}

export function buyItem5() {
  addTemporaryMultiplier(2, 60000);
}

export function buyItem6() {
  addTemporaryMultiplier(5, 60000);
}

export function buyItem7() {
   localStorage.setItem('autoclickerEnabled', 'true');
  localStorage.setItem('autoclickerInterval', 1000);
}

export function buyItem8() {
  localStorage.setItem('autoclickerEnabled', 'true');
  localStorage.setItem('autoclickerInterval', 500);
}