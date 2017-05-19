// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap
//= require masonry/jquery.masonry
//= require_tree .


/*===== 回到頁面頂端 =====*/
function goTop(min_height) {
  $(".goTop").click(
    function() {
      $('html,body').animate({
          scrollTop: 0
      }, 700);
    });
  min_height=min_height?min_height:2500; //按钮出现高度（画面下移）
  $(window).scroll(function() {
    var s = $(window).scrollTop();
    if (s > min_height) {
        $(".goTop").fadeIn(100); //按钮出现时间（画面下移）
    } else {
        $(".goTop").fadeOut(200); //按钮消失时间（画面上移）
    }
  });
}

$(function() {
  goTop();
});


/*===== 首頁導航列變化 =====*/
$(window).scroll(function () {
	var $navbar = $('#navbar')
	if ($(this).scrollTop() > 125) {
		$('#navbar').addClass('show_bgcolor')
	} else {
		$('#navbar').removeClass('show_bgcolor')
	}
})


/*===== 變更顯示圖片 =====*/
$(document).on('mouseover', '.list-image', function () {
  var src_other = $(this).attr('src')
  var src_main = src_other.toString().replace("other", "main")

  $('.main-image').attr('src', src_main) //變更大圖圖片路徑

  $('.list-image').removeClass('list-image-active') //其他圖片移除鎖定狀態
  $(this).addClass('list-image-active') //當前圖片新增鎖定狀態
})
