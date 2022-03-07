<template>
    <div class="keyboard">
        <ul class="keyboard__buttons-list">
            <li class="keyboard__button"><button class="button">0</button></li>
            <li class="keyboard__button"><button class="button">1</button></li>
            <li class="keyboard__button"><button class="button">2</button></li>
            <li class="keyboard__button"><button class="button">3</button></li>
            <li class="keyboard__button"><button class="button">4</button></li>
            <li class="keyboard__button"><button class="button">5</button></li>
            <li class="keyboard__button"><button class="button">6</button></li>
            <li class="keyboard__button"><button class="button">7</button></li>
            <li class="keyboard__button"><button class="button">8</button></li>
            <li class="keyboard__button"><button class="button">9</button></li>
            <li class="keyboard__button"><button class="button">Delete</button></li>
        </ul>
    </div>
</template>

<script>

export default {
    name: 'KeyBoard',
}
</script>

<style scoped>
    .keyboard__buttons-list {
        display: flex;
        list-style: none;
        justify-content: center;
    }
</style>
