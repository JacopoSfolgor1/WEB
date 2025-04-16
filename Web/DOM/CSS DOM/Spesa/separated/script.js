function showPopupImage(imgPath) {
    const img = document.getElementById("popup-img");
    if (imgPath.includes("base.jpg")) {
      img.style.display = "none";
    } else {
      img.src = imgPath;
      img.style.display = "block";
    }
  }
  
  function addElement() {
    const ul = document.getElementById("ul");
    const li = document.createElement("li");
    const cibo = document.getElementById("add").value;
  
    if (cibo.trim() !== "" && isNaN(cibo)) {
      li.textContent = cibo;
      ul.appendChild(li);
      document.getElementById("add").value = "";
      document.getElementById("error-add").textContent = "";
      showPopupImage("pics/addfood.jpg");
    } else {
      document.getElementById("error-add").textContent = "Aggiungi un prodotto valido";
      document.getElementById("add").value = "";
      showPopupImage("pics/erroradd.jpg");
    }
  }
  
  function resetElements() {
    document.getElementById("ul").innerHTML = "";
    document.getElementById("error-add").textContent = "";
    showPopupImage("pics/resetfood.jpg");
  }
  