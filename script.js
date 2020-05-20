$(document).ready(function () {
  console.log("Page ready!");
  $(".new-input").keypress(function (e) {
    var key = e.which;
    if (key == 13) {
      // the enter key code
      $(".new-add").trigger("click");
    }
  });
});

function closeBtn(obj) {
  $(obj).parent().remove();
}
function insert() {
  var itext = $(".new-task input").val();
  var dtext = "div-" + itext;
  if (itext === "") {
  } else {
    console.log($("#" + dtext).length);
    $(".container").prepend(
      '<div class="taskbar"><div class="tick t-tick"><img src="/icons/load.png" /></div><div class="task t-task">' +
        $(".new-task input").val() +
        '</div><div class="status t-status"><select name="status" onchange="changeStatus(this)" ><option value="c">Completed</option>      <option value="pc">Partially completed</option>      <option value="ip" selected>Incomplete</option>    </select></div><div class="close-btn" onclick="closeBtn(this)"><img src="/icons/fail.png" /></div></div>'
    );
  }
  $(".new-task input").val("");
}
function changeStatus(obj) {
  var tid = $(obj).parent().parent();
  if ($(obj).val() == "c") {
    $(tid).removeClass("p-completed").addClass("completed");
    $(".completed .tick img").attr("src", "/icons/green.png");
    console.log("completed");
  } else if ($(obj).val() == "pc") {
    $(tid).removeClass("completed").addClass("p-completed");
    $(".p-completed .tick img").attr("src", "/icons/yellow.png");
  } else if ($(obj).val() == "ip") {
    $(tid).removeClass("completed p-completed");
    $(".taskbar .tick img").attr("src", "/icons/load.png");
  }
}
