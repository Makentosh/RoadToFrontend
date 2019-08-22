function thisFileUpload() {
    document.getElementById("file").click();
};

var control = document.getElementById("file");
control.addEventListener("change", function(event) {
    var i = 0,
        files = control.files,
        len = files.length;
 
    for (; i < len; i++) {
        console.log("Filename: " + files[i].name);
        console.log("Type: " + files[i].type);
        console.log("Size: " + files[i].size + " bytes");
        console.log("Size: " + files[i].date.getTime);
    }
 
}, false);