<script setup>
import { ref, onMounted } from 'vue';

const skills = [
    { name: 'Frontend Development (Vue.js)', percentage: 80 },
    { name: 'Backend Development (SpringBoot)', percentage: 70 },
    { name: 'Serverless functions (Supabase)', percentage: 75 },
    { name: 'Desktop Application Development (Java)', percentage: 40 },
    { name: 'Mobile Application Development (Java)', percentage: 10 },
    { name: 'Blockchain', percentage: 10 },
];

const isVisible = ref(false);

onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                isVisible.value = true;
                observer.disconnect();
            }
        });
    }, { threshold: 0.1 });

    const element = document.querySelector('.talent-section');
    if (element) observer.observe(element);
});
</script>

<template>
    <div class="talent-section">
        <h2 class="open-sans-bold section-title">Technical Expertise</h2>
        <div class="skills-container">
            <div v-for="skill in skills" :key="skill.name" class="skill-bar-wrapper">
                <div class="skill-info">
                    <span class="skill-name open-sans-medium">{{ skill.name }}</span>
                    <span class="skill-percentage open-sans-semibold">{{ skill.percentage }}%</span>
                </div>
                <div class="skill-bar-bg">
                    <div 
                        class="skill-bar-fill"
                        :style="{ 
                            width: isVisible ? `${skill.percentage}%` : '0%',
                        }"
                    ></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.talent-section {
    min-height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(5px);
    padding: 4rem 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.section-title {
    color: #fff;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    position: relative;
    display: inline-block;
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 4px;
    background: #ffa500;
    border-radius: 2px;
}

.skills-container {
    max-width: 800px;
    width: 100%;
}

.skill-bar-wrapper {
    margin-bottom: 2rem;
}

.skill-info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
}

.skill-name {
    color: #fff;
    font-size: 1.1rem;
}

.skill-percentage {
    color: #ffa500;
    font-size: 1.1rem;
}

.skill-bar-bg {
    width: 100%;
    height: 10px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    overflow: hidden;
}

.skill-bar-fill {
    height: 100%;
    width: 0;
    background: linear-gradient(90deg, #ffa500, #ff4500);
    border-radius: 5px;
    transition: width 1.5s ease-out;
}

.skill-bar-wrapper:hover .skill-bar-fill {
    filter: brightness(1.2);
}

@media (max-width: 992px) {
    .talent-section {
        padding: 3rem 5%;
    }
    
    .section-title {
        font-size: 2rem;
        margin-bottom: 2rem;
    }
}

@media (max-width: 576px) {
    .talent-section {
        padding: 2rem 5%;
    }
    
    .section-title {
        font-size: 1.75rem;
    }
    
    .skill-name, .skill-percentage {
        font-size: 1rem;
    }
    
    .skill-bar-wrapper {
        margin-bottom: 1.5rem;
    }
}
</style>