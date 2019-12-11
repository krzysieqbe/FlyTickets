document.onload = function() {

    window.onhashchange = function() {
        if (location.hash === "#clicked") {
            var modal = document.getElementById("lh-comm-modal");
            modal.style.display = "block";

            var closeBtn = document.getElementById("close-btn");
            closeBtn.onclick = function() {
                var modal = document.getElementById("lh-comm-modal");
                modal.style.display = "none";
                location = "./tickets.html"
            };
        };
    };

}();