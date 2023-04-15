
// donwload function for resume
function download() {
    var url = 'https://drive.google.com/file/d/1cRQTzhAHlPMiFK3ZGCJKeLfZeb3TE2u_/view?usp=share_link'; // Replace this with the actual download URL
    var filename = 'resume.pdf'; // Replace this with the desired filename
    var link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.click();
  }