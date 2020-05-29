$(document).ready(function () {
  $(".persons").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: ".arrow-prev",
    nextArrow: ".arrow-next",
  });
});

$(document).ready(function () {
  $(".brand1").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: ".arrow-prev1",
    nextArrow: ".arrow-next1",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".brand4").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: ".arrow-prev1",
    nextArrow: ".arrow-next1",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

$(window).on("load", function () {
  $(".loader-wrapper").fadeOut("slow");
});

$(".coolicon").slick({
  lazyLoad: "ondemand",
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".coolicon1").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});

$(window).scroll(function () {
  var sticky = $(".bgheadfix"),
    scroll = $(window).scrollTop();
  if (scroll >= 500) sticky.addClass("fixed");
  else sticky.removeClass("fixed");
});

$(window).scroll(function () {
  var sticky = $(".fixh2"),
    scroll = $(window).scrollTop();
  if (scroll >= 500) sticky.addClass("fixed2");
  else sticky.removeClass("fixed2");
});

$(window).scroll(function () {
  var sticky = $(".navnav"),
    scroll = $(window).scrollTop();
  if (scroll >= 500) sticky.addClass("fixed");
  else sticky.removeClass("fixed");
});

$(window).scroll(function () {
  var sticky = $(".navnav2"),
    scroll = $(window).scrollTop();
  if (scroll >= 500) sticky.addClass("fixed2");
  else sticky.removeClass("fixed2");
});

$(window).scroll(function () {
  var sticky = $(".navnav3"),
    scroll = $(window).scrollTop();
  if (scroll >= 500) sticky.addClass("fixed3");
  else sticky.removeClass("fixed3");
});

$(window).scroll(function () {
  var sticky = $(".bghome3"),
    scroll = $(window).scrollTop();
  if (scroll >= 500) sticky.addClass("fixed3");
  else sticky.removeClass("fixed3");
});

filterSelection("all"); // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("Portfoliobtn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// $("body").niceScroll({
//   cursorcolor: "#8150FA",
//   cursorwidth: 15,
//   cursorminheight: 0,
//   cursorfixedheight: 150,
// });

// $(".do-nicescrol4").niceScroll("");
