<template>
  <div class="black-bg" v-if="modalonoff == true">
    <div class="white-bg">
      <p class="ProductDetailsmodal-Notice">상품을 장바구니에 담았습니다.</p>
      <div class="ProductDetailsmodal-btn">
        <button class="ProductDetailsmodal-btn2" v-on:click="modalonoff = false">쇼핑 더 하기</button>
        <button class="ProductDetailsmodal-btn2"><router-link to="/customer/shoppingbasket" style="color: black;">장바구니 가기</router-link></button>
      </div>
    </div>
  </div>

  <div>
    <AppHeader />
    <div id="wrap">
      <div id="container" class="clearfix">
        <!-- aside 없음 -->
        <div id="full-content">
          <!-- content-head 없음 -->

          <div id="index">

            <div id="greetings">

              <form v-on:submit.prevent="RegisterShoppingCart()" action="" method="">
                <div id="ProductDetails-All">

                  <div id="ProductDetails-All2">

                    <div>
                      <img id="ProductDetails-img" v-bind:src="`${this.$store.state.apiBaseUrl}/upload/${productVo.saveName}`">
                    </div>


                    <div id="ProductDetails-Allexplanation">
                      <div id="ProductDetails-clothesname">
                        <strong>{{ productVo.p_name }}</strong>
                      </div>

                      <div>
                        <div class="ProductDetails-fontsize">
                          <strong id="ProductDetails-sizeButton">사이즈:</strong>
                          <select id="ProductDetails-sizechoose" name="size" v-model="cartVo.c_size">
                            <option class="" value="S">S</option>
                            <option class="" value="M">M</option>
                            <option class="" value="L">L</option>
                            <option class="" value="XL">XL</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <div class="ProductDetails-fontsize">
                          <strong id="ProductDetails-priceButton">가격:</strong>
                          <span>{{ productVo.p_price * cartVo.c_p_amount }}원</span>
                        </div>
                      </div>

                      <div class="ProductDetails-fontsize">
                        <div id="ProductDetails-quantityButton">

                          <strong id="ProductDetails-quantityName">수량:</strong>

                          <button class="ProductDetails-quantitynumberButton" type="button"
                            v-on:click="quantityNumberDownButton()">-</button>
                          <input id="ProductDetails-quantitynumber" type="text" v-model="cartVo.c_p_amount">
                          <button class="ProductDetails-quantitynumberButton" type="button"
                            v-on:click="quantityNumberUpButton()">+</button>

                        </div>

                      </div>

                      <div id="ProductDetails-paymentbtn">
                        <router-link :to="'/customer/paymentpage2/' + this.$route.params.p_no">
                          <button class="ProductDetails-paymentbutton" type="button" v-on:click="paymentDirect">결제하기</button>
                        </router-link>

                        <button class="ProductDetails-paymentbutton" type="submit">장바구니</button>

                      </div>
                    </div>
                  </div>
                  <br><br><br>



                  <div>
                    <p id="ProductDetails-explanation">상 품 설 명</p>

                    <div id="ProductDetails-Description">
                      <span>{{ productVo.p_explanation }}</span>
                    </div>
                  </div>
                </div>
              </form>
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
import axios from 'axios';

export default {
  name: "ProductDetailsView",
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      productVo: {
        p_no: this.$route.params.p_no,
        p_name: "",
        p_price: "",
        saveName: "",
        p_explanation:""
      },
      cartVo: {
        c_p_amount: 1,
        c_size: "S",
        p_no: this.$route.params.p_no
      },
      modalonoff: false
    };
  },
  methods: {
    insertform() {
      console.log("등록폼");

      axios({
        method: 'get', // put, post, delete                   
        url: `${this.$store.state.apiBaseUrl}/api/customer/productdetails/` + this.productVo.p_no,
        headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
        //params: this.phonebookVo.personId, //get방식 파라미터로 값이 전달
        //data: this.phonebookVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달

        responseType: 'json' //수신타입
      }).then(response => {
        console.log(response.data); //수신데이타
        this.productVo = response.data.apiData;
      }).catch(error => {
        console.log(error);
      });

    },
    quantityNumberDownButton() {
      if (this.cartVo.c_p_amount == 1) {
        this.cartVo.c_p_amount
      } else {
        this.cartVo.c_p_amount--
      }
    },
    quantityNumberUpButton() {
      this.cartVo.c_p_amount++
    },
    RegisterShoppingCart() {
      console.log("장바구니 슛~");

      if(this.$store.state.token == null){
        alert("로그인상태에서 이용해주세요.");
        this.$router.push({path:'/customer/login'});
      }

      axios({
        method: 'post', // put, post, delete                   
        url: `${this.$store.state.apiBaseUrl}/api/customer/productdetails/` + this.cartVo.p_no,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Authorization": "Bearer " + this.$store.state.token
        }, //전송타입
        //params:this.phonebookVo , //get방식 파라미터로 값이 전달
        data: this.cartVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달

        responseType: 'json' //수신타입
      }).then(response => {
        console.log(response.data); //수신데이타

       
        this.modalonoff = true;
        
        

      }).catch(error => {
        console.log(error);
      });
    },

    paymentDirect(){
      console.log("결제 바로 하기");
      this.$store.commit("setC_p_amount", this.cartVo.c_p_amount);
      this.$store.commit("setC_size", this.cartVo.c_size);

      this.$router.push("'/customer/paymentpage2/' + this.$route.params.p_no");

    }
  },
  created() {
    this.insertform()
  },
};
</script>
<style></style>