const totalFiguritas = 550; 
const album = document.querySelector("#album"); 
const faltanTexto = document.querySelector("#faltan"); 

let figuritasMarcadas = JSON.parse(localStorage.getItem("figuritas")) || [];


for (let i = 1; i <= totalFiguritas; i++) {
  const circulo = document.createElement("div");
  circulo.classList.add("figurita");
  circulo.textContent = i;

  if (figuritasMarcadas.includes(i)) {
    circulo.classList.add("marcada");
  }


  circulo.addEventListener("click", () => {

  if (figuritasMarcadas.includes(i)) {
      figuritasMarcadas = figuritasMarcadas.filter(num => num !== i);
      circulo.classList.remove("marcada");
    } else {
      figuritasMarcadas.push(i);
      circulo.classList.add("marcada");
    }

    localStorage.setItem("figuritas", JSON.stringify(figuritasMarcadas));

    actualizarFaltan();
  });

  album.appendChild(circulo);
}


function actualizarFaltan() {
  const faltan = totalFiguritas - figuritasMarcadas.length;
  faltanTexto.textContent = `Faltan ${faltan} figuritas para completar el album.`;
}
   actualizarFaltan();
