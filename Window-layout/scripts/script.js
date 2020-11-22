let formLabels = document.querySelectorAll('.form__indent_label');
let totalPrice = document.querySelector('#form__sum_total-price');
let selectedPlan = document.querySelector('#form__inner_selected-plan');
let amountLicense = document.querySelector('#amount-license');


for (let i = 0; i < formLabels.length; i++) {
    formLabels[i].onchange = function () {
        let positionLicense = this.querySelector('.form__text-license');
        let price = this.querySelector('.form__subtext_price');

        ApplySelectedPlan();
        CalcPrice();

        amountLicense.onchange = CalcPrice;

        function CalcPrice() {
            totalPrice.textContent = price.textContent * amountLicense[amountLicense.selectedIndex].textContent;
        }
        function ApplySelectedPlan() {
            selectedPlan.textContent = positionLicense.textContent;
        }
    }
}