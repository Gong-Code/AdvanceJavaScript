const modal = document.getElementById('modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const consentForm = document.getElementById('consent-form');
const modalText = document.getElementById('modal-text');
const declineBtn = document.getElementById('decline-btn');
const buttonContainer = document.getElementById('modal-choice-btns');
const acceptBtn = document.getElementById('accept-btn');



setTimeout(() => {
    modal.style.display = 'inline';
}, 1500);

modalCloseBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});


consentForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const consentFormData = new FormData(consentForm);

    const fullName = consentFormData.get('fullName');

    const email = consentFormData.get('email');

    console.log(email)


    console.log(fullName)

    modalText.innerHTML = 
    `<div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="uploadText">
            Uploading your data to the dark web...          
        </p>     
    </div>`

    console.log(modalText);

    setTimeout( () => {
        document.getElementById('uploadText').innerText = `
        Making the sale...`;
    }, 1500);

    setTimeout( () => {
        document.querySelector('.modal-inner').innerHTML = `
        <h2>Thanks <span class="modal-display-name">${fullName}</span>, you sucker! </h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="images/pirate.gif">
        </div>
        ` ;
        modalCloseBtn.disabled = false;
        modalCloseBtn.style.display = 'cursor-pointer'
    }, 3000);

});

declineBtn.addEventListener('mouseenter', () => {
    buttonContainer.classList.toggle('reverse-btns')
});


