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

                            <div id="background">



                            

                                <div id="contentGroup">

                                    <h1>상품 리스트</h1>
                                    
                                    <p>아우터</p>

                                    <div id="allUl">

                                        <ul>
                                            
                                            <li id="oneUl" v-bind:key="i" v-for="(productVo, i) in productList">
                                                <router-link to="/customer/productdetails"><img id="clothesImg" v-bind:src="`${this.$store.state.apiBaseUrl}/upload/${productVo.saveName}`"></router-link>
                                                <div>
                                                    {{ productVo.p_name }}
                                                </div>
                                                <div>
                                                    <strong>{{ productVo.p_price }}원</strong>
                                                </div>
                                            </li>
                                            
                                        </ul>

                                        

                                    </div>  
                                    
                                    <div id="paging">
                                        <a href="#" class="page-arrow" id="first">&laquo;</a>
                                        <a href="#" class="page-arrow" id="prev">&lsaquo;</a>
                                        <!-- 페이지 번호 목록 -->
                                        <div class="page-list">

                                        </div>
                                        <a href="javascript:;" class="page-arrow" id="next">&rsaquo;</a>
                                        <a href="javascript:;" class="page-arrow" id="last">&raquo;</a>
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
import axios from 'axios';
import "@/assets/css/customer/ProductListView.css";
import AppFooter from "@/components/customer/AppFooter.vue";
import AppHeader from "@/components/customer/AppHeader.vue";

export default {
    name: "ProductListView",
    components: {
        AppHeader,
        AppFooter,
    },
    data() {
        return {
            productList: [],
            productVo: {
                p_no: "",
                p_name: "",
                p_price: "",
                p_category: "",
                p_explanation: "",
                filePath: "",
                orgName: "",
                saveName: "",
                fileSize: "",
                p_remarks: ""
            },
        };
    },
    methods: {
        getList(){
            console.log("데이터 가져오기");
            // http://localhost:9000/api/guests

            axios({
                method: 'get', // put, post, delete 
                url: 'http://localhost:9002/api/customer/list',
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                // params: guestbookVo, //get방식 파라미터로 값이 전달
                //data: guestbookVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달

                responseType: 'json' //수신타입
            }).then(response => {
                //console.log(response); //수신데이타
                this.productList = response.data;
                
            }).catch(error => {
                console.log(error);

            });
        }
    },
    created(){
        this.getList();
    }
};
</script>

<style></style>