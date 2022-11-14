
var colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
'#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
'#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
'#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
'#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
'#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
'#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
'#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
'#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
'#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
let pickedColor; 

    ////////////////////////////////  SHOW MOVIES PER CATEGORIES ////////////////////////////////
//     if(window.location.pathname==='/movies.html'){
//     category.map(category=>{
//         let filmCategory=document.createElement('div')
//         filmCategory.classList.add(`film-categories`);

// const { CompareSharp } = require("@mui/icons-material");




    

//         filmCategory.innerHTML=`<h1>${category}</h1><a href="category.html?category=${category}" class="btn btn-primary">See All</a>
//         `
//         let filmcategorydiv2=document.createElement('div')
//         filmcategorydiv2.classList.add('film-category-div-2')
//         filmCategory.setAttribute('id',`${category}`)
//         data.forEach(element => {
// if(element.category===category){
//     filmcategorydiv2.innerHTML+=` 
//       <div class="card-film">
//        <img src="${element.img}" alt="${element.title}">
//        <p class="film-title">${element.title}</p>
//        </div>`
//     }


//     })

//     let filmcategories=document.querySelector('.films');
//     filmCategory.appendChild(filmcategorydiv2)

//     filmcategories.appendChild(filmCategory)
// })}
//////////////////////////////// ****************************************** ////////////////////////////////

  


//     let swipeBtn=document.querySelectorAll('.film-Categories-button');
//     let filmcategorydiv2=document.querySelectorAll('.film-category-div-2')
//     filmcategorydiv2.forEach(filmcategorydiv2=>{
//     swipeBtn.forEach(swipeBtn=>{
//         swipeBtn.addEventListener('click',(e)=>{
//             let id=e.target.parentNode.getAttribute('data-id');
//             if(filmcategorydiv2.id===id){
//                 if(swipeBtn.classList.contains('prev')){
                 
//                     filmcategorydiv2.style.transform="translateX(100%)";
//                 }else{
//                     filmcategorydiv2.style.transform="translateX(-100%)";
//                 }
//             }
           
//         })
//     })
// })

document.addEventListener("click", e => {
  
    let handle
    if (e.target.matches(".film-Categories-button")) {
      handle = e.target
    
    }
    if (e.target.closest(".film-Categories-button")) {
        handle = e.target
  
      }
  if(handle!=null){
    moveCarousel(handle);
  }
  if(e.target.matches(".slider-progress")) {
    let slider=e.target;
    createSliderParts(slider) 
  }
  if (e.target.matches(".slider-progress-row")) {
       let progress=e.target 
 moveCarousebyProgress(progress);

    }  
})

setTimeout(() => {
    document.querySelectorAll(".slider-progress").forEach(calculateProgressBar)
}, 100);
function calculateProgressBar(progressBar){
  
    let slider= progressBar.closest('.film-categories').querySelector(".slider")
    const itemCount=slider.children.length

    const  items_per_screen=parseInt(getComputedStyle(slider).getPropertyValue("--items-per-screen"))
    let numberOfSliderParts=itemCount/items_per_screen
    console.log(numberOfSliderParts)
    for(let i=0; i<numberOfSliderParts;i++){
        let sliderPart=document.createElement('div')
        sliderPart.classList.add("slider-progress-row")
        const  Sindex=parseInt(getComputedStyle(slider).getPropertyValue("--slider-index"))
        sliderPart.setAttribute('id',"R"+i)
        sliderPart.setAttribute('data-id',i)
if(i==Sindex){
    sliderPart.classList.add("active")
}
progressBar.appendChild(sliderPart)

}
}

function moveCarousebyProgress(progress){
    const slider= progress.closest('.film-categories').querySelector(".film-category-div-2")

   let progressId=progress.getAttribute('data-id')
    slider.style.setProperty('--slider-index',progressId)
    let active=progress.closest('.slider-progress').querySelector(`.active`)
active.classList.remove('active')

progress.classList.add('active')
}
function moveCarousel(handle){
    const slider= handle.closest('.film-categories').querySelector(".film-category-div-2")
   const  Sindex=parseInt(getComputedStyle(slider).getPropertyValue("--slider-index"))
   let Max=handle.closest('.film-categories').querySelector('.slider').getAttribute('data-max')
 
    if(handle.classList.contains('prev')||handle.closest('.prev')){
       console.log(Sindex===0)
       if(Sindex===0){
        slider.style.setProperty('--slider-index',Max-1)
        let num=Max-1
        console.log(num)
    const progress= handle.closest('.film-categories').querySelector('.slider-progress')
const progressrow=progress.querySelector(`#R${num}`)
let active=progress.querySelector(`.active`)
active.classList.remove('active')
console.log(progressrow)
        progressrow.classList.add('active')
       }else{
        slider.style.setProperty('--slider-index',Sindex - 1)
        let num=Sindex - 1
    const progress= handle.closest('.film-categories').querySelector('.slider-progress')
const progressrow=progress.querySelector(`#R${num}`)

let active=progress.querySelector(`.active`)
active.classList.remove('active')

        progressrow.classList.add('active')
    }}
    if(handle.classList.contains('next')||handle.closest('.next')){
        console.log(typeof(parseInt(Max)))
if(parseInt(Max-1)===Sindex){
    slider.style.setProperty('--slider-index',0)
    let num=0
    const progress= handle.closest('.film-categories').querySelector('.slider-progress')
const progressrow=progress.querySelector(`#R${num}`)
let active=progress.querySelector(`.active`)
active.classList.remove('active')
progressrow.classList.add('active')
}else{
        console.log(Max)
        
        slider.style.setProperty('--slider-index',Sindex + 1)
        let num=Sindex + 1
        const progress= handle.closest('.film-categories').querySelector('.slider-progress')
    const progressrow=progress.querySelector(`#R${num}`)
    let active=progress.querySelector(`.active`)
active.classList.remove('active')
    progressrow.classList.add('active')}
    }
   
}
// let R0=document.querySelectorAll('#R0');
// R0.forEach(R0 => {
//     if(R0.classList.contains('active')){
// let leftArrow=R0.closest('.film-categories').querySelector('.prev')
// leftArrow.style.opacity = 0;
//     }else{
//         leftArrow.style.opacity = 1;
//     }
    
// });



const api_key="b7fcfbaad8009a0bdad2f055fbc67751";
fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${api_key}&language=en-US&page=1`)
.then(resp=>resp.json())
.then(data=>{
    let All=[]
    data.results.forEach(element => {
        All.push(element) })
        All=All.slice(0, 3)
  
         All.forEach(element => {
        let Rating = document.querySelector('.Rating')
        let carouselItems=document.createElement('div');
        carouselItems.setAttribute('href',`movie.html?id=`+element.id)
        carouselItems.classList.add('card-film-flex');
carouselItems.setAttribute('id',element.id)
carouselItems.innerHTML=` <img src="https://image.tmdb.org/t/p/w500/${element.poster_path}" alt="${element.title}">
<p class="film-title">${element.name}</p>
`
        Rating.appendChild(carouselItems)
         })
})
fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`)
.then(resp=>resp.json())
.then(data=>{
    let All=[]
    data.results.forEach(element => {
        All.push(element) })
        All=All.slice(0, 3)
        
        All.forEach(elements => {
            
            let headerpart2=document.querySelector('.header-part-2')
            let Views = document.querySelector('.Views')
            let carouselItems=document.createElement('div');
            carouselItems.setAttribute('href',`movie.html?id=`+elements.id)
            carouselItems.classList.add('card-film-flex');
        carouselItems.innerHTML=` <img src="https://image.tmdb.org/t/p/w500/${elements.backdrop_path}" alt="${elements.title}">
        <p class="film-title">${elements.title}</p>
        
        `
        
        Views.appendChild(carouselItems)
        headerpart2.appendChild(carouselItems)
})})
fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`)
.then(resp=>resp.json())
.then(data=>{
    let All=[]
    data.results.forEach(element => {
        All.push(element) })
        All=All.slice(0, 3)
        
        All.forEach(elements => {
            
            let headerpart2=document.querySelector('.header-part-2')
            let Views = document.querySelector('.Views')
            let carouselItems=document.createElement('div');
            carouselItems.setAttribute('href',`movie.html?id=`+elements.id)
            carouselItems.classList.add('card-film-flex');
        carouselItems.innerHTML=` <img src="https://image.tmdb.org/t/p/w500/${elements.backdrop_path}" alt="${elements.title}">
        <p class="film-title">${elements.title}</p>
        
        `
        
        Views.appendChild(carouselItems)
     
})})



fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`)
.then(resp=>resp.json())
.then(data=>{
    let All=[]
    data.results.forEach(element => {
        All.push(element) })
        All=All.slice(0, 3)

         All.forEach(elements => {
let Recents = document.querySelector('.Recents')
let carouselItems=document.createElement('a');
carouselItems.setAttribute('href',`movie.html?id=`+elements.id)
carouselItems.classList.add('card-film-flex');
carouselItems.innerHTML=` <img src="https://image.tmdb.org/t/p/w500/${elements.backdrop_path}" alt="${elements.title}">
<p class="film-title">${elements.title}</p>
`

Recents.appendChild(carouselItems)
})})


fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=en-US`)
    .then(resp=>resp.json())
    .then(data=>{

    data.genres.forEach(element=>getMovieByGenre(element,data.genres.length));

    })
    function getMovieByGenre(elements,length){

        // for(var i=0; i<length; i++){
            var i=0
            let film_categories=document.createElement('div');
            film_categories.classList.add('film-categories');
            film_categories.innerHTML=`<div class="firstDiv"><h1>${elements.name}</h1>
            <a href="category.html?category=${elements.id}" > See All &#10230</a>
            </div>
            <div class="slider-progress">
                
            </div>
            <button class="film-Categories-button prev" data-id="D${elements.id}">⟵</button><button class="film-Categories-button next" data-id="D${elements.id}">&#10230</button>
            <div class="film-category-div-2 slider ${elements.name}-div" data-id=${elements.id} id="D${elements.id}">
        
            </div>`
            document.querySelector('body').appendChild(film_categories);
       
        // }
    
   
    }
    

setTimeout(() => {
    let sliders=document.querySelectorAll('.slider');

    sliders.forEach(slider=>{
    let sliderId=slider.getAttribute('data-id') 
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=${sliderId}`)
    .then(resp=>resp.json())
    .then(data=>{
     data.results.forEach(element=>{
    
         let carouselItems=document.createElement('a');
         for(let i=0;i<element.genre_ids.length;i++) {

     if(sliderId==element.genre_ids[i]){
         
         carouselItems.setAttribute('href',`movie.html?id=`+element.id)
             carouselItems.classList.add('card-film');
         if(element.backdrop_path!=null){
            
    
             carouselItems.innerHTML=` <img src="https://image.tmdb.org/t/p/w500/${element.poster_path}" alt="${element.title}">
             <p class="film-title">${element.title}</p>
             <button id="${element.id}"class="LoveItem"><i class="fa-regular fa-heart"></i></button>
             `       }else{
    
                carouselItems.innerHTML=` <img src="https://image.tmdb.org/t/p/w500/${element.poster_path}" alt="${element.title}">
                <p class="film-title">${element.title}</p>
                <button id="${element.id}"class="LoveItem"><i class="fa-regular fa-heart"></i></button>
                ` 
    
             }
             slider.appendChild(carouselItems)
          
            
     }
    }
    });
     });
    
    })

    


    }, 100);
    
    
    setTimeout(() => {
    
       
        document.querySelectorAll(".slider-progress").forEach(calculateProgressBar)
        let loveButton=document.querySelectorAll('.LoveItem')
        loveButton.forEach(lovButton=>lovButton.addEventListener('click',(e)=>{e.preventDefault();SetLovedItems(lovButton)}))
    }, 900);
    function calculateProgressBar(progressBar){
      
        let slider= progressBar.closest('.film-categories').querySelector(".slider")
        const itemCount=slider.children.length
        
        let  items_per_screen=parseInt(getComputedStyle(slider).getPropertyValue("--items-per-screen-slider"))
        let numberOfSliderParts=itemCount/items_per_screen
slider.setAttribute('data-max',Math.floor(numberOfSliderParts+1))
        for(let i=0; i<numberOfSliderParts;i++){
            let sliderPart=document.createElement('div')

            sliderPart.classList.add("slider-progress-row")
            const  Sindex=parseInt(getComputedStyle(slider).getPropertyValue("--slider-index"))
            sliderPart.setAttribute('id',"R"+i)
            sliderPart.setAttribute('data-id',i)
    if(i==Sindex){
        sliderPart.classList.add("active")
    }
    progressBar.appendChild(sliderPart)
    
    }
    }

    // fetch(`https://api.themoviedb.org/3/movie/latest?api_key=${api_key}&language=en-US`)
    // .then((response) =>response.json())
    // .then(data =>{
    //     console.log(data)
    //     document.querySelector('.batman-h1').src=`https://image.tmdb.org/t/p/original/${data.backdrop_path}`
    //         }        )


// let LovedItems=localStorage.getItem("LovedItems"); 
// LovedItems=JSON.parse(LovedItems)
// console.log(LovedItems)
// if(!localStorage.getItem("LovedItems")){
//     LovedArray.push(String(loveButton.id))
//     console.log('Theres no LovedItems found in localStorage') 
// window.localStorage.setItem('LovedItems',JSON.stringify(LovedArray));
// }
// else if(LovedItems){
//     for(let i=0;i<LovedItems.length;i++){
//     if(LovedItems[i]!==loveButton.id){
//         LovedArray.push(String(loveButton.id))
//         // console.log('There isn\'t')
//       console.log(LovedItems)
//         window.localStorage.setItem('LovedItems',JSON.stringify(LovedArray));
   
//     }else if(LovedItems.length==0){
//         console.log('Length of LovedItems equals zero')
//     }
    
//     else{
//         console.log(LovedItems)
//         LovedItems.splice(i,1)
//         window.localStorage.setItem('LovedItems',JSON.stringify(LovedItems));
//     }

// }}
var initialPosition=0;
let first=0
let diff;
document.addEventListener('touchstart',(e)=>{
    console.log('touched')
    ;[...e.changedTouches].forEach(touch=>{
   
   initialPosition=touch.pageX
   slider=e.target.closest('.film-category-div-2')
  
})
})
// document.addEventListener('touchstart',(e)=>{
//     ;[...e.changedTouches].forEach(touch=>{
//         diff=touch.pageX - initialPosition
//     })})
document.addEventListener('touchmove',(e)=>{
    console.log('moving')
    if(e.target.matches('.film-category-div-2')){
        let slider=e.target
        ;[...e.changedTouches].forEach(touch=>{
            diff= diff +first
    
            slider.style.transform='translateX('+diff+'px)'
   
    })
}
if(e.target.closest('.film-category-div-2')){
    let slider=e.target.closest('.film-category-div-2')
    first=window.getComputedStyle(slider).getPropertyValue('transform')
    let matrexArr = first.split(", ");
      //Array(6) [ "matrix(1", "0", "0", "1", "10", "20)" ]
       let translateXNum = parseInt(matrexArr[4]);
    console.log(translateXNum)
    
    ;[...e.changedTouches].forEach(touch=>{
 
        translateXNum= touch.pageX -translateXNum
        console.log(translateXNum)
        

        slider.style.transform='translateX('+translateXNum+'px)'

})
}
})
// choose random from array?










const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/person/popular?api_key=' + api_key; /*Add the API_KEY here*/

fetch(API_URL).then(response => { /*Call the API_URL not the API_KEY*/
    if(!response.ok) {
        throw error('error')
    }
    return response.json();
})
.then(data => {
 
    data.results.forEach(Actor => {
        // ...use `element`...
        
        if(Actor.profile_path!=null){
            pickedColor = colorArray[Math.floor(Math.random()*colorArray.length)];
        let actor=document.createElement('div')
        // actor.style.outline=;
        actor.classList.add('actor')
        actor.innerHTML=`<img class="actor-profile" style="outline:3px ridge ${pickedColor}" src="https://image.tmdb.org/t/p/original/${Actor.profile_path}">
        <p class='actorName'>${Actor.name}</p>
        `
      
document.querySelector('.people').appendChild(actor)
    }
    });
})
.catch(error => {
    console.log(error)
})


