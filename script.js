fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("global-navbar").innerHTML = data;
        });