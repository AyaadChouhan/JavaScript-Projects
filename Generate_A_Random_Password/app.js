const btn = document.getElementById("btn");
const inp = document.getElementById("inp");
const copyImg = document.getElementById("copyImg");

function generatePass() {
  let password = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890<>?/|\*&$#@";
  const passwordLength = 10;

  for (let i = 0; i < 10; i++) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }
  return password;
}

function copyPassFunc() {
  inp.select();
  document.execCommand('copy');
}

btn.addEventListener("click", () => {
  inp.value = generatePass();
});

copyImg.addEventListener('click' ,() =>{
  copyPassFunc()
})
