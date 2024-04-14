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



              test



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


export default {
  name: "MainView",
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>
  <style></style>