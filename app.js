// Global variables
var video1 = document.getElementById('bgVideoFront');
var video2 = document.getElementById('bgVideoBack');
var portrait = document.querySelector('.portrait');
var figure = document.querySelectorAll('.project-section figure');

var homeNav = document.getElementById('homeNav');
var projectsNav = document.getElementById('projectsNav');
var aboutNav = document.getElementById('aboutNav');
var scrollNav = document.getElementById('scrollNav');

var projectBox = document.querySelectorAll('.project-box');

var floraImg = document.querySelector("#projectBox1 img");
var visualImg = document.querySelector("#projectBox2 img");
var bookImg = document.querySelector("#projectBox3 img");

const scrollArea = document.querySelector('#scrollWrapper');
mainContainer = document.querySelector(".main-container");

// match media variables
var screenS = window.matchMedia("(max-width:425px)");
// var screenXS = window.matchMedia("(max-width:375px)");
var screenM = window.matchMedia("(min-width:768px)");
var screenSmin = window.matchMedia("(min-width:425px)");

var screenMmax = window.matchMedia("(max-width:768px)");

// function tween(circle,scaleN, xValue,yValue){
//   TweenMax.to($(circle), .3, {
//     x: xValue,
//     y: yValue,
//     scale: scaleN,
//     ease: Power2.easeOut
//   })
//   console.log(scaleN);

// }

// function mousemoveAnimation(menu, circle,scaleN){
//   console.log(scaleN);

//   if(screenM.matches){
//     $(menu).mousemove(function (e) {
//       var i = $(circle),
//           s = e.pageX - i.offset().left,
//           o = e.pageY - i.offset().top;
//       var x =  (s - i.width() / 2) / i.width() * 100;
//       var y = (o - i.height() / 2) / i.height() * 100;
//       tween(circle,scaleN,0,0);
//     });
//   }else{
//     console.log("else");
//     tween(circle,scaleN,0,0);

//   }

// }
// function mouseleaveAnimation(menu, circle,scaleN){
//   $(menu).mouseleave(function () {
//     tween(circle,scaleN,0,0);
//   });
// }

// function screenTest(e) {
//   if (e.matches) {
//     mousemoveAnimation(".menu1", ".circle1",1.2);
//     mousemoveAnimation(".menu2", ".circle2",1.2);
//     mousemoveAnimation(".menu3", ".circle3",1.2);
//     mouseleaveAnimation(".menu1", ".circle1",1);
//     mouseleaveAnimation(".menu2", ".circle2",1);
//     mouseleaveAnimation(".menu3", ".circle3",1);
//     console.log(167);
//   } 
//   else {
//     mousemoveAnimation(".menu1", ".circle1",1);
//     mousemoveAnimation(".menu2", ".circle2",1);
//     mousemoveAnimation(".menu3", ".circle3",1);
//     mouseleaveAnimation(".menu1", ".circle1",1);
//     mouseleaveAnimation(".menu2", ".circle2",1);
//     mouseleaveAnimation(".menu3", ".circle3",1);
//     console.log(67);
//   }
// }
// screenM.addEventListener('change',screenTest);


window.onload = function() {
  if(screenMmax.matches){
    video1.currentTime = 1;
  }
  if(screenS.matches){
    video1.currentTime = 3;
    // var circle1 = document.querySelector('.menu1 img');
    // circle1.classList.remove('circle1');
  }
  if(screenM.matches){

    // mousemoveAnimation(".menu1", ".circle1",1.2);
    // mousemoveAnimation(".menu2", ".circle2",1.2);
    // mousemoveAnimation(".menu3", ".circle3",1.2);
    // mouseleaveAnimation(".menu1", ".circle1",1);
    // mouseleaveAnimation(".menu2", ".circle2",1);
    // mouseleaveAnimation(".menu3", ".circle3",1);
    }

}



//!skew animaiton
let proxy = { skew: 0 },
    skewSetter = gsap.quickSetter("#skewer", "skewY", "deg"),
    clamp = gsap.utils.clamp(-20, 20); 

ScrollTrigger.create({
  scroller: "#scrollWrapper",
  onUpdate: (self) => {
    let skew = clamp(self.getVelocity() / -250);
    if (Math.abs(skew) > Math.abs(proxy.skew)) {
      proxy.skew = skew;
      gsap.to(proxy, {skew: 0, duration: .8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
    }
  }
});
gsap.set("#skewer", {transformOrigin: "center center", force3D: true});


// gsap animation

// animation portrait opacity
gsap.to(".portrait", {
  scrollTrigger: {
    trigger: ".home-section",
    markers:false,
  },
  opacity:0.65,
  duration:6, 
  // delay: 3
});

// animation portrait slide down
gsap.to(".portrait", {
  scrollTrigger: {
    trigger: ".text-section",
    toggleActions: "restart none reverse reverse",                     
    start: "top 80%",
    end: "top 30%",
    scroller: "#scrollWrapper",
    markers:false,
    scrub:1,
  },
  y:'50vh',
  x:'0',
  duration: 2,
});

gsap.to("#homeSection header", {
  scrollTrigger: {
    trigger: ".nav-bottom",
    toggleActions: "restart none reverse reverse",
    start: "top 83%",
    end: "top 85%",
    scroller: "#scrollWrapper",
    markers:false,
  },
  y: "-420px",
  ease: "Power1.easeInOut",
  duration: 1.5,
});





// underline nav animation
homeNav.onclick = function(){
  homeNav.classList.add("underline");
  projectsNav.classList.remove("underline");
  aboutNav.classList.remove("underline");
  // mainContainer.classList.remove("color-toggle");
  // mainContainer.classList.remove("color-toggle2");

}
projectsNav.onclick = function(){
  projectsNav.classList.add("underline");
  aboutNav.classList.remove("underline");
  homeNav.classList.remove("underline");
  // mainContainer.classList.remove("color-toggle");
  // mainContainer.classList.remove("color-toggle2");
}
aboutNav.onclick = function(){
  aboutNav.classList.add("underline");
  homeNav.classList.remove("underline");
  projectsNav.classList.remove("underline");
  // mainContainer.classList.remove("color-toggle");
  // mainContainer.classList.remove("color-toggle2");
}

// transition videos when scroll

// video starting point
video1.style.opacity = "1";
video1.playbackRate = 2;
video2.playbackRate = 2;



//transition from video1 to video2
function transitionVideo(opacity1, opacity2, videoFront,videoBack, value){
  video1.style.opacity = opacity1;
  video2.style.opacity = opacity2;
  videoFront.style.transition ='all 0s ease 0.5s';
  //sets both videos in the same frame when clicked to change
  videoBreak = videoFront.currentTime;
  videoBack.currentTime = videoBack.duration - videoBreak - value;

  videoBack.play();
}

function colorToggle(add, remove1, remove2, remove3, remove4, remove5, remove6, remove7){
  mainContainer.classList.add(`${add}`);
  mainContainer.classList.remove(`${remove1}`);
  mainContainer.classList.remove(`${remove2}`);
  mainContainer.classList.remove(`${remove3}`);
  mainContainer.classList.remove(`${remove4}`);
  mainContainer.classList.remove(`${remove5}`);
  mainContainer.classList.remove(`${remove6}`);
  mainContainer.classList.remove(`${remove7}`);
}
function videoback(){
  // video transition
  if(video2.currentTime >12){
    transitionVideo(0,1,video1, video2, 2.3);
  }
  else{
    transitionVideo(0,1,video1, video2, 1.7);
  }
  // change scroll down to scroll up
  scrollNav.innerHTML = "scroll up";
  mainContainer = document.querySelector(".main-container");
  // color transition
      // when video1 is almost finished
  if(video1.currentTime > 13 ){
    console.log('maior que 13');
    colorToggle( "color-toggle", "color-toggle2", "color-toggle3", "color-toggle4", "color-toggle5", "color-toggle6", "color-toggle7", "color-toggle8");
    var underline = document.querySelector('#aboutNav');
    underline.style.borderColor = "rgb(79, 81, 90)";
    underline.style.transition = "border-color 3s ease 6s, color 3s ease 4s";
  }
  else{
    if(video1.currentTime > 11 ){
      console.log('maior que 11');
      colorToggle( "color-toggle5", "color-toggle2", "color-toggle3", "color-toggle4", "color-toggle", "color-toggle6", "color-toggle7", "color-toggle8");
      var underline = document.querySelector('#aboutNav');
      underline.style.borderColor = "rgb(79, 81, 90)";
      underline.style.transition = "border-color 3s ease 6s, color 3s ease 3s";
    }
    else{
      if(video1.currentTime > 6 ){
        console.log('maior que 6');
        colorToggle( "color-toggle6", "color-toggle2", "color-toggle3", "color-toggle4", "color-toggle5", "color-toggle", "color-toggle7", "color-toggle8");
        var underline = document.querySelector('#aboutNav');
        underline.style.borderColor = "rgb(79, 81, 90)";
        underline.style.transition = "border-color 3s ease 6s, color 3s ease 2s";
      }
      else{
        if(video1.currentTime > 3 ){
          console.log('maior que 3');
          colorToggle( "color-toggle7", "color-toggle2", "color-toggle3", "color-toggle4", "color-toggle5", "color-toggle6", "color-toggle", "color-toggle8");
          var underline = document.querySelector('#aboutNav');
          underline.style.borderColor = "rgb(79, 81, 90)";
          underline.style.transition = "border-color 3s ease 6s, color 3s ease 1s";
        }
        else{
          if(video1.currentTime > 2 ){
            console.log('maior que 2');
            colorToggle( "color-toggle8", "color-toggle2", "color-toggle3", "color-toggle4", "color-toggle5", "color-toggle6", "color-toggle7", "color-toggle");
            var underline = document.querySelector('#aboutNav');
            underline.style.borderColor = "rgb(79, 81, 90)";
            underline.style.transition = "border-color 3s ease 6s, color 3s ease 6s";
          }
          else{
            console.log('menor igual 2');

            colorToggle( "color-toggle8", "color-toggle2", "color-toggle3", "color-toggle4", "color-toggle5", "color-toggle6", "color-toggle7", "color-toggle");
          }
          var underline = document.querySelector('#aboutNav');
          underline.style.borderColor = "rgb(79, 81, 90)";
          underline.style.transition = "border-color 3s ease 6s, color 3s ease 6s";
      
        }
    
      }
      
  
    }
    

  }





}
// function underlineAnimation(borderValue, transition1){
//   var underline = document.querySelector('#aboutNav');
//   underline.style.borderColor =  borderValue;
//   underline.style.transition = `border-color 2s ease ${transition1}, color 2s ease ${transition1}`;
// }
function videostart(){
  // video transition
  transitionVideo(1,0,video2, video1, 2.5);
  // change scroll up to scroll down
  scrollNav.innerHTML = "scroll down";
  // color transition
  if(video1.currentTime < 2 ){
    console.log('video start menor que 2');
    colorToggle( "color-toggle2", "color-toggle", "color-toggle3", "color-toggle4", "color-toggle5", "color-toggle6", "color-toggle7", "color-toggle8");
    var underline = document.querySelector('#aboutNav');
    underline.style.borderColor =  "rgba(164, 210, 231, 0.603)";
    underline.style.transition = "border-color 2s ease 4s, color 2s ease 4s";
  }
  else{
    if(video1.currentTime < 8 ){
      colorToggle( "color-toggle4", "color-toggle2", "color-toggle3", "color-toggle", "color-toggle5", "color-toggle6", "color-toggle7", "color-toggle8");
      var underline = document.querySelector('#aboutNav');
      underline.style.borderColor =  "rgba(164, 210, 231, 0.603)";
      underline.style.transition = "border-color 2s ease 4s, color 2s ease 2s";
      console.log('video start menor  8');

    }else{
        colorToggle( "color-toggle3", "color-toggle2", "color-toggle", "color-toggle4", "color-toggle5", "color-toggle6", "color-toggle7", "color-toggle8");
        var underline = document.querySelector('#aboutNav');
        mainContainer.classList.remove("color-toggle7");
        underline.style.borderColor =  "rgba(164, 210, 231, 0.603)";
        underline.style.transition = "border-color 2s ease 4s, color 2s ease 2s";
        console.log('video start maior 8');
    }
  }

//end video transition
}




function underlineToggle(remove1,remove2,add){
  remove1.classList.remove("underline");
  remove2.classList.remove("underline");
  add.classList.add("underline");
}

scrollArea.addEventListener('scroll', function(e){
if((e.target.scrollTop >= 2775) && (video1.style.opacity == 1)){
  // about section
  underlineToggle(projectsNav,homeNav,aboutNav);
  videoback();
}
// project section
if((e.target.scrollTop > 975) && (e.target.scrollTop < 2075)){
  underlineToggle(homeNav,aboutNav,projectsNav);
}
// home section
if(e.target.scrollTop <=975){
  underlineToggle(aboutNav,projectsNav,homeNav);
}
if((e.target.scrollTop < 2775) && (video1.style.opacity == 0)){
  underlineToggle(homeNav,aboutNav,projectsNav);

  videostart();
}
});

// cursor animarion
var cursor = document.querySelector('#animatedCursor');
var timeoutId = null;

function cursorAnimation(imgSelector,opacityImg,opacityCursor,img,time){
  if(screenM.matches){
    timeoutId = window.setTimeout(function(){
      imgSelector.style.opacity= opacityImg;
      imgSelector.style.transition = "all 0.2s ease";
      cursor.style.opacity = opacityCursor;
      cursor.style.transition = "all 0.2s ease";
      cursor.style.backgroundImage = `url('media/${img}.png')`;
    },time);
  }
}

$('.menu').mousemove(function (e) {
 
  var i = $(".circle"),
      s = e.pageX - i.offset().left,
      o = e.pageY - i.offset().top;
  
  TweenMax.to($('.circle'), .3, {
    x: (s - i.width() / 2) / i.width() * 50,
    y: (o - i.height() / 2) / i.height() * 50,
    scale: 1.2,
    ease: Power2.easeOut
  })
  
  
 });
 
 $('.menu').mouseleave(function (e) {
 
  var i = $(".circle"),
      s = e.pageX - i.offset().left,
      o = e.pageY - i.offset().top;
  TweenMax.to($('.circle'), .3, {
    x: 0,
    y: 0,
    scale: 1,
    ease: Power2.easeOut
  })
  
 
  
 });


 $('.menu1').mousemove(function (e) {
 
  var i = $(".circle1"),
      s = e.pageX - i.offset().left,
      o = e.pageY - i.offset().top;
  
  TweenMax.to($('.circle1'), .3, {
    x: (s - i.width() / 2) / i.width() * 50,
    y: (o - i.height() / 2) / i.height() * 50,
    scale: 1.2,
    ease: Power2.easeOut
  })
  
  
 });
 
 $('.menu1').mouseleave(function (e) {
 
  var i = $(".circle1"),
      s = e.pageX - i.offset().left,
      o = e.pageY - i.offset().top;
  TweenMax.to($('.circle1'), .3, {
    x: 0,
    y: 0,
    scale: 1,
    ease: Power2.easeOut
  })
  
 
  
 });

 $('.menu2').mousemove(function (e) {
 
  var i = $(".circle2"),
      s = e.pageX - i.offset().left,
      o = e.pageY - i.offset().top;
  
  TweenMax.to($('.circle2'), .3, {
    x: (s - i.width() / 2) / i.width() * 50,
    y: (o - i.height() / 2) / i.height() * 50,
    scale: 1.2,
    ease: Power2.easeOut
  })
  
  
 });
 
 $('.menu2').mouseleave(function (e) {
 
  var i = $(".circle2"),
      s = e.pageX - i.offset().left,
      o = e.pageY - i.offset().top;
  TweenMax.to($('.circle2'), .3, {
    x: 0,
    y: 0,
    scale: 1,
    ease: Power2.easeOut
  })
  
 
  
 });


 $('.menu3').mousemove(function (e) {
 
  var i = $(".circle3"),
      s = e.pageX - i.offset().left,
      o = e.pageY - i.offset().top;
  
  TweenMax.to($('.circle3'), .3, {
    x: (s - i.width() / 2) / i.width() * 50,
    y: (o - i.height() / 2) / i.height() * 50,
    scale: 1.2,
    ease: Power2.easeOut
  })
  
  
 });
 
 $('.menu3').mouseleave(function (e) {
 
  var i = $(".circle3"),
      s = e.pageX - i.offset().left,
      o = e.pageY - i.offset().top;
  TweenMax.to($('.circle3'), .3, {
    x: 0,
    y: 0,
    scale: 1,
    ease: Power2.easeOut
  })
  
 
  
 });