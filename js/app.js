$(document).ready(function(){
$('.slider').slick({

   arrows:false,
   dots:true,
   appendDots:'.slider-dots',
   dotsClass:'dots' 
    
});

let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let mobileNav = document.querySelector('.mobile-nav');

hamberger.addEventListener('click', function(){
mobileNav.classList.add('open');

});

times.addEventListener('click', function(){
mobileNav.classList.remove('open');

});

});

var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
      },
      loop: true,
       autoplay: {
        delay: 500,
        disableOnInteraction: false,
      },
     
    });

    

    $(document).ready(function(){
      $(".read-more-btn").click(function(){
        $(this).prev().toggle();
        if($(this).text()=='Read more'){
          $(this).text('Read less');
        }
        else{
          $(this).text('Read more');
        }
      });
    });

