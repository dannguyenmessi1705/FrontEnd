$("#password").focusin(function () {
  $("form").addClass("up");

  $(".btn").click(function () {
    if (check) {
      $("form").addClass("up");
    }
  });
});
$("#password").focusout(function () {
  $("form").removeClass("up");
});

// Panda Eye move
$(document).on("mousemove", function (event) {
  var dw = $(document).width() / 10;
  var dh = $(document).height() / 10;
  var x = event.pageX / dw;
  var y = event.pageY / dh;
  $(".eye-ball").css({
    width: x,
    height: y,
  });
});

// validation

$(".btn").click(function () {
  $("form").addClass("wrong-entry");
  setTimeout(function () {
    $("form").removeClass("wrong-entry");
  }, 3000);
});
