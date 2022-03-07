<template>
    <form class="calc">
        <input class="calc__operand1" type="number" v-model="operand1">
        <input class="calc__operand2" type="number" v-model="operand2">
        <span class="calc__result"> = {{result}}</span>
        <ul class="calc__buttons">
            <li class="calc__btn" v-for="operation in operations" :key="operation">
                <input 
                    class="calc__btn-input" 
                    type="submit" 
                    :value="operation"
                    @click="preventDefault($event), calculated(operation)"
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
            activeOperandInput: 'operand1',
            operations: ['+', '-','*','/'],
        }
    },

    methods: {
        preventDefault(evt) {
            if (evt.target.classList.contains('calc__btn-input')){
                evt.preventDefault();
            }
        },

        calculated(operation){
            switch(operation){
                case '+':
                    this.result=Number(this.operand1) + Number(this.operand2);
                    break;
                case '-':
                    this.result=Number(this.operand1) - Number(this.operand2);
                    break;
                case '*':
                    this.result=Number(this.operand1) * Number(this.operand2);
                    break;
                case '/':
                    this.result=Number(this.operand1) / Number(this.operand2);
                    break;
            }
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
        },
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
