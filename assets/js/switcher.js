$('.topbutton').first().addClass('topractive');
$('.topbutton').click(function(){
	var $this = $(this);
	$siblings = $this.parent().children(),
	position = $siblings.index($this);
	console.log(position);
	$('.topchange div').removeClass('topractive');
	$('.topchange-' + position).addClass('topractive');
	$siblings.removeClass('topractive');
	$this.addClass('topractive');
});