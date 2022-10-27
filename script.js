window.onload = () => {
const coll = document.getElementsByClassName("expansion");
var i;
for (i = 0; i < coll.length; i++) {
  const expandButton = coll[i].getElementsByTagName("img")[0];
 
  coll[i].addEventListener("click", function () {
    
    var contentfaq = this.nextElementSibling;
    if (contentfaq.style.display === "none") {
      contentfaq.style.display = "block";
      this.classList.add("topper");
      expandButton.classList.add("rotate");
      var j;
      for(j =0; j < coll.length; j++)
        if(coll[j] !== this){
          coll[j].nextElementSibling.style.display = "none";
          const expd = coll[j].getElementsByTagName("img")[0]
          expd.classList.remove("rotate");
        }
    } else {
      contentfaq.style.display = "none";
      this.classList.remove("topper");
      expandButton.classList.remove("rotate");
    }
  });
}
}