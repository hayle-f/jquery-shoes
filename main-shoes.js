$(document).ready(() => {
  ///////////////////////////////////////////
  // 1. Interacciones con el login y el menú
  $(".login-button").on("click", () => {
    $(".login-form").toggle();
    $(".login-button").toggleClass("button-active");

    if ($(".nav-menu").hasClass("hide") === false) {
      $(".nav-menu").addClass("hide");
      $(".menu-button").removeClass("button-active");
    }

  });

  $(".menu-button").on("click", () => {
    $(".menu-button").toggleClass("button-active");
    $(".nav-menu").toggleClass("hide");
    
    if($(".login-form").is(":visible")) {
      $(".login-form").hide();
      $(".login-button").removeClass("button-active");
    }
  });

  ///////////////////////////////////////////
  // 2. Interacciones con productos y detalles
  $(".more-details-button").on("click", (event) => {
    const $button = $(event.currentTarget);
    $button.closest(".product-details").next().toggle();
    $button.find("img").toggleClass("rotate");
  });

  $(".shoe-details li").on("click", (event) => {
    const $selectedItem = $(event.currentTarget);
    $selectedItem.addClass("active").siblings().removeClass("active");
    $selectedItem.closest(".shoe-details").children().removeClass("disabled");
  });

  $(".product-photo")
    .on("mouseenter", function() {
      $(this).addClass("photo-active");
    })
    .on("mouseleave", function() {
      $(this).removeClass("photo-active");
    });
});
