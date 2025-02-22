<template>
    <div style="position: inherit;">
        <img src="~/assets/img/lg.png" alt="profile" id="profile-img">

        <img src="~/assets/img/seal.png" alt="approved" id="approval">
        <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></div>
    </div>
</template>

<style scoped>
#profile-img {
    border-radius: 50%;
    width: 400px;
    height: 400px;
    -webkit-box-shadow: 0px 0px 0px 50px #ffa500;
    -moz-box-shadow: 0px 0px 0px 50px #ffa500;
    box-shadow: 0px 0px 0px 50px #ffa500;
    object-fit: cover;
}

#approval {
    width: 10rem;
    position: absolute;
    bottom: 0;
    right: 0;
}

@media (max-width: 992px) {
    #profile-img {
        width: 300px;
        height: 300px;
        -webkit-box-shadow: 0px 0px 0px 30px #ffa500;
        -moz-box-shadow: 0px 0px 0px 30px #ffa500;
        box-shadow: 0px 0px 0px 30px #ffa500;
    }

    #approval {
        width: 8rem;
    }
}

@media (max-width: 576px) {
    #profile-img {
        width: 250px;
        height: 250px;
        -webkit-box-shadow: 0px 0px 0px 25px #ffa500;
        -moz-box-shadow: 0px 0px 0px 25px #ffa500;
        box-shadow: 0px 0px 0px 25px #ffa500;
    }

    #approval {
        width: 6rem;
    }
}
</style>