let classifier;
let video;
function setup(){
    createCanvas(350,350)
    video = createCapture(VIDEO)
    video.size(350,350)
    video.hide()
    classifier = ml5.imageClassifier('MobileNet',video,ReadyModel)}
    
function ReadyModel(){      
      
      classifier.predict((error,result)=>{
        if(error){
              console.log(error)
              }
              else{
                write = document.getElementById('output')
                write.innerHTML = 'Model Says <b>'+ result[0].label + '</b> With Confidence <b>' + result[0].confidence*100 + '%</b>'
                ReadyModel()
              }
          })}     
  
function draw(){
image(video,0,0)

}