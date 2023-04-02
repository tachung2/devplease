var slides = document.querySelector('.Layoutcamera'),
    slide = document.querySelectorAll('.Layoutcamera div'),
    currentIdx = 0,
    slideCount = slide.length,
    slideWidth = 200,
    slideMargin = 0;

    makeClone();

    function makeClone(){
        for(var i = 0; i < slideCount; i++){
            var cloneSlide = slide[i].cloneNode(true);
            cloneSlide.classList.add('clone');
            slides.appendChild(cloneSlide)
        }
        for(var i = slideCount -1; i>=0; i--){
            var cloneSlide = slide[i].cloneNode(true);
            cloneSlide.classList.add('clone');
            slides.prepend(cloneSlide);
        }
        updateWidth();
        setInitialPos();
        setTimeout(function(){
            slides.classList.add('animated');
        },100);
    }

    function updateWidth(){
        var currnetSlides = document.querySelectorAll('.Layoutcamera div');
        var newSlideCount = currnetSlides.length;

        var newWidth = (slideWidth + slideMargin)*newSlideCount + 'px';
        slides.style.width = newWidth;
    }

    function setInitialPos(){
        var initialTranslateValue = (slideWidth + slideMargin) * slideCount;
        slides.style.transform = 'translateX('+ initialTranslateValue+ 'px)';

    }

    function moveSlide(num){
        slides.style.left = -num * (slideWidth + slideMargin) + 'px';
        currentIdx = num;

    }

    var timer = undefined;

    function autoSlide(){
        if(timer == undefined){
            timer = setInterval(() => {
                moveSlide(currentIdx + 1);
            }, 3000);
        }
    }
    autoSlide();