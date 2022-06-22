// -------multi language----
(async function () {

    const response = await fetch(`json/languages.json`)
    const languagesAll = await response.json()

    let langId
    let hash
    const allLanguages = ['en', 'ru', 'ua']
    const languages = document.querySelectorAll('.lang')

    function addEventListener(languages, func) {
        languages.forEach(item => {
            item.addEventListener('click', func)
        })
    }

    addEventListener(languages, getAttribute)
    addEventListener(languages, changeURL)

    function addClassActive() {
        for (const language of languages) {
            if (language.getAttribute("data-langID") == hash) {
                language.classList.add('lang-active')
            }
        }
    }
    function getAttribute() {
        langId = this.getAttribute('data-langID')
    }
    function changeURL() {
        location.href = window.location.pathname + `#${langId}`
        location.reload()
    }
    function changeLanduage() {
        hash = window.location.hash
        hash = hash.substring(1)
        if (!allLanguages.includes(hash)) {
            location.href = window.location.pathname + `#ru`
            location.reload()
        }
        langId = hash
        document.querySelector('title').textContent = languagesAll['logo__title'][hash]

        for (let key in languagesAll) {
            let elems = document.querySelectorAll(`.${key}`)
            for (const elem of elems) {
                if (elem) {
                    elem.innerHTML = languagesAll[key][hash]
                }
            }

        }
    }
    changeLanduage()
    addClassActive()
})()
