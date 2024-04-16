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

                                        <ul id="oneUl">
                                            <li><router-link to="/productdetails"><img id="clothesImg" src="https://www.fashionn.com/files/board/2018/image/p1cforbgmvcok1ii51o8c1tecoc11.jpg"></router-link></li>
                                            <li>영수 스페셜 원피스</li>
                                            <li><strong>10,000원</strong></li>
                                        </ul>

                                        <ul id="oneUl">
                                            <li><router-link to="/productdetails"><img id="clothesImg" src="https://www.fashionn.com/files/board/2018/image/p1cforbgmvcok1ii51o8c1tecoc11.jpg"></router-link></li>
                                            <li>영수 스페셜 진</li>
                                            <li><strong>8,000원</strong></li>
                                        </ul>

                                        <ul id="oneUl">
                                            <li><router-link to="/productdetails"><img id="clothesImg" src="https://www.fashionn.com/files/board/2018/image/p1cforbgmvcok1ii51o8c1tecoc11.jpg"></router-link></li>
                                            <li>영수 스페셜 원피스</li>
                                            <li><strong>10,000원</strong></li>
                                        </ul>
                                        
                                        <ul id="oneUl">
                                            <li><router-link to="/productdetails"><img id="clothesImg" src="https://www.fashionn.com/files/board/2018/image/p1cforbgmvcok1ii51o8c1tecoc11.jpg"></router-link></li>
                                            <li>영수 스페셜 원피스</li>
                                            <li><strong>10,000원</strong></li>
                                        </ul>

                                        <ul id="oneUl">
                                            <li><router-link to="/productdetails"><img id="clothesImg" src="https://www.fashionn.com/files/board/2018/image/p1cforbgmvcok1ii51o8c1tecoc11.jpg"></router-link></li>
                                            <li>영수 스페셜 진</li>
                                            <li><strong>8,000원</strong></li>
                                        </ul>

                                        <ul id="oneUl">
                                            <li><router-link to="/productdetails"><img id="clothesImg" src="https://www.fashionn.com/files/board/2018/image/p1cforbgmvcok1ii51o8c1tecoc11.jpg"></router-link></li>
                                            <li>영수 스페셜 원피스</li>
                                            <li><strong>10,000원</strong></li>
                                        </ul>

                                    </div>
                                    
                                    <div id="paging">
                                        <span>1 2 3 4 5 6</span>
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
        return {};
    },
    methods: {},
    created(){},
};
</script>

<style></style>