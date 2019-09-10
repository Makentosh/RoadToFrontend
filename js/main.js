let fileInput = document.querySelector('#file');
let btn = document.querySelector('#button');

let bluBtn = document.querySelector('#butttonSec');

let secInput = document.querySelector('#fileSec');


let fileArray = [];


fileInput.addEventListener('change', (e) => {
  let file = event.target.files[0];

  let fileObj = {};

  Data = new Date();
  year = Data.getFullYear();
  month = Data.getMonth();
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


  console.log(fileObj);

  let div = document.createElement('div');
  div.innerHTML = setVariables(fileObj);
  div.classList.add('our');
  insertHtml(div)
})

// btn.addEventListener('click', (e) => fileInput.click());

function insertHtml(docElem) {
  let divToChange = document.querySelector('.upload__items');
  console.log(divToChange);
  divToChange.appendChild(docElem);
}

function setVariables(obj) {
  let fileBlock =
  `
  <div class="upload__items_item">
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
      <button type="button" class="item__delete"></button>
  </div>
  `

  return fileBlock;
}


let elm = document.querySelector('#sizeIn');
let container = elm.parentNode;
let values = elm.getAttribute('data-values').split(' ');

values.forEach(function (value, i, values) {
  let rangePart = elm.cloneNode();
  rangePart.type = 'range';
  rangePart.removeAttribute('data-values');
  rangePart.value = value;
  rangePart = container.insertBefore(rangePart, elm);
});

elm.remove();

let sortList = document.querySelector('.filters__status_list');
let dropdown = document.querySelector('.filters__status_dropdown');
let dropdownItem = document.querySelector('.filters__status_item')

function myEvent() {
  console.log('ON');
}
sortList.addEventListener('click', () => {
  dropdown.classList.toggle('active');
  sortList.classList.toggle('active');
});

let switcher = document.querySelector('.switch');

switcher.addEventListener('click', () => {
  switcher.classList.toggle('switch-on');
})

let vas = new CustomEvent ('vasya', {
  detail: {
    text: 'ON'
  }
});