// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 5.1
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_stack_vertical(d,a,b){var e=jQuery;var c=e("li",b);this.go=function(k,h,n,m){var g=(k-h+1)%c.length;if(Math.abs(m)>=1){g=(m>0)?0:1}g=!!g^!!d.revers;var i=(d.revers?1:-1)+"00%";c.each(function(o){if(g&&o!=h){this.style.zIndex=(Math.max(0,this.style.zIndex-1))}});var j=e("ul",b);var l=document.all?0:"0%";var f=e(c.get(g?k:h)).clone().css({position:"absolute","z-index":4,width:"100%",top:0,top:(g?i:l),transform:"translate3d(0,0,0)"});if(g){f.appendTo(b)}else{f.insertAfter(j)}if(!g){j.stop(true,true).hide().css({left:-k+"00%"});if(d.fadeOut){j.fadeIn(d.duration)}else{j.show()}}else{if(d.fadeOut){j.fadeOut(d.duration)}}f.animate({top:(g?l:i)},d.duration,"easeInOutExpo",function(){if(g){j.css({left:-k+"00%"}).stop(true,true).show()}e(this).remove()});return k}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 5.1
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery("#wowslider-container1").wowSlider({effect:"stack",prev:"",next:"",duration:20*100,delay:30*100,width:1000,height:332,autoPlay:true,playPause:false,stopOnHover:false,loop:false,bullets:true,caption:false,captionEffect:"slide",controls:false,onBeforeStep:0,images:0});
