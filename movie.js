const api_key="b7fcfbaad8009a0bdad2f055fbc67751";
const params = new URLSearchParams(window.location.search)
           const id= params.get("id");
           
fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`)
    .then(resp=>resp.json())
    .then(data=>{
        console.log(data);
       document.querySelector('body').style.background=`url("https://image.tmdb.org/t/p/original/${data.backdrop_path}")`

document.querySelector('.title-h1').innerHTML=`${data.title}`
let vote_average=String(data.vote_average).slice(0, 3)
vote_average=Number(vote_average)
document.querySelector('.film-Rating').innerHTML=`${vote_average}`
document.querySelector('.film-year').innerHTML=`${data.release_date}`
document.querySelector('.film-description').innerHTML=`${data.overview}`
let filmCategories=document.querySelector('.film-category-div')
let production_companies=[]
data.production_companies.forEach(element => {
    production_companies.push(element);
    document.querySelector('.film-director').innerHTML+= ` <span style="color:rgb(190, 190, 190)">${element.name}</span>`;
})
            GetMovie(data)
            data.genres.forEach(element => {
                let filmCategory=document.createElement('div');
                filmCategory.classList.add('film-category');
                filmCategory.innerHTML=` <span style="color:rgb(190, 190,)">${element.name}</span>`;
                filmCategories.appendChild(filmCategory);
            })
        
    })
    function GetMovie(element){
        
        const params = new URLSearchParams(window.location.search)
        let category= params.get("category");
        let ChoosenMovie= params.get("title");

        if(ChoosenMovie === element.title){
            let row=document.querySelector('.row')
            let body=document.querySelector('body')
            body.style.background=`url(${element.img})`
            row.innerHTML+=`<iframe width="100%" src="${element.streaming}"  height="745" >
          </iframe>`
        
    
        }
    }
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api_key}&language=en-US`)
    .then(resp=>resp.json())
    .then(data=>{
        data.results.forEach(element => {
            console.log(element)
if(element.type=='Trailer'){
    setTimeout(()=>{
        // let triller =document.querySelector('.triller');
        function onYouTubeIframeAPIReady() {
            var player;
            
            player = new YT.Player('trailler', {
              videoId: element.key, // YouTube Video ID
              width: 1000,               // Player width (in px)
              height: 1000,              // Player height (in px)
              playerVars: {
                autoplay: 1,        // Auto-play the video on load
                controls: 0,        // Show pause/play buttons in player
                showinfo: 0,        // Hide the video title
                modestbranding: 0,  // Hide the Youtube Logo
                loop: 1,            // Run the video in a loop
                fs: 0,              // Hide the full screen button
                cc_load_policy: 0, // Hide closed captions
                iv_load_policy: 3,  // Hide the Video Annotations
                autohide: 0         // Hide video controls when playing
              }
    // triller.innerHTML=`<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${element.key}?autoplay=1&mute=1" allowfullscreen" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
            })}
            onYouTubeIframeAPIReady()
    }
    , 7000);
    
}
    
    })
    })
    
// function Sum(array){
//     let sum=0
// for(var i=0;i<=array.length;){
//  i++
// if(array[i]>=0){

//     sum=sum+array[i]
//     return sum
// }else{
//     console.log(array[i])
// }
// }
// }
// console.log(Sum([1,-4 ,28,-50,150,5013000]))
