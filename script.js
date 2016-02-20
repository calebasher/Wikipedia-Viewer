$(document).ready(function(){

	$('#srchForm').submit(function(e) {
	e.preventDefault();
	});

	window.searchFunction = function () {

		$('#results').empty();

		var searchInput = $('#srch').val();

		$.getJSON("http://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=Main+Page&generator=search&exchars=226&exlimit=10&exintro=1&explaintext=1&gsrsearch="+searchInput+"&callback=?", function(json) {
			var returns = json.query.pages;
			for (var x in returns) {

				var section = '<div class ="well"><h3><a href="https://en.wikipedia.org/?curid='+returns[x].pageid+'"'+'target="blank">'+returns[x].title +'</h3></a>'+'<div>'+returns[x].extract+'</div></div>';

				$('#results').append(section);
			}		
		});
	};	
});

