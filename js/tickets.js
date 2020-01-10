document.onload = function() {
    var selectionDur = 0;
    var src = window.location.search;
    var userId = src.substr(src.indexOf("=") + 1, src.length) - 1;

    console.log(userId);

    setInterval(function() {
        selectionDur += .1;
    }, 100);

    var data = JSON.parse(localStorage.getItem("ft-data"));


    setTimeout(function() {
        var btn1 = document.getElementById("select-1");
        var btn2 = document.getElementById("select-2");
        var btn3 = document.getElementById("select-3");
        var btn4 = document.getElementById("select-4");

        btn1.onclick = function() {
            var selection = "Frontier Airlines";
            data.users[userId].selection = selection;
            data.users[userId].slctDur = selectionDur;

            localStorage.setItem("ft-data", JSON.stringify(data));
            location = "./endForm.html";

        };

        btn2.onclick = function() {
            var selection = "BX Air";
            data.users[userId].selection = selection;
            data.users[userId].slctDur = selectionDur;

            localStorage.setItem("ft-data", JSON.stringify(data));
            location = "./endForm.html";

        };

        btn3.onclick = function() {
            var selection = "Envoy";
            data.users[userId].selection = selection;
            data.users[userId].slctDur = selectionDur;

            localStorage.setItem("ft-data", JSON.stringify(data));
            location = "./endForm.html";

        };

        btn4.onclick = function() {
            var selection = "Jet Blue";
            data.users[userId].selection = selection;
            data.users[userId].slctDur = selectionDur;

            localStorage.setItem("ft-data", JSON.stringify(data));
            location = "./endForm.html";

        };
    }, 500);



}();