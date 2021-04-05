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

// copy to clipboard variables
var clipboard = document.getElementById('clipboard');
var clipboard2 = document.getElementById('clipboard2');
var iconCopy = document.querySelector('.iconCopy');
var iconCopy2 = document.querySelector('.iconCopy2');
var copyto = document.querySelector('.copyto');
var copyto2 = document.querySelector('.copyto2');
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
  }else{
    // console.log(88);

  }
  if(screenMmax.matches){

    // mousemoveAnimation(".menu1", ".circle1",1.2);
    // mousemoveAnimation(".menu2", ".circle2",1.2);
    // mousemoveAnimation(".menu3", ".circle3",1.2);
    // mouseleaveAnimation(".menu1", ".circle1",1);
    // mouseleaveAnimation(".menu2", ".circle2",1);
    // mouseleaveAnimation(".menu3", ".circle3",1);
    }
    else{
      // cursor animarion

// var cursor = document.querySelector('#animatedCursor');
// var timeoutId = null;

// function cursorAnimation(imgSelector,opacityImg,opacityCursor,img,time){
//   if(screenM.matches){
//     timeoutId = window.setTimeout(function(){
//       imgSelector.style.opacity= opacityImg;
//       imgSelector.style.transition = "all 0.2s ease";
//       cursor.style.opacity = opacityCursor;
//       cursor.style.transition = "all 0.2s ease";
//       cursor.style.backgroundImage = `url('media/${img}.png')`;
//     },time);
//   }
// }

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
  if((video1.currentTime > 13) ){
    // console.log('maior que 13');
    colorToggle( "color-toggle", "color-toggle2", "color-toggle3", "color-toggle4", "color-toggle5", "color-toggle6", "color-toggle7", "color-toggle8");
    var underline = document.querySelector('#aboutNav');
    underline.style.borderColor = "rgb(79, 81, 90)";
    underline.style.transition = "border-color 3s ease 6s, color 3s ease 4s";
  }
  else{
    if((video1.currentTime > 11) ){
      // console.log('maior que 11');
      colorToggle( "color-toggle5", "color-toggle2", "color-toggle3", "color-toggle4", "color-toggle", "color-toggle6", "color-toggle7", "color-toggle8");
      var underline = document.querySelector('#aboutNav');
      underline.style.borderColor = "rgb(79, 81, 90)";
      underline.style.transition = "border-color 3s ease 6s, color 3s ease 3s";
    }
    else{
      if((video1.currentTime > 6 ) && (video1.style.opacity != "0") && (video2.style.opacity != "0")){
        // console.log('maior que 6');
        colorToggle( "color-toggle6", "color-toggle2", "color-toggle3", "color-toggle4", "color-toggle5", "color-toggle", "color-toggle7", "color-toggle8");
        var underline = document.querySelector('#aboutNav');
        underline.style.borderColor = "rgb(79, 81, 90)";
        underline.style.transition = "border-color 3s ease 6s, color 3s ease 2s";
      }
      else{
        if((video1.currentTime > 3) ){
          // console.log('maior que 3');
          colorToggle( "color-toggle7", "color-toggle2", "color-toggle3", "color-toggle4", "color-toggle5", "color-toggle6", "color-toggle", "color-toggle8");
          var underline = document.querySelector('#aboutNav');
          underline.style.borderColor = "rgb(79, 81, 90)";
          underline.style.transition = "border-color 3s ease 6s, color 3s ease 1s";
        }
        else{
          if((video1.currentTime > 2 ) && (video1.style.opacity != "0") && (video2.style.opacity != "0")){
            // console.log('maior que 2');
            console.log(video1.style.display);

            colorToggle( "color-toggle8", "color-toggle2", "color-toggle3", "color-toggle4", "color-toggle5", "color-toggle6", "color-toggle7", "color-toggle");
            var underline = document.querySelector('#aboutNav');
            underline.style.borderColor = "rgb(79, 81, 90)";
            underline.style.transition = "border-color 3s ease 6s, color 3s ease 6s";
          }
          else{
            // console.log('menor igual 2');
            if((video1.style.opacity != "0") && (video2.style.opacity != "0")){
              colorToggle( "color-toggle8", "color-toggle2", "color-toggle3", "color-toggle4", "color-toggle5", "color-toggle6", "color-toggle7", "color-toggle");

            }
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
  if((video1.currentTime < 2)){
    // console.log('video start menor que 2');
    colorToggle( "color-toggle2", "color-toggle", "color-toggle3", "color-toggle4", "color-toggle5", "color-toggle6", "color-toggle7", "color-toggle8");
    var underline = document.querySelector('#aboutNav');
    underline.style.borderColor =  "rgba(164, 210, 231, 0.603)";
    underline.style.transition = "border-color 2s ease 4s, color 2s ease 4s";
  }
  else{
    if((video1.currentTime < 8)){
      colorToggle( "color-toggle4", "color-toggle2", "color-toggle3", "color-toggle", "color-toggle5", "color-toggle6", "color-toggle7", "color-toggle8");
      var underline = document.querySelector('#aboutNav');
      underline.style.borderColor =  "rgba(164, 210, 231, 0.603)";
      underline.style.transition = "border-color 2s ease 4s, color 2s ease 2s";
      // console.log('video start menor  8');

    }else{
      if(video1.style.display != "none"){
        colorToggle( "color-toggle3", "color-toggle2", "color-toggle", "color-toggle4", "color-toggle5", "color-toggle6", "color-toggle7", "color-toggle8");
        var underline = document.querySelector('#aboutNav');
        mainContainer.classList.remove("color-toggle7");
        underline.style.borderColor =  "rgba(164, 210, 231, 0.603)";
        underline.style.transition = "border-color 2s ease 4s, color 2s ease 2s";
        // console.log('video start maior 8');
      }
        
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



 // copy to clipboard
function copyElementText(id) {
  var text = document.querySelector(id).innerText;
  // console.log(text);
  var elem = document.createElement("textarea");
  document.body.appendChild(elem);
  elem.value = text;
  elem.select();
  document.execCommand("copy");
  document.body.removeChild(elem);
}

// animation clipboard buttons
clipboard.addEventListener('mouseenter', function(){
  iconCopy.style.opacity='1';
  iconCopy.style.transition ="all 1s ease";
  copyto.style.opacity='1';
  copyto.style.transition ="all 1s ease";
});
clipboard.addEventListener('mouseleave', function(){
  iconCopy.style.opacity='0';
  iconCopy.style.transition ="all 1s ease";
  copyto.style.opacity='0';
  copyto.style.transition ="all 1s ease";
});
clipboard2.addEventListener('mouseenter', function(){
  iconCopy2.style.opacity='1';
  iconCopy2.style.transition ="all 1s ease";
  copyto2.style.opacity='1';
  copyto2.style.transition ="all 1s ease";
});
clipboard2.addEventListener('mouseleave', function(){
  iconCopy2.style.opacity='0';
  iconCopy2.style.transition ="all 1s ease";
  copyto2.style.opacity='0';
  copyto2.style.transition ="all 1s ease";
});
var bubble = document.getElementById('clipboard');

// animation on lauch code button
// var bubble = document.getElementById('clipboard');
// bubble.addEventListener('mouseenter', function(){
//   bubble.style.transform ="scale(1.05,1.05)";
// });
// bubble.addEventListener('mouseleave', function(){
//   bubble.style.transform ="scale(1,1)";
// });

bubble.addEventListener('click', function(e){
  e.preventDefault;
  // -> removing the class
  bubble.classList.remove("animation");
  void bubble.offsetWidth;
  // -> and re-adding the class
  bubble.classList.add("animation");
});
var bubble2 = document.getElementById('clipboard2');

// var bubble2 = document.getElementById('clipboard2');
// bubble2.addEventListener('mouseenter', function(){
//   bubble2.style.transform ="scale(1.05,1.05)";
// });
// bubble2.addEventListener('mouseleave', function(){
//   bubble2.style.transform ="scale(1,1)";
// });



bubble2.addEventListener('click', function(e){
  e.preventDefault;
  // -> removing the class
  bubble2.classList.remove("animation");
  void bubble2.offsetWidth;
  // -> and re-adding the class
  bubble2.classList.add("animation");
});

var bubble3 = document.querySelector('.source');
bubble3.addEventListener('mouseenter', function(){
  // console.log(456);
  bubble3.style.transition ="all 0.3s ease 0s";
  bubble3.style.transform ="scale(1.1,1.1)";
});
bubble3.addEventListener('mouseleave', function(){
  bubble3.style.transform ="scale(1,1)";
  bubble3.style.transition ="all 0.3s ease 0s";
});

var bubble4 = document.querySelector('.source2');
bubble4.addEventListener('mouseenter', function(){
  bubble4.style.transition ="all 0.3s ease 0s";
  bubble4.style.transform ="scale(1.1,1.1)";
});
bubble4.addEventListener('mouseleave', function(){
  bubble4.style.transform ="scale(1,1)";
  bubble4.style.transition ="all 0.3s ease 0s";
});

var bubble5 = document.querySelector('.source3');
bubble5.addEventListener('mouseenter', function(){
  bubble5.style.transition ="all 0.3s ease 0s";
  bubble5.style.transform ="scale(1.1,1.1)";
});
bubble5.addEventListener('mouseleave', function(){
  bubble5.style.transform ="scale(1,1)";
  bubble5.style.transition ="all 0.3s ease 0s";
});

var bubble6 = document.querySelector('.source4');
bubble6.addEventListener('mouseenter', function(){
  bubble6.style.transition ="all 0.3s ease 0s";
  bubble6.style.transform ="scale(1.1,1.1)";
});
bubble6.addEventListener('mouseleave', function(){
  bubble6.style.transform ="scale(1,1)";
  bubble6.style.transition ="all 0.3s ease 0s";
});

var bubble7 = document.querySelector('.source5');
bubble7.addEventListener('mouseenter', function(){
  bubble7.style.transition ="all 0.3s ease 0s";
  bubble7.style.transform ="scale(1.1,1.1)";
})
bubble7.addEventListener('mouseleave', function(){
  bubble7.style.transform ="scale(1,1)";
  bubble7.style.transition ="all 0.3s ease 0s";
});

var bubble8 = document.querySelector('.source6');
bubble8.addEventListener('mouseenter', function(){
  bubble8.style.transition ="all 0.3s ease 0s";
  bubble8.style.transform ="scale(1.1,1.1)";
});
bubble8.addEventListener('mouseleave', function(){
  bubble8.style.transform ="scale(1,1)";
  bubble8.style.transition ="all 0.3s ease 0s";
});

// var bubble9 = document.querySelector('.source7');
// bubble9.addEventListener('mouseenter', function(){
//   console.log('jjj');
//   console.log(456);
//   bubble9.style.transition ="all 0.3s ease 0s";
//   bubble9.style.transform ="scale(1.1,1.1)";
// });
// bubble9.addEventListener('mouseleave', function(){
//   bubble9.style.transform ="scale(1,1)";
//   bubble9.style.transition ="all 0.3s ease 0s";
// });