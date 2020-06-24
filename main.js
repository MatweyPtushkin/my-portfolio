// кнопка в начало (стрелочка)

$('a[data-target^="anchor"]').bind("click.smoothscroll", function () {
  let target = $(this).attr("href");
  let scrollTop = $(target).offset().top - 200;
  $("body, html").animate({ scrollTop: scrollTop }, 700);
  return false;
});

// слайдер для блоков с навыками.

let buttons = document.querySelectorAll(".skills-button");
for (let i = 0; i < buttons.length; i++) {
  $(buttons[i]).click(function () {
    let slideBlock = document.querySelectorAll(".slide-toggle");
    $(slideBlock[i]).slideToggle(1000);
  });
}

// показать сертификат на который кликнул
$('img[data-toggle="modal"]').click(function () {
  let src = $(this).attr("src");
  $(".modal-dialog img").attr("src", src);
});
