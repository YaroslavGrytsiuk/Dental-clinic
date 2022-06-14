(function () {
    const doctorsJson = `[
        {
            "id": "001",
            "name": "Саидов Шамсулло Нарзуллоевич",
            "qualification": "Врач-стоматолог",
            "position": "Ведущий специалист",
            "imgUrl": "img/doctor_mini_icon_1.png",
            "img_bg_Url": "img/doctor_cards/doctor_card_bg_1.png",
            "expirience": 25,
            "certificates": "стоматология ортопедическая; стоматология хирургическая",
            "orientation": "съемные, несъемные, безметалловые конструкции, цирконий, протезирование на имплантах, драгметаллах, вкладки, виниры, гнатология и хирургия"
        },
        {
            "id": "002",
            "name": "Анисимов Дмитрий Владимирович",
            "qualification": "Врач-ортодонт",
            "position": "",
            "imgUrl": "img/doctor_mini_icon_2.png",
            "img_bg_Url": "img/doctor_cards/doctor_card_bg_2.png",
            "expirience": 15,
            "certificates": "стоматология общей практики; стоматология ортопедическая",
            "orientation": "протезирование зубов, хирургическое удаление, терапевтическое лечение и отбеливание"
        },
        {
            "id": "003",
            "name": "Варданян Давид Араевич",
            "qualification": "Зубной техник",
            "position": "",
            "imgUrl": "img/doctor_mini_icon_3.png",
            "img_bg_Url": "img/doctor_cards/doctor_card_bg_3.png",
            "expirience": 5,
            "certificates": "стоматология общей практики; стоматология ортопедическая",
            "orientation": "терапевтическое лечение, все виды протезирования, хирургическое удаление зубов"
        },
        {
            "id": "004",
            "name": "Соха Анастасия Юрьевна",
            "qualification": "Врач-стоматолог",
            "position": "",
            "imgUrl": "img/doctor_mini_icon_4.png",
            "img_bg_Url": "img/doctor_cards/doctor_card_bg_4.png",
            "expirience": 11,
            "certificates": "стоматология общей практики; стоматология терапевтическая; стоматология ортодонтическая",
            "orientation": "терапевтическое лечение, эстетическая реставрация зубов и исправление прикуса любой сложности"
        },
        {
            "id": "005",
            "name": "Иванова Оксана Григорьевна",
            "qualification": "Стоматолог-хирург",
            "position": "Врач висшей категории",
            "imgUrl": "img/doctor_mini_icon_5.png",
            "img_bg_Url": "img/doctor_cards/doctor_card_bg_5.png",
            "expirience": 16,
            "certificates": "стоматология общей практики; стоматология хирургическая",
            "orientation": "имплантация, пародонтология, удаление зубов любой сложности"
        },
        {
            "id": "006",
            "name": "Синельщикова Елена Дмитриевна",
            "qualification": "Врач-стоматолог",
            "position": "",
            "imgUrl": "img/doctor_mini_icon_6.png",
            "img_bg_Url": "img/doctor_cards/doctor_card_bg_6.png",
            "expirience": 8,
            "certificates": "стоматология общей практики; стоматология хирургическая",
            "orientation": "терапевтическое лечение, эстетическая реставрация, хирургическое удаление зубов , профессиональная гигиена и отбеливание"
        }
    ]`

    const doctors = JSON.parse(doctorsJson)

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

