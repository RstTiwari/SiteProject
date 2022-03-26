//Mobile Menu Starts Form here
let mobBtn = document.querySelector(".menuToggle")
let menu = document.querySelector(".right")
mobBtn.addEventListener("click" , openMenu)

function openMenu (){
    mobBtn.classList.toggle("active");
    menu.classList.toggle("active");
   
   
}

//Mobile Menu  Ends here





//hover section starts from here
$("#hover1").hover(function(){
    $(".hoverContent").addClass("hoverContent-active")
    $(".hoverContent-active").show()

    
})

$("#hover1").mouseleave(function(){
    $(".hoverContent-active").hide()
})

$("#hover2").hover(function(){
    $(".hoverContent2").addClass("hoverContent-active")
    $(".hoverContent-active").show()

    
})

$("#hover2").mouseleave(function(){
    $(".hoverContent-active").hide()
})





// open Search bar 
$("#search-icon").click(function(){
    $(".search-bar").addClass("search-bar-active")
    $(".search-bar").show()

})

//Close Search Bar
$(".searchBar-close").click(function(){
    $(".search-bar").hide()
})


//slider animation
var slideIndex = 1
function plusSlides(n){
    showSildes(slideIndex += n)
}

function showSildes(n){
    var i ;
    var slides = document.getElementsByClassName("slides")

    if (n > slides.length){slideIndex = 1};
    if  (n < 1){slideIndex = slides.length}

    for (i = 0 ; i <slides.length ; i++){
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display ="block";
}
showSildes(slideIndex)


// Product Slide Information  
var productSlideIndex = 1

function productShowSlide(n){
    var i ;
    var productSlide = document.getElementsByClassName("productSlides");
    var dot = document.getElementsByClassName("dot") 

    if(n >productSlide.length){productSlideIndex = 1 }
    if (n < 1) {productSlideIndex = productSlide.length}
    for( i = 0 ; i < productSlide.length ; i++){
        productSlide[i].style.display= "none"

    }
    productSlide[productSlideIndex -1].style.display ="block"
       
}
productShowSlide(productSlideIndex)

function productplusSlide(){
    productShowSlide(productSlideIndex +=n)
}

function productcurrentSlide(){
    productShowSlide(productSlideIndex=n)
}
    

// practise code
$(window).scroll(function(){
    if($(document).scrollTop() >50){
        $(".navigation").addClass("fixed")
        $("header").css("display" ,"none")
    }
    else{
        $(".navigation").removeClass("fixed")
        $("header").css("display" ,"flex")
    }
})







    




