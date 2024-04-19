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
                    <h2>출고번호: {{ this.$route.params.o_no }}</h2>
                    <!--결제관리 table-->
                    <table id="m-payment-table">
                        <tr class="m-payment-table-th">
                            <th>받는 사람 이름</th>
                            <th>출고량</th>
                            <th>사이즈</th>
                            <th>상품명</th>
                            <th>상품가격</th>
                            <th>총 가격</th>
                            <th>배송상태</th>
                        </tr>
                        <tr v-bind:key="i" v-for="(productEVo,i) in detailList" class="m-payment-table-content">
                            <td id="m-payment-name">{{ productEVo.o_name }}</td>
                            <td id="m-payment-address">{{ productEVo.e_amount }}</td>
                            <td id="m-payment-hp">{{ productEVo.e_size }}</td>
                            <td id="m-payment-request">{{ productEVo.p_name }}</td>
                            <td id="m-payment-request">{{ productEVo.p_price }}</td>
                            <td id="m-payment-total-price">{{ productEVo.totalprice }}</td>
                            <td>
                                <div v-if="productEVo.o_status == '0'">결제완료</div>
                                <div v-else-if="productEVo.o_status == 1">배송중</div>
                                <div v-else-if="productEVo.o_status == 2">배송완료</div>
                                <div v-else>결제대기</div>
                            </td>
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
        <AdminAppFooter />
    </div>
    </template>
    
    <script>
        import axios from "axios";
        import "@/assets/css/admin/PaymentManageView.css";
        import AdminAppFooter from "@/components/admin/AdminAppFooter.vue";
        import AdminAppHeader from "@/components/admin/AdminAppHeader.vue";
    
        export default {
        name: "PaymentManageDetailsView",
        components: {
            AdminAppHeader,
            AdminAppFooter,
        },
        data() {
            return {
                detailList: [],
                productEVo: {
                    o_no: this.$route.params.o_no,
                    e_no: "",
                    o_name: "",
                    e_amount: "",
                    e_size: "",
                    p_name: "",
                    p_price: "",
                    totalprice: "",
                    o_status: ""
                }
            
            };
        },
        methods: {
            getList(){
                console.log("하하");
                axios({
                    method: 'get',
                    url: `${this.$store.state.apiBaseUrl}/api/admin/paymentmanage/`+ this.productEVo.o_no,
                    headers: {"Content-Type": "application/json; charset=utf-8"},
                    data: this.productEVo.o_no,
                    responseType: 'json'
                }).then(response => {
                    console.log(response.data.apiData); //수신데이타    
                    this.detailList = response.data.apiData;

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