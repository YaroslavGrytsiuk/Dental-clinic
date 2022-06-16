(async function () {

    const response = await fetch('doctors.json')
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
        const doctorCardColumn = document.querySelector('.doctor__cards-column')
        for (const doctor of doctors) {
            if (this.id == doctor.id) {
                doctorCardColumn.innerHTML = `
            <div class="doctor__card">
            <div class="doctor__card-text">
                <p class="doctor__card-text-title">${doctor.name}</p>
                <p class="doctor__card-text-subtitle">${doctor.qualification} <span>${doctor.position}</span>
                </p>
            </div>
            <div class="doctor__card-img"><img src="${doctor.img_bg_Url}"
                    alt="doctor-card"></div>
            <div class="doctor__card-about-doctor">
                <p class="doctor__card-about-doctor-title">Опыт работы более ${doctor.expirience} лет</p>
                <p class="doctor__card-about-doctor-subtitle">
                    <span>Действующие сертификаты:</span>
                    ${doctor.certificates}<br>
                    <span>Направленность:</span>${doctor.orientation}
                </p>
            </div>
        </div>
        <button class="doctor__card-btn btn">Записаться</button>`
            }
        }
    }
})()

