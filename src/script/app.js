'use strict';

function drawRandomBox( ctx ) {
	console.log( ctx );
	var half = ctx.canvas.width / 2,
		margin = 5;

	ctx.fillStyle = 'black';
	ctx.beginPath();
	ctx.moveTo(margin, margin);
	// ctx.quadraticCurveTo(
	// 		Math.random() * ,
	// 		Math.random() * ,
	// 		margin,
	// 		margin
	// );
	ctx.quadraticCurveTo(
			Math.random() * ctx.canvas.width,
			Math.random() * margin,
			ctx.canvas.width - margin,
			margin
	);
	ctx.quadraticCurveTo(
			( ctx.canvas.height - margin) + (Math.random() * margin),
			( ctx.canvas.width - margin ) + Math.random() * margin,
			ctx.canvas.width - margin,
			ctx.canvas.height - margin
	);
	ctx.quadraticCurveTo(
			Math.random() * ctx.canvas.width,
			( ctx.canvas.height - margin ) + Math.random() * margin,
			margin,
			ctx.canvas.height - margin
	);
	ctx.quadraticCurveTo(
			Math.random() * margin,
			Math.random() * ctx.canvas.width,
			0,
			margin
	);
	ctx.rotate( 45 * Math.PI / 180 );
	ctx.fill();
}

function setUpCanvas() {
	var cs = document.querySelectorAll( '.project__graphic' ),
		d = cs[0].parentElement.clientWidth;

	for (var i = cs.length - 1; i >= 0; i--) {
		cs[i].width = d;
		cs[i].height = d;
		drawRandomBox( cs[i].getContext( '2d' ) );
	}
}

document.addEventListener('DOMContentLoaded', function() {
	// setUpCanvas();
});