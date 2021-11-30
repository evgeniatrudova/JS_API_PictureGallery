const API_KEY ='1aa73561a242a3323423e405256871bf';
const API_URL_DINOSAURS = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=21f2f2772a3f8e11f5d18959a8d63eca&tags=dinosaurs&sort=period&per_page=20&format=json&nojsoncallback=1&api_sig=5080245e02959dc1e7eb744fe404bd22';

getPictures (API_URL_DINOSAURS);
async function getPictures(url){
  const resp = await fetch(url,{
    headers:{
      "Content-Type": "application/json",
      "X-API-KEY": API_KEY,
    },
  });
  const respData = await resp.json();
  showPictures(respData);
}
 function showPictures(data){
   const picturesEl = document.querySelector(".pictures");
   
   data.dino.forEach (pic => {
     const picEl = document.createElement("div")
     picEl.classList.add("picture")
     picEl.innerHTML = 
       <div class="pic__cover-inner">
        <img
          src="${pic.dinoUrlPreview}"
          class="pic__cover"
          alt="${pic.name}"
        />
        <div class="pic__cover--darkened"></div>
      </div>
          ;
    pictures.appendChild(movie);
   })
 }

