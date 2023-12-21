let accessKey = '3BWUry6LfcUQBT6SxzuvNLSYQS58HpVaZKQRqacoPKE'

const searchForm = document.getElementById('search-form');
const searchBox = document.getElementById('search-box');
const searchResult = document.getElementById('search-result');
const seeMoreImg = document.getElementById('see-more-img');


let keyword = '';
let page = 1;

async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`

    const response = await fetch(url);
    const data = await response.json();

    if(page === 1){
        searchResult.innerHTML = "";
    }

    
    const results = data.results;

    results.map((result)=> {
        const image = document.createElement('img');
        image.src = result.urls.small;
        const imgLink = document.createElement('a');
        imgLink.href = result.links.html;
        imgLink.target = '_blank';
        imgLink.appendChild(image); //THIS IMAGE WILL BE INSIDE a tag
        searchResult.appendChild(imgLink) //THIS WILL BE USED FOR DIPLAYING OF THE RESULT.
    }) 
    seeMoreImg.style.display = "block";
}

searchForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    page = 1;
    searchImages();
})

seeMoreImg.addEventListener("click", ()=>{
    page++;
    searchImages();
})