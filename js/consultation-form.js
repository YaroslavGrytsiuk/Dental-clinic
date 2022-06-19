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


    document.getElementById("formPhone").onkeypress = function (event) {
        if (event.charCode && (event.charCode < 48 || event.charCode > 57))
            return false;
    };
})();


