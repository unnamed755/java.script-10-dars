const userName = prompt("biron bir so'z kiriting");

 const sozNomi =document.createElement("h1");
sozNomi.textContent = userName;
sozNomi.style.color= "yellow";
sozNomi.style.textAlign = "center";
sozNomi.style.fontSize = "200px"
document.body.appendChild(sozNomi)