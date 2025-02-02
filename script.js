const resultText = document.getElementById("textId");
const textLength = resultText.innerText.length;
console.log(`1. Количество символов в тексте: ${textLength}`);


const result = resultText.innerText.replace(/;/g, '\n');
console.log(`2. Текст с переносами строк: \n${result}`);




