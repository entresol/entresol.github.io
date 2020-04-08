var heroImage = "";
var paragraphs = "";

var loaded = true;


window.addEvent("domready", main);

function main() {
	console.log("dom ready.");
	
	heroImage = $("heroImage");
	heroImage.set("tween", { duration: 5000 });
/* 	heroImage.fade("hide"); */
	
	paragraphs = $$("#main p");
	console.log(paragraphs);
	console.log(paragraphs.length);
	for ( var i = 0; i < paragraphs.length; i++ ) {
		var paragraph = paragraphs[i];
		paragraph.set("tween", { duration: 2000 });
		paragraph.fade("hide");
	}
	
	heroImage.addEvent("load", onHeroImageLoad);
	
	window.setTimeout( function() {
		if (loaded) {
			onHeroImageLoad();
		}
	}, 1000);
}

function onHeroImageLoad (e) {

	loaded = false;
	
	console.log("hero image loaded.");
/* 	heroImage.fade("in"); */
	
	for (var i = 0; i < paragraphs.length; i++) {
		
		var paragraph = paragraphs[i];
		console.log(i);
		
		startParagraphAnimation(i);
		
	}		
}

function startParagraphAnimation (index) {	
	console.log(index);
	console.log("paragraph no " +  index + " fade start.");
	
	var dur = 500 + index*500;
	var par = paragraphs[index];
	
	window.setTimeout( function(index) {
		par.fade("in"); }, dur );
	
}