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
                        <select name="search-type" id="search-type" class="input-search" v-model="paymentpageVo.category">
                            <option disabled value="">카테고리 선택</option>
                            <option value="0" >전체</option>
                            <option value="1">구매자명</option>
                            <option value="2">핸드폰 번호</option>
                        </select>
                        <input v-model="paymentpageVo.keyword" type="text" name="keyword" id="keyword" class="input-search" autocomplete="on" placeholder="검색어를 입력하세요">
                        <a href="javascript:;" class="dm-btn" id="btn-search" v-on:click="search">검색</a>
                    </div>
                </div>

                <!--결제관리 table-->
                <table id="m-payment-table">
                    <tr class="m-payment-table-th">
                        <th>주문번호</th>
                        <th>결제 날짜</th>
                        <th>구매자명</th>
                        <th>주소</th>
                        <th>핸드폰 번호</th>
                        <th>요청사항</th>
                        <th>총 가격</th>
                        <th>배송상태</th>
                        <th>상태변경</th>
                    </tr>
                    <tr v-bind:key="i" v-for="(paymentVo,i) in paymentList" class="m-payment-table-content">
                        <td><router-link :to="`/admin/paymentmanage/details/${paymentVo.o_no}`">{{ paymentVo.o_no }}</router-link></td>
                        <td id="m-payment-date">{{ paymentVo.o_date }}</td>
                        <td id="m-payment-name">{{ paymentVo.o_name }}</td>
                        <td id="m-payment-address">{{ paymentVo.o_address }}</td>
                        <td id="m-payment-hp">{{ paymentVo.o_hp }}</td>
                        <td id="m-payment-request">{{ paymentVo.o_request }}</td>
                        <td id="m-payment-total-price">{{ paymentVo.totalprice }}</td>
                        <td>
                            <div v-if="paymentVo.o_status == '0'">결제완료</div>
                            <div v-else-if="paymentVo.o_status == 1">배송중</div>
                            <div v-else-if="paymentVo.o_status == 2">배송완료</div>
                            <div v-else>결제대기</div>
                        </td>
                        
                        <td>
                            <button class="delivery_btn" v-if="paymentVo.o_status == '0'" v-on:click="paymentStatus(paymentVo.o_no)">배송시작</button>
                            <button class="delivery_btns" v-else-if="paymentVo.o_status == 1" v-on:click="paymentStatus(paymentVo.o_no)">배송완료</button>
                            <div v-else></div>
                        </td>
                    </tr>
                    
                </table>

                <!-- 페이지네이션 -->
                <div class="pagination">
                    <a href="#" class="page-arrow" id="prev" v-if="prev == true" v-on:click="prevPage">&lt;</a>
                    <!-- 페이지 번호 목록 -->
                    <div class="page-list" v-bind:key="index" v-for="(i, index) in endNo-startNo+1">
                        <a v-on:click.prevent="list(startNo+i)" href="">{{startNo+i-1}}</a>
                    </div>
                    <a href="javascript:;" class="page-arrow" id="next" v-if="next == true" v-on:click="nextPage">	&gt;</a>
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
            },
            paymentpageVo:{
                crtPage: 1,
                keyword: "",
                category: ""
            },
            startNo: 0,
            endNo: 0,
            next: "",
            prev: ""
        
        };
    },
    methods: {
        getList(list){

            if (this.paymentpageVo.crtPage == 1) {
                this.paymentpageVo.crtPage = 1;
            } else if (this.paymentpageVo.crtPage < 1) {
                this.paymentpageVo.crtPage = 1;
            }
            else {
                this.paymentpageVo.crtPage = list - 1;
            }
            console.log(this.paymentpageVo.crtPage);
            console.log(this.paymentpageVo.category);
            console.log(this.paymentpageVo.keyword);
            axios({
                method: 'post',
                url: 'http://localhost:9002/api/admin/paymentmanage',
                headers: {"Content-Type": "application/json; charset=utf-8"},
                data: this.paymentpageVo,
                responseType: 'json'
            }).then(response => {
                console.log(response.data.apiData.pList); //수신데이타    
                this.paymentList = response.data.apiData.pList;
                this.endNo = response.data.apiData.endPageBtnNo;
                this.startNo = response.data.apiData.startPageBtnNo;
                this.next = response.data.apiData.next;
                this.prev = response.data.apiData.prev;
            }).catch(error => {
                console.log(error);
            });
        },
        search() {
            this.paymentpageVo.crtPage = 1;
            this.getList();
        },
        list(page) {
            this.paymentpageVo.crtPage = page;
            this.getList(this.paymentpageVo.crtPage);
        },
        prevPage() {
            if (this.prev == true) {
                console.log(this.paymentpageVo.crtPage);
                this.paymentpageVo.crtPage = this.paymentpageVo.crtPage - 6;
                this.getList(this.paymentpageVo.crtPage);
            }
        },
        nextPage() {
            if (this.next == true) {
                this.paymentpageVo.crtPage = this.paymentpageVo.crtPage + 6;
                this.getList(this.paymentpageVo.crtPage);
            }
        },
        paymentStatus(o_no){
            console.log("배송상태 버튼");
            console.log(o_no);
            axios({
                method: 'put',
                url: 'http://localhost:9002/api/admin/paymentmanage/'+ o_no,
                headers: {"Content-Type": "application/json; charset=utf-8"},
                data: {o_no},
                responseType: 'json'
            }).then(response => {
                console.log(response.data); //수신데이타    

                window.location.reload();
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