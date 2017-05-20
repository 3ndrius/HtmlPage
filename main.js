$(document).ready(function () {
    
    $(".tile >i").addClass("animated zoomIn");    
    $(".tile > i").css({ 
    "animation-delay": "0.4s"
    })
    
  
    $(".tile ").click(function() {
       $(this).addClass("animated shake").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
           $(this).removeClass("animated shake");
       }); 
    });
    
    
    
    
    
      $(".tile4y").addClass("animated bounceInRight");    
    $(".tile4y").css({ 
    "animation-delay": "0.3s"
    })
    $(".tile4t").addClass("animated bounceInRight");    
    $(".tile4t").css({ 
    "animation-delay": "0.5s"
    })
    $(".tile4g").addClass("animated bounceInRight");    
    $(".tile4g").css({ 
    "animation-delay": "0.7s"
    })
    $(".tile4f").addClass("animated bounceInRight");    
    $(".tile4f").css({ 
    "animation-delay": "0.9s"
    })
    
    $(".footer > h4").addClass("animated slideInUp");    
    $(".footer > h4").css({ 
    "animation-delay": "0.9s"
    })
    
     
    $("#tile3").addClass("animated fadeIn");    
    $("#tile3").css({ 
    "animation-delay": "0.6s"
    
    })
    
    
       $("#tile4y").click(function() {
        
       $("#tile4y").css({ 
           "transform": "scale(1.1,1.6)",
           "color": "black"
   
     
    })    
    }); 
    
   
    
    
    
    
    
    
    
   
    
    
});

