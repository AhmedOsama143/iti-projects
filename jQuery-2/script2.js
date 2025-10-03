let currentIndex = 0;
let images = $(".gallery img")
  .map(function () {
    return $(this).attr("src");
  })
  .get();

$(".gallery img").click(function () {
  currentIndex = $(this).index();
  showImage();
  $("#sliderOverlay").css("display", "flex");
});

function showImage() {
  $("#sliderImage").attr("src", images[currentIndex]);
}

// Next
$("#next").click(function () {
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
});

// Prev
$("#prev").click(function () {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage();
});

// Close
$("#closeBtn").click(function () {
  $("#sliderOverlay").fadeOut();
});
