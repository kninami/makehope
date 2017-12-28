$(document).ready(function(){
  //swiper
  var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  //countup
  var options = {
    useEasing: true,
    useGrouping: true,
    separator: ',',
    decimal: '.',
  };
  var userCount = new CountUp('user-countup', 0, 59, 0, 1.0, options);
  if (!userCount.error) {
    userCount.start();
  } else {
    console.error(userCount.error);
  }
})
