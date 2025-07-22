function changeText(){

    let fpara= document.getElementById('fpara');
    
    if(fpara.textContent==='Hello Demo website'){
        fpara.textContent='Hello!!!'
    }
    else{fpara.textContent="Hello Demo website";}
    

}
//event target is the element we are doing action 
// element.addEventListener(eventType, listenerFunction, useCapture);

let fpara= document.getElementById('fpara'); 
fpara.addEventListener('click', changeText);

// phase of the Event 
// there are three types of Phase of event 
//              <div>
//                |
//             (Article)
//              /     \
//             <h1>   <p> 

// 1 >> Capturing Phase where we are try to get the target 
//2 >> At Phase refers to the target position that we have achieved 
//3 >> Bubbling Phase that is when we are going to the parent Node which div in the above case 

let anchorElement=document.getElementBy('fAnchor');

anchorElement.addEventListener('click', function(event){
    event.preventDefault();
    anchorElement.textContent='Click to visit the CodeHelp Website!';
});