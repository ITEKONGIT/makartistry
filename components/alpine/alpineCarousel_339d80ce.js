// Alpine Carousel Component: alpineCarousel_339d80ce
// Fixed - global function definition

function alpineCarousel_339d80ce() {
    return {
        autoplayIntervalTime: 4000,
        slides: [
            {
                imgSrc: 'images/home.png',
                imgAlt: 'Vibrant abstract painting with swirling blue and light pink hues on a canvas.',
                title: 'Crafting memories',
                description: 'telling stories through everyday art'
            },
            {
                imgSrc: 'images/home2.png',
                imgAlt: 'Artistic workspace with design tools and creative materials.',
                title: 'Creative Excellence',
                description: 'Transforming ideas into beautiful realities'
            }
        ],
        currentSlideIndex: 1,
        isPaused: false,
        autoplayInterval: null,

        init() {
            this.autoplay();
        },

        autoplay() {
            if (this.autoplayInterval) {
                clearInterval(this.autoplayInterval);
            }

            this.autoplayInterval = setInterval(() => {
                if (!this.isPaused) {
                    this.nextSlide();
                }
            }, this.autoplayIntervalTime);
        },

        setAutoplayInterval(time) {
            this.autoplayIntervalTime = time;
            if (!this.isPaused) {
                this.autoplay();
            }
        },

        nextSlide() {
            this.currentSlideIndex = this.currentSlideIndex >= this.slides.length ? 1 : this.currentSlideIndex + 1;
        },

        prevSlide() {
            this.currentSlideIndex = this.currentSlideIndex <= 1 ? this.slides.length : this.currentSlideIndex - 1;
        },

        goToSlide(index) {
            this.currentSlideIndex = index;
        },

        pauseAutoplay() {
            this.isPaused = true;
            if (this.autoplayInterval) {
                clearInterval(this.autoplayInterval);
                this.autoplayInterval = null;
            }
        },

        resumeAutoplay() {
            this.isPaused = false;
            this.autoplay();
        }
    };
}