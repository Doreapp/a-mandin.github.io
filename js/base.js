buildHeader = function() {
    loadText(
        "html/header.html",
        function(html) {
            let body = document.querySelector("body");
            body.innerHTML = html + body.innerHTML;
        },
        function(err) {
            console.err(err)
        }
    )
}

buildBackground = function() {
    loadText(
        "html/background.html",
        function(html) {
            let body = document.querySelector("body");
            body.innerHTML += html;
        },
        function(err) {
            console.err(err)
        }
    )
}
buildFooter = function() {
    loadText(
        "html/footer.html",
        function(html) {
            let body = document.querySelector("body");
            body.innerHTML += html;
        },
        function(err) {
            console.err(err)
        }
    )
}

init = function() {
    buildHeader()
    buildBackground()
    buildFooter()
}

if (window.onload) {
    fun = window.onload;
    window.onload = function() {
        fun();
        init();
    }
} else {
    window.onload = function() {
        init();
    }
}

var currentLanguage = 'fr';

function onButtonLanguageClicked(btnLanguage) {
    changeLanguage();
    btnLanguage.innerText = currentLanguage.toUpperCase();
}

function changeLanguage() {
    var availableLanguages = ['fr', 'en'];
    var lastLanguage = currentLanguage;
    var currentIndex = availableLanguages.indexOf(currentLanguage);
    if (currentIndex < 0 || currentIndex >= availableLanguages.length) {
        currentLanguage = 'fr';
        lastLanguage = null;
    } else {
        currentLanguage = availableLanguages[(currentIndex + 1) % availableLanguages.length];
    }

    document.querySelectorAll("." + currentLanguage).forEach(e =>
        e.style.display = "inline"
    )
    if (lastLanguage != null) {
        document.querySelectorAll("." + lastLanguage).forEach(e =>
            e.style.display = "none"
        )
    }

}