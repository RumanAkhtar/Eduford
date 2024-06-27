const menuBtn = document.querySelector('.menu-btn i');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu');
});

$(document).ready(function(){
  $(window).scroll(function(){
      if(this.scrollY > 20){
          $('.navbar').addClass("sticky");
      }else{
          $('.navbar').removeClass("sticky");
      }
      if(this.scrollY > 500){
          $('.scroll-up-btn').addClass("show");
      }else{
          $('.scroll-up-btn').removeClass("show");
      }
  });
  $('.scroll-up-btn').click(function(){
      $('html').animate({scrollTop: 0});
      $('html').css("scrollBehavior", "auto");
  });

  $('.navbar .menu li a').click(function(){
      $('html').css("scrollBehavior", "smooth");
  });
  $('.menu-btn').click(function(){
      $('.navbar .menu').toggleClass("active");
      $('.menu-btn i').toggleClass("active");
  });

});

var tl = gsap.timeline();
tl

.from(".header-content h3",{
  y:40,
  opacity:0,
  delay:0.2,
  duration:0.3
})

.from(".header-content h1",{
  y:40,
  opacity:0,
  delay:0.2,
  duration:0.3
})

.from(".header-content a",{
  y:40,
  opacity:0,
  delay:0.2,
  duration:0.3
})


gsap.from(".Awesome",{
  opacity:0,
  stagger:0.4,
  y:40,
  delay: 0.3,
  duration: 0.5,
  scrollTrigger:{
    trigger: ".Awesome",
    scroller:"body",
    start:"top 60%",
  }
})

gsap.from(".Popular",{
  opacity:0,
  delay:0.3,
  y:40,
  scrollTrigger:{
    trigger: ".Popular",
    scroller:"body",
    start:"top 60%",
  }
})

gsap.from(".container-register",{
  opacity:0,
  stagger:0.4,
  y:20,
  duration:1.5,
  scrollTrigger:{
    trigger: ".container-register",
    scroller:"body",
    start:"top 60%",
  }
})

gsap.from(".our-expert",{
  opacity:0,
  stagger:0.4,
  y:40,
  delay:0.4,
  duration:1,
  scrollTrigger:{
    trigger: ".our-expert",
    scroller:"body",
    start:"top 60%",
  }
})

gsap.from(".testimonial",{
  opacity:0,
  delay:0.3,
  stagger:0.4,
  y:20,
  duration:1,
  scrollTrigger:{
    trigger: ".testimonial",
    scroller:"body",
    start:"top 60%",
  }
})

gsap.from(".footer-row, .copyright",{
    opacity:0,
    delay:0.3,
    stagger:0.4,
    y:20,
    duration:1,
    scrollTrigger:{
      trigger: ".footer-row, .copyright",
      scroller:"body",
      start:"top 60%",
    }
  })


