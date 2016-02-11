
function toggleNavPanel(i){
    var panel = document.getElementById(i), arrow = document.getElementById("arrow"), maxH="300px";
    if(panel.style.height == maxH){
        panel.style.height = "0px";

    } else {
        panel.style.height = maxH;

    }
}
