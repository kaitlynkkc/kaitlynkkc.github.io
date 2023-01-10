$(document).on("click", ".toggle", function() {
    if($(this).attr("id") == 'donate') {
        $("#drop-title").html("How do donations work?");
        $("#drop-p").html("100% of the proceeds we raise go to recognized tax-exempt public charities, non-profit organizations and philanthropic causes.</br></br>Donate any amount to help make a difference in our Texas community!");
        $("#drop-button").html("Make a Donation");
        // img order        
        $("#l1").css("order", "0");
        $("#l2").css("order", "2");
        $("#m1").css("order", "1");
        $("#m2").css("order", "3");
        
    } else if ($(this).attr("id") == 'sponsor') {
        $("#drop-title").html("How do sponsorships work?");
        $("#drop-p").html("We offer a variety of sponsorship packages to best suit your business or team.</br></br>Click the button below for more information!");
        $("#drop-button").html("Sponsorship Packages");
        // img order        
        $("#l1").css("order", "1");
        $("#l2").css("order", "0");
        $("#m1").css("order", "3");
        $("#m2").css("order", "2");
    } else if ($(this).attr("id") == 'volunteer') {
        $("#drop-title").html("How to become a volunteer?");
        $("#drop-p").html("We are 100% operated by volunteers with generous hearts and have no religious or political agenda or affiliation.</br></br>Click the button below for more information!");
        $("#drop-button").html("Volunteer Opportunities");
        // img order        
        $("#l1").css("order", "3");
        $("#l2").css("order", "1");
        $("#m1").css("order", "2");
        $("#m2").css("order", "0");
    } else if ($(this).attr("id") == 'catering'){
        $("#drop-title").html("How can we cater your event?");
        $("#drop-p").html("Our team works diligently to perfect their BBQ culinary skills and can cater any type of event.</br></br>Click the button below for more information!");
        $("#drop-button").html("Catering Inquiry");
        // img order        
        $("#l1").css("order", "2");
        $("#l2").css("order", "3");
        $("#m1").css("order", "0");
        $("#m2").css("order", "1");
    } else {}

    if($(".toggle").attr("aria-expanded") == 'true') {
        // if dropdown is already expanded on click
        $(".toggle").attr("aria-expanded", "false");
        $(this).css({"background-color":"var(--red)", "border":"none"});
        $(".dropdown").slideToggle();
    } else {
        // if dropdown is collapsed on click
        $(".toggle").attr("aria-expanded", "true");
        $(".toggle").css({"background-color":"var(--red)", "border":"none"});
        $(this).css({"background-color":"var(--cream)", "border":"3px solid var(--red)"});
        $(".dropdown").slideToggle();
        $(".dropdown").css("display", "flex");
    }
});