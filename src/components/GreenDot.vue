<template>
    <div class="outer">
        <div class="inner">

        </div>
    </div>
</template>

<style scoped>
.outer{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(28, 183, 35);
    border-radius: 50%;
    margin: 5px;
}

.inner{
    width: 15px;
    height: 15px;
    border : 2px solid green;
    animation: anim 2s infinite linear;
    border-radius: 50%;
    box-shadow: 0 0 10px 0 rgb(28, 183, 35);
}

@keyframes anim {
    0%,100% {
        transform: scale(1);
    }
    50%{
        transform: scale(1.6);
        opacity: 0;
    }
}
</style>