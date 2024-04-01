function addToggleCodeSwitch(pres) {
    const toggleCode = document.getElementById("toggleCode");
    console.log(toggleCode);
    var newElement = '<div class="label">Show code blocks: </div><input type="checkbox" name="showCode" id="showCode" class="checkbox" checked/><label for="showCode" class="toggle"></label>';
    toggleCode.innerHTML = newElement;
    const toggle = document.getElementById("showCode");
    toggle.addEventListener("change", function() {
        // const pres = document.getElementsByTagName("pre");
        if (this.checked) {
            for (let i=0; i<pres.length; i++) {
                if (pres[i].className == "") {
                    pres[i].hidden = false;
                }
            }
        } else {
            for (let i=0; i<pres.length; i++) {
                if (pres[i].className == "") {
                    pres[i].hidden = true;
                }
            }
        }
    });
}

function onPageLoad() {
    const pres = document.getElementsByTagName("pre");
    console.log(pres);
    for (let i=0; i<pres.length; i++) {
        // console.log(pres[i].className);
        if (pres[i].className != "example") {
            console.log("Toggle code required");
            addToggleCodeSwitch(pres);
        }
    }
}



onPageLoad();
/*document.addEventListener("DOMContentLoaded", onPageLoad);*/
