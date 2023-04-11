const whereAreYou = document.getElementById("where-are-you")

let parent = document.getElementById("where-are-you").parentNode;
parent.style.color = 'red';

document.getElementById("first-child-of-child").innerText = 'May I have your attention please?'

const firstChild = parent.firstElementChild;

const primeiroFilho2 = whereAreYou.previousElementSibling;

const textElement = whereAreYou.nextSibling;

const thirdChild = whereAreYou.nextElementSibling;

const thirdChild2 = parent.lastElementChild.previousElementSibling;