$(function(){


  $(document).ready(function () {
    $(".menu a").on("click", function (e) {
      //отменяем стандартную обработку нажатия по ссылке
      e  .preventDefault();

      //забираем идентификатор бока с атрибута href
      var id = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;

      //анимируем переход на расстояние - top за 1500 мс
      $('body,html').animate({
        scrollTop: top
      }, 2000);
    });
  });


  $('.blog-slider__wrap').slick({
    dots: true,
    arrows: false
  });


  $('.menu__btn, .menu a').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');
    $('.menu__top-inner').toggleClass('menu__top-inner--active');
  });

  let mixer = mixitup('.gallery__inner');

});



