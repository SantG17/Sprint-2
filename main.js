const inputName = document.querySelector("#input_name");
const inputNumber = document.querySelector("#input_number");
const inputMonth = document.querySelector("#input_month");
const inputYear = document.querySelector("#input_year");
const inputCVC = document.querySelector("#input_cvc");
const cardNumber = document.querySelector("#n_card");
const cardName = document.querySelector("#name_card");
const cardMonth = document.querySelector("#month_card");
const cardYear = document.querySelector("#year_card");
const cardCVC = document.querySelector("#cvc_card");
const form = document.querySelector("#form");
const thankYou = document.querySelector("#thanks");
const btnsubmit = document.getElementById('btnsubmit');
const btnContinue = document.querySelector("#continue");
const lblErrorName = document.getElementById('lblErrorName');
const lblErrorCardNumber = document.getElementById('lblErrorCardNumber');
const lblErrorMM = document.getElementById('lblErrorMM');
const lblErrorYY = document.getElementById('lblErrorYY');
const lblErrorCvc = document.getElementById('lblErrorCvc');

let nom, numbercard, mm, yy, cvc;

let credit = JSON.parse(localStorage.getItem("card")) || [];

const verificadorinputName =() => {
    if (inputName.value.length === 0) {
        cardName.innerText = "Jane Appleseed";
        inputName.classList.add("inputError");
        lblErrorName.classList.remove("hidden");
        lblErrorName.textContent = "Don't leave this space empty";
        return false;
      } else {
        inputName.classList.remove("inputError");
        lblErrorName.classList.add("hidden");
        return true;
      }
};

const verificadorinputCard = () => {
    if (inputNumber.value.length === 0) {
      cardNumber.innerText = "0000 0000 0000 0000";
      inputNumber.classList.add("inputError");
      lblErrorCardNumber.classList.remove("hidden");
      lblErrorCardNumber.textContent = 'Wrong format, numbers only'
  
      return false;
    } else {
        inputNumber.classList.remove('inputError');
        lblErrorCardNumber.classList.add('hidden');
        return true;
    }
    
};

const verificadorinputMes = () => {
    if (inputMonth.value.length === 0) {
      cardMonth.innerText = "00";
      inputMonth.classList.add('inputError');
      lblErrorMM.classList.remove('hidden');
      lblErrorMM.textContent = "Can't be blanck"
      return false;
    } else {
        inputMonth.classList.remove('inputError');
        lblErrorMM.classList.add('hidden');
      return true;
    }
};

const verificadorinputYear = () => {
    if (inputYear.value.length === 0) {
      cardYear.innerText = "00";
      inputYear.classList.add('inputError');
      lblErrorYY.classList.remove('hidden');
      return false;
    } else {
        inputYear.classList.remove('inputError');
        lblErrorYY.classList.add('hidden');
      return true;
    }
};
  
const verificadorinputCvc = () => {
    if (inputCVC.value.length === 0) {
      cardCVC.innerText = "000";
      inputCVC.classList.add('inputError');
      lblErrorCvc.classList.remove('hidden');
      lblErrorCvc.textContent = "Can't be blanck"
      return false;
    } else {
        inputCVC.classList.remove('inputError');
        lblErrorCvc.classList.add('hidden');
      return true;
    }
};

inputName.addEventListener("input", () => {
    cardName.innerText = inputName.value;
    nom = verificadorinputName();
    funcionverify();
});

inputNumber.addEventListener("input", () => {
    cardNumber.innerText = inputNumber.value;
    numbercard = verificadorinputCard();
    funcionverify();
});

inputMonth.addEventListener("input", (e) => {
    inputMonth.value = e.target.value.slice(0, 2);
    cardMonth.innerText = inputMonth.value;
    mm = verificadorinputMes();
    funcionverify();
});

inputYear.addEventListener("input", (e) => {
    inputYear.value = e.target.value.slice(0, 2);
    cardYear.innerText = inputYear.value;
    yy = verificadorinputYear();
    funcionverify();
});

inputCVC.addEventListener("input", (e) => {
    inputCVC.value = e.target.value.slice(0, 3);
    cardCVC.innerText = inputCVC.value;
    cvc = verificadorinputCvc();
    funcionverify();
});

const funcionverify = () => {
    nom = verificadorinputName();
    numbercard = verificadorinputCard();
    mm = verificadorinputMes();
    yy = verificadorinputYear();
    cvc = verificadorinputCvc();
    if (
      nom == false ||
      numbercard == false ||
      mm == false ||
      yy == false ||
      cvc == false
    ) {
      btnsubmit.classList.add("disable");
    } else {
      btnsubmit.classList.remove("disable");
      const card = {
        nom: inputName.value,
        numbercard: inputNumber.value,
        mm: inputMonth.value,
        yy: inputYear.vale,
        cvc: inputCVC.value,
      };
      credit.push(card);
      localStorage.setItem("card", JSON.stringify(credit));
    }
  };

funcionverify();

form.addEventListener("submit", (e) => {
    e.preventDefault();
    funcionverify();
    form.classList.add("disable");
    thankYou.classList.remove("disable");
});



btnContinue.addEventListener("click", () => {
    form.classList.remove("disable");
    thankYou.classList.add("disable");
    form.reset();
    cardName.innerText = "Jane Appleseed";
    cardNumber.innerText = "0000 0000 0000 0000";
    cardMonth.innerText = "00";
    cardYear.innerText = "00";
    cardCVC.innerText = "000";
})