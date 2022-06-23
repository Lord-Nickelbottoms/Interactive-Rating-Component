if ( document.readyState == 'loading' )
{
	document.addEventListener( 'DOMContentLoaded', ready )
}
else
{
	ready()
}

function ready ()
{
	let userRating = document.querySelectorAll( '.dot' )

	for ( let index = 0; index < userRating.length; index++ )
	{
		let button = userRating[ index ]
		button.addEventListener( 'click', applyRating )
	}

	let submitBtn = document.getElementsByClassName( 'submit' )[ 0 ]
	submitBtn.addEventListener( 'click', submitRating )
}

var text

function applyRating ( event )
{
	let button = event.target
	button.setAttribute( "class", "dot checked" )

	text = button.innerText
	// text = document.getElementsByClassName( 'dot' )[ 0 ].innerText

	document.getElementById( 'submitBtn' ).disabled = false
}

function submitRating ()
{
	document.getElementById( 'square1' ).setAttribute( 'hidden', '' )
	document.getElementById( 'square2' ).style.display = 'flex'

	document.getElementsByClassName( 'selection' )[ 0 ].innerText = `You have selected ${ text } out of 5`
}