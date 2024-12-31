const h3Elements = $(".footer-links-wrapper h3");
console.log(h3Elements);
h3Elements.on("click", function () {
  console.log($(window).width());
  // add window width condition
  if ($(window).width() <= 768) {
    // toggle the visibiltiy of the ul element
    console.log($(this));
    console.log($(this).next());
    $(this).next().slideToggle();
    // toogel the classname
    $(this).toggleClass("expanded ");
  }
});

$(window).resize(function () {
  console.log($(window).width());
  // reload the page
  window.location.reload();
});
