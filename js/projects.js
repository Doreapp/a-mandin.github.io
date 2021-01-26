//chrome.exe --allow-file-access-from-files

buildProjectView = function(projectData) {
    console.log("build project data (" + projectData.name + ")")
    var project = document.createElement("div");
    var title = document.createElement("h1");
    title.innerText = projectData.name;
    project.appendChild(title)

    if (projectData.startDate != undefined) {
        var dateElement = document.createElement("p")
        if (projectData.endDate == undefined) {
            dateElement.innerText = "Started on " + projectData.startDate;
        } else {
            dateElement.innerText = "From " + projectData.startDate + " to " + projectData.endDate;
        }
        project.appendChild(dateElement)
    }

    if (projectData.description != undefined) {
        var description = document.createElement("p");
        description.innerText = projectData.description;
        project.appendChild(description)
    }

    if (projectData["content-uri"] != undefined) {
        var link = document.createElement("a");
        link.href = 'markdown-view.html?' + projectData["content-uri"];
        link.innerText = "See more";
        project.appendChild(link)
    }

    return project
}

populatePage = function(projectArray) {
    var listElement = document.querySelector("#projects")
    for (let i = 0; i < projectArray.length; i++) {
        listElement.appendChild(buildProjectView(projectArray[i]))
    }
}

window.onload = function() {
    console.log("on loaded");
    loadJSON('raw/json/projects.json',
        function(data) {
            console.log(data);
            populatePage(data.projects)
        },
        function(xhr) {
            console.error(xhr);
        }
    );
}