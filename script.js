let i = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, 2000)

function nextImage(){
    i++;
    if(i>5){
        i=1;
    }

    document.getElementById("radio"+i).checked = true;
}