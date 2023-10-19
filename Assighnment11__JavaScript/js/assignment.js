function Widthpercentage() {
   var widthPercentages =  document.getElementById("width-percent-input").value + "%";
   document.getElementById("image").style.width = widthPercentages;
 }

 function heightPercentage() {
    var heightPercentage= document.getElementById("height-percent-input").value + "%";
   document.getElementById("image").style.height = heightPercentage;
 }
 //in pixels
 function widthPixel() {
   var widthPixel = document.getElementById("width-pixel-input").value+ "px";
     document.getElementById("image").style.width = widthPixel;
 }

 function heightPixel() {
     var heightPixel = document.getElementById("height-pixel-input").value +"px";
   document.getElementById("image").style.height = heightPixel;
 }



 function linkChange() {
    var link = document.getElementById("link-input").value;
    document.getElementById("imgLink").setAttribute("href", link);
 }

 function newTab() {
   if (document.getElementById("checkbox").checked) {
     document.getElementById("imgLink").setAttribute("target", "_blank");
   } else {
     document.getElementById("imgLink").removeAttribute("target");
   }
 }