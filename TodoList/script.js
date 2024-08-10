const input = document.querySelector(".inp");
const btn = document.getElementById("addBtn");
const listCont = document.querySelector(".listCont");
const spanTag = document.getElementById("spanTag")
function getData() {
  if (input.value === "") {
    alert("you must write something");
  } else {
    let li = document.createElement("li");
    let span = document.createElement("span");
    span.id = "spanTag"
    li.innerHTML = input.value;
    listCont.appendChild(li);
    span.innerHTML =  "✖️";
    li.appendChild(span);
  }
  input.value = "";
  saveData()
}

btn.addEventListener("click", () => {
  getData();
});

listCont.addEventListener("click", function (event) {
  if (event.target.tagName === "SPAN") {
    event.target.parentElement.remove()
    saveData()
  }
  else if(event.target.tagName === 'LI'){
    event.target.classList.toggle("checked")
    saveData()
  }
  else if(event.target.tagName === "LI"){
    console.log("oops");
    event.target.classList.add("")
  }
}, false);

function saveData() {
  localStorage.setItem("data", listCont.innerHTML)
}

function showTask() {
  listCont.innerHTML = localStorage.getItem("data")
}
showTask()
