let filesProp;


function listInit() {
    $.get("/filesJson")
        .done((data) => {
            filesProp = data

            for (let i = 0; i < filesProp.name.length; i++) {
                $("#fileList").append(`<tr><th>${filesProp.name[i]}</th><th><a href="${filesProp.path[i]}"><span>Download</span></a></th></tr>`)
            }
        })
}


$("#update").click(() => window.location.reload())