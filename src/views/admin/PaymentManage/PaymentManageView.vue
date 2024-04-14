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
                <h1>결제관리</h1>

                <!--카테고리별 정렬-->

                <!--검색-->
                <form id="m-payment-search-form" action="" method="">
                    <input type="text" id="search" name="psearch" value="" placeholder="검색어를 입력하세요">
                    <button>검색</button>
                </form>

                <!--결제관리 table-->
                <table id="m-payment-table">
                    <tr class="m-payment-table-th">
                        <th>결제 날짜</th>
                        <th>구매자명</th>
                        <th>주소</th>
                        <th>핸드폰 번호</th>
                        <th>요청사항</th>
                        <th>총 가격</th>
                    </tr>
                    <tr class="m-payment-table-content">
                        <td id="m-payment-date">2024-01-01</td>
                        <td id="m-payment-name">홍길동</td>
                        <td id="m-payment-address">서울특별시</td>
                        <td id="m-payment-hp">010-1234-5678</td>
                        <td id="m-payment-request">빠른 배송 부탁드립니다.</td>
                        <td id="m-payment-total-price">10,000원</td>
                    </tr>
                    <tr class="m-payment-table-content">
                        <td id="m-payment-date">2024-01-01</td>
                        <td id="m-payment-name">홍길동</td>
                        <td id="m-payment-address">서울특별시</td>
                        <td id="m-payment-hp">010-1234-5678</td>
                        <td id="m-payment-request">빠른 배송 부탁드립니다.</td>
                        <td id="m-payment-total-price">10,000원</td>
                    </tr>
                    <tr class="m-payment-table-content">
                        <td id="m-payment-date">2024-01-01</td>
                        <td id="m-payment-name">홍길동</td>
                        <td id="m-payment-address">서울특별시</td>
                        <td id="m-payment-hp">010-1234-5678</td>
                        <td id="m-payment-request">빠른 배송 부탁드립니다.</td>
                        <td id="m-payment-total-price">10,000원</td>
                    </tr>
                </table>
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
    import "@/assets/css/admin/PaymentManageView.css";
    import AppFooter from "@/components/customer/AppFooter.vue";

    import AppHeader from "@/components/customer/AppHeader.vue";

    export default {
    name: "PaymentManageView",
    components: {
        AppHeader,
        AppFooter,
    },
    data() {
        return {};
    },
    methods: {},
    created() {},
    };
</script>
<style>

</style>