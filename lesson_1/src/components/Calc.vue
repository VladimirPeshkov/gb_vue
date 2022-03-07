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
        <label for="calc__checkbox">Show keyboard</label>
        <input type="checkbox" name="" id="calc__checkbox" v-model="checked">
        <KeyBoard />
    </form>
</template>

<script>

    import KeyBoard from './Keyboard.vue';

    export default {
    name: 'CalcComponent',

    components: {
        KeyBoard,
    },

    data: () => {
        return {
            result: 0,
            operand1: 0,
            operand2: 0,
            base: 0,
            exponent: 0,
            checked: true,
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
