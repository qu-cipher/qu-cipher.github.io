<script setup>
import '~/assets/stylesheets/bg.css';

useSeoMeta({
    author: 'QuantumCipher',
    description: "Welcome to QuantumCipher's personal website. Explore my projects, skills, and achievements. Connect with me to collaborate on exciting ideas!",
    keywords: 'QuantumCipher , personal website , developer portfolio , projects , Quantum Cipher , QuantumCipherr , quantum cipher , QC , java , typescript , javascript , script , css , html , spring , springboot , website , programmer , program , app , application , developer , develop , back , front , backend , frontend , back end , back-end , front end , front-end , the peott , ThePeott , The Peott',
    robots: 'index, follow',
    ogTitle: 'QuantumCipher | Personal Website',
    ogDescription: "Discover QuantumCipher's projects, skills, and achievements. Join me in my journey of innovation and creativity!",
    ogImage: 'https://tjpwdridysakshfwurpi.supabase.co/storage/v1/object/public/public_assets/lg.png',
    ogUrl: 'https://qcipher.ir',
    ogType: 'website',
    ogLocale: 'en_US',
    twitterCard: 'summary_large_image',
    twitterTitle: 'QuantumCipher | Personal Website',
    twitterDescription: "Discover QuantumCipher's projects, skills, and achievements. Join me in my journey of innovation and creativity!",
    twitterImage: 'https://tjpwdridysakshfwurpi.supabase.co/storage/v1/object/public/public_assets/lg.png',
    themeColor: '#0f0f0f',
    formatDetection: 'telephone=no',
    HandheldFriendly: 'true'
  });
</script>

<template>
    <div class="bg-img-container">
        <div class="bg-img-one"></div>
        <img src="@/assets/img/bg.png" alt="" class="bg-centered-img">
        <div class="bg-img-two"></div>
    </div>
    <div class="con">
        <div class="welcome-container">
            <div class="welcome-text-container">
                <div class="welcome-text">
                    <NameField />
    
                    <VerSpacer  text="CONTACT ME" />
                    <AnchorLink text="info@qcipher.ir"  link="mailto:info@qcipher.ir"  icon="mail"  />
                             
                    <VerSpacer  text="SOCIAL MEDIA" />
                    <AnchorLink text="Telegram"   link="https://t.me/QuantumCipherr"      icon="telegram"  />
                    <AnchorLink text="Instagram"  link="https://instagram.com/qu.cipher"  icon="instagram" />
                    <AnchorLink text="Twitter"    link="https://x.com/QuantumCipherr"     icon="twitter"   />
                    <AnchorLink text="Github"     link="https://github.com/qu-cipher"     icon="github"    />
                    <AnchorLink text="LinkedIn"   link="https://www.linkedin.com/in/ali-salmanian-43b12525a/"                                icon="linkedin"  />
                </div>
    
                <Profile class="welcome-profile" />
            </div>
        </div>
        <TalentProgress />
        <ProjectShowcase />
    </div>
</template>

<style scoped>
.con {
    width:              100%;
    height:             100%;
    background-color:   rgba(0, 0, 0, 0.8);
    backdrop-filter:    blur(5px);
    height:             100vh;
    overflow-y:         scroll;
}

.welcome-container {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.welcome-text-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    position: relative;
    z-index: 1;
    padding-left: 10%;
    padding-right: 10%;
}

.welcome-profile {
    width: 50%;
    display: flex;
    justify-content: flex-end;
}

@media (max-width: 1200px) {
    .welcome-text-container {
        padding-left: 5%;
        padding-right: 5%;
    }
}

@media (max-width: 992px) {
    .welcome-text-container {
        flex-direction: column;
        justify-content: center;
        padding: 2rem;
    }

    .welcome-profile {
        display: none;
    }
}
</style>