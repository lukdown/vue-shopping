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

              <div id="ProductDetails-All">

                <div id="ProductDetails-All2">

                  <div>
                    <img id="ProductDetails-img" src="@/assets/img/Kim-Jong-kook.jpg">
                  </div>


                  <div id="ProductDetails-Allexplanation">
                    <div id="ProductDetails-clothesname">
                      <strong>영수의 스페셜 울트라 닝수셔츠</strong>
                    </div>

                    <div>
                      <div class="ProductDetails-fontsize">
                        <strong>사이즈:</strong>
                        <select id="ProductDetails-sizechoose" name="size">
                          <option class="" value="S">S</option>
                          <option class="" value="M">M</option>
                          <option class="" value="L">L</option>
                          <option class="" value="XL">XL</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <div class="ProductDetails-fontsize">
                        <strong>가격:</strong>
                        <span>₩100,000</span>
                      </div>
                    </div>

                    <div class="ProductDetails-fontsize">
                      <div id="ProductDetails-quantityButton">

                        <strong id="ProductDetails-quantityName">수량:</strong>

                        <button class="ProductDetails-quantitynumberButton">-</button>
                        <input id="ProductDetails-quantitynumber" type="text" value="1">
                        <button class="ProductDetails-quantitynumberButton">+</button>
                        
                      </div>

                    </div>

                    <div id="ProductDetails-paymentbtn">
                      <router-link to="/customer/paymentpage">
                        <button class="ProductDetails-paymentbutton">결제하기</button>
                      </router-link>
                      <router-link to="/customer/shoppingbasket">
                        <button class="ProductDetails-paymentbutton">장바구니</button>
                      </router-link>
                    </div>
                  </div>
                </div>
                <br><br><br>

                <div>
                  <p id="ProductDetails-explanation">상 품 설 명</p>

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
    return {

    };
  },
  methods: {
    
  },
  created() { },
};
</script>
<style></style>