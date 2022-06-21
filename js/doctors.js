(async function () {

    const response = await fetch(`json/doctors-ru.json`)
    const doctors = await response.json()

    function renderDoctorsMiniCards(doctors) {
        const doctorsMiniCardsColumn = document.querySelector('.doctor__mini-cards-column')
        for (const doctor of doctors) {
            doctorsMiniCardsColumn.innerHTML += `
            <div id = "${doctor.id}" class="doctor__mini-card">
                <div class="doctor__mini-card-img"><img src="${doctor.imgUrl}" alt="icon_doc">
                </div>
                <div class="doctor__mini-card-text">
                    <p class="doctor__mini-card-text-title">${doctor.name}</p>
                    <p class="doctor__mini-card-text-subtitle">${doctor.qualification}<span>${doctor.position}</span></p>
                </div>
            </div>
        `
        }
    }

    renderDoctorsMiniCards(doctors)


    const miniCards = document.querySelectorAll('.doctor__mini-card')

    function addEventListener(miniCards, func) {
        miniCards.forEach(item => {
            item.addEventListener('click', func)
        })
    }
    miniCards[0].classList.add('doctor__mini-card-active')

    addEventListener(miniCards, addActiveStyle)
    addEventListener(miniCards, generateDoctorCard)

    function addActiveStyle() {
        miniCards.forEach(item => item.classList.remove('doctor__mini-card-active'))
        this.classList.add('doctor__mini-card-active')
    }

    function generateDoctorCard() {
        for (const doctor of doctors) {
            if (this.id == doctor.id) {
                document.querySelectorAll('.doctor__card-text-title').forEach(item => item.textContent = doctor.name)
                document.querySelectorAll('.doctor__card-text-subtitle').forEach(item => item.textContent = doctor.qualification)
                document.querySelectorAll('.doctor__card-about-doctor-title').forEach(item => item.textContent = `Опыт работы более ${doctor.expirience} лет`)
                document.querySelectorAll('.doctor__card-about-doctor-subtitle').forEach(item => item.innerHTML = (this.id == 001) ? `
                <span>Действующие сертификаты:<br></span>стоматология ортопедическая;стоматология хирургическая<br><span>Все виды высококачественного протезирования:</span> ${doctor.orientation}` : `<span>Действующие сертификаты:<br></span>${doctor.certificates}<br><span>Направленность:</span>${doctor.orientation}`)
                document.querySelectorAll('.doctor__card-img').forEach(item => item.firstChild.setAttribute('src', doctor.img_bg_Url))
            }
        }
    }

    function addModalToMiniCard() {
        if (window.innerWidth <= 665) {
            miniCards.forEach(item => {
                item.classList.add('btn-primary')
                item.setAttribute('data-bs-toggle', 'modal')
                item.setAttribute('data-bs-target', '#doctor__card')
            })
            document.querySelector('#doctor__card .doctor__cards-column').classList.add('modal-doctor-card')
        }
    }
    addModalToMiniCard()
})()

