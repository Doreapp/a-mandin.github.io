readMetaData = function(metaStr) {
    console.log("read Meta data : " + metaStr)
    metaData = parseYAML(metaStr);
    if (metaData.title) {
        document.title = metaData.title
    }
}

populatePage = function(markdown) {
    if (markdown.startsWith("---")) {
        let endIndex = markdown.indexOf("---", 3)
        if (endIndex > 0) {
            readMetaData(markdown.substr(3, endIndex - 3))
            markdown = markdown.substr(endIndex + 3)
        }
    }

    converter = new showdown.Converter(),
        html = converter.makeHtml(markdown);
    document.querySelector("#markdown-container").innerHTML = html;
}

window.onload = function() {
    var prmstr = window.location.search.substr(1);
    loadText('raw/markdown/' + prmstr,
        function(data) {
            console.log(data);
            populatePage(data)
        },
        function(xhr) { console.error(xhr); }
    );
}