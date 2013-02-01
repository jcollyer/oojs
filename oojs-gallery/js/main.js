





//Object Literal Notation
var Gallery = {
    Images: ['1.jpg', '2.jpg', '3.jpg'],
	CurrentIndex: 0,
    Next: function(){
	    if(Gallery.CurrentIndex < (Gallery.Images.length-1)){
	        Gallery.CurrentIndex++;
	    }else{
	        Gallery.CurrentIndex = 0;
	    }
	    Gallery.Display();
	},
	Prev: function(){
	    if(Gallery.CurrentIndex > 0){
	        Gallery.CurrentIndex--;
	    }else{
	        Gallery.CurrentIndex = (Gallery.Images.length-1);
	    }
	    Gallery.Display();
	},
	Display: function(){
	    var photoGallery = document.getElementById('main');
	    var currentImage = Gallery.Images[Gallery.CurrentIndex];
	    photoGallery.src = "img/"+currentImage;
	}
}
window.onload = function(){
	var _loopInterval = setInterval(Gallery.Next, 2500);
}




//wrapper function for scope
function prototypeGallery(){

//Class - Prototype 
function GalleryObj(){
	this.Images = ['1.jpg','2.jpg','3.jpg'];
	this.CurrentIndex = 0;
	this._loopInterval = setInterval(this.Next, 2500);
}

GalleryObj.prototype.Next = function(){
	if(Gallery.CurrentIndex < (Gallery.Images.length-1)){
		Gallery.CurrentIndex++;
	}else{
		Gallery.CurrentIndex = 0;
	}
	Gallery.Display();
};

GalleryObj.prototype.Prev = function(){
	if(Gallery.CurrentIndex > 0){
		Gallery.CurrentIndex--;
	}else{
		Gallery.CurrentIndex = (Gallery.Images.length-1)
	}
	Gallery.Display();
};
GalleryObj.prototype.Display = function(){
	var photoGallery = document.getElementById('main2');
	var currentImage = Gallery.Images[Gallery.CurrentIndex];
	photoGallery.src = "img/"+currentImage;
};

var Gallery = new GalleryObj();

}
prototypeGallery();

$(document).ready(function(){

	// for (var i=1; i<101; i++){
	// 	var f = i % 3 == 0;
	// 	var b = i % 5 == 0;
	// 	var x = f ? b ? "FizzBuzz" : "Fizz" : b? "Buzz" : i;
	// 	//console.log(x);
	// 	$('body').append("<p>"+x+"</p>");
	// }

});

// var Person = function Person(living, age, gender){
// 	this.living = living;
// 	this.age = age;
// 	this.gender = gender;
// 	this.getGender = function() {return this.gender;};
// };
// var molly = new Person(true, 89, 'female');
// var dody = new Person(true, 88, 'male');
// dody.age = 55;
// molly.living = false;
// console.log(dody);
// console.log(molly);
// console.log(typeof dody);
// console.log(dody.constructor);




