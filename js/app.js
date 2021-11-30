const API_KEY ='1aa73561a242a3323423e405256871bf';
const API_URL_DINOSAURS = 'https://dog.ceo/api/breeds/image/random';

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

