<template>
  <div>
    <AppHeader />
    <div id="wrap">
      <div id="container" class="clearfix">
        <!-- aside 없음 -->
        <div id="full-content">
          <!-- content-head 없음 -->

          <div id="index">
            <div id="greetings">


              <div id="Main-Slider">
                <vueper-slides autoplay>
                  <vueper-slide v-for="(slide, i) in slides"
                    :key="i"
                    :title="slide.title"
                    :content="slide.content"
                    :image="slide.image" />
                    
                  <template #pause>
                    <i class="icon pause_circle_outline"></i>
                  </template>
                </vueper-slides>
              </div>









            </div>
            <!-- //greetings -->
            <div class="clear"></div>
          </div>
          <!-- //index -->
        </div>
        <!-- //full-content -->
      </div>
      <!-- //container -->

      <!-- //footer -->
    </div>
    <!-- //wrap -->
    <AppFooter />
  </div>
</template>
  
<script>
import "@/assets/css/customer/MainView.css";
import AppFooter from "@/components/customer/AppFooter.vue";
import AppHeader from "@/components/customer/AppHeader.vue";
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  name: "MainView",
  components: {
    AppHeader,
    AppFooter,
    VueperSlides,
    VueperSlide,
  },
  data() {
    return {
      pauseOnHover: true,
      autoPlaying: true,
      internalAutoPlaying: true,
      slides: [
        {
          title: 'Slide <b style="font-size: 1.3em;color: yellow">#1</b>',
          content: 'Slide title can be HTML.<br>And so does the slide content, <span style="font-size: 1.2em;color: yellow">why not?</span>',
          image: require('C:/javaStudy/workspace_vue/vue-shopping/src/assets/img/portrait-young-woman-wearing-2000-s-fashion-style.jpg')
        },
        {
          title: 'rerewrwerwet',
          content: 'ytdryr',
          image: require('C:/javaStudy/workspace_vue/vue-shopping/src/assets/img/short-haired-woman-sunglasses-posing-yellow-doors-curly-woman-undershirt-with-jacket-looks-away-yellow-doors.jpg')
        },
        {
          title: 'Slide <b style="font-size: 1.3em;color: yellow">#1</b>',
          content: 'Slide title can be HTML.<br>And so does the slide content, <span style="font-size: 1.2em;color: yellow">why not?</span>',
          image: require('C:/javaStudy/workspace_vue/vue-shopping/src/assets/img/portrait-young-woman-wearing-2000-s-fashion-style.jpg')
        },
        {
          title: 'rerewrwerwet',
          content: 'ytdryr',
          image: require('C:/javaStudy/workspace_vue/vue-shopping/src/assets/img/short-haired-woman-sunglasses-posing-yellow-doors-curly-woman-undershirt-with-jacket-looks-away-yellow-doors.jpg')
        }
        // Other slides...
      ]
    };
  },
  methods: {
    
  },
  created() {},
};
</script>

<style></style>