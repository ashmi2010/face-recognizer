Webcam.set({
        width:350,
        height:350,
        image_format:'png',
        png_quality:90
    });

camera = document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML= '<img id="captured_image" src="'+data_uri+'"/>'
    });
};

console.log("ml5 Version: ",ml5.version);

classified= ml5.imageClassified('https://teachablemachine.withgoogle.com/models/CUmKOzXdI/',modelLoaded);


function modelLoaded(){
    console.log("Model Loaded Successfully")
};