// fade in grid items  ==================================

$(document).on("scroll", function () {
    var pageTop = $(document).scrollTop()
    var pageBottom = pageTop + $(window).height()
    var tags = $(".fadein")

    for (var i = 0; i < tags.length; i++) {
      var tag = tags[i]

      if ($(tag).offset().top < pageBottom) {
        $(tag).addClass("visible")
      } else {
        $(tag).removeClass("visible")
      }
    }
  })




  // $(document).on("scroll", function () {
  //   var pageTop = $(document).scrollTop()
  //   var pageBottom = pageTop + $(window).height()
  //   var tags = $(".slideright")

  //   for (var i = 0; i < tags.length; i++) {
  //     var tag = tags[i]

  //     if ($(tag).offset().top < pageBottom) {
  //       $(tag).addClass("reveal")
  //     } else {
  //       $(tag).removeClass("reveal")
  //     }
  //   }
  // })



  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  







  









  