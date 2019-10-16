class CalculatorController {
    constructor() {
        this._locale = 'pt-BR';
        this._displayCalculatorElement = document.querySelector("#display");
        this._currentDateElement = document.querySelector("#data");
        this._timeElement = document.querySelector("#hora");

        this.initialize();
    }

    initialize() {
        setInterval(() => {
            this.currentDate = new Date().toLocaleDateString(this._locale);
            this.time = new Date().toLocaleTimeString(this._locale);
        }, 1000);
    }

    get displayCalculator() {
        return this._displayCalculatorElement.innerHTML;
    }

    set displayCalculator(value) {
        this._displayCalculatorElement.innerHTML = value;
    }

    get currentDate() {
        return new Date();
    }

    set currentDate(value) {
        this._currentDateElement.innerHTML = value;
    }

    get time() {
        return this._timeElement.innerHTML;
    }

    set time(value) {
        this._timeElement.innerHTML = value;
    }
}