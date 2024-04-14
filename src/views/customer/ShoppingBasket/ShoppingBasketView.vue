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
                                <li id="ShoppingBasketList">

                                    <img id="ShoppingBasket-img" src="#">

                                    <div>
                                        <button class="ShoppingBasket-Cancelbtn" type="button">X</button>
                                    </div>

                                    <div>
                                        <p>영수의 스페셜 울트라 닝수셔츠</p>
                                    </div>

                                    <div>
                                        <p>영수표 빨강(L)</p>
                                    </div>

                                    <span id="ShoppingBasket-QuantityButton">
                                        <button>-</button>
                                        <input id="ShoppingBasket-quantity" type="text" value="1">
                                        <button>+</button>
                                    </span>
                                </li>

                                <div>
                                    <button type="button">장바구니 비우기</button>
                                </div>
                                <br>
                                <div id="ShoppingBasket-TotalPaymentAmountPayment">
                                    <div id="ShoppingBasket-TotalPaymentAmount">
                                        <label>총 결제금액</label>
                                        <span>1,000,000</span>
                                    </div>
                                    <div>
                                        <button type="button">결제하기</button>
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
<style>



</style>