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
                                    <li id="ShoppingBasketList">

                                        <img id="ShoppingBasket-img" src="@/assets/img/Kim-Jong-kook.jpg">

                                        <div>
                                            <button class="ShoppingBasket-Cancelbtn" type="button">X</button>
                                        </div>

                                        <div class="ShoppingBasket-BriefContents">
                                            <span id="ShoppingBasket-BriefContents-name">영수의 스페셜 울트라 닝수셔츠</span>
                                        </div>

                                        <div class="ShoppingBasket-BriefContents">
                                            <span>영수표 빨강(L)</span>
                                        </div>

                                        <div class="ShoppingBasket-BriefContents">
                                            <label>수량:</label>
                                            <span>1</span>
                                        </div>

                                        <div class="ShoppingBasket-BriefContents">
                                            <label>가격:</label>
                                            <span>1,000,000원</span>
                                        </div>
                                    </li>
                                </div>

                                <div>
                                    <button id="ShoppingBasket-Emptybtn" type="button">장바구니 비우기</button>
                                </div>

                                <div id="ShoppingBasket-TotalPaymentAmountPayment">
                                    <div id="ShoppingBasket-TotalPaymentAmount">
                                        <div>
                                            <label class="ShoppingBasket-TotalNumberOfProducts">총 상품갯수:</label>
                                            <span class="ShoppingBasket-TotalNumberOfProducts">1개</span>
                                        </div>
                                        <div>
                                            <label class="ShoppingBasket-TotalPaymentAmountFont">총 결제금액:</label>
                                            <span class="ShoppingBasket-TotalPaymentAmountFont">1,000,000원</span>
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

export default {
    name: "ShoppingBasketView",
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
<style></style>