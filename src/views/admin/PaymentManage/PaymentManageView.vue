<template>
<div>
    <AdminAppHeader />
    <div id="wrap">
    <div id="container" class="clearfix">
        <!-- aside 없음 -->
        <div id="full-content">
        <!-- content-head 없음 -->

        <div id="index">
            <div id="greetings" class="m-payment-all">
                <h1>결제관리</h1>

                <!--카테고리별 정렬-->
                <div class="m-payment-btn-box">
                    <div class="item">
                        <select name="search-type" id="search-type" class="input-search">
                            <option value="0">전체</option>
                            <option value="1">구매자명</option>
                            <option value="2">핸드폰 번호</option>
                        </select>
                        <input type="text" name="keyword" id="keyword" class="input-search"
                            autocomplete="on" placeholder="검색어를 입력하세요">
                        <a href="javascript:;" class="dm-btn" id="btn-search">검색</a>
                    </div>
                </div>

                <!--결제관리 table-->
                <table id="m-payment-table">
                    <tr class="m-payment-table-th">
                        <th>결제 날짜</th>
                        <th>구매자명</th>
                        <th>주소</th>
                        <th>핸드폰 번호</th>
                        <th>요청사항</th>
                        <th>총 가격</th>
                        <th>배송상태</th>
                    </tr>
                    <tr class="m-payment-table-content">
                        <td id="m-payment-date">2024-01-01</td>
                        <td id="m-payment-name">홍길동</td>
                        <td id="m-payment-address">서울특별시</td>
                        <td id="m-payment-hp">010-1234-5678</td>
                        <td id="m-payment-request">빠른 배송 부탁드립니다.</td>
                        <td id="m-payment-total-price">10,000원</td>
                        <td>배송완료</td>
                    </tr>
                    <tr class="m-payment-table-content">
                        <td id="m-payment-date">2024-01-01</td>
                        <td id="m-payment-name">홍길동</td>
                        <td id="m-payment-address">서울특별시</td>
                        <td id="m-payment-hp">010-1234-5678</td>
                        <td id="m-payment-request">빠른 배송 부탁드립니다.</td>
                        <td id="m-payment-total-price">10,000원</td>
                        <td>배송완료</td>
                    </tr>
                    <tr class="m-payment-table-content">
                        <td id="m-payment-date">2024-01-01</td>
                        <td id="m-payment-name">홍길동</td>
                        <td id="m-payment-address">서울특별시</td>
                        <td id="m-payment-hp">010-1234-5678</td>
                        <td id="m-payment-request">빠른 배송 부탁드립니다.</td>
                        <td id="m-payment-total-price">10,000원</td>
                        <td>배송완료</td>
                    </tr>
                </table>

                <!-- 페이지네이션 -->
                <div class="pagination">
                    <a href="#" class="page-arrow" id="first">&laquo;</a>
                    <a href="#" class="page-arrow" id="prev">&lsaquo;</a>
                    <!-- 페이지 번호 목록 -->
                    <div class="page-list">

                    </div>
                    <a href="javascript:;" class="page-arrow" id="next">&rsaquo;</a>
                    <a href="javascript:;" class="page-arrow" id="last">&raquo;</a>
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
    <AdminAppFooter />
</div>
</template>

<script>
    import "@/assets/css/admin/PaymentManageView.css";
    import AdminAppFooter from "@/components/admin/AdminAppFooter.vue";
    import AdminAppHeader from "@/components/admin/AdminAppHeader.vue";

    export default {
    name: "PaymentManageView",
    components: {
        AdminAppHeader,
        AdminAppFooter,
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