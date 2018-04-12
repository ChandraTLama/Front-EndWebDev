
// when the submit is clicked, makeGrid will be called which takes in heights as rows
//and width as columns
$("#sizePicker").submit(function(event){
	event.preventDefault();
	var rows = $("#inputHeight").val();
	var cols = $("#inputWeight").val();
	makeGrid(rows,cols);
}) 



function makeGrid(height,width) {
  var table = $("#pixelCanvas");
  var colorPicker = $("#colorPicker");

  table.children().remove();

  for (var i = 0; i < height; i++) {
    table.append("<tr></tr>");

    for (var j = 0; j < width; j++)
      table.children().last().append("<td></td>");
  }

  //when cell OR column in a row is clicked , change the color as  chosen in colorPicker
  table.on("click", "td", function() {
  	//take the value of color from ColorPicker
    var color = $("#colorPicker").val();
    // change the background color of the current element i.e. cell
    $(this).attr("bgcolor", color);
  });
}




