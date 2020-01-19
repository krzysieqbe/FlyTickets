document.onload = function() {
    var selectionDur = 0;
    var src = window.location.search;
    var userId = src.substr(src.indexOf("=") + 1, src.length) - 1;

    console.log(userId);

    setInterval(function() {
        selectionDur += .1;
    }, 100);

    var data = JSON.parse(localStorage.getItem("ft-data"));

    var selectItem = function(selected) {
        data.users[userId].selection = selected;
        data.users[userId].slctDur = Math.round(selectionDur);

        localStorage.setItem("ft-data", JSON.stringify(data));
        location = "./endForm.html";
    }

    setTimeout(function() {
        var btn1 = document.getElementById("select-1");
        var btn2 = document.getElementById("select-2");
        var btn3 = document.getElementById("select-3");
        var btn4 = document.getElementById("select-4");

        btn1.onclick = function() {
            var selection = "Frontier Airlines";
            selectItem(selection);

        };

        btn2.onclick = function() {
            var selection = "BX Air";
            selectItem(selection);

        };

        btn3.onclick = function() {
            var selection = "Envoy";
            selectItem(selection);

        };

        btn4.onclick = function() {
            var selection = "Jet Blue";
            selectItem(selection);

        };
    }, 500);




}();