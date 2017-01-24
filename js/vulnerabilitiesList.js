function proccessData(data){
        for(var i = 0; i<data.length; i++){
            var tr = document.createElement("tr");
            var id = document.createElement("td");
            id.appendChild(document.createTextNode(data[i]["cveId"]));
            tr.appendChild(id);
            var descr = document.createElement("td");
            descr.className += "shortTd justificado";
            descr.appendChild(document.createTextNode(data[i]["description"]));
            tr.appendChild(descr);
            var cwevt = document.createElement("td");
            var cwevtLink = document.createElement("a");
            cwevtLink.setAttribute("href",data[i]["cweIdLink"]);
            cwevtLink.appendChild(document.createTextNode(data[i]["CWE vulnerability type"]));
            cwevt.appendChild(cwevtLink);
            tr.appendChild(cwevt);
            var score = document.createElement("td");
            score.appendChild(document.createTextNode(data[i]["score"]));
            tr.appendChild(score);
            var accessCplx = document.createElement("td");
            accessCplx.appendChild(document.createTextNode(data[i]["accessComplexity"]));
            tr.appendChild(accessCplx);
            var availImp = document.createElement("td");
            availImp.appendChild(document.createTextNode(data[i]["availabilityImpact"]));
            tr.appendChild(availImp);
            var confImp = document.createElement("td");
            confImp.appendChild(document.createTextNode(data[i]["confidentialityImpact"]));
            tr.appendChild(confImp);
            var inteImp = document.createElement("td");
            inteImp.appendChild(document.createTextNode(data[i]["integrityImpact"]));
            tr.appendChild(inteImp);
            var effects = document.createElement("td");
            var list = document.createElement("ul");
            for(var j = 0; j<data[i]["effects"].length; j++){
                var item = document.createElement("li");
                item.appendChild(document.createTextNode(data[i]["effects"][j]));
                list.appendChild(item);
            }
            effects.appendChild(list);
            tr.appendChild(effects);
            $("#tableBody").append(tr);
        }
    }

$(window).on('load', function() {
    $.getJSON("./json/aAndroid_Vulnerabilities_complete.json", function(data){
            proccessData(data);
        })
});

function filterTable(){
    var input, filter, select, selection, table, tr, td, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    select = document.getElementById("selection");
    selection = select.value;
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[selection];
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        } 
    }
}

function cleanFilter(){
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    input = document.getElementById("myInput");
    input.value = "";
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        tr[i].style.display = "";
    }
}

