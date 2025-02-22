<script setup>
const props = defineProps({
    link: {type: String, required: true},
    text: {type: String, required: true},
    icon: {type: String, required: true}
})

const iconClasses = {
    phone: "bi bi-telephone-fill",
    mail: "bi bi-envelope-at-fill",
    telegram: "bi bi-telegram",
    instagram: "bi bi-instagram",
    twitter: "bi bi-twitter",
    github: "bi bi-github",
    linkedin: "bi bi-linkedin",
}

const getIconClass = (iconText) => {
    switch (iconText) {
        case "phone":
            return iconClasses.phone;
        case "mail":
            return iconClasses.mail;
        case "telegram":
            return iconClasses.telegram;
        case "instagram":
            return iconClasses.instagram;
        case "twitter":
            return iconClasses.twitter;
        case "github":
            return iconClasses.github;
        case "linkedin":
            return iconClasses.linkedin;
        default:
            return iconClasses.phone;     
    }
}
</script>

<template>
<p class="open-sans-regular anchor-text">
    <i :class="getIconClass(props.icon)"></i> &nbsp; 
    <a :href="props.link" class="anchor-hlink">{{ props.text }}</a>
</p>
</template>

<style scoped>
.anchor-text {
    padding-left: 50px;
    font-size: 1.25rem;
    color: rgb(160, 160, 160);
    padding-bottom: 5px;
}

.anchor-hlink {
    text-decoration: none;
    color: rgb(160, 160, 160);
    position: relative;
    transition: color 0.3s ease-in-out;
}

.anchor-hlink::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: #ffa500;
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.3s ease-in-out;
}

.anchor-hlink:hover {
    color: #fff;
}

.anchor-hlink:hover::after {
    transform: scaleX(1);
}

@media (max-width: 768px) {
    .anchor-text {
        padding-left: 30px;
        font-size: 1.1rem;
    }
}

@media (max-width: 576px) {
    .anchor-text {
        padding-left: 20px;
        font-size: 1rem;
    }
}
</style>