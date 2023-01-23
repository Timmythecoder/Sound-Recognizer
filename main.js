function start(){
navigator.mediaDevices.getUserMedia({
    audio: true
});
var classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/WHTHdiZBO/.json", modelloaded);

}
function modelloaded(){
    console.log("modelloaded!")
};
function gotresult(error, results){
    console.log("Got Result")
}