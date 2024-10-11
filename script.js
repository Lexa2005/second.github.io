// script.js
const input = document.getElementById("input");
const canvas = document.getElementById("graph");
const ctx = canvas.getContext("2d");

const appendToInput = value => input.value += value;
const clearInput = () => input.value = '';

const calculate = () => {
    try {
        const result = eval(input.value);
        input.value = result;
        drawGraph(input.value);
    } catch {
        clearInput();
    }
};

const drawGraph = expression => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    
    for (let x = -200; x <= 200; x++) {
        const y = eval(expression.replace(/x/g, x / 20));
        ctx.lineTo(x + canvas.width / 2, -y * 20 + canvas.height / 2);
    }
    
    ctx.strokeStyle = "blue";
    ctx.stroke();
};
