const buy1 = document.querySelector("#buy1");
const buy2 = document.querySelector("#buy2");
const buy3 = document.querySelector("#buy3");
const buy4 = document.querySelector("#buy4");
const buy5 = document.querySelector("#buy5");
const buy6 = document.querySelector("#buy6");
const buy7 = document.querySelector("#buy7");
const buy8 = document.querySelector("#buy8");

const stojnost = document.querySelector("#love");

import { getLoveCount } from "/Yana/index.js";

const loveCount = getLoveCount();
stojnost.textContent = '${loveCount}';
