$(document).ready(function(){

  //percentage (width & height)
  
      $("#width-percent-input, #height-percent-input").change(function(){
          var id = $(this).attr("id");
          var value = $(this).val();
          if (id == "width-percent-input") {
              var widthpercent = value + "%";
              $("img").attr("width", widthpercent);
          } 
    else {
              var heightpercentage = value + "%";
              $("img").attr("height", heightpercentage);
          }
      });
  
      //pixel (width &  height)
  
      $("#width-pixel-input, #height-pixel-input").change( function(){
          var id = $(this).attr("id");
          var value = $(this).val();
          if (id == "width-pixel-input") {
              var widthpixel = value + "px";
              $("img").attr("width", widthpixel);
          } else  {
              var heightpixel = value + "px";
              $("img").attr("height", heightpixel);
          }
      });
    
    $("#link-input").change(function(){
        var link =$(this).val()
        $("a").attr("href",link)
    
        })
    
    
        $("#checkbox").change(function(){
         if($(this).prop("checked")){
            $("a").attr("target","_blank");
    
         }
         else{
            $("a").removeAttr("target");
         }
    
        });
    
    
    });