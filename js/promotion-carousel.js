(function () {
    const slides = [
        `<div class="shares__column">
        <div class="shares__item share">
            <div class="share__img">
                <img src="img/promotion_1.png" alt="promotion1">
                <div class="share__button">
                    <a href="#" class="btn">Участвовать</a>
                </div>
            </div>
        </div>
    </div>`,
        `<div class="shares__column">
        <div class="shares__item share">
            <div class="share__img">
                <img src="img/promotion_2.png" alt="promotion2">
            </div>
            <div class="share__button">
                <a href="#" class="btn">Участвовать</a>
            </div>
        </div>
    </div>`,
        `<div class="shares__column">
        <div class="shares__item share">
            <div class="share__img">
                <img src="img/promotion_3.png" alt="promotion3">
            </div>
            <div class="share__button">
                <a href="#" class="btn">Участвовать</a>
            </div>
        </div>
    </div>`,
        `<div class="shares__column">
    <div class="shares__item share">
        <div class="share__img">
            <img src="img/promotion_4.png" alt="promotion4">
        </div>
        <div class="share__button">
            <a href="#" class="btn">Участвовать</a>
        </div>
    </div>
</div>`,
    ]

    let currentSlide = 0
    const slideContainer = document.querySelector('.shares__body')

    function renderCarousel() {
        slideContainer.innerHTML = slides[currentSlide]
        if (window.innerWidth >= 549) {
            const secondSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1
            slideContainer.innerHTML += slides[secondSlide]
            if (window.innerWidth > 768) {
                const thirdSlide = secondSlide + 1 >= slides.length ? 0 : secondSlide + 1
                slideContainer.innerHTML += slides[thirdSlide]
            }
        }
    }

    function nextSlide() {
        currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1
        renderCarousel()
        resetDotActiveClass()
        addDotActiveClass()
    }
    function prevSlide() {
        currentSlide = currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1
        renderCarousel()
        resetDotActiveClass()
        addDotActiveClass()
    }
    setInterval(nextSlide, 3000)
    renderCarousel()

    const btnNext = document.querySelector('.promotion__carousel .arrow__next')
    btnNext.addEventListener('click', nextSlide)

    const btnPrev = document.querySelector('.promotion__carousel .arrow__prev')
    btnPrev.addEventListener('click', prevSlide)

    window.addEventListener('resize', renderCarousel)


    const carouselDots = document.querySelector('.promotion__carousel .dots')
    let dot

    function createDot() {
        dot = document.createElement('span')
        dot.classList.add('dot')
        carouselDots.appendChild(dot)
    }


    function renderDots() {
        for (let i = 0; i < slides.length; i++) {
            createDot()
        }
    }
    renderDots()
    addDotActiveClass()

    function addDotActiveClass() {
        carouselDots.children[currentSlide].classList.add('dot__active')
    }
    function resetDotActiveClass() {
        const dots = carouselDots.querySelectorAll('.dot')
        for (let item of dots) {
            item.classList.remove('dot__active')
        }
    }


    // -----swipe-slide----

    slideContainer.addEventListener('touchstart', touchStart, false)
    slideContainer.addEventListener('touchmove', touchMove, false)
    let x1 = null
    let y1 = null

    function touchStart(e) {
        const firstTouch = e.touches[0]
        x1 = firstTouch.clientX
        y1 = firstTouch.clientY
    }

    function touchMove(e) {
        let x2 = e.touches[0].clientX
        let y2 = e.touches[0].clientY
        let xDiff = x2 - x1
        let yDiff = y2 - y1

        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            if (xDiff > 0) nextSlide()
            else prevSlide()
        }
        x1 = null
        y1 = null
    }

    // ----------------------------
})()