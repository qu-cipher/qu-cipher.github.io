<template>
    <div class="greetings">
        <div class="welcome-text-name">
            <div class="welcome-text-vertical-box">
                <span class="open-sans-bold">HELLO I'M</span>
            </div> &nbsp;
            <div class="welcome-text-name-container">
                <h1 class="open-sans-semibold">Ali Salmanian</h1>
            </div>
            <span class="badge open-sans-semibold">
                aka. <span style="text-decoration: underline; color: #000;">QuantumCipher</span>
            </span>
        </div>
        <div class="field-container open-sans-regular">
            <ReturnArrow />
            <p>Software & Web developer</p>
        </div>
    </div>
</template>

<style scoped>
.field-container {
    display: flex;
    margin: 0.8rem 0 0 1.5rem;
    font-size: 2rem;
    color: rgb(200, 200, 200);
    gap: 0;
}

.welcome-text-name {
    display: flex;
    
    position: relative;
}

.welcome-text-vertical-box {
    writing-mode: vertical-rl;
    transform: rotate(180deg); 
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0 10px 10px 0;
}

.welcome-text-vertical-box span {
    font-size: 1.1rem;
    color: #fff;
    padding: 10px;
}

.welcome-text-name-container {
    display: flex;
    justify-content: center;
    align-items: center;
    background: yellow;
    border-radius: 10px;
}

.welcome-text-name-container h1 {
    font-size: 4.5rem;
    color: #000;
    white-space: nowrap;
    background: yellow;
    padding: 10px;
}

.badge {
    position: absolute;
    top: -15px;
    right: -5rem;
    transform: rotate(30deg);
    color: #fff;
    white-space: nowrap;
    background: rgb(255, 0, 0);
    padding: 10px;
    border-radius: 10px;
}

@media (max-width: 992px) {
    .welcome-text-name h1 {
        font-size: 3.5rem;
    }

    .field-container {
        font-size: 1.75rem;
    }

    .badge {
        right: -4rem;
        font-size: 0.9rem;
    }
}

@media (max-width: 768px) {
    .welcome-text-name h1 {
        font-size: 2.5rem;
    }

    .field-container{
        font-size: 1.5rem;
    }

    .welcome-text-vertical-box span {
        font-size: 1rem;
    }

    .badge {
        right: -3rem;
        font-size: 0.8rem;
    }
}

@media (max-width: 576px) {
    .welcome-text-name h1 {
        font-size: 2rem;
    }

    .field-container {
        font-size: 1.25rem;
    }

    .welcome-text-vertical-box span {
        font-size: 0.9rem;
        padding: 8px;
    }

    .badge {
        right: -1rem;
        font-size: 0.7rem;
        padding: 8px;
    }
}
</style>