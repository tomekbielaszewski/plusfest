javascript: (function() {
  function voteUp(selector) {
    var $voteArea = $(selector);
    $.each($voteArea, function(i, $val) {
      if (!($($val).find("b").hasClass("voted") || ($($val).parents("div[data-type='entrycomment']") && $($val).parents("div[data-type='entrycomment']").hasClass("deleted")))) {
        $($val).find("a").click();
      }
    });
  }
  voteUp("#itemsStream > li > ul > li > div > div > div.author.ellipsis > p");
  voteUp("#itemsStream > li > div > div > div.author.ellipsis > p");
})();