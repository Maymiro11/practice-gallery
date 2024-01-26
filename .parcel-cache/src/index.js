import Notify from 'simple-notify'
import 'simple-notify/dist/simple-notify.min.css';

const form = document.querySelector('.js-form');
const box = document.querySelector('.js-list');

console.log(form);
form.addEventListener('submit', onFormSubmit);

function onFormSubmit (e) {
    e.preventDefault();
    
    const input1 = form.elements.img1.value;
    const input2 = form.elements.img2.value;
    if (input1 === '' || input2 === '') {
        pushNotify();
     return;
    }
    const renderCard = markup (input1);

    box.insertAdjacentHTML('afterbegin', renderCard);
    
}
function markup (url) {
    return `<li class="box item"><img
    src="${url}"
    alt=""
  />
  <button class="form-control" data-type="delete">DELETE</button>
</li>`
   
}

function pushNotify() {
    new Notify({
      status: 'warning',
      title: 'Error',
      text: 'The fields are empty',
      effect: 'fade',
      speed: 300,
      customClass: null,
      customIcon: null,
      showIcon: true,
      showCloseButton: false,
      autoclose: true,
      autotimeout: 5000,
      gap: 20,
      distance: 20,
      type: 1,
      position: 'center'
    })
  }

