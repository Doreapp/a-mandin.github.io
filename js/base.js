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

init = function() {
    buildHeader()
}

window.onload = function() {
    init()
}