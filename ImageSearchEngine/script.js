const accessKey = "ahrVK9opS-gEz1-eiGS_Jfp2nYEwdyVIyyWWgq0LwmU";
const form = document.getElementById("form");
const searchBtn = document.getElementById("btn");
const showMoreBtn = document.getElementById("showMoreBtn");
const imgCont = document.getElementById("imgCont");
const input = document.getElementById("inp");

let keyword = "";
let page = 1;

async function createEl() {
  keyword = input.value;
  let url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
  let response = await fetch(url);
  let data = await response.json();
  let results = data.results;
  console.log(results);
  if (page === 1) {
    imgCont.innerHTML = ''
  }

  results.map((result) => {
    let createImg = document.createElement("img");
    createImg.src = result.urls.small;

    let imgLink = document.createElement("a");
    imgLink.href = result.links.html;
    imgLink.target = "_blank";

    imgLink.appendChild(createImg);
    imgCont.append(imgLink);
  });
  showMoreBtn.style.display = "block"
}

searchBtn.addEventListener("click", (event) => {
  event.preventDefault();
  page = 1;
  createEl();
});
showMoreBtn.addEventListener('click', (e)=>{
  page++
    createEl()
})
