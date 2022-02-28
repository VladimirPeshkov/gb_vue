<template>
    <form class="calc" action="" @click = "getResult($event)">
        <input class="calc__operand1" type="number" v-model.number.trim="operand1">
        <input class="calc__operand2" type="number" v-model.number.trim="operand2">
        <span class="calc__result"> = {{result}}</span>
        <ul class="calc__buttons">
            <li class="calc__btn"><input class="calc__btn-input calc__btn-input--sum" type="submit" value="+"></li>
            <li class="calc__btn"><input class="calc__btn-input calc__btn-input--diff" type="submit" value="-"></li>
            <li class="calc__btn"><input class="calc__btn-input calc__btn-input--mult" type="submit" value="*"></li>
            <li class="calc__btn"><input class="calc__btn-input calc__btn-input--div" type="submit" value="/"></li>
            <li class="calc__btn"><input class="calc__btn-input calc__btn-input--div--int" type="submit" value="Целочисленное деление"></li>
        </ul>
        <div class="calc__exponent">
            <label for="base">Число</label>
            <input type="number" id="base" class="calc__input--base" v-model.number.trim="base">
            <label for="exponent">Степень</label>
            <input type="number" id="" class="calc__input--exponent" v-model.number.trim="exponent">
            <input class="calc__btn-input--exp" type="submit" value="Возвести в степень">
        </div>
    </form>
</template>

<script>
    export default {
    name: 'CalcComponent',

    data: () => {
        return {
            result: 0,
            operand1: 0,
            operand2: 0,
            base: 0,
            exponent: 0,
        }
    },

    methods: {
        getResult(event) {
            event.preventDefault();
            if (event.target.classList.contains('calc__btn-input--sum')) this.result = this.operand1 + this.operand2;
            else if (event.target.classList.contains('calc__btn-input--diff')) this.result = this.operand1 - this.operand2;
            else if (event.target.classList.contains('calc__btn-input--mult')) this.result = this.operand1 * this.operand2;
            else if (event.target.classList.contains('calc__btn-input--div')) this.result = this.operand1 / this.operand2;    
            else if (event.target.classList.contains('calc__btn-input--div--int')) this.result = Math.trunc(this.operand1 / this.operand2);    
            else if (event.target.classList.contains('calc__btn-input--exp')) this.result = Math.pow(this.base, this.exponent);    
        }
    }
}
</script>

<style>
    .calc__buttons {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        justify-content: center;
        padding: 10px;
        gap: 10px;
    }
</style>
