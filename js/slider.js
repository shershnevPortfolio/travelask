var reviwesArticleMargin = 8;
 var reviwesArticles =  document.getElementsByClassName('reviews__article');

 function setArticlesMargins() {
  let reviwesArticlesSectionWidth = (reviwesArticles[0].offsetWidth + reviwesArticleMargin)*reviwesArticles.length;
  alert(reviwesArticles[0].offsetWidth);
  document.getElementById('reviews__section').style.width = reviwesArticlesSectionWidth + 'px';
  let carouselSwitchContainer = document.getElementById('carousel__switch-container');
    for (let i = 0; i < reviwesArticles.length/3; i++) {
     	let carouselSwitch = document.createElement('div');
     	carouselSwitch.className = 'carousel__switch';
     	if (i == 0) {
     		carouselSwitch.classList.add('active');
     	}
     	 carouselSwitchContainer.appendChild(carouselSwitch)
	}

   var carouselSwitch = document.getElementsByClassName('carousel__switch');
   for (let i = 0; i < carouselSwitch.length; i++) {
        carouselSwitch[i].addEventListener('click', slideArticles);
        carouselSwitch[i].id = "carouselSwitch-" + (i + 1);
     }
} 

function slideArticles() {
	 let activeCarouselSwitch = document.getElementsByClassName('active carousel__switch');
	 /*var carouselSwitch = document.getElementsByClassName('carousel__switch');*/
	 /*let carouselSwitchContainer = document.getElementById('carousel__switch-container');*/
	 /*carouselSwitchContainer.lastChild.onclick = function() {
	 }*/
    if (this.classList.contains('active')) {
        return 0;
    }


    if (this.id.slice(this.id.lastIndexOf('-') + 1,this.id.length) == 1) {
   	  document.getElementsByClassName('reviews__section')[0].style.left = 0 + 'px';
   	  activeCarouselSwitch[0].classList.toggle('active'); 
   	  this.classList.toggle('active');
    }
    else {
  
   let numbersOfSwitchesBetweenActiveAndThis = this.id.slice(this.id.lastIndexOf('-') + 1,this.id.length) -
     activeCarouselSwitch[0].id.slice(activeCarouselSwitch[0].id.lastIndexOf('-') + 1,activeCarouselSwitch[0].id.length);
   left = (reviwesArticles[0].offsetWidth + reviwesArticleMargin)*3 ;
   var reviewsContainer = document.getElementsByClassName('reviews');
   var currentLeft = getComputedStyle(document.getElementsByClassName('reviews__section')[0]).getPropertyValue('left');
   document.getElementsByClassName('reviews__section')[0].style.left =  left * numbersOfSwitchesBetweenActiveAndThis * -1 + 
     Number(currentLeft.slice(0,currentLeft.length - 2)) + 'px';
   alert(currentLeft);
    activeCarouselSwitch[0].classList.toggle('active');
   this.classList.toggle('active'); 
  }
 
   
           
   
  
}

  


window.addEventListener('load', setArticlesMargins);
		