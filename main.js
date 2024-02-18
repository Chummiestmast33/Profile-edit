let imageFileInput = document.getElementById("userImage");
function previewFile() {
    let preview = document.getElementById("userImagePreview")
    let file = imageFileInput.files[0];
    let reader = new FileReader();

    reader.onloadend = function () {
        preview.src = reader.result;
    }

    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
    }
}
imageFileInput.addEventListener("change",previewFile)