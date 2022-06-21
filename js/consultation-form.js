(function () {
    const form = document.querySelector('.consultation__form-formspree');
    function handleSubmit(event) {
        event.preventDefault();
        const status = document.querySelector('.consultation__form-status');
        fetch(form.action, {
            method: form.method,
            body: new FormData(event.target),
            headers: {
                'Accept': 'application/json'
            }
        }).then(() => {
            status.innerHTML = "Спасибо. Мы свяжемся с вами в ближайшее время!";
            form.reset();
        }).catch(() => {
            status.innerHTML = "Что-то пошло не так :("
        });
    }
    form.addEventListener("submit", handleSubmit)

    // --------Check symbols in form--------
    const formNames = document.querySelectorAll(".form-name")
    for (const formName of formNames) {
        formName.addEventListener("input", function () {
            const regex = /[0-9]/g,
                regSymb = /[!@#$%^&*()_+="№:,.;()_+=-?<>|}{}]/g
            this.value = this.value.replace(regex, '')
            this.value = this.value.replace(regSymb, '')
            if (this.value.length <= 2 || this.value) return false
        })
    }

    const formPhones = document.querySelectorAll(".form-phone")
    for (const formPhone of formPhones) {
        formPhone.addEventListener("input", function () {
            const reg = /[A-Za-zА-Яа-яЁё]/g,
                regSymb = /[!@#$%^&*()_+="№:,.;()_+=-ії|}{?><}]/g
            this.value = this.value.replace(reg, '')
            this.value = this.value.replace(regSymb, '')
            if (this.value.length > 12) return false
        })
    }

})();


