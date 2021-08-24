const hTriangulo = (a1, a2, b) => {
  if (a1 === a2 && b !== a1 && b <= a1 + a2) {
    return `La altura del triangulo es ${Math.sqrt(a1 * a2 - (b / 2) ** 2)}`;
  }
  return "Los valores que introduciste no pertenecen a un triangulo isóceles";
};

console.log(hTriangulo(8, 8, 17));
