// Reflow (or Layout)
// Reflow is the process of recalculating the positions and geometries of elements in the document, which may be triggered by changes that affect layout, such as resizing the browser window, modifying DOM elements, or changing CSS styles that affect layout properties (e.g., width, height, margin, padding).

// Repaint
// Repaint occurs after reflow and involves updating the visual representation of affected elements on the screen. It doesn't involve changing the layout but rather updating the pixels to reflect changes in appearance, such as color, background, border, or visibility.

//Code 1 
//Why Code 1 is slower ?
// Code 1 - Direct DOM Manipulation:
// Creates 100 paragraphs one by one
// Appends each directly to document.body
// Triggers 100 DOM reflows/repaints
const t1=performance.now();
for (let i = 1; i <=100; i++) {
    let para= document.createElement('p');
    para.textContent='This is Para of Code 1'+i;
    document.body.appendChild(para);
}

const t2=performance.now();

console.log('Time taken by Code 1 ',t2-t1);


//Code 2 

//Why code 2 is faster ?
// Code 2 - Batch DOM Manipulation:
// Creates a container div first
// Builds all 100 paragraphs inside the div
// Appends the complete div to document.body in one operation
// Only triggers 1 DOM reflow/repaint
const t3=performance.now();
let myDiv= document.createElement('div');

for(let j=1; j<=100; j++){
    let para=document.createElement('p');
    para.textContent='This is para of Code 2'
    myDiv.appendChild(para);
    
}
document.body.appendChild(myDiv);

const t4=performance.now();

console.log('Time taken by Code 2 ',t4-t3);

//Code 3 >> Best Code 
const t5=performance.now();
let fragment = document.createDocumentFragment();

for (let i=1; i<=100; i++){
    let para =document.createElement('p');
    para.textContent='This is Para '+ i;
    // No reflow/repaint 
    fragment.appendChild(para);
}
document.body.append(fragment);
const t6=performance.now();

console.log('Time taken by Code 3 ',t6-t5);

