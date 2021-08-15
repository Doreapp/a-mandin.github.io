//chrome.exe --allow-file-access-from-files

buildProjectView = function(projectData, element) {
    console.log("build project data (" + projectData.name + ")")
    element.querySelector("h1").innerText = projectData.name;

    if (projectData.startDate) {
        //TODO date ?
    }

    if (projectData.description) {
        element.querySelector("p").innerText = projectData.description;
    }

    if (projectData["content-uri"]) {
        element.querySelector("a").href = 'markdown-view.html?' + projectData["content-uri"];
    }

    if (projectData["icon-uri"]) {
        element.querySelector("img").src = "images/icons/" + projectData["icon-uri"];
    }

    return element;
}

populatePage = function(projectArray) {
    var listElement = document.querySelector("#projects")
    for (let i = 0; i < projectArray.length; i++) {
        projectView = stringToElement(projectViewStr);
        listElement.appendChild(buildProjectView(projectArray[i], projectView))
    }
}

window.onload = function() {
    console.log("on loaded");
    loadText('html/project_view.html',
        function(htmlStr) {
            projectViewStr = htmlStr;
            loadJSON('raw/json/projects.json',
                function(data) {
                    console.log(data);
                    populatePage(data.projects)
                },
                function(xhr) {
                    console.error(xhr);
                }
            );
        },
        function(xhr) {
            console.error(xhr);
        });
}