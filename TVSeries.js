const api_key="b7fcfbaad8009a0bdad2f055fbc67751";
const BASE_API=`https://api.themoviedb.org/3/`;
  
let Discover_API=`${BASE_API}discover/tv?api_key=${api_key}&language=en-US&&sort_by=popularity.desc&include_adult=false&include_video=false`

let morePagesAvailable = true;
// let URL=`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${Pages}&with_genre=&with_watch_monetization_types=flatrate`
async function fetchMetaData(Full_API_URL) {

let total_pages=0;
let Pages=1;



// Sdata.forEach(e => allData.unshift(e));

while(morePagesAvailable){
    Pages++;
    
    // const response = await fetch(Full_API_URL+'&page='+Pages)
    // let data = await response.json();
    const response = await fetch(Discover_API+'&page='+Pages)
    let data = await response.json();

    total_pages=data.total_pages

        data.results.forEach(element=>{
       
            let carouselItems=document.createElement('div');
           
            
           carouselItems.setAttribute('href',`TVSerie.html?id=`+element.id)
               carouselItems.classList.add('card-film');
            if(element.backdrop_path!=null){
               
       
               carouselItems.innerHTML=` <img src="https://image.tmdb.org/t/p/w500/${element.poster_path}" alt="${element.name}">
                <p class="film-title">${element.name}</p>`
             
                
                
                
            }
            document.querySelector('.films').appendChild(carouselItems)
            
       });
       
       
       morePagesAvailable = Pages < total_pages;
    }
}
Movies()
async function Movies(){
    let total_pages=0;
let Pages=1;

console.log(Discover_API)

// Sdata.forEach(e => allData.unshift(e));

while(morePagesAvailable){
    Pages++;
    
    // const response = await fetch(Full_API_URL+'&page='+Pages)
    // let data = await response.json();
    const response = await fetch(Discover_API+'&page='+Pages)
    let data = await response.json();
    total_pages=data.total_pages
   
        data.results.forEach(element=>{
       
            let carouselItems=document.createElement('div');
           
            
           carouselItems.setAttribute('href',`TVSerie.html?id=`+element.id)
               carouselItems.classList.add('card-film');
            if(element.backdrop_path!=null){
               
       
               carouselItems.innerHTML=` <img src="https://image.tmdb.org/t/p/w500/${element.poster_path}" alt="${element.name}">
                <p class="film-title">${element.name}</p>
                <button id="${element.id}"class="LoveItem"><i class="fa-regular fa-heart"></i></button>
                `
             
                
                
                
            }
            document.querySelector('.films').appendChild(carouselItems)
            
       });
       
       
       morePagesAvailable = Pages < total_pages;
    }
}
// $( document ).ready(fetchMetaData(Discover_API) )
    // fetchMetaData(Discover_API) 

           //////////////////////////////// Get Genres List \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=en-US`)
    .then(resp=>resp.json())
    .then(data=>{
    // data.genres.forEach(data=>console.log(data))
    data.genres.forEach(element=>{
        let GenreSelect=document.querySelector('.Genre');
    GenreSelect.innerHTML+=` <option value=${element.id}>${element.name}</option>`
    }
        )})
document.querySelector('.Genre').addEventListener('change',(e)=>{
    let GenreID=e.target.value;
    console.log(GenreID)
    Discover_API=Discover_API+'&with_genres='+GenreID
    document.querySelector('.films').innerHTML=``
    fetchMetaData(Discover_API) 
});
const params = new URLSearchParams(window.location.search)
        let Var= params.get("Var");
        if(Var){
        switch(Var) {
            case 'views':
            console.log(Var)
              break;
            case 'rating':
              console.log(Var)
              break;
              case 'recents':
              console.log(Var)
                break;
          }
        }
