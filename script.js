'use strict';
const form = document.querySelector('.form');
const successMsg = document.querySelector('.success');

const btnConfirm = document.querySelector('.btn-confirm');
const btnContineu = document.querySelector('.btn-contineu');

const inputFields = document.querySelectorAll('.input');
const cardNumber = document.querySelectorAll('.number');

const correctNum = /^\d{4}[ ]?\d{4}[ ]?\d{4}[ ]?\d{4}$/g;

const emptyMsg = `<p class="err-msg margin-b">Can't be blank</p>`;
const numErrMsg = `<p class="err-msg margin-b hidden">Wrong format, numbers only</p>`;

const checkData = function (i) {
  const isNumber = i.classList.contains('number');

  if (i.value === '') {
    i.classList.add('err-msg');
    i.insertAdjacentHTML('afterend', emptyMsg);
    return false;
  }

  if (i.value !== '' && !isNumber) {
    document.querySelector(`'.card-${i.getAttribute('id')}'`).textContent =
      i.value;
    return true;
  } else if (i.value !== '' && isNumber) {
    if (!correctNum) {
      i.classList.add('err-msg');
      i.insertAdjacentHTML('afterend', numErrMsg);
      document.querySelector(`'.card-${i.getAttribute('id')}'`).textContent =
        i.value;
      return false;
    } else {
      return true;
    }
  }
};

const checkCard = function (e) {
  e.preventDefaule();
  inputFields.forEach(checkData);
};

btnConfirm.addEventListener('click', checkCard);
