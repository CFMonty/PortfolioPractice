// $(function() {
//   $('.topNavbar').hover(function() {
//     $(this).find('.dropdown').toggle()
//   }, function(){
// });
// });

// $(document).ready(function () {
//   $('.dropdown').click(function () {
//       $('.sub-nav').toggleClass('visible');
//   });
// });

$(".topNavbar").on("click", function() {
  $(".dropdown").toggle();
});