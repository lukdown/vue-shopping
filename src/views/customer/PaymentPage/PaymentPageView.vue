<template>
    <div>
        <AppHeader />
        <div id="wrap">
          <div id="container" class="clearfix">
            <!-- aside 없음 -->
            <div id="full-content">
              <!-- content-head 없음 -->
    
              <div id="index" class="u-payment-all-all">
                <div id="greetings" class="u-payment-all">
                    <h1 id="u-payment-h1">결제/주문 창</h1>
                    
                    <!-- 상품 정보 영역-->
                    <div v-bind:key="i" v-for="(cartVo,i) in paymentList" class="u-payment-product-information" >
                        <div class="u-payment-title">상품 정보</div>
                        <p id="u-payment-product-name">{{ cartVo.p_name }}</p>
                        <p id="u-payment-product-intro">{{ cartVo.c_size }}</p>
                        <p id="u-payment-product-quantity">수량: {{cartVo.c_p_amount}}개</p>
                        
                        <!-- 상품 가격표시 영역 -->
                        <dir id="u-payment-product-qqqprice">
                            <p id="u-payment-product-qqq">개당: {{cartVo.p_price}}원</p>
                            <div id="u-payment-product-qprice">총 {{cartVo.c_p_amount*cartVo.p_price}}원</div>
                        </dir>   
                    </div>
                       
                    <form v-on:submit.prevent="paymentComplete" action="" method="post">    
                        <!--받는 분 이름-->
                        <div id="u-payment-name">
                            <label for="u-payment-phone-name">받는 분 성함:</label>
                            <input type="tel" name="phone" id="u-payment-phone-name" v-model="userVo.o_name">
                        </div>
    
    
                        <!--받는 분 연락처-->
                        <div id="u-payment-phone">
                            <label for="u-payment-phone-number">받는 분 연락처:</label>
                            <input type="tel" name="phone" id="u-payment-phone-number" v-model="userVo.o_hp">
                        </div>
    
    
                        <!--배송지 입력-->
                        <div id="u-payment-delivery-address">
                            
    
                            <!-- 주문자와 동일 -->
                            <div id="u-payment-delivery-org-address">
                                <p id="u-payment-delivery-address-title">기존 배송지 주소:</p>
                                <p>{{ userVo.o_address }}</p>
                                <button v-on:click.prevent="newAddress">신규배송지</button>
                            </div>
    
                            <!-- 신규 배송지 -->
                            <div v-if="isNewAddress" id="u-payment-delivery-new-address">
                                <label for="u-payment-new-address">신규 배송지 입력:</label>
                                <input type="text" name="address" id="u-payment-new-address" v-model="user_new_address">
                            </div>
                        </div>
                        <!--요청사항-->
                        <div class="u-payment-request-class">
                            <label for="u-payment-request">요청사항</label>
                            <textarea id="u-payment-request" placeholder="여기에 입력해주세요" maxlength="500"></textarea>
                        </div>
                        
                        <!--총 결제 금액-->
                        <div class="u-payment-total-price">
                            <table class="u-table_price">
                                <tbody>
                                    <tr>
                                        <th>총금액</th>
                                        <td id="u-total-price">{{ getTotalPrice }}<span>원</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        
    
                        <!-- 결제 방법 영역-->
                        <div class="u-payment-method">
                            <div id="u-payment-method-title">결제 수단 선택</div>
                                <div id="u-payment-method-all">
                                    <div id="u-payment-method-card">
                                        <label for="rdo-card">카드</label>
                                        <input type="radio" id="rdo-card" name="payment-method" value="card">
                                    </div>
                                    <div id="u-payment-method-account">
                                        <label for="rdo-account">계좌이체</label>
                                        <input type="radio" id="rdo-account" name="payment-method" value="account">
                                    </div>
                                    <div id="u-payment-method-pay">
                                        <label for="rdo-pay">네이버페이</label>
                                        <input type="radio" id="rdo-pay" name="payment-method" value="pay">
                                    </div>
                            </div>
                        </div>
                        
                        <!-- 결제 버튼 -->
                        <button type="button" id="payment-final-button" v-on:click.prevent="paymentComplete">결제하기</button>

                    </form>

                    <!--결제완료 모달-->
                    <div id="u-payment-modal">
                        <div class="u-payment-modal-content">
                            <div class="u-payment-m-body">
                                결제가 완료되었습니다.
                            </div>
                            <div class="u-payment-m-footer">
                                <button class="closeBtn" v-on:click="closeModal"><p>확인</p></button>
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
    import axios from "axios";
    import "@/assets/css/customer/PaymentPageView.css";
    import AppFooter from "@/components/customer/AppFooter.vue";
    import AppHeader from "@/components/customer/AppHeader.vue";
    
    export default {
        name: "PaymenyPageView",
        components: {
            AppFooter,
            AppHeader
        },
       data() {
            return {
                paymentList: [],
                cartVo:{
                    c_no: "",
                    p_name: "",
                    user_no: "",
                    c_p_amount: "",
                    c_size: "",
                    p_price: ""
                },
                userVo: {
                    o_name: "",
                    o_hp: "",
                    o_address: "",

                },
                user_new_address: "",
                isNewAddress: false
            };
        },
        computed: {
            getTotalPrice() {
                let totalPrice = 0;
                for (let i = 0; i < this.paymentList.length; i++) {
                    totalPrice += this.paymentList[i].p_price * this.paymentList[i].c_p_amount;
                }
                return totalPrice;
            }
        },
        methods: {
            getInfoList(){
                console.log("불러오기");
                axios({
                    method: 'get', // put, post, delete                   
                    url: 'http://localhost:9002/api/customer/payment',
                    headers: {
                        "Content-Type": "application/json; charset=utf-8",
                        "Authorization": "Bearer " + this.$store.state.token
                    }, //전송타입
                    //params: guestbookVo, //get방식 파라미터로 값이 전달
                    //data: this.myMemberVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달

                    responseType: 'json' //수신타입
                }).then(response => {
                    console.log(response.data); //수신데이타
                    this.paymentList = response.data.cartList;
                    this.userVo = response.data.userVo;

                }).catch(error => {
                    console.log(error);
                });

            },
            newAddress(){
                console.log("새로운 주소");
                this.isNewAddress = true;
            },

            productPaymentComplete(){
                console.log("상품결제완료");
            },
            paymentComplete(){
                console.log("결제완료");
                if(this.user_new_address != null){
                    this.userVo.o_address = this.user_new_address;
                }
                axios({
                    method: 'post', // put, post, delete 
                    url: 'http://localhost:9002/api/customer/payment',
                    headers: { "Content-Type": "application/json; charset=utf-8",
                        "Authorization": "Bearer " + this.$store.state.token
                    }, //전송타입
                    //params: guestbookVo, //get방식 파라미터로 값이 전달
                    data: this.userVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달
                    responseType: 'json' //수신타입
                }).then(response => {
                    console.log(response.data); //수신데이타

                    if (response.data == 1) {
                        alert("^^")
                        this.$router.push("/");
                    } else {
                        alert("^m^");
                    }
                }).catch(error => {
                    console.log(error);
                });

            },






            paymentCompleteModal(){
                console.log("모달창 보이기");
                let modal = document.querySelector("#u-payment-modal");
                modal.style.display = "block";
            },

            closeModal(){
                console.log("모달창 닫기");
                this.$router.push("/");
            }
        },
        created() { 
            this.getInfoList();
        }
    };
    </script>
    <style>
    
    
    </style>
    