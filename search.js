
let query=''
let search=document.querySelector('.search-input')
search.addEventListener('keyup',(e)=>{
    query=e.target.value
    let URLd=`https://api.themoviedb.org/3/search/company?api_key=${api_key}&query=${query}&page=1`
console.log(e.target.value)
if(e.target.value!=''){
fetch(URLd)
.then(resp=>resp.json())
.then(data=>{
    let All=[]
    data.results.forEach(element => {
        All.push(element) })
        All=All.slice(0, 3)

         All.forEach(elements => {
            console.log(elements)
let SearchResult = document.querySelector('.SearchResult')
let carouselItems=document.createElement('a');
carouselItems.setAttribute('href',`movie.html?id=`+elements.id)
carouselItems.classList.add('card-film-flex');
carouselItems.innerHTML=` <img src="https://image.tmdb.org/t/p/original/${elements.backdrop_path}" alt="${elements.name}">
<p class="film-title">${elements.title}</p>
`
SearchResult.appendChild(carouselItems)
})
})
if(e.key==='Enter'){
    window.location.href=`movies.html?Search=${e.target.value}`
}
}else{
    let SearchResult = document.querySelector('.SearchResult')
SearchResult.innerHTML=''
}


})