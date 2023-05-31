let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (xhttp.readyState == 4 && xhttp.status == 200) {
    jsonfunc(this.responseText);
  }
};

xhttp.open("GET", "tableInfo.json", true);
xhttp.send();

function jsonfunc(jsonText) {
  let json = JSON.parse(jsonText);
  let table = document.getElementById("tg");

  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  td1.appendChild(document.createTextNode(json[0].subtechnique[1] + ""));
  tr.appendChild(td1);
  table.appendChild(tr);
  /*for (i = 0; i < json.length; i++) {
    if (json[i].tatic == "Reconnassi") {
      for (j = 0; j < json[i].subtechnique.length; j++) {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.appendChild(document.createTextNode(json[i].subtechnique[j] + ""));
        tr.appendChild(td1);
        table.appendChild(tr);
      }
    }
      
    }*/
}
