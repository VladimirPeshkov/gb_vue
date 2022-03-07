<template>
    <form class="calc">
        <input class="calc__operand1" type="number" v-model="operand1">
        <input class="calc__operand2" type="number" v-model="operand2">
        <span class="calc__result"> = {{result}}</span>
        <ul class="calc__buttons">

            <li class="calc__btn" @click="sum">
                <input 
                    class="calc__btn-input calc__btn-input--sum" 
                    type="submit" 
                    value="+"
                />
            </li>
            
            <li class="calc__btn" @click="diff">
                <input 
                    class="calc__btn-input calc__btn-input--diff" 
                    type="submit" 
                    value="-"
                />
            </li>

            <li class="calc__btn" @click="mult">
                <input 
                    class="calc__btn-input calc__btn-input--mult" 
                    type="submit" 
                    value="*"
                />
            </li>

            <li class="calc__btn" @click="div">
                <input 
                    class="calc__btn-input calc__btn-input--div" 
                    type="submit" 
                    value="/"
                />
            </li>

            <li class="calc__btn" @click = "getResult($event)">
                <input 
                    class="calc__btn-input calc__btn-input--div--int" 
                    type="submit" 
                    value="Целочисленное деление"
                />
            </li>
        </ul>

        <label for="checkbox">Show keyboard</label>
        <input type="checkbox" name="checkbox" id="checkbox" v-model="keyboardVisible">
        
        <KeyBoard 
            v-show="keyboardVisible"
            @changeOperandInput="setOperand"
            @addDigit="addDigit"
        />
    </form>
</template>

<script>

    import KeyBoard from './Keyboard.vue';

    export default {
    name: 'CalcComponent',
    components: {
        KeyBoard
    },

    data: () => {
        return {
            result: 0,
            operand1: '',
            operand2: '',
            base: 0,
            exponent: 0,
            keyboardVisible: true,
            activeOperandInput: 'operand1'
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
        },

        sum(evt){
            evt.preventDefault();
            this.result = Number(this.operand1) + Number(this.operand2);
        },
        diff(evt){
            evt.preventDefault();
            this.result = Number(this.operand1) - Number(this.operand2);
        },
        mult(evt){
            evt.preventDefault();
            this.result = Number(this.operand1) * Number(this.operand2);
        },
        div(evt){
            evt.preventDefault();
            this.result = Number(this.operand1) / Number(this.operand2);
        },
        divInt(evt){
            evt.preventDefault();
            this.result = Math.trunc(Number(this.operand1) / Number(this.operand2));
        },

        setOperand(operandInput){
            this.activeOperandInput = operandInput;
        },

        addDigit(number){
            if (this.activeOperandInput === 'operand1'){
                this.operand1 += number
            } else if (this.activeOperandInput === 'operand2'){
                 this.operand2 += number   
            }    
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
