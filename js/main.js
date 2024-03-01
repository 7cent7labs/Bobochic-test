var $navHeight = 0;

var $sizemobile = 992;
var isMobile = false;
var smoothScrollbar = false;

var $img_ofset = 0;
var $zIndex = 0;
var $maxImg = $(".background img").length;
var $animationDuration = 6000;

function letsSlide(){
        
        $(".background img").eq($img_ofset).addClass("off");
        $img_ofset = $img_ofset+1;
        if($img_ofset >= $maxImg){ $img_ofset = 0; }
        $(".background img").eq($img_ofset).removeClass("off");
    
        setTimeout(letsSlide,$animationDuration);
    }

$(document).ready(function(){
	
	if($(window).width() < $sizemobile){ $("body").addClass("mobile"); isMobile = true; } else { $("body").removeClass("mobile"); isMobile = false; }
	
	var $documentHeight = $(document).outerHeight()+75;
	//$(".background").css("height",$documentHeight);
    
    if(!isMobile){ 
        var scrollbarE = Scrollbar.init(document.querySelector('#ecouter .content'));
        var scrollbarR = Scrollbar.init(document.querySelector('#regarder .content'));
        var scrollbarD = Scrollbar.init(document.querySelector('#decouvrir .content'));
    }
    
     $(document).on("click",".open-nav",function(){
        var $cible = $(this).attr("rel");
        console.log($cible);
        $($cible).addClass("on");
    });
     $(document).on("click",".lien-regarder.open-nav, .lien-ecouter.open-nav",function(){
         
         if( $("#decouvrir").hasClass("on")){
             $(".hob-logo").fadeIn();
             $(".hob-dates").fadeIn();
             $("#decouvrir").removeClass("on");
         }
    });
    $(document).on("click",".lien-decouvrir.open-nav",function(){
         $(".hob-logo").fadeOut();
         $(".hob-dates").fadeOut();
    });
    $(document).on("click",".close-nav",function(){
        var $cible = $(this).attr("rel");
        $($cible).removeClass("on");
     });
    
    
    $(document).on("click","#regarder .close-nav",function(){
        $('.yt_player_iframe').each(function(){
            var el_src = $(this).attr("src");
            $(this).attr("src",el_src);
        });
    });
    $(document).on("click","#decouvrir .close-nav",function(){
       $(".hob-logo").fadeIn();
        $(".hob-dates").fadeIn();
    });
    
   $(".background img").eq(0).removeClass("off");
    $maxImg = $(".background img").length;
    
     //if(!isMobile){ 
    setTimeout(letsSlide,$animationDuration);
    // }
    
	if(!isMobile){ 
		/*var scrollbar = Scrollbar.init(document.body);
		smoothScrollbar = true;
		scrollbar.addListener(function (status) {
	 
		
			$(".background").css("top",-status.offset.y/6);
			$("body").css({'background-position':'center calc(50% - '+(status.offset.y*.3)+'px)'});
			
			
		});*/
	}
		
	
	
});


$(window).resize(function(){
	var $documentHeight = $(document).outerHeight()+75;
	//$(".background").css("height",$documentHeight);
	
   
	
	if($(window).width() < $sizemobile){ 
		$("body").addClass("mobile"); isMobile = true; 
		/*
		if (smoothScrollbar) {
			Scrollbar.destroy(document.body);
			$("body").removeAttr("style").removeAttr("tabindex").removeAttr("data-scrollbar");
			smoothScrollbar = false;
		}*/
		
		} else { 
			$("body").removeClass("mobile"); isMobile = false; 
			/*scrollbar = Scrollbar.init(document.body);
			smoothScrollbar = true;
			scrollbar.addListener(function (status) {
	 
		
			$(".background").css("top",-status.offset.y/6);
			$("body").css({'background-position':'center calc(50% - '+(status.offset.y*.3)+'px)'});
			
			
		});*/
	}
	
	
	
});

