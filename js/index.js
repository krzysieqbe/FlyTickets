document.onloadend = function() {

    var initData = {
        usrCnt: 0,
        users: []
    };

    var data = JSON.parse(localStorage.getItem("ft-data")) || initData;
    //var data = initData;
    //var usrGrp = Math.round(Math.random() * 3 + 1);

    console.log(data);

    window.onhashchange = function() {
        if (location.hash === "#info") {
            var modal = document.getElementById("lh-comm-modal");
            modal.style.display = "block";

            var closeBtn = document.getElementById("close-btn");
            closeBtn.onclick = function() {
                var modal = document.getElementById("lh-comm-modal");
                modal.style.display = "none";
                //location = "./tickets.html"
                location.hash = "#form"
            };

            var closeBtn = document.getElementById("next-btn");
            closeBtn.onclick = function() {
                var modal = document.getElementById("lh-comm-modal");
                modal.style.display = "none";
                //location = "./tickets.html"
                location.hash = "#form"
            };
        };
        if (location.hash === "#form") {
            var modal = document.getElementById("form-modal");
            modal.style.display = "block";

            var closeBtn = document.getElementById("form-next-btn");
            closeBtn.onclick = function() {
                var modal = document.getElementById("form-modal");
                //modal.style.display = "none";
                //location = "./tickets.html"
                var age = document.getElementById("form-age").value;
                var name = document.getElementById("form-name").value;
                var job = document.getElementById("form-job").value;

                if (age == "" || name == "" || job == "") {
                    alert("Musisz wypełnić formularz zanim przejdziesz dalej");
                } else {
                    var usrGrp = data.usrCnt % 4;
                    data.usrCnt++;

                    data.users.push({
                        id: data.usrCnt,
                        grp: usrGrp,
                        name: name,
                        age: age,
                        job: job,
                        selection: undefined,
                        slctDur: undefined

                    });

                    localStorage.setItem("ft-data", JSON.stringify(data));
                    location = "./tickets.html?id=" + data.usrCnt;
                }
            }

        };
    };
}();