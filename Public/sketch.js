let data = [];

let touchMultiplier = 20;
let formattedData = [];


function loadData() {

  fetch('/data')
   .then((response) => {
     return response.json();
   })
   .then((incoming) => {
     console.log(data);
     data = incoming.thedata;

     formattedData = [];

     for (let i = 0; i < data.length; i++) {
      let current = data[i];
       print("On " + current.breed);
       let foundBreed = false;
       
       for (let j = 0; j < formattedData.length; j++) {
        if (current.breed == formattedData[j].breed) {
          formattedData[j].cat++;
          print("found " + formattedData[j].cat);
          foundBreed = true;
        }
       } 
       if (foundBreed == false) {
        formattedData.push({"breed": current.breed, "cat": 1}); 
         print("not found, added to formattedData");
       }
     }
     print(formattedData);
   });
   setTimeout(loadData, 10000);
}


function setup() {
  createCanvas(1000, 450);
  loadData();
  //console.log(data);
  print(data);
  

}

function draw() {
  for (let i = 0; i < formattedData.length; i++) {
    fill(0)
    textSize(15);
    text('West Lake', 110, 35);
  
    
    fill(0, 50, 100)
    textSize(15);
    text('GuiLin', 220, 35);
    
    fill(0, 100, 200)
    textSize(15);
    text('Phoenix Town', 330, 35);
    
  

    
    fill(0, 150, 250)
    textSize(15);
    text('Rainbow', 440, 35);

    fill(0, 150, 250)
    textSize(15);
    text('Namtso', 550, 35);

    fill(0, 150, 250)
    textSize(15);
    text('ZhangJiaJie', 660, 35);

    fill(0, 150, 250)
    textSize(15);
    text('HuangShan', 770, 35);

    fill(0, 150, 250)
    textSize(15);
    text('ChangBai', 880, 35);

  }
  
  for (let i = 0; i < formattedData.length; i++) {
    noStroke()
    fill(0, i* 30, i* 100)
    rect(110+i*110,60, 40, touchMultiplier * formattedData[i].cat);
  }

}