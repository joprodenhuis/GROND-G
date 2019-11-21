/* =============================================================================
#ANIMATIONS 
============================================================================= */
TweenMax.from(".box-left, .box-right", 0.7, {
	scale: 0.95,
	opacity: 0
});
TweenMax.from(".intro-icon", 1, {
	x:-60,
	opacity: 0,
	delay: 1.5,
	ease:Power4.easeOut
});

TweenMax.from("h1", 0.8, {
	y: 50,
	opacity: 0,
	delay: 0.3
})

TweenMax.from(".intro-content", 1, {
	scaleY: 0,
	transformOrigin: "50% top",
	opacity: 0,
	delay: 0.6
})

TweenMax.from(".stelling", 2, {
	x: -60,
	opacity: 0,
	delay: 1.5,
	ease:Power4.easeOut
});

TweenMax.from(".btn", 1, {
	x: -50
});


/* =============================================================================
#MENU TOGGLE 
============================================================================= */
$(".js-toggleMenu").click(function(){
	console.log("Hallo");
	$("body").toggleClass("menu-is-open"); //add menu-is-open item on body to toggle the styling
	$(".toggle-menu").toggleClass("change");
});


/* =============================================================================
#HEADER FADE IN  
============================================================================= */
//init controller
var controller = new ScrollMagic.Controller();

//loop through all elements with the class fade-in
$('.fade-in').each(function(){

	//build a tween
	var tween = TweenMax.from($(this), 0.5, {
		opacity: 0,
		y: '+=40',
		ease:Linear.easeIn
	});

	//build a scene
	var scene = new ScrollMagic.Scene({
		offset: -280,
		triggerElement: this
	})
	.setTween(tween) //trigger a tweenMax tween
	.addTo(controller);

	var reverse = scene.reverse();

	scene.reverse(false);
});

