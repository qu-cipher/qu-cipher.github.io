<script setup>
import jtodoImage from '~/assets/img/jtodo.png';
import jsShop from '~/assets/img/shop.png'
import jsContact from "~/assets/img/jscontact.png"
import aiChat from '~/assets/img/ai-chat.png'

const projects = {
    'Upcoming': [
        {
            name: 'ThePeott',
            description: 'ThePeott is a crypto game on telegram',
            image: 'https://wwlolbcglcfhquyeenkn.supabase.co/storage/v1/object/public/public_assets//ThePeott.png',
            technologies: ['???', '???', '???'],
            buttons: [
                { name: 'Bot Link', link: 'https://t.me/ThePeott_bot' }
            ]
        }
    ],
    'Web Apps': [
        {
            name: 'Todo app',
            description: 'A simple todo application coded in Java & Tomcat Servlets',
            image: jtodoImage,
            technologies: ['Java', 'Apache Tomcat'],
            buttons: [
                { name: 'Github', link: 'https://github.com/qu-cipher/java-todo' }
            ]
        },
        {
            name: 'Shopping List',
            description: 'A simple shopping list app in Vue.js',
            image: jsShop,
            technologies: ['Vue.js'],
            buttons: [
                { name: 'Github', link: 'https://github.com/qu-cipher/shopping-list-app' }
            ]
        },
        {
            name: 'Contact Manager', 
            description: 'A simple contact manager web-app in Javascript / Express',
            image: jsContact,
            technologies: ['Javascript', 'Express'],
            buttons: [
                { name: 'Github', link:'https://github.com/qu-cipher/js-contact-manager' }
            ]
        }
    ],
    'Telegram Projects': [
        {
            name: 'ThePeott',
            description: 'ThePeott is a crypto game on telegram',
            image: 'https://wwlolbcglcfhquyeenkn.supabase.co/storage/v1/object/public/public_assets//ThePeott.png',
            technologies: ['???', '???', '???'],
            buttons: [
                { name: 'Bot Link', link: 'https://t.me/ThePeott_bot' },
                { name: 'Announcements', link: 'https://t.me/ThePeott' }
            ]
        }, {
            name: 'Telegram ChatBot A.I.',
            description: 'This is a simple telegram chatbot based on AI',
            image: aiChat,
            technologies: ['Typescript', 'grammY'],
            buttons: [
                { name: 'Github', link: 'https://github.com/qu-cipher/telegram-chatbot' }
            ]
        }
    ],
    'Libraries': [
        {
            name: 'QServer',
            description: 'A simple socket/io implementation with Java',
            image: 'https://avatars.githubusercontent.com/u/120099354?v=4',
            technologies:['java.net'],
            buttons: [
                {name: 'Github', link: 'https://github.com/qu-cipher/QServer'}
            ]
        }
    ]
    
};
</script>

<template>
    <div class="project-section">
        <h2 class="open-sans-bold section-title">Project Showcase</h2>

        <div v-for="(category, categoryName) in projects" 
             :key="categoryName" 
             class="project-category">
            <h3 class="category-title open-sans-semibold">{{ categoryName }}</h3>
            <div class="category-divider"></div>

            <div class="projects-row">
                <div v-for="(project, projectIndex) in category" 
                     :key="projectIndex"
                     class="project-card">

                    <div class="card-content">
                        <img :src="project.image" 
                             :alt="project.name" 
                             class="project-image">

                        <div class="project-info">
                            <h4 class="project-name open-sans-medium">{{ project.name }}</h4>
                            <p class="project-description open-sans-regular">
                                {{ project.description }}
                            </p>

                            <!-- Technologies -->
                            <div class="technologies">
                                <span v-for="tech in project.technologies" 
                                      :key="tech" 
                                      class="tech-tag">
                                    {{ tech }}
                                </span>
                            </div>

                            <!-- Project buttons -->
                            <div class="project-buttons" v-if="project.buttons && project.buttons.length">
                                <template v-for="(button, buttonIndex) in project.buttons">
                                    <!-- Use unique keys for each condition -->
                                    <a v-if="button.link && button.link !== 'null'" 
                                       :key="`valid-${buttonIndex}`" 
                                       :href="button.link" 
                                       class="project-button" 
                                       target="_blank" 
                                       rel="noopener noreferrer">
                                        {{ button.name }}
                                    </a>
                                    <button v-else 
                                            :key="`invalid-${buttonIndex}`" 
                                            class="project-button disabled" 
                                            disabled>
                                        {{ button.name }}
                                    </button>
                                </template>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.project-section {
    min-height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(5px);
    padding: 4rem 10%;
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

.project-category {
    margin-bottom: 3rem;
}

.category-title {
    color: #fff;
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

.category-divider {
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, #ffa500, transparent);
    margin-bottom: 1.5rem;
}

.projects-row {
    display: flex;
    overflow-x: auto;
    gap: 1.5rem;
    padding: 1rem;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    transition: filter 0.3s ease;
}

.projects-row::-webkit-scrollbar {
    height: 8px;
}

.projects-row::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
}

.projects-row::-webkit-scrollbar-thumb {
    background: #ffa500;
    border-radius: 4px;
}

.project-card {
    flex: 0 0 300px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
    position: relative;
    scroll-snap-align: start;
    outline: none;
    transition: transform 0.3s ease, filter 0.3s ease;
    z-index: 1;
}

.project-card:hover {
    transform: scale(1.05); /* Slightly scale the card on hover */
    z-index: 2; /* Bring the card to the front */
}

.projects-row:hover .project-card:not(:hover) {
    filter: blur(4px); /* Blur other cards in the row */
    z-index: 0; /* Lower z-index for non-hovered cards */
}

.projects-row:hover:not(:has(.project-card:hover)) .project-card {
    filter: none; /* Reset blur if no card is hovered */
}

.card-content {
    padding: 1rem;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.project-image {
    width: auto;
    height: 120px;
    object-fit: contain;
    border-radius: 8px;
    margin-bottom: 1rem;
}

.project-name {
    color: #fff;
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
}

.project-description {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
    line-height: 1.4;
    padding: 10px;
}

.technologies {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;
}

.tech-tag {
    background: rgba(255, 165, 0, 0.2);
    color: #ffa500;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.8rem;
}

.project-buttons {
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
}

.project-button {
    background: #ffffff;
    color: #000000;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    text-decoration: none;
    cursor: pointer;
    transition: filter 0.3s ease;
    font-size: 0.8rem;
    display: inline-block;
}

.project-button.disabled {
    background: #cccccc;
    color: #666666;
    cursor: not-allowed;
}

.project-button:hover:not(.disabled) {
    filter: brightness(1.2);
}

@media (max-width: 992px) {
    .project-section {
        padding: 3rem 5%;
    }

    .section-title {
        font-size: 2rem;
    }
}

@media (max-width: 576px) {
    .project-section {
        padding: 2rem 5%;
    }

    .section-title {
        font-size: 1.75rem;
    }

    .category-title {
        font-size: 1.25rem;
    }

    .project-card {
        flex: 0 0 250px;
    }
}
</style>