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
                            <div id="ShoppingBasketList-PagenameBreadcrumbs">
                                <h2 class="ShoppingBasket-FontFamilyTitle">장바구니</h2>
                                <h5 class="ShoppingBasket-FontFamilyLitleTitle">나의 패션리스트</h5>
                            </div>
                            <div id="ShoppingBasketList-All">
                                <div id="ShoppingBasketList-scroll">
                                    <div v-bind:key="i" v-for="(cartVo, i) in cartList">
                                        <li id="ShoppingBasketList">

                                            <img id="ShoppingBasket-img"
                                                v-bind:src="`${this.$store.state.apiBaseUrl}/upload/${cartVo.saveName}`">

                                            <div>
                                                <button class="ShoppingBasket-Cancelbtn" v-on:click="Cancelbtn(cartVo.c_no)"
                                                    type="button">X</button>
                                            </div>

                                            <div class="ShoppingBasket-BriefContents">
                                                <span id="ShoppingBasket-BriefContents-name">{{ cartVo.p_name }}</span>
                                            </div>

                                            <div class="ShoppingBasket-BriefContents">
                                                <label class="shoppingBasket-label">사이즈 :</label>
                                                <select id="ShoppingBasket-sizechoose" name="size"
                                                    v-model="cartVo.c_size">
                                                    <option class="" value="S">S</option>
                                                    <option class="" value="M">M</option>
                                                    <option class="" value="L">L</option>
                                                    <option class="" value="XL">XL</option>
                                                </select>
                                            </div>

                                            <div id="ShoppingBasket-quantitynumberAll"
                                                class="ShoppingBasket-BriefContents">
                                                <label class="shoppingBasket-label">수량 :</label>
                                                <button class="ShoppingBasket-quantitynumberButton" v-on:click="quantitydownbtn(i)">-</button>
                                                <input id="ShoppingBasket-quantitynumber" type="text"
                                                    v-model="cartVo.c_p_amount">
                                                <button class="ShoppingBasket-quantitynumberButton" v-on:click="quantityupbtn(i)">+</button>
                                            </div>

                                            <div class="ShoppingBasket-BriefContents">
                                                <label class="shoppingBasket-label">가격 :</label>
                                                <span>{{ cartVo.p_price*cartVo.c_p_amount }}원</span>
                                            </div>
                                            
                                            <button id="ShoppingBasket-Confirmbutton" type="button" v-on:click="Confirmbutton(i)">확정</button>
                                        </li>
                                    </div>
                                </div>

                                <div>
                                    <button id="ShoppingBasket-Emptybtn" type="button" v-on:click="EmptybtnAll()">장바구니 비우기</button>
                                </div>

                                <div id="ShoppingBasket-TotalPaymentAmountPayment">
                                    <div id="ShoppingBasket-TotalPaymentAmount">
                                        <div id="ShoppingBasket-TotalNumberOfProductsAll">
                                            <label class="ShoppingBasket-TotalNumberOfProducts">총 상품갯수:</label>
                                            <span class="ShoppingBasket-TotalNumberOfProducts">{{ cartList.length }}개</span>
                                        </div>
                                        <div>
                                            <label class="ShoppingBasket-TotalPaymentAmountFont">총 결제금액:</label>
                                            <span class="ShoppingBasket-TotalPaymentAmountFont">{{ getTotalPrice }}원</span>
                                        </div>
                                    </div>
                                    <div>
                                        <router-link to="/customer/paymentpage">
                                            <button id="ShoppingBasket-MakePaymentbtn" type="button">결제하기</button>
                                        </router-link>
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
import "@/assets/css/customer/ShoppingBasketView.css";
import AppFooter from "@/components/customer/AppFooter.vue";
import AppHeader from "@/components/customer/AppHeader.vue";
import axios from 'axios';

export default {
    name: "ShoppingBasketView",
    components: {
        AppHeader,
        AppFooter,
    },
    data() {
        return {
            cartList: [],
            cartVo: {
                c_no:"",
                saveName: "",
                p_name: "",
                p_price: "",
                c_p_amount: "",
                c_size: ""
            },
            
        };
    },
    computed: {
        getTotalPrice() {
            let totalPrice = 0;
            for (let i = 0; i < this.cartList.length; i++) {
                totalPrice += this.cartList[i].p_price * this.cartList[i].c_p_amount;
            }
            return totalPrice;
        }
    },
    methods: {
        getcartList() {

            console.log("데이터 가져오기")

            axios({
                method: 'get', // put, post, delete                   
                url: `${this.$store.state.apiBaseUrl}/api/customer/shoppingbasket`,
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    "Authorization": "Bearer " + this.$store.state.token
                }, //전송타입
                //params: guestbookVo, //get방식 파라미터로 값이 전달
                //data: guestbookVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달

                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response.data.apiData); //수신데이타
                this.cartList = response.data.apiData;
            }).catch(error => {
                console.log(error);
            });
        },
        Cancelbtn(c_no) {
            console.log("클릭");


            axios({
				method: 'delete', // put, post, delete                   
				url: `${this.$store.state.apiBaseUrl}/api/customer/shoppingbasket/` + c_no,
				headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
				//params:{personId: this.phonebookVo.personId} , //get방식 파라미터로 값이 전달
				//data:{personId: this.phonebookVo.personId} , //put, post, delete 방식 자동으로 JSON으로 변환 전달

				responseType: 'json' //수신타입
			}).then(response => {
				console.log(response.data); //수신데이타
				
				this.getcartList();
				
			}).catch(error => {
				console.log(error);
			});

        },
        quantitydownbtn(i){
            console.log("뺴기");
            if(this.cartList[i].c_p_amount == 1){
                this.cartList[i].c_p_amount
            }else{
                this.cartList[i].c_p_amount--;
            }
        },
        quantityupbtn(i){
            console.log("더하기");
            this.cartList[i].c_p_amount++;
        },
        Confirmbutton(i){
            console.log("수정");
            this.cartVo.c_p_amount = this.cartList[i].c_p_amount;
            this.cartVo.c_size = this.cartList[i].c_size;
            this.cartVo.c_no = this.cartList[i].c_no;

            console.log(this.cartVo);
            axios({
				method: 'put', // put, post, delete                   
				url: `${this.$store.state.apiBaseUrl}/api/customer/shoppingbasket`,
				headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
				//params:{personId: this.phonebookVo.personId} , //get방식 파라미터로 값이 전달
				data:this.cartVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달

				responseType: 'json' //수신타입
			}).then(response => {
				console.log(response.data.apiData); //수신데이타
				
				this.getcartList();
				
			}).catch(error => {
				console.log(error);
			});
        },
        EmptybtnAll(){
            console.log("전체삭제");

            axios({
				method: 'delete', // put, post, delete                   
				url: `${this.$store.state.apiBaseUrl}/api/customer/shoppingbasket`,
				headers: { "Content-Type": "application/json; charset=utf-8",
                           "Authorization": "Bearer " + this.$store.state.token
                         }, //전송타입
				//params:{personId: this.phonebookVo.personId} , //get방식 파라미터로 값이 전달
				//data:{personId: this.phonebookVo.personId} , //put, post, delete 방식 자동으로 JSON으로 변환 전달

				responseType: 'json' //수신타입
			}).then(response => {
				console.log(response.data); //수신데이타
				
				this.getcartList();
				
			}).catch(error => {
				console.log(error);
			});
        }
    },
    created() {
        this.getcartList()
    },
};
</script>
<style></style>