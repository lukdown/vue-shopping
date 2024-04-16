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
                    <tr v-bind:key="i" v-for="(paymentVo,i) in paymentList" class="m-payment-table-content">
                        <td id="m-payment-date">{{ paymentVo.o_date }}</td>
                        <td id="m-payment-name">{{ paymentVo.o_name }}</td>
                        <td id="m-payment-address">{{ paymentVo.o_address }}</td>
                        <td id="m-payment-hp">{{ paymentVo.o_hp }}</td>
                        <td id="m-payment-request">{{ paymentVo.o_request }}</td>
                        <td id="m-payment-total-price">{{ paymentVo.totalprice }}</td>
                        <td>{{ paymentVo.o_status}}</td>
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
    import axios from "axios";
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
        return {
            paymentList: [],
            paymentVo: {
                o_no: "",
                o_name: "",
                o_address: "",
                o_hp: "",
                o_request: "",
                totalprice: "",
                o_date: "",
                o_status: "",
                o_payment: ""
            }
        };
    },
    methods: {
        getList(){
            console.log("getList");
            //서버로 전송
            axios({
                method: 'get', // put, post, delete  //불러오는것은 GET //저장은 POST
                url: 'http://localhost:9002/api/admin/paymentmanage', //''따옴표 문법도 중요
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
                //params: guestbookVo, //get방식 파라미터로 값이 전달 @ModelAttribute
                //data: this.memberVo.no, //put, post, delete 방식 자동으로 JSON으로 변환 전달 @RequestBody

                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response.data.apiData); //수신데이타
                
                this.paymentList = response.data.apiData;
                console.log(this.paymentList);
            }).catch(error => {
                console.log(error);
            });

        }
    },
    created() {
        this.getList();
    },
    };
</script>
<style>

</style>