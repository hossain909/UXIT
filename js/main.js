$(document).ready(function(){
    // STCKY NAVGATION MENU //
    $(".js--feature-section").waypoint(function(direction){
       if(direction == "down") {
           $("nav").addClass("sticky");
       }else {
           $("nav").removeClass("sticky");
       }
    });
// SMOOTH TRANSITION IN VAVIGATION //
    $("#home ul a").on("click", function (event) {
        // 1.Cancel its default behavior to jump to the corresponding section.
        event.preventDefault();
        // 2.Grab its href attribute value //

        // const href = $(this).attr("href");
                    // OR
        const link = this.hash;
        // 3.Smoothly navigate to the associated section by animating the scrollTop property. Note that the animate() method allows us to adjust the animation speed. In our case, the animation will last 800ms.
        $("html, body")
        .animate({scrollTop:$(link).offset().top}, 800);
    });
    
});



function openNav(){
    document.querySelector('#myNav').style.width = "100%";
}
function closeNav(){
    document.querySelector('#myNav').style.width = "0%";
}

