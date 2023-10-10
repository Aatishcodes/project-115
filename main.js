function preload() {
 
}


function setup() {
    canvas = createCanvas(460, 375)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
    poseNet = ml5.poseNet(video, modelloaded)
    poseNet.on('pose', gotposes)

}

function modelloaded() {
    console.log("the model has been loaded")
}




function gotposes(results) {
    if (results.length > 0) {
        

    }

}



function draw() {
    image(video, 0, 0, 460, 375)
    



}


function take_snapshot() {
    save("myfilterimage.png")

}
