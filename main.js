fetch("components/navigation.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("placeholder_navigation").innerHTML = data;
    })
    .catch(error => console.error("Fehler beim Laden", error));