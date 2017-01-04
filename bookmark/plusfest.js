javascript: (function() {
  function vote(selector) {
    var $voteArea = $(selector);
    $.each($voteArea, function(i, $val) {
      if (!($($val).find("b").hasClass("voted") || ($($val).parents("div[data-type='entrycomment']") && $($val).parents("div[data-type='entrycomment']").hasClass("deleted")))) {
        $($val).find("a").click();
      }
    });
  }
  vote("#itemsStream > li > ul > li > div > div > div.author.ellipsis > p");
  vote("#itemsStream > li > div > div > div.author.ellipsis > p");
})();