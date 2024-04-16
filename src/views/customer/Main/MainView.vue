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
              <div id="Slider-text">
                <p id="Slider-p1">영수하다 ㅡ,</p>
                <p id="Slider-p2">영수하다 란? <br> 타락천사 닝수 대장공주 2세의 <br> 패션을 알아보세요.</p>
              </div>

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
          image: require('@/assets/img/portrait-young-woman-wearing-2000-s-fashion-style.jpg')
        },
        {
          image: require('@/assets/img/short-haired-woman-sunglasses-posing-yellow-doors-curly-woman-undershirt-with-jacket-looks-away-yellow-doors.jpg')
        },
        {
          image: require('@/assets/img/portrait-young-woman-wearing-2000-s-fashion-style.jpg')
        },
        {
          image: require('@/assets/img/short-haired-woman-sunglasses-posing-yellow-doors-curly-woman-undershirt-with-jacket-looks-away-yellow-doors.jpg')
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