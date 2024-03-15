'use strict';
const form = document.querySelector('.form');
const successMsg = document.querySelector('.success');

const btnConfirm = document.querySelector('.btn-confirm');
const btnContinue = document.querySelector('.btn-continue');

const inputFields = document.querySelectorAll('.input');
const cardNumber = document.querySelectorAll('.number');

const correctNum = /^\d{4}[ ]?\d{4}[ ]?\d{4}[ ]?\d{4}$/g;

const emptyMsg = `<p class="err-msg margin-b">Can't be blank</p>`;
const numErrMsg = `<p class="err-msg margin-b ">Wrong format, numbers only</p>`;

const checkCard = function (e) {
  e.preventDefault();
  inputFields.forEach(checkData);
};

const checkData = function (i) {
  const isNumber = i.classList.contains('number');

  if (i.value === '') {
    i.classList.add('err-color');
    i.insertAdjacentHTML('afterend', emptyMsg);
    return false;
  }

  if (i.value !== '' && !isNumber) {
    document.querySelector(`.card-${i.getAttribute('id')}`).textContent =
      i.value;
    console.log(2);
    return true;
  } else if (i.value !== '' && isNumber) {
    if (!correctNum.test(i.value)) {
      i.classList.add('err-color');
      i.insertAdjacentHTML('afterend', numErrMsg);
      document.querySelector(`.card-${i.getAttribute('id')}`).textContent =
        i.value;
      return false;
    } else {
      return true;
    }
  }
};

btnConfirm.addEventListener('click', checkCard);

const removeErrMsg = function (i) {
  if (i.nextElementSibling.classList.contains('err-msg'))
    i.nextElementSibling.remove();
};
