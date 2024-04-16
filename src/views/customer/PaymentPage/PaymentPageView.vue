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
                    <form action="" method="post">
    
                        <!-- 상품 정보 영역-->
                        <div class="u-payment-product-information">
                            <div class="u-payment-title">상품 정보</div>
                            <p id="u-payment-product-name">영수 킹갓제너럴스페셜 티셔츠</p>
                            <p id="u-payment-product-intro">영수 대박대박 형광핑크 형광핑크 (S)</p>
                            <p id="u-payment-product-quantity">수량: 2개</p>
                            
                            <!-- 상품 가격표시 영역 -->
                            <dir id="u-payment-product-qqqprice">
                                <p id="u-payment-product-qqq">개당: 100,000원</p>
                                <div id="u-payment-product-qprice">총 200,000원</div>
                            </dir>   
                        </div>
    
                        <!-- 상품 정보 영역-->
                        <div class="u-payment-product-information">
                            <div class="u-payment-title">상품 정보</div>
                            <p id="u-payment-product-name">영수 킹갓제너럴스페셜 진</p>
                            <p id="u-payment-product-intro">영수 대박대박 형광노랑 형광노랑 (S)</p>
                            <p id="u-payment-product-quantity">수량: 1개</p>
                            
                            <!-- 상품 가격표시 영역 -->
                            <dir id="u-payment-product-qqqprice">
                                <p id="u-payment-product-qqq">개당: 100,000원</p>
                                <div id="u-payment-product-qprice">총 100,000원</div>
                            </dir>   
                        </div>
    
    
                        <!--받는 분 연락처-->
                        <div id="u-payment-phone">
                            <label for="u-payment-phone-number">연락처 입력:</label>
                            <input type="tel" name="phone" id="u-payment-phone-number" placeholder="연락처">
                        </div>
    
    
                        <!--배송지 입력-->
                        <div id="u-payment-delivery-address">
                            
    
                            <!-- 주문자와 동일 -->
                            <div id="u-payment-delivery-org-address">
                                <p id="u-payment-delivery-address-title">기존 배송지 주소:</p>
                                <p>경기도 하남시 어쩌고 저쩌고</p>
                            </div>
    
                            <!-- 신규 배송지 -->
                            <div id="u-payment-delivery-new-address">
                                <label for="u-payment-new-address">신규 배송지 입력:</label>
                                <input type="text" name="address" id="u-payment-new-address" placeholder="주소">
                                <button>완료</button>
                            </div>
                        </div>
                        <!--요청사항-->
                        <div class="u-payment-request-class">
                            <label for="u-payment-request">요청사항</label>
                            <textarea id="u-payment-request" placeholder="여기에 입력해주세요" maxlength="500"></textarea>
                        </div>
                        
    
                        <!-- 포인트 -->
                        <div id="u-payment-point">
                            <p>현재 포인트: 500원</p>
                            <label for="u-payment-point-push">포인트: </label>
                            <input type="text" name="point" id="u-payment-point-push" placeholder="0">
                            <button id="u-payment-point-button">사용</button>
                        </div>
    
                        <!--총 결제 금액-->
                        <div class="u-payment-total-price-all">
                            <div class="u-payment-total-price">
                                <table class="u-table_price">
                                    <tbody>
                                        <tr id="u-payment-product">
                                            <th id="u-payment-product-price">상품금액</th>
                                            <td>300,000<span>원</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <p>ㅡ</p>
                            </div>
                            <div class="u-payment-total-price">
                                <table class="u-table_price">
                                    <tbody>
                                        <tr>
                                            <th>포인트 사용금액</th>
                                            <td>0<span>원</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <p>=</p>
                            </div>
                            <div class="u-payment-total-price">
                                <table class="u-table_price">
                                    <tbody>
                                        <tr>
                                            <th>총금액</th>
                                            <td id="u-total-price">300,000<span>원</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
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
    