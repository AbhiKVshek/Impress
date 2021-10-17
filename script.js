/* Education Add code*/
function addNewEdufield(){
    let newNode=document.createElement('textarea');
    let newNode1=document.createElement('textarea');
    let newNode2=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('colfield');
    newNode.classList.add("mt-4");
    newNode.setAttribute("rows", 1);
    newNode.setAttribute("placeholder","Institute");
    newNode2.classList.add('form-control');
    newNode2.setAttribute("rows", 1);
    newNode2.classList.add('degfield');
    newNode2.setAttribute('placeholder','Degree');
    newNode1.classList.add('form-control');
    newNode1.classList.add('yearfield');
    newNode1.setAttribute("rows", 1);
    newNode1.setAttribute('placeholder','year')
    

    let eduob=document.getElementById("edu");
    let weAddButtonob=document.getElementById("weAddButton");

    eduob.insertBefore(newNode, weAddButtonob);
    eduob.insertBefore(newNode1, weAddButtonob);
    eduob.insertBefore(newNode2, weAddButtonob);
}

/* Exp Add code*/
 function addNewExpfield(){   
    let newNode=document.createElement('textarea');
    let newNode1=document.createElement('textarea');
    let newNode2=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('colfield');
    newNode.classList.add("mt-4");
    newNode.setAttribute("rows", 1);
    newNode.setAttribute("placeholder","company");
    newNode2.classList.add('form-control');
    newNode2.setAttribute("rows", 1);
    newNode2.classList.add('degfield');
    newNode2.setAttribute('placeholder','Designation');
    newNode1.classList.add('form-control');
    newNode1.classList.add('yearfield');
    newNode1.setAttribute("rows", 1);
    newNode1.setAttribute('placeholder','year')
    
    

    let eduob=document.getElementById("exp");
    let weAddButtonob1=document.getElementById("weAddButton1");

    eduob.insertBefore(newNode, weAddButtonob1);
    eduob.insertBefore(newNode1, weAddButtonob1);
    eduob.insertBefore(newNode2, weAddButtonob1);
}

/* Generate CV */
function generate(){
    
    alert(" OOPS! Resume Builder is still not Yet fully completed.");
}


/* Skills field code */
const tagContainer = document.querySelector('.tag-container');
const input = document.querySelector('.tag-container input');

let tags = [];

function createTag(label) {
  const div = document.createElement('div');
  div.setAttribute('class', 'tag');
  const span = document.createElement('span');
  span.innerHTML = label;
  const closeIcon = document.createElement('i');
  closeIcon.setAttribute('class', 'fa fa-times');
  closeIcon.setAttribute('data-item', label);
  div.appendChild(span);
  div.appendChild(closeIcon);
  return div;
}

function clearTags() {
  document.querySelectorAll('.tag').forEach(tag => {
    tag.parentElement.removeChild(tag);
  });
}

function addTags() {
  clearTags();
  tags.slice().reverse().forEach(tag => {
    tagContainer.prepend(createTag(tag));
  });
}

input.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      e.target.value.split(',').forEach(tag => {
        tags.push(tag);  
      });
      
      addTags();
      input.value = '';
    }
});
document.addEventListener('click', (e) => {
  console.log(e.target.tagName);
  if (e.target.tagName === 'I') {
    const tagLabel = e.target.getAttribute('data-item');
    const index = tags.indexOf(tagLabel);
    tags = [...tags.slice(0, index), ...tags.slice(index+1)];
    addTags();    
  }
})

input.focus();
