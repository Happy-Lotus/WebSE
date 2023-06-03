var data;

var returnData = function (techName) {
  data = techName;
  sendRequest();
};

function sendRequest() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (xhttp.readyState == 4 && xhttp.status == 200 && data != undefined) {
      jsonfunc(this.responseText);
    }
  };

  xhttp.open("GET", "tableInfo.json", true);
  xhttp.send();
}

function jsonfunc(jsonText) {
  const tb_delete = document.getElementById("tg");
  const rowcnt = tb_delete.rows.length;
  if (rowcnt > 1) {
    for (i = rowcnt - 1; i > 0; i--) {
      tb_delete.deleteRow(i);
    }
  }

  let json = JSON.parse(jsonText);
  let table = document.getElementById("tg");

  for (i = 0; i < json.length; i++) {
    if (json[i].technique == data) {
      document.getElementById("techniqueName").innerHTML = data;
      for (j = 0; j < json[i].subtechnique.length; j++) {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.classList.add("tg-baqh");
        td1.appendChild(document.createTextNode(json[i].subtechnique[j] + ""));
        tr.appendChild(td1);
        table.appendChild(tr);
      }
      break;
    }
  }
}

function colorChange(attackName, step) {
  $(function () {
    $(step).css({
      "background-color": "rgb(23 146 247 / 48%)",
      border: "5px solid black",
      transition: "all 0.2s ease",
    });
    $(".technique-cell." + attackName).css({
      "background-color": "rgb(240 134 146 / 50%)",
    });
    $(".technique-cell." + attackName)
      .find(".popup")
      .css({ "background-color": "rgb(23 146 247)" });
  });
}

function resetbutton() {
  $(function () {
    $(".technique-cell").css({ "background-color": "white" });
    $(".technique-cell")
      .find(".popup")
      .css({ "background-color": "rgb(23 146 247 / 48%)" });
    $("#scenario.first").css({
      "background-color": "white",
      border: "1px solid black",
    });
    $("#scenario.second").css({
      "background-color": "white",
      border: "1px solid black",
    });
    $("#scenario.third").css({
      "background-color": "white",
      border: "1px solid black",
    });
  });
}
