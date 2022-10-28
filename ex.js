function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  var indexValue = 1;
  showImg(indexValue);
  function side_slide(e) {
    showImg(indexValue +=e);
  }
  function showImg(e) {
    var i;
    const img = document.querySelectorAll('img')
    if(e > img.length) {
        indexValue = 1  
    }
    if(e < 1) {
        indexValue = img.length
    }
    for(i = 1; i < img.length; i++) {
        img[i].style.display = "none";
    }
    img[indexValue - 1].style.display = "block";
  }





 