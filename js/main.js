let fileInput = document.querySelector('#file');
let btn = document.querySelector('#button');




let fileArray = [];

function setVariables(obj) {
  let fileBlock =
  `
  <div class="upload__items_item" id="${obj.id}">
        <button type="button" id="buttonSec" name="button" class="item__upload">
          <input type="file" id="fileSec">
        </button>
          <div class="upload__items_reference">
              <div class="upload__items_reference-name">
                  <p class="upload__items_reference-title">Назва</p>
                  <p class="upload__items_reference-text">${obj.name}</p>
              </div>
              <div class="upload__items_reference-size">
                  <p class="upload__items_reference-title">Розмір</p>
                  <p class="upload__items_reference-text">${obj.size}</p>
              </div>
              <div class="upload__items_reference-filetype">
                  <p class="upload__items_reference-title">Тип Файлу</p>
                  <p class="upload__items_reference-text">${obj.type}</p>
              </div>
              <div class="upload__items_reference-time">
                  <p class="upload__items_reference-title">Час додавання</p>
                  <p class="upload__items_reference-text">${obj.date}</p>
              </div>
              <div class="upload__items_reference-time">
                  <p class="upload__items_reference-title">Статус</p>
                  <p class="upload__items_reference-text upload__items_reference-text-old">${obj.status}</p>
              </div>
          </div>
      <button type="button" class="item__delete" id="delete"></button>
  </div>
  `

  return fileBlock;
}


fileInput.addEventListener('change', (e) => {
  let file = event.target.files[0];

  let fileObj = {};

  Data = new Date();
  year = Data.getFullYear();
  month = Data.getMonth() + 1;
  day = Data.getDate();
  hours = Data.getHours();
  minutes = Data.getMinutes();
  
  // let newStatus = 'New';
  // let oldStatus = 'Old';
  // let removedStatus = 'Removed';

  fileObj.name = file.name;
  fileObj.size = Math.floor(file.size / 1024) + " кб";
  fileObj.type = file.type;
  fileObj.date = hours + ":" + minutes + " " + day + "." + month + "." + year;
  fileObj.status = 'New';
  fileObj.file = file;
  fileObj.id =  uuidv4();


  console.log(fileObj);

  let div = document.createElement('div');
  div.innerHTML = setVariables(fileObj);
  div.classList.add('upload_item');

  insertHtml(div)
})

 function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
// btn.addEventListener('click', (e) => fileInput.click());

function insertHtml(docElem) {
  let divToChange = document.querySelector('.upload__items');
  console.log(divToChange);
  divToChange.appendChild(docElem);
}


// -----double range input
// let elm = document.querySelector('#sizeIn');
// let container = elm.parentNode;
// let values = elm.getAttribute('data-values').split(' ');

// values.forEach(function (value, i, values) {
//   let rangePart = elm.cloneNode();
//   rangePart.type = 'range';
//   rangePart.removeAttribute('data-values');
//   rangePart.value = value;
//   rangePart = container.insertBefore(rangePart, elm);
// });

// elm.remove();

let sizeMin = document.querySelector('.sizeMin');
let sizeMax = document.querySelector('.sizeMax');

let minSize = document.querySelector('.valueMin');
let maxSize = document.querySelector('.valueMax');



sizeMin.addEventListener('input', () => {
  minSize.innerHTML = sizeMin.value;
  // console.log(maxSize);
})
sizeMax.addEventListener('input', () => {
  maxSize.innerHTML = sizeMax.value;
  // console.log(maxSize);
})

//dropown click
let sortList = document.querySelector('.filters__status_list');
let dropdown = document.querySelector('.filters__status_dropdown');
let dropdownItem = document.querySelector('.filters__status_item')


sortList.addEventListener('click', () => {
  dropdown.classList.toggle('active');
  sortList.classList.toggle('active');
});


//switcher
let switcher = document.querySelector('.switch');



function initSwitcher() {
  let counter = 0;
  let isOn = false;
  switcher.addEventListener('click', () => {
    // switcher.classList.toggle('switch-on');
    isOn 
    ? switcher.classList.add('switch-on') 
    : switcher.classList.remove('switch-on');
    isOn = !isOn;
    
    console.log(isOn);
  })
  
}
initSwitcher();

let vas = new CustomEvent ('myevent', {
    detail: {
      text: 'Do you realy want off?',
      textTwo: 'Do you realy want on?'
    }
})

// close button  and modal


let modal = document.querySelector('.modal__window');

let modalDel = document.querySelector('#delcar');

let modalClose = document.querySelector('.modal_close');


document.addEventListener('click', (e) => {
  if(e.target && e.target.classList == 'item__delete'){
    
    let item = document.querySelector('.upload__items_item');
    let remBtn = document.querySelector('.item__delete')
    
    let modalOpen = new CustomEvent ('modal-open', {
      detail: {
        id: 22
      }
    });

    
    document.dispatchEvent(modalOpen);
    
   }
});




document.addEventListener('modal-open', e => modalOpen(e))

function modalOpen(e) {
  // console.log(e.detail.id)
  modal.style.cssText = `
  display: flex;
  opacity: 1;`;
    
}


// modalDel.addEventListener('click', () => {
//   document.querySelector('.upload__items_item').remove();
//   modal.style.cssText = `
//   display: none;
//   opacity: 0;`
// })



//закриття модалки на хрестик
modalClose.addEventListener('click', () =>{
  modal.style.cssText = `
  display: none;
  opacity: 0;`;
})




//input number


let count = document.querySelector('#counter');
let max = document.querySelector('.btn_max')
let min = document.querySelector('.btn_min')

max.addEventListener('click', () => {
  count.value++;
})
min.addEventListener('click', () => {
  count.value--;
  for (count.value; count.value < 0; ) {
    count.value = 0;
  }
})
//проверка ввода в инпут
document.getElementById("counter").onkeypress= function(event){
   event = event || window.event;
   if (event.charCode && (event.charCode < 48 || event.charCode > 57))
    return false;
  };
  


