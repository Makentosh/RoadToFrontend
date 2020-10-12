let fileInput = document.querySelector('#file');
let btn = document.querySelector('#button');




let fileArray = [];

function setVariables(obj) {
  let fileBlock =
  `
  <div class="upload-items__item" id="${obj.id}">
      <div class="upload-item">
        <button type="button" id="buttonSec" class="btn__upload">
          <input type="file" id="fileSec">
        </button>
         <div class="upload-item__reference">
              <div class="upload-item__reference-name">
                  <p class="upload-item__reference-title">Назва</p>
                  <p class="upload-item__reference-text">${obj.name}</p>
              </div>
              <div class="upload-item__reference-size">
                  <p class="upload-item__reference-title">Розмір</p>
                  <p class="upload-item__reference-text">${obj.size}</p>
              </div>
              <div class="upload-item__reference-filetype">
                  <p class="upload-item__reference-title">Тип Файлу</p>
                  <p class="upload-item__reference-text">${obj.type}</p>
              </div>
              <div class="upload-item__reference-time">
                  <p class="uupload-item__reference-title">Час додавання</p>
                  <p class="upload-item__reference-text">${obj.date}</p>
              </div>
              <div class="upload-item__reference-time">
                  <p class="upload-item__reference-title">Статус</p>
                  <p class="upload-item__reference-text upload-item__reference-text-old">${obj.status}</p>
              </div>
          </div>
      </div>
      
         
      <button type="button" class="upload-item__delete" data-index="${obj.id}"></button>
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
  div.classList.add('upload-item');

  insertHtml(div)
})

 function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}


function insertHtml(docElem) {
  let divToChange = document.querySelector('.upload-items');
  divToChange.appendChild(docElem);
}


// -----double range input


let sizeMin = document.querySelector('.sizeMin');
let sizeMax = document.querySelector('.sizeMax');

let minSize = document.querySelector('.valueMin');
let maxSize = document.querySelector('.valueMax');



sizeMin.addEventListener('input', () => {
  minSize.innerHTML = sizeMin.value;
});
sizeMax.addEventListener('input', () => {
  maxSize.innerHTML = sizeMax.value;
});

//dropown click
let sortList = document.querySelector('.filters__status_list');
let dropdown = document.querySelector('.filters__status_dropdown');
let dropdownItem = document.querySelector('.filters__status_item');


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

  })

}
initSwitcher();


// close button  and modal


let modal = document.querySelector('.modal__window');

let modalDel = document.querySelector('#delcar');

let modalClose = document.querySelector('.modal_close');


document.addEventListener('click', (e) => {
  if(e.target && e.target.classList == 'item__delete'){

    let item = document.querySelector('.upload__items-item');
    let remBtn = document.querySelector('.item__delete');


    modalDel.addEventListener('click', (y) => {
      item.remove();
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

//
// let count = document.querySelector('#counter');
// let max = document.querySelector('.btn_max')
// let min = document.querySelector('.btn_min')
//
// max.addEventListener('click', () => {
//   el.innerHTML = el.innerHTML + fileBlock;
//   count.value++;
//
// })
// min.addEventListener('click', (e) => {
//
//   let item = document.querySelector('.upload__items_item');
//
//
//   if (count.value <= 0) {
//     count.value = 0;
//   }
//   count.value--;
//   item.remove();
//
//
// })
//проверка ввода в инпут
// document.getElementById("counter").onkeypress = function(event){
//    event = event || window.event;
//    if (event.charCode && (event.charCode < 48 || event.charCode > 57))
//     return false;
//   };




  let fileBlock =
  `<div class="upload__items_item" id="">
        <button type="button" id="buttonSec" name="button" class="item__upload">
          <input type="file" id="fileSec">
        </button>
          <div class="upload__items_reference">
              <div class="upload__items_reference-name">
                  <p class="upload__items_reference-title">Назва</p>
                  <p class="upload__items_reference-text"></p>
              </div>
              <div class="upload__items_reference-size">
                  <p class="upload__items_reference-title">Розмір</p>
                  <p class="upload__items_reference-text"></p>
              </div>
              <div class="upload__items_reference-filetype">
                  <p class="upload__items_reference-title">Тип Файлу</p>
                  <p class="upload__items_reference-text"></p>
              </div>
              <div class="upload__items_reference-time">
                  <p class="upload__items_reference-title">Час додавання</p>
                  <p class="upload__items_reference-text"></p>
              </div>
              <div class="upload__items_reference-time">
                  <p class="upload__items_reference-title">Статус</p>
                  <p class="upload__items_reference-text upload__items_reference-text-old"></p>
              </div>
          </div>
      <button type="button" class="item__delete" id="delete"></button>
  </div>`

  let el = document.querySelector('.upload__items');

  let v = 0;

  // while (v <= 5) {
  //   el.innerHTML = el.innerHTML + fileBlock;
  //   v++;
  // }

let salary,
    money,
    bonus,
    out,
    pay,
    kredit,
    allSalary,
    allOut,
    end,
    priceDay;

  salary = document.querySelector('#salary');
  money = document.querySelector('#money');
  bonus = document.querySelector('#bonus');
  out = document.querySelector('#out');
  pay = document.querySelector('#pay');
  kredit = document.querySelector('#kredit');
  allSalary = document.querySelector('#allSalary');
  allOut = document.querySelector('#allOut');
  myMoney = document.querySelector('#myMoney');
  priceDay = document.querySelector('#priceDay');

  document.addEventListener('keyup', () => {
    allSalary.value = Number(salary.value) + Number(money.value) + Number(bonus.value);
    allOut.value = Number(out.value) + Number(pay.value) + Number(kredit.value);
    myMoney.value = Number(allSalary.value) - Number(allOut.value);

    priceDay.value = Math.round(Number(myMoney.value) / 31);
  });




  //calculator second

// INIT CALC KEYS
  let calc = document.querySelector('.testing');
  let calcDisplay = document.querySelector('.calculator__display');
  let calcKeys = document.querySelectorAll('.calculator__key');
  let calcButton  = document.querySelectorAll('.calculator__button');
  let calcEqual = document.querySelector('.calculator__key--equal');
  let calcPower = document.querySelector('.calculator__power');
  let calcClear = document.querySelector('.calculator__clear');
  let backSpace = document.querySelector('.calculator__backspace');



// ADD NUMBERS TO INPUT
calcKeys.forEach(function(key) {
  let current = key.getAttribute('value');
  // console.log(current)
  key.textContent = current
})


// ADD NUMBERS TO INPUT
// calcButton.on('click', function () {
//   calcDisplay.val( calcDisplay.val() + $(this).attr('value') );
// });

calcButton.forEach((btn) => {

  btn.addEventListener('click',() => {
    calcDisplay.value = (calcDisplay.value + btn.getAttribute('value'));
  })

  // console.log(calcDisplay.value)
})

// clear input

calcClear.addEventListener('click', () => {
  calcDisplay.value = ''
})


calcPower.addEventListener('click', () => {
  calcDisplay.value = eval(calcDisplay.value)

})


// BACKSPACE BUTTON

backSpace.addEventListener('click', () => {
  calcDisplay.value = (calcDisplay.value.substring((0, calcDisplay.value.length-2)))
})



  document.getElementById("result").onkeypress = function(event){
    event = event || window.event;
    if (event.charCode && (event.charCode < 48 || event.charCode > 57))
     return false;
   };

