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
                <h1>결제/주문 창</h1>
                <form action="" method="post">

                    <!-- 상품 정보 영역-->
                    <div class="u-payment-product-information">
                        <div class="u-payment-title">상품 정보</div>
                        <p>결제자: 유영수</p>
                        <p>영수 킹갓제너럴스페셜 티셔츠</p>
                        <p>핑크 (S)</p>
                        <p>수량: 2개</p>

                        <!-- 상품 가격표시 영역 -->
                        <div id="price">200,000원</div>
                    </div>

                    <div class="u-payment-product-information">
                        <div class="u-payment-title">상품 정보</div>
                        <p>결제자: 유영수</p>
                        <p>영수 킹갓제너럴스페셜 진</p>
                        <p>노랑 (S)</p>
                        <p>수량: 1개</p>

                        <!-- 상품 가격표시 영역 -->
                        <div id="price">100,000원</div>
                    </div>

                    <!--받는 분 연락처-->
                    <div id="u-payment-phone">
                        <label for="phone">연락처 입력:</label>
                        <input type="tel" name="phone" id="u-payment-phone-number" placeholder="연락처">
                    </div>

                    <!--배송지 입력-->
                    <div id="u-payment-delivery-address">
                        <p id="u-payment-delivery-address-title">배송지 주소:</p>

                        <!-- 주문자와 동일 -->
                        <p>경기도 하남시 어쩌고 저쩌고</p>

                        <!-- 신규 배송지 -->
                        <div id="u-payment-delivery-new-address">
                            <label for="address">배송지 입력:</label>
                            <input type="text" name="address" id="u-payment-new-address" placeholder="주소">
                            <button>완료</button>
                        </div>
                        <!--요청사항-->
                        <div class="u-payment-request-class">
                            <label for="request">요청사항</label>
                            <textarea id="request" placeholder="여기에 입력해주세요" maxlength="500"></textarea>
                        </div>
                    </div>

                    <!-- 포인트 -->
                    <div id="u-payment-point">
                        <p>현재 포인트: 500원</p>
                        <label for="point">포인트: </label>
                        <input type="text" name="point" id="u-payment-point-push" placeholder="0">
                        <button id="u-payment-point-button">사용</button>
                    </div>

                    <!--총 결제 금액-->
                    <div class="u-payment-total-price-all">
                        <div class="u-payment-total-price">
                            <table class="table_price">
                                <tbody>
                                    <tr>
                                        <th>상품금액</th>
                                        <td><span>영수 킹갓제너럴스페셜 티셔츠</span>200,000<span>원</span></td>
                                        <td><span>영수 킹갓제너럴스페셜 진</span>100,000<span>원</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="u-payment-total-price">
                            <table class="table_price">
                                <tbody>
                                    <tr>
                                        <th>포인트 사용금액</th>
                                        <td>0<span>원</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="u-payment-total-price">
                            <table class="table_price">
                                <tbody>
                                    <tr>
                                        <th>총금액</th>
                                        <td id="u-total-price">300,000<span>원</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                    <div >
                        <label for="u-total-price">총금액</label>
                        <div >300,000원</div>
                    </div>

                    <!-- 결제 방법 영역-->
                    <div class="u-payment-method-button">
                        <label for="payment-method">결제 수단 선택:</label>
                        <button type="button" id="payment-method-button">신용카드</button>
                        <button type="button" id="bank-transfer-button">계좌이체</button>
                        <button type="button" id="paypal-button">페이팔</button>
                    </div>
                    
                    <!-- 결제 버튼 -->
                    <button id="payment-final-button">결제하기</button>
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
        return {};
    },
    methods: {},
    created() { }
};
</script>
<style>


</style>
