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

              <form v-on:submit.prevent="RegisterShoppingCart()" action="" method="">
                <div id="ProductDetails-All">

                  <div id="ProductDetails-All2">

                    <div>
                      <img id="ProductDetails-img" v-bind:src="`http://localhost:9002/upload/${productVo.saveName}`">
                    </div>


                    <div id="ProductDetails-Allexplanation">
                      <div id="ProductDetails-clothesname">
                        <strong>{{ productVo.p_name }}</strong>
                      </div>

                      <div>
                        <div class="ProductDetails-fontsize">
                          <strong>사이즈:</strong>
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
                          <strong>가격:</strong>
                          <span>{{ productVo.p_price*cartVo.c_p_amount }}원</span>
                        </div>
                      </div>

                      <div class="ProductDetails-fontsize">
                        <div id="ProductDetails-quantityButton">

                          <strong id="ProductDetails-quantityName">수량:</strong>

                          <button class="ProductDetails-quantitynumberButton" type="button" v-on:click="quantityNumberDownButton()">-</button>
                          <input id="ProductDetails-quantitynumber" type="text" v-model="cartVo.c_p_amount">
                          <button class="ProductDetails-quantitynumberButton" type="button" v-on:click="quantityNumberUpButton()">+</button>

                        </div>

                      </div>

                      <div id="ProductDetails-paymentbtn">
                        <router-link to="/customer/paymentpage">
                          <button class="ProductDetails-paymentbutton" type="button">결제하기</button>
                        </router-link>

                        <button class="ProductDetails-paymentbutton" type="submit">장바구니</button>

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
      productVo:{
        p_no:this.$route.params.p_no,
        p_name:"",
        p_price:"",
        saveName:"",       
      },
      cartVo:{
        c_p_amount: 1 ,
        c_size:"S",
        p_no:this.$route.params.p_no
      }
    };
  },
  methods: {
    insertform(){
      console.log("등록폼");

      axios({
				method: 'get', // put, post, delete                   
				url: 'http://localhost:9002/api/customer/productdetails/'+this.productVo.p_no,
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
    quantityNumberDownButton(){
      if(this.cartVo.c_p_amount == 1){
        this.cartVo.c_p_amount
      }else{
        this.cartVo.c_p_amount--
      }
    },
    quantityNumberUpButton(){
      this.cartVo.c_p_amount++
    },
    RegisterShoppingCart(){
      console.log("장바구니 슛~");

      axios({
				method: 'post', // put, post, delete                   
				url: 'http://localhost:9002/api/customer/productdetails/' + this.cartVo.p_no,
				headers: { "Content-Type": "application/json; charset=utf-8",
                   "Authorization": "Bearer " + this.$store.state.token 
                  }, //전송타입
				//params:this.phonebookVo , //get방식 파라미터로 값이 전달
				data: this.cartVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달

				responseType: 'json' //수신타입
			}).then(response => {
				console.log(response.data); //수신데이타

			}).catch(error => {
				console.log(error);
			});
    }
  },
  created() {
    this.insertform()
  },
};
</script>
<style></style>