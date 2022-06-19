(async function () {
    const carousel = document.querySelectorAll('.owl-item-img'),
        licencesModalImg = document.querySelector('.modal-item-img'),
        response = await fetch('json/licences.json'),
        licences = await response.json()

    carousel.forEach(item => item.addEventListener('click', renderModal))

    function renderModal() {
        for (const licence of licences) {
            if (licence.id == this.getAttribute('data-id')) {
                licencesModalImg.setAttribute('src', licence.src)
            }
        }
    }
})()