// ----------Square Code----------

// const sideSquare = 5;

// const perimeterSquare = sideSquare * 4;

// const squareArea = sideSquare * sideSquare; //Math.pow(sideSquare, 2)

// console.log(`Los lados del cuadrado miden: ${sideSquare} cm`);

// console.log(`El perímetro del cuadrado es: ${perimeterSquare} cm`);

// console.log(`El área del cuadrado es: ${squareArea} cm^2`);

// ----------Equilateral triangle Code----------

// const sideTriangle1 = 6;

// const sideTriangle2 = 6;

// const baseTriangle = 6;

const createSquareAreaFormula = (area, base, height) => {
  // node creation
  const newDiv = document.createElement("div");
  const newSpanArea = document.createElement("span");
  const newSpanEquals = document.createElement("span");
  const newSpanBase = document.createElement("span");
  const newSpanMultiplication = document.createElement("span");
  const newSpanHeight = document.createElement("span");

  // node values
  const newArea = document.createTextNode(area);
  const newBase = document.createTextNode(base);
  const newHeight = document.createTextNode(height);

  // append new values in nodes
  newSpanArea.appendChild(newArea);
  newSpanEquals.appendChild(document.createTextNode(" = "));
  newSpanBase.appendChild(newBase);
  newSpanMultiplication.appendChild(document.createTextNode(" * "));
  newSpanHeight.appendChild(newHeight);

  // add all childs to the parent component
  newDiv.appendChild(newSpanArea).classList;
  newDiv.appendChild(newSpanEquals);
  newDiv.appendChild(newSpanBase);
  newDiv.appendChild(newSpanMultiplication);
  newDiv.appendChild(newSpanHeight);
  newDiv.classList.add("figure-result-formula__item", "opacity-transition");
  return newDiv;
};

const calculateArea = () => {
  const input = document.getElementById("square-side");
  const value = input.value;
  const squareArea = value * value;
  const base = document.getElementById("base");
  base.innerText = value;
  const height = document.getElementById("height");
  height.innerText = value;
  const formulas = document.getElementById("formulas");
  const newDiv = createSquareAreaFormula("A", value, value);
  formulas.appendChild(newDiv);
  console.log(`El área del cuadrado es: ${squareArea} cm`);
};
