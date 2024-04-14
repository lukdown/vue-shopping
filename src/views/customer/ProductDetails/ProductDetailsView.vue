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
              <div>
              
                <img id="ProductDetails-img" src="#">
                
                <div>
                  <div>
                    <span>옷이름:</span>
                  </div>
                  <div>
                    <p>영수의 스페셜 울트라 닝수셔츠</p>
                  </div>
                </div>

                <div>
                  <div>
                    <span>사이즈&색상:</span>
                  </div>
                  <div>
                    <p>영수표 빨강(L)</p>
                  </div>
                </div>

                <div>
                  <div>
                    <span>가격:</span>
                  </div>
                  <div>
                   <p>₩100,000</p>
                  </div>
                </div>

                <div>
                  <div>
                    <span>수량:</span>
                  </div>
                  <span id="ProductDetails-QuantityButton">
                    <button>-</button>
                    <input id="ProductDetails-quantity" type="text" value="1">
                    <button>+</button>
                  </span>
                </div>

                <br><br><br>

                <div>
                  <h1 id="ProductDetails-explanation">상 품 설 명</h1>

                  <div id="ProductDetails-Description">
                    <span>영수하다의 기본이 되는 셔츠랄까? 영수가 되고 싶은 분 입으세요</span>
                  </div>
                </div>
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
import "@/assets/css/customer/ProductDetailsView.css";
import AppFooter from "@/components/customer/AppFooter.vue";
import AppHeader from "@/components/customer/AppHeader.vue";

export default {
  name: "ProductDetailsView",
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {};
  },
  methods: {},
  created() { },
};
</script>
<style>


</style>