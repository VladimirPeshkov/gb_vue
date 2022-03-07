<template>
    <div class="keyboard">
        <ul class="keyboard__buttons-list">
            <li class="keyboard__button" v-for="(digit, index) in digits" :key="index">
                <button 
                    class="button" 
                    @click="getNumber($event), addDigit()">
                            {{digit}}
                </button>
            </li>
        </ul>

        <div class="change-input">
            <label for="change-input__radio1" class="change-input__label">Operand1</label>
            <input 
                type="radio" name="change-input__radio" 
                id="change-input__radio1" 
                value="operand1"
                v-model="activeOperandInput"
                @click="changeOperandInput()" 
            />
            <label for="change-input__radio2" class="change-input__label">Operand2</label>
            <input 
                type="radio" name="change-input__radio" 
                id="change-input__radio2" 
                value="operand2"
                v-model="activeOperandInput"
                @click="changeOperandInput()"
            />
        </div>
    </div>
</template>

<script>

export default {
    name: 'KeyBoard',

    data: () => {
        return {
            digits: [0,1,2,3,4,5,6,7,8,9, 'Delete'],
            number: '',
            activeOperandInput: 'operand1'
        }
    },

    methods: {
        getNumber(evt){
            evt.preventDefault();
            this.number = evt.target.textContent;
        },

        changeOperandInput(){
            this.$emit('changeOperandInput', this.activeOperandInput)
        },

        addDigit(){
            this.$emit('addDigit', Number(this.number))
        }
    }
}
</script>

<style>
    .keyboard__buttons-list {
        display: flex;
        list-style: none;
        justify-content: center;
    }
</style>
