window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
    document.getElementById("header").style.fontSize = "32px";
    // document.getElementById("header_block").style.width = "20%";
  } else {
    document.getElementById("header").style.fontSize = "42px";
    // document.getElementById("header_block").style.width = "98%";
  }

  // if (document.body.scrollTop > 380 || document.documentElement.scrollTop > 380) {
  //   document.getElementById("slideshow-container").style.width = "40%";
  //   // document.getElementById("header_block").style.width = "20%";
  // } else {
  //   document.getElementById("slideshow-container").style.width = "80%";
  //   // document.getElementById("header_block").style.width = "98%";
  // }
}