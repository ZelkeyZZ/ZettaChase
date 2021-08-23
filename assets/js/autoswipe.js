var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
	grabCursor: true,
	freeMode: true,
	mousewheel: true,
	centeredSlides: true,
	loop: true,
	effect: 'fade',
	mousewheel: {
		forceToAxis: false,
	},
	fadeEffect: {
		crossFade: true,
	},
    autoplay: {
		delay: 5000,
		disableOnInteraction: false,
    },
    pagination: {
		el: '.swiper-pagination',
		dynamicBullets: true,
		clickable: true,
    },
    });