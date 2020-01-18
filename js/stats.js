document.onload = function() {
    setTimeout(function() {
        var initData = {
            usrCnt: 0,
            users: []
        };

        var data = JSON.parse(localStorage.getItem("ft-data")) || initData;
        var gridDom = document.getElementById("stats-grid");
        var resetBtn = document.getElementById("reset-btn");
        var downloadBtn = document.getElementById("download-btn");
        var csvArray = [
            ["id", "nazwa", "wiek", "zawód", "grupa", "wybor", "czas wyboru"]
        ];

        data.users.forEach(function(user) {
            var id = user.id;
            var name = user.name;
            var age = user.age;
            var job = user.job;
            var grp = user.grp;
            var slct = user.selection || "N/A"
            var slctDur = user.slctDur || "N/A"
            var csvRow = [];

            csvRow.push(id);
            csvRow.push(name);
            csvRow.push(age);
            csvRow.push(job);
            csvRow.push(grp);
            csvRow.push(slctDur);

            csvArray.push(csvRow);

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

        downloadBtn.onclick = function() {

            let csvContent = "data:text/csv;charset=utf-8,";

            csvArray.forEach(function(rowArray) {
                let row = rowArray.join(",");
                csvContent += row + "\r\n";
            });
            var encodedUri = encodeURI(csvContent);
            window.open(encodedUri);
        };

        resetBtn.onclick = function() {
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