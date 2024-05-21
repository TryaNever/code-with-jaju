const errorMessage = document.querySelector('.hidden')
const submitBtn = document.querySelector('.submit')
const form = document.querySelector('form')
const emailInput = document.querySelector('.email')
const containInfo = document.querySelector('.contain-info')
const containImg = document.querySelector('.contain-img')
const containInfoSucess = document.querySelector('.oklo')
const goBack = document.querySelector('#goBack')
const textMail = document.querySelector('.text-to-confirm')
console.log(goBack);

function switchStyle() {
    containInfo.classList.toggle('hidden')
    containImg.classList.toggle('hidden')
    containInfoSucess.classList.toggle('hidden')
    containInfoSucess.classList.toggle('contain-info-sucess')
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (regexEmail.test(emailInput.value)) {
        errorMessage.classList.add('hidden');
        switchStyle()
        textMail.textContent = `A confirmation email has been sent to ${emailInput.value}. Please open it and click the button inside to confirm your subscription.`
    } else {
        errorMessage.classList.remove('hidden');
        console.log("Email invalide");
    }
});

goBack.addEventListener('click', function () {
    switchStyle()
})