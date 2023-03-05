const fileChooser = document.getElementById("filechooser");
const chooseFileBtn = document.getElementById("choosefilebtn");
const currentFileTxt = document.getElementById("currentfiletxt");

let currentFile;

chooseFileBtn.addEventListener("click", function() {
    fileChooser.click();
});

fileChooser.addEventListener("change", function() {
    if (fileChooser.value) {
        currentFile = fileChooser.value;
        currentFileTxt.innerHTML = currentFile.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
    }
    else
    {
        currentFileTxt.innerHTML = "No file chosen."
    }
});