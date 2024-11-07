function sun() {
    console.log("Hello");
}

const doc = {
    btnEl: document.getElementById("btn")
}

doc.btnEl.addEventListener("click", e => {
    sun();
})
