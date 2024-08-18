const secDiv = document.querySelector(".secDiv");
const firstDiv = document.querySelector(".firstDiv");
const lists = document.querySelectorAll(".list");

for (const list of lists) {
  list.addEventListener("dragstart", (e) => {
    let selected = e.target;

    secDiv.addEventListener("dragover", (e) => {

      e.preventDefault();
    });

    secDiv.addEventListener("drop", (e) => {
      secDiv.append(selected);
      selected = "";
    });
    firstDiv.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    firstDiv.addEventListener("drop", (e) => {
      firstDiv.append(selected);
      selected = "";
    });
  });
}