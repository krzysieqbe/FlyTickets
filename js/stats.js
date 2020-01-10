document.onload = function() {
    setTimeout(function() {
        var initData = {
            usrCnt: 0,
            users: []
        };

        var data = JSON.parse(localStorage.getItem("ft-data")) || initData;
        var gridDom = document.getElementById("stats-grid");
        var resetBtn = document.getElementById("reset-btn");


        data.users.forEach(function(user) {
            var id = user.id;
            var name = user.name;
            var age = user.age;
            var job = user.job;
            var grp = user.grp;
            var slct = user.selection || "N/A"
            var slctDur = user.slctDur || "N/A"


            var newRow = '<div class="data-grid-row">';
            newRow += '<div>' + id + '</div>';
            newRow += '<div>' + name + '</div>';
            newRow += '<div>' + age + '</div>';
            newRow += '<div>' + job + '</div>';
            newRow += '<div>' + grp + '</div>';
            newRow += '<div>' + slct + '</div>';
            newRow += '<div>' + slctDur + '</div>';
            newRow += "</div>";

            gridDom.innerHTML += newRow;



        });
        resetBtn.onclick = function() {
            console.log("dupa");
            var modal = document.getElementById("confirm-modal");
            modal.style.display = "block";
            var confirmBtn = document.getElementById("confirm-btn");
            var abortBtn = document.getElementById("abort-btn");

            confirmBtn.onclick = function() {
                modal.style.display = "none";
                var initData = {
                    usrCnt: 0,
                    users: []
                };
                data = initData;
                localStorage.setItem("ft-data", JSON.stringify(data));
                location.reload();

            }

            abortBtn.onclick = function() {
                modal.style.display = "none";
            }
        }
    }, 300);




}();