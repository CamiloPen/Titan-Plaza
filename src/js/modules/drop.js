Dropzone.options.myAwesomeDropzone = false;

var my = document.getElementById("my");

$("#myAwesomeDropzone").dropzone({
  url: "/file/post",
  autoProcessQueue: false,
  acceptedFiles: 'image/*',
  maxFiles: 1,
  paramName: 'file',
  addRemoveLinks: true,
  parallelUploads: 1,
  dictRemoveFile: "Eliminar",
  resizeWidth: 130,

  init: function() {
    this.on("addedfile", function(file) { 
      my.style.display = "none";
     });

     this.on("reset", function(file) {
       my.style.display = "block";
     });
  }
});

$("#Dropzone").dropzone({
  url: "/file/post",
  autoProcessQueue: false,
  acceptedFiles: 'image/*',
  maxFiles: 1,
  paramName: 'file',
  addRemoveLinks: true,
  parallelUploads: 1,
  dictRemoveFile: "Eliminar",
  resizeWidth: 130,

  init: function() {
    this.on("addedfile", function(file) { 
      my.style.display = "none";
     });

     this.on("reset", function(file) {
       my.style.display = "block";
     });
  }
});