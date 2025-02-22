<script setup>
const props = defineProps({
    text : {type: String, required: true}
})
</script>

<template>
    <div class="spacer open-sans-regular" :dtext="props.text"></div>
</template>

<style scoped>
.spacer {
    position:          relative;
    width:             100%;
    height:            1px;
    background-color:  #ffa500;
    margin-top:        20px;
    margin-bottom:     20px;
    text-align:        center;
}

.spacer::before {
    content:           attr(dtext);
    position:          absolute;
    top:               -10px; 
    left:              50%;
    transform:         translateX(-50%);
    background-color:  #000;     
    padding:           0 10px;
    font-size:         1rem;
    color:             #ffa500; 
}
</style>