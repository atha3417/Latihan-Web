function myFunction() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    document.execCommand("copy");

    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied!";
}

function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy text";
}

alert("Halo, Selamat Datang di Website Kami");