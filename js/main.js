function thisFileUpload() {
    document.getElementById("file").click();
};

// var control = document.getElementById("file");
// control.addEventListener("change", function(event) {
//     var i = 0,
//         files = control.files,
//         len = files.length;
 
//     for (; i < len; i++) {
//         console.log("Filename: " + files[i].name);
//         console.log("Type: " + files[i].type);
//         console.log("Size: " + files[i].size + " bytes");
//     }
 
// }, false);
var control = document.getElementById("file");
control.addEventListener("change", function(e){
    var fileName = e.target.files[0].name;
    var type = e.target.files[0].type;
    var size = e.target.files[0].size;
    
    console.log(fileName, type, size);
})

// let newFile = {
//     name: fileName,
//     type: type,
//     size: size
// }

// console.log(newFile);