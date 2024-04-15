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
          image: require('@/assets/img/logo.png')
        },
        {
          title: 'rerewrwerwet',
          content: 'ytdryr',
          image: require('@/assets/img/logo.png')
        },
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