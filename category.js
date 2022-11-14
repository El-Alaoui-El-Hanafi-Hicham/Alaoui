const api_key="b7fcfbaad8009a0bdad2f055fbc67751";
const params = new URLSearchParams(window.location.search)
        let category= params.get("category");
       console.log(category)
       fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=en-US`)
       .then(resp=>resp.json())
       .then(data=>{
        data.genres.forEach(data=>{
            if(data.id==category) { document.querySelector('.categoryName').innerText=data.name;}
            console.log(data);
        })
       })
       fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=${category}`)
       .then(resp=>resp.json())
       .then(data=>{
        data.results.forEach(data=>{
        let carouselItems=document.createElement('div');
        carouselItems.setAttribute('href',`movie.html?id=`+data.id)
        carouselItems.classList.add('card-film');
    if(data.backdrop_path!=null){
        

        carouselItems.innerHTML=` <img src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt="${data.title}">
        <p class="film-title">${data.title}</p>
        <button id="${data.id}"class="LoveItem"><i class="fa-regular fa-heart"></i></button>

        `       }else{

           carouselItems.innerHTML=` <img src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt="${data.title}">
           <p class="film-title">${data.title}</p>
           <button id="${data.id}"class="LoveItem"><i class="fa-regular fa-heart"></i></button>

           ` 

        }
        document.querySelector('.films').appendChild(carouselItems);
    })
       })



       //////////////////////////////// Get Genres List \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
       