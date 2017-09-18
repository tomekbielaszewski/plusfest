// ==UserScript==
// @name       plusfest
// @namespace  https://wykop.pl/
// @version    1.0
// @description  #plusafera
// @match      https://www.wykop.pl/*
// @copyright  2017, @Grizwold
// @updateURL   https://github.com/tomekbielaszewski/plusfest/raw/master/tampermonkey/plusfest.user.js
// @installURL  https://github.com/tomekbielaszewski/plusfest/raw/master/tampermonkey/plusfest.user.js
// @downloadURL https://github.com/tomekbielaszewski/plusfest/raw/master/tampermonkey/plusfest.user.js
// ==/UserScript==

$(function(){
  function attachButton() {
    var voteStyle = 'color: white;';
    var buttonStyle = 'background-color: #3b915f;' +
      'position: fixed;' +
      'top: 55px !important;' +
      'left: 5px !important; ';
    var button = $('<a class="button mikro" style="'+buttonStyle+'"><i class="fa fa-plus" style="'+voteStyle+'"></i></a>');
    $("#site").append(button);
    return button;
  }

  function vote(selector) {
    var $voteArea = $(selector);
    $.each($voteArea, function(i, $val) {
      if (!($($val).find("b").hasClass("voted") || ($($val).parents("div[data-type='entrycomment']") && $($val).parents("div[data-type='entrycomment']").hasClass("deleted")))) {
        $($val).find("a").click();
      }
    });
  }

  attachButton().on('click', function() {
    vote('#itemsStream > li > ul > li > div > div > div.author.ellipsis > p');
    vote('#itemsStream > li > div > div > div.author.ellipsis > p');
  });
});
