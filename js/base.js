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

init = function() {
    buildHeader()
    buildBackground()
}

window.onload = function() {
    init()
}