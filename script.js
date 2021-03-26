/*var filmes = ["Star wars", "toy story", "interestelar", "ede mim", "marley e eu"]
for (var i = 0; i < filmes.length; i++){
  console.log(filmes[i])
}*/

var listaFilmes = ["https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BZDgzNzdmNjEtMDAwMC00M2FiLTlkMTEtMDE0MDIyNTEwYmJlXkEyXkFqcGdeQXVyMjY3MjUzNDk@._V1_UY268_CR12,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMWJhYWQ3ZTEtYTVkOS00ZmNlLWIxZjYtODZjNTlhMjMzNGM2XkEyXkFqcGdeQXVyNzg5OTk2OA@@._V1_UY268_CR13,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg"]

var listaFilmesNomes = ["Toy story", "Star wars", "Star wars II", "Interestelar"]

for (var i = 0; i < listaFilmes.length; i++){
  document.write("<img src=" + listaFilmes[i] + ">")
}
