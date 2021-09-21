function start() {


  navigator.mediaDevices.getUserMedia({                    //grant permission to access mic
    audio: true                                            //to get data from mic
  });

  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/-16uEcOD7/model.json', modelReady);
}



function modelReady() {
  classifier.classify(gotResults);   //compare the model with captured audio
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
  

    document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + (results[0].confidence * 100).toFixed(2) + " %";
    


    img = document.getElementById('alien1')
    img1 = document.getElementById('alien2')
    img2 = document.getElementById('alien3')
    img3 = document.getElementById('alien4')

    if (results[0].label == "Clap") {                   
      img.src = 'aliens-01.gif';
      img1.src = 'aliens-02.png';
      img2.src = 'aliens-03.png';
      img3.src = 'aliens-04.png';
    } else if (results[0].label == "Bell") {
      img.src = 'aliens-01.png';
      img1.src = 'aliens-02.gif';
      img2.src = 'aliens-03.png';
      img3.src = 'aliens-04.png';
    } else if (results[0].label == "Snapping") {
      img.src = 'aliens-01.png';
      img1.src = 'aliens-02.png';
      img2.src = 'aliens-03.gif';
      img3.src = 'aliens-04.png';
    } else {
      img.src = 'aliens-01.png';
      img1.src = 'aliens-02.png';
      img2.src = 'aliens-03.png';
      img3.src = 'aliens-04.gif';
    }
  }
}