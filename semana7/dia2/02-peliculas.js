const dibujarPeliculas = ({ results }) => {
 results.forEach((peli) => {
  $("#contenedor-peliculas").append(`
       <div class="carousel-cell">
        <div class="card">
         <img src="https://image.tmdb.org/t/p/w500${peli.poster_path}" alt="" class="card-img-top">
         <div class="card-body">
          <h4 class="card-title">${peli.original_title}</h4>
          <p class="card-text">
           ${peli.overview}
          </p>
         </div>
        </div>
       </div>`);
 });

 $('#contenedor-peliculas').flickity({
  // options
  cellAlign: 'left',
  contain: true
 });
}

const traerPeliculas = () => {
 let endpoint = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a3175a9a67092b2e56ed90e341fd9bc9";
 fetch(endpoint, { method: 'GET', body: null })
  .then((response) => {
   response.json().then((data) => {
    dibujarPeliculas(data);
    console.log(data);
    
   })
  })
}

traerPeliculas();
console.log("Adios");
