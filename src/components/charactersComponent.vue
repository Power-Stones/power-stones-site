<template>
    <div class="container p-4" id="characters">
        <div class="page-title mb-3">
            <h2>Personagens</h2>
        </div>
        <div class="characters-container">
            <characterComponent :text="character.text" :name="character.name" :image="character.image" :controlClass="index % 2 == 0" v-for="(character, index) in charactersInformations" v-bind:key="index" />
        </div>
        <div class="others-characters-carousel mb-5">
            <div ref="swiper" class="swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(character, index) in otherCharacters" v-bind:key="index" :id="'character-slide-' + character.id">
                        <img :src="character.image" class="img-fluid character-img">
                    </div>
                </div>
                <div class="swiper-pagination"></div>

                <div class="swiper-scrollbar"></div>
            </div>
            <div class="character-presentation" v-for="(character, index) in otherCharacters" :id="'character-' + character.id" v-bind:key="index">
                <h2 class="character-name">{{ character.name }}</h2>
                <p class="character-description">{{ character.text }}</p>
            </div>
        </div>
    </div>
</template>
<script>
import characterComponent from "../components/characterComponent.vue";
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import $ from 'jquery';

export default {
    name: "charactersComponent",
    mounted: function () {
        let self = this;

        this.swiper = new Swiper(this.$refs.swiper, {
            modules: [Navigation, Pagination],
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            scrollbar: {
                el: '.swiper-scrollbar',
            },
            slidesPerView: 3,
            centeredSlides: true,
            centeredSlidesBounds: true,
            slideToClickedSlide: true
        })

        this.swiperElement = document.querySelector(".swiper").swiper;
        
        this.swiperElement.on('slideChange', function () {
            self.showCharacterInformations();
        });

        setTimeout(() => {
            this.swiperElement.slideTo(2, 1, false);
        }, 10)

        setTimeout(() => {
            this.startCarouselAutoplay(".others-characters-carousel");
        }, 5000);
    },
    methods: {
        startCarouselAutoplay: function (elementClass) {
            let element = $(elementClass);
            if (!element.is(":hover")) {
                this.swiperElement.slideNext(1000);
            }
            setTimeout(() => {
                this.startCarouselAutoplay(elementClass);
            }, 5000);
        },
        showCharacterInformations: function () {
            let elements = $(".character-presentation");
            elements.hide();
            let slides = $(".swiper-slide");
            slides.each((index, item) => {
                let currentItem = $(item);
                if (currentItem.hasClass("swiper-slide-active")) {
                    let characterInformationsContainer = $("#character-" + currentItem.attr("id").split("-")[2]);
                    characterInformationsContainer.show();
                }
            })
        }
    },
    data() {
        return {
            swiper: null,
            swiperElement: null,
            charactersInformations: [
                {
                    id: 1,
                    name: "Ana Clara",
                    text: "Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. ",
                    image: "https://www.teahub.io/photos/full/75-757286_aqua-konosuba-png.jpg"
                },
                {
                    id: 2,
                    name: "Jack Martins",
                    text: "Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. ",
                    image: "https://www.teahub.io/photos/full/75-757286_aqua-konosuba-png.jpg"
                },
                {
                    id: 3,
                    name: "Dr. Carlos",
                    text: "Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. ",
                    image: "https://www.teahub.io/photos/full/75-757286_aqua-konosuba-png.jpg"
                }
            ],
            otherCharacters: [
                {
                    id: 1,
                    name: "Tony Hart",
                    text: "Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. ",
                    image: "https://serving.photos.photobox.com/76866069cbdb506fd442a5f6a2d3e5ec3e502281d99acc774caf8637759cf60d389ec744.jpg"
                },
                {
                    id: 2,
                    name: "Mike Merril",
                    text: "Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. ",
                    image: "https://serving.photos.photobox.com/76866069cbdb506fd442a5f6a2d3e5ec3e502281d99acc774caf8637759cf60d389ec744.jpg"
                },
                {
                    id: 3,
                    name: "Peter Hart",
                    text: "Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. ",
                    image: "https://serving.photos.photobox.com/76866069cbdb506fd442a5f6a2d3e5ec3e502281d99acc774caf8637759cf60d389ec744.jpg"
                },
                {
                    id: 4,
                    name: "Sofia",
                    text: "Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. ",
                    image: "https://serving.photos.photobox.com/76866069cbdb506fd442a5f6a2d3e5ec3e502281d99acc774caf8637759cf60d389ec744.jpg"
                },
                {
                    id: 5,
                    name: "Jane Merril",
                    text: "Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. ",
                    image: "https://serving.photos.photobox.com/76866069cbdb506fd442a5f6a2d3e5ec3e502281d99acc774caf8637759cf60d389ec744.jpg"
                },
                {
                    id: 6,
                    name: "Lara Martins",
                    text: "Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. ",
                    image: "https://serving.photos.photobox.com/76866069cbdb506fd442a5f6a2d3e5ec3e502281d99acc774caf8637759cf60d389ec744.jpg"
                },
                {
                    id: 7,
                    name: "Margaret Gonçalves",
                    text: "Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. Lorem ipsum dolor sit amet, concectetur adpiscing elit. ",
                    image: "https://serving.photos.photobox.com/76866069cbdb506fd442a5f6a2d3e5ec3e502281d99acc774caf8637759cf60d389ec744.jpg"
                },
            ]
        }
    },
    components: {
        characterComponent
    }
}
</script>
<style scoped>
.character-img {
    width: 100%;
}

.swiper-slide-active {
    outline: .7rem solid var(--primary-color);
}

.swiper-slide {
    margin: 3rem 1rem;
    border-radius: 20px;
    overflow: hidden;
}

.character-presentation {
    display: none;
    margin: auto;
    text-align: center;
}

.others-characters-carousel {
    position: relative;
}

.character-name {
    font-weight: 600;
}
</style>