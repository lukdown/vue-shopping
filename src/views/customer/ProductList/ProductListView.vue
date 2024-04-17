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
                                    <div id="search-box">
                                        <input type="text" id="postSearch" placeholder="검색" v-model="productVo.keyword" v-on:keyup.enter="search">
                                    </div>
                                    <div id="allUl">

                                        <ul>
                                            
                                            <li id="oneUl" v-bind:key="i" v-for="(productVo, i) in productList">
                                                <router-link v-bind:to="`/customer/productdetails/${productVo.p_no}`"><img id="clothesImg" v-bind:src="`${this.$store.state.apiBaseUrl}/upload/${productVo.saveName}`"></router-link>
                                                <div>
                                                    {{ productVo.p_name }}{{ productVo.p_no }}
                                                </div>
                                                <div>
                                                    <strong>{{ productVo.p_price }}원</strong>
                                                </div>
                                            </li>
                                            
                                        </ul>

                                        

                                    </div>  
                                    
                                    
                                    <ol id="productList" class="product-pagination">


                                        <li class="" v-if="prev != false" v-on:click="prevPage">이전</li>
                                        <li class="" v-else-if="prev == true" v-on:click="prevPage">이전</li>
                                        <li id="memberlistpage" v-bind:key="index" v-for="(i, index) in endNo-startNo+1">

                                            <div class="product-page-list">
                                                <a v-on:click.prevent="list(startNo+i)" href="">{{startNo+i-1}}</a>
                                            </div>
                                            

                                        </li>
                                        <li class="product-page-arrow" v-if="next == true" v-on:click="nextPage">다음</li>

                                    </ol>


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
                crtPage: 1,
                keyword: ""
            },
            startNo: 0,
            endNo: 0,
            next: "",
            prev: ""
        };
    },
    methods: {
        getList(list){
            console.log("데이터 가져오기");
            // http://localhost:9000/api/guests
            if (this.productVo.crtPage == 1) {
                this.productVo.crtPage = 1;
            } else if (this.productVo.crtPage < 1) {
                this.productVo.crtPage = 1;
            }
            else {
                this.productVo.crtPage = list - 1;
            }

            console.log(this.productVo.crtPage);
            axios({
                method: 'post', // put, post, delete 
                url: 'http://localhost:9002/api/customer/list',
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                // params: guestbookVo, //get방식 파라미터로 값이 전달
                data: this.productVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달

                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response.data.apiData); //수신데이타
                this.productList = response.data.apiData.productList;
                this.endNo = response.data.apiData.endPageBtnNo;
                this.startNo = response.data.apiData.startPageBtnNo;
                this.next = response.data.apiData.next;
                this.prev = response.data.apiData.prev;
                
            }).catch(error => {
                console.log(error);

            });
        },
        search() {
            this.productVo.crtPage = 1;
            this.getList();
        },
        list(page) {
            this.productVo.crtPage = page;
            this.getList(this.productVo.crtPage);
        },
        prevPage() {
            if (this.prev == false) {
                console.log(this.productVo.crtPage);
                this.getList(this.productVo.crtPage);
            }
        },
        nextPage() {
            if (this.next == true) {
                this.productVo.crtPage = this.productVo.crtPage + 6;
                this.getList(this.productVo.crtPage);
            }
        }
    },
    created(){
        this.getList();
    }
};
</script>

<style></style>