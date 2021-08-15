function loadText(path, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200 || xhr.status === 0) {
                if (success)
                    success(xhr.responseText);
            } else {
                if (error)
                    error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}

function loadJSON(path, success, error) {
    loadText(
        path,
        function(text) {
            success(JSON.parse(text))
        },
        error
    )
}

function parseYAML(str) {
    var data = {};
    var lines = str.split("\n");
    for (let i = 0; i < lines.length; i++) {
        var values = lines[i].split(":")
        if (values.length === 2) {
            data[values[0]] = values[1];
        }
    }
    return data;
}

function stringToElement(htmlStr) {
    var temp = document.createElement('div');
    temp.innerHTML = htmlStr;
    return temp.firstChild;
}