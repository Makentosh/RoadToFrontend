let fileInput = document.querySelector('#file');


let fileArray = [];

function setVariables({id, name, size, date, status, type}) {
  let fileBlock =
      `
  <div class="upload-items__item">
      <div class="upload-item">
        <button type="button" id="buttonSec" class="upload-item-btn btn__upload">
          <input type="file" id="upload-file-secondary">
        </button>
         <div class="upload-item__reference">
              <div class="upload-item__reference-name">
                  <p class="upload-item__reference-title">Назва</p>
                  <p class="upload-item__reference-text">${name}</p>
              </div>
              <div class="upload-item__reference-size">
                  <p class="upload-item__reference-title">Розмір</p>
                  <p class="upload-item__reference-text">${size}</p>
              </div>
              <div class="upload-item__reference-filetype">
                  <p class="upload-item__reference-title">Тип Файлу</p>
                  <p class="upload-item__reference-text">${type}</p>
              </div>
              <div class="upload-item__reference-time">
                  <p class="uupload-item__reference-title">Час додавання</p>
                  <p class="upload-item__reference-text">${date}</p>
              </div>
              <div class="upload-item__reference-time">
                  <p class="upload-item__reference-title">Статус</p>
                  <p class="upload-item__reference-text upload-item__reference-text-old">${status}</p>
              </div>
          </div>
             <button type="button" class="upload-item-btn btn__delete" data-index="${id}"></button>
      </div>
  </div>
  `

  return fileBlock;
}

document.addEventListener('change', (e) => {

  document.querySelectorAll('.btn__upload').forEach(item => {
    upload(item)
  });

  checkPagination()

});

upload(fileInput);

function upload(element) {
  element.addEventListener('change', (e) => {
    let files = e.target.files;

    Array.from(files).forEach(item => {
      let fileObj = {};

      let Data = new Date(),
          year = Data.getFullYear(),
          month = Data.getMonth() + 1,
          day = Data.getDate(),
          hours = Data.getHours(),
          minutes = Data.getMinutes();


      fileObj.name = item?.name;
      fileObj.size = Math.floor(file.size / 1024) + ' кб';
      fileObj.type = item?.type;
      fileObj.date = hours + ':' + minutes + ' ' + day + '.' + month + '.' + year;
      fileObj.status = 'New';
      fileObj.file = item;
      fileObj.id = uuidv4();
      fileObj.html = setVariables(fileObj);

      fileArray.push(fileObj);

      renderItems(fileObj);
    });



    e.target.value = '';
  });
}


function renderItems(item) {
    let div = document.createElement('div');
    div.innerHTML = item.html;
    div.classList.add('upload-item');
    div.setAttribute('id', item.id);
    insertHtml(div)
}

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}


function insertHtml(docElem) {
  let divToChange = document.querySelector('.upload-items');
  divToChange.appendChild(docElem);
}



function checkPagination() {
  let pagination =  document.querySelector('.paggination');
  let pagination_list = document.querySelector('.paggination__list');

  if(!fileArray.length) {
    pagination.style.display = 'none';
  } else if(fileArray.length > 0 && fileArray.length < 10){
    pagination.style.display = 'flex';
    let articlesOnPage = 10,
        startFrom = 1;
    const data = fileArray.slice(startFrom , startFrom + articlesOnPage);

    data.forEach((paging, index) => {
      pagination_list.insertAdjacentHTML('beforeend',` <li class="paggination__item">${index + 1}</li>`)
    })

  }
}

// buttonClicked = наша кнопка, например 2

// startFrom = buttonClicked * articlesOnPage




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


  if (e.target && e.target.classList.contains('btn__delete')) {
    let item_id = e.target.getAttribute('data-index');
    modalOpen(item_id);

    modalDel.addEventListener('click', () => {
      removeItem(item_id)
    });
  }
});



function removeItem(id) {
  let remove_item = document.getElementById(`${id}`);

  remove_item.remove();

  fileArray = fileArray.filter(x => x.id !== id);
  closeModal();
  console.log(fileArray)
}

function modalOpen() {
  document.body.style.overflow = 'hidden';
  modal.style.cssText = `
  display: flex;
  opacity: 1;
  `
}

//закриття модалки на хрестик
modalClose.addEventListener('click', () => {
  closeModal();
});

function closeModal() {
  document.body.style.overflow = 'none';
  modal.style.cssText = `
  display: none;
  opacity: 0;`;
}




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
let calcButton = document.querySelectorAll('.calculator__button');
let calcEqual = document.querySelector('.calculator__key--equal');
let calcPower = document.querySelector('.calculator__power');
let calcClear = document.querySelector('.calculator__clear');
let backSpace = document.querySelector('.calculator__backspace');


// ADD NUMBERS TO INPUT
calcKeys.forEach(function (key) {
  let current = key.getAttribute('value');
  // console.log(current)
  key.textContent = current
})


// ADD NUMBERS TO INPUT
// calcButton.on('click', function () {
//   calcDisplay.val( calcDisplay.val() + $(this).attr('value') );
// });

calcButton.forEach((btn) => {

  btn.addEventListener('click', () => {
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
  calcDisplay.value = (calcDisplay.value.substring((0, calcDisplay.value.length - 2)))
})


document.getElementById('result').onkeypress = function (event) {
  event = event || window.event;
  if (event.charCode && (event.charCode < 48 || event.charCode > 57))
    return false;
};

