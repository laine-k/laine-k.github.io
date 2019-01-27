function showFabOnly(){
    showAll();
   hideUi();
   hideDev();
   hideMachineLearning();
   hideMotion();
}
function showUiOnly(){
    showAll();
    hideFab();
    hideDev();
    hideMachineLearning();
    hideMotion();
    showWhenBothDevUi();
 }
 function showMachineLearningOnly(){
    showAll();
    hideFab();
    hideDev();
    hideUi();
    hideMotion();
 }
 function showDevOnly(){
    showAll();
    hideFab();
    hideUi();
    hideMachineLearning();
    hideMotion();
    showWhenBothDevUi();
 }
 function showMotionOnly(){
    showAll();
    hideFab();
    hideUi();
    hideMachineLearning();
    hideDev();
 }
function showAll(){
let collection = document.getElementsByClassName('hidden');
   let arry = Array.from(collection)
   arry.forEach(element => {
       element.classList.remove('hidden');
   });    
}
function hideUi(){
   let collection = document.getElementsByClassName('ui-section');
   let arry = Array.from(collection)
   arry.forEach(element => {
       element.classList.add('hidden');
   });    
}
function hideDev(){
    let collection = document.getElementsByClassName('dev-section');
    let arry = Array.from(collection)
    arry.forEach(element => {
        element.classList.add('hidden');
    });    
}
function hideMachineLearning(){
    let collection = document.getElementsByClassName('machine-learning-section');
    let arry = Array.from(collection)
    arry.forEach(element => {
        element.classList.add('hidden');
    });    
}
function hideFab(){
    let collection = document.getElementsByClassName('fab-section');
    let arry = Array.from(collection)
    arry.forEach(element => {
        element.classList.add('hidden');
    });    
}
function hideMotion(){
    let collection = document.getElementsByClassName('motion-section');
    let arry = Array.from(collection)
    arry.forEach(element => {
        element.classList.add('hidden');
    });    
}
function showWhenBothDevUi(){
    let collection = document.getElementsByClassName('dev-section ui-section');
    let arry = Array.from(collection)
    arry.forEach(element => {
        element.classList.remove('hidden');
    });   
}