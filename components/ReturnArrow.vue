<template>
    <div id="arrow-container">
        <div id="arrow" />
    </div>
</template>

<style scoped>
#arrow-container {
    display:                     inline-block;
    position:                    relative;
    height:                      1.5625rem;
    width:                       1.25rem;
    border-left:                 0.125rem solid #fff; 
    border-bottom:               0.125rem solid #fff;
    border-bottom-left-radius:   0.625rem;
    margin-bottom:               0.3125rem;
    margin-right:                0.3125rem;
}

#arrow {
    position:                    absolute;
    width:                       0.5rem;
    height:                      0.5rem;
    bottom:                      -0.36rem;
    left:                        72.9%;
    border-bottom:               0.125rem solid #fff;
    border-right:                0.125rem solid #fff;
    border-bottom-right-radius:  0.09375rem; 
    transform:                   translateX(-50%) rotate(-45deg);
}

@media (max-width: 992px) {
    #arrow-container {
        height:                      1.25rem;
        width:                       1rem;
    }

    #arrow {
        width:                       0.4rem;
        height:                      0.4rem;
        bottom:                      -0.3rem;
        border-bottom-right-radius:  0.07rem;
    }
}

@media (max-width: 768px) {
    #arrow-container {
        height:                  1rem;
        width:                   0.75rem;
    }

    #arrow {
        width:                   0.3rem;
        height:                  0.3rem;
        bottom:                  -0.25rem;
        border-bottom-right-radius:  0.05rem;
    }
}

@media (max-width: 576px) {
    #arrow-container {
        height:                  0.75rem;
        width:                   0.5rem;
    }

    #arrow {
        width:                   0.2rem;
        height:                  0.2rem;
        bottom:                  -0.2rem;
        border-bottom-right-radius:  0.001rem;
    }
}
</style>
