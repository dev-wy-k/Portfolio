let screenHeight = $(window).height();

// $(window).scroll(function (){
//     let currentPostion = $(this).scrollTop();
//     // console.log(currentPostion);

//     if(currentPostion >= screenHeight-50){
        
//     }
//     else{
        
//         setActive('home')
//     }
// });

    wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animate__animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
      }
      )
      wow.init();

// wayponit start

function setActive(current){
    $(".nav-link").removeClass('current-section')
    $(`.nav-link[href='#${current}']`).addClass('current-section')

};

function navScorll() {

    // using js to active nav bar 
    $(document).scroll(function () {
        $('section').each(function () {
            if($(this).position().top <= $(document).scrollTop() && ($(this).position().top + $(this).outerHeight()) > $(document).scrollTop()) {
                setActive($(this).attr('id'))
            }
        });
    });

    // let currentSection = $("section[id]");
    // currentSection.waypoint(function (direction){
    //     console.log(direction);
    //     if(direction == "down"){
    //         let currentSectionId = $(this.element).attr("id") ;
    //         // console.log(currentSectionId);
    //         setActive(currentSectionId)
    //     }
    // },{ offset : "5%" });

    // currentSection.waypoint(function (direction) {
    //     if(direction == "up"){
    //         let currentSectionId = $(this.element).attr("id") ;
    //         // console.log(currentSectionId);
    //         setActive(currentSectionId)
    //     }
    // },{ offset : "-20%" });
};
navScorll();


// waypoint end 
 






  $(".navbar-toggler").click(function (){
        let result = $(".navbar-collapse").hasClass("show");
        // console.log(result);

        if(result){
            $(".menu-icon").removeClass("fa-times").addClass("fa-bars")
        }
        else{
            $(".menu-icon").removeClass("fa-bars").addClass("fa-times")
            
        }
    });

    $(".nav-item").click(function (){
        $(".navbar-collapse").removeClass("show");
        $(".menu-icon").removeClass("fa-times").addClass("fa-bars")

    });


$('.service-slide').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
    {
    breakpoint: 1025,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      infinite: true,
      dots: true
    }
    },
    {
    breakpoint: 769,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
    },
    {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
    });


    $(window).on("load", function(){
        $(".loader-container").fadeOut(500, function(){
            $(this).remove();
        });
    })
    