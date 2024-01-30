$(function() {
  $("#toggle_button").click(function() {
    if (i == 0){
    $("#sub_img_toggle").hide();
    i += 1
    }
    else{
      $("#sub_img_toggle").show();
      i = 0
    }
  })
})