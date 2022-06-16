(function () {
    const iconBurgers = document.querySelectorAll(".burger");
    let iconBurger
    const navigationsBody = document.querySelector(".burger__menu-wrapper");
    for (iconBurger of iconBurgers) {
        iconBurger.addEventListener("click", function (e) {
            document.body.classList.toggle("lock");
            iconBurger.classList.toggle("active");
            navigationsBody.classList.toggle("active");
        })
    };

    const navLinks = document.querySelectorAll(".burger__link");
    navLinks.forEach((navLink) => {
        navLink.addEventListener("click", (_) => {
            if (iconBurger.classList.contains("active")) {
                document.body.classList.remove("lock");
                iconBurger.classList.remove("active");
                navigationsBody.classList.remove("active");
            }
        }
        );
    });

    // -----swipe-slide----
    const slideContainer = document.querySelector('.burger__menu-wrapper')
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
            if (yDiff > 0 && iconBurger.classList.contains("active")) {
                document.body.classList.remove("lock");
                iconBurger.classList.remove("active");
                navigationsBody.classList.remove("active");
            }
        }
        x1 = null
        y1 = null
    }
})();