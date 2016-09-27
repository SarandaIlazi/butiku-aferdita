	var myImage= document.getElementById("myPhoto");
	var imageArray = ["img/cover.jpg", "img/cover1.jpg", "img/cover4.jpg"];
	
	var imageIndex=0;
	
	function changeImage(){
		var carousel = document.getElementsByClassName("carousel-img")[0];
		if(carousel === undefined) return;
		carousel.style.cssText = "background: url('" + imageArray[imageIndex] + "') center center / cover";
		imageIndex++;
		if(imageIndex>=imageArray.length){
			imageIndex=0;
		}
	}
	changeImage();
	setInterval(changeImage, 3000);
	
	(function(d, s, id) {
	  var js, fjs = d.getElementsByTagName(s)[0];
	  if (d.getElementById(id)) return;
	  js = d.createElement(s); js.id = id;
	  js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.5";
	  fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));
	
	// scripta ballina, fb-page
	
	(function(d, s, id) {
		  var js, fjs = d.getElementsByTagName(s)[0];
		  if (d.getElementById(id)) return;
		  js = d.createElement(s); js.id = id;
		  js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.5";
		  fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));