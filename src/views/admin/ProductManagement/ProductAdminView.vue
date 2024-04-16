<template>
    <div>
        <AdminAppHeader />
        <div id="wrap">
            <div id="container" class="clearfix">
                <!-- aside 없음 -->
                <div id="full-content">
                    <!-- content-head 없음 -->

                    <div id="index">
                        <div id="greetings">



                            <!-- <h1>상품 관리 (등록/삭제/수정)</h1> -->

                            <div id="productFormGroup">

                                <!--
                                <ul>
                                    <li><img id="clothesImage" src="https://www.fashionn.com/files/board/2018/image/p1cforbgmvcok1ii51o8c1tecoc11.jpg"></li>
                                    <li>영수 스페셜 원피스</li>
                                    <li><strong>10,000원</strong></li>
                                    <li><router-link to="">수정</router-link></li>
                                    <li><router-link to="">삭제</router-link></li>
                                </ul>

                                <ul>
                                    <li><img id="clothesImage" src="https://www.fashionn.com/files/board/2018/image/p1cforbgmvcok1ii51o8c1tecoc11.jpg"></li>
                                    <li>영수 스페셜 진</li>
                                    <li><strong>8,000원</strong></li>
                                    <li><router-link to="">수정</router-link></li>
                                    <li><router-link to="">삭제</router-link></li>
                                </ul>

                                <ul>
                                    <li><img id="clothesImage" src="https://www.fashionn.com/files/board/2018/image/p1cforbgmvcok1ii51o8c1tecoc11.jpg"></li>
                                    <li>에스파 닝수 착용!!! 프린세스 원피스</li>
                                    <li><strong>1,000,000원</strong></li>
                                    <li><router-link to="">수정</router-link></li>
                                    <li><router-link to="">삭제</router-link></li>
                                </ul>
                                -->

                                <table>
                                    <thead>
                                        <tr>
                                            <th id="firstTh"></th>
                                            <th id="secondTh">상품명</th>
                                            <th id="thirdTh">가격</th>
                                            <th id="fourthTh"></th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td><img id="clothesImage" src="https://www.fashionn.com/files/board/2018/image/p1cforbgmvcok1ii51o8c1tecoc11.jpg"></td>
                                            <td>영수 스페셜 티셔츠</td>
                                            <td>10,000원</td>
                                            <td><router-link id="btnDelete" to="">삭제</router-link></td>
                                        </tr>

                                        <tr>
                                            <td><img id="clothesImage" src="https://www.fashionn.com/files/board/2018/image/p1cforbgmvcok1ii51o8c1tecoc11.jpg"></td>
                                            <td>영수 스페셜 진</td>
                                            <td>8,000원</td>
                                            <td><router-link id="btnDelete" to="">삭제</router-link></td>
                                        </tr>

                                        <tr>
                                            <td><img id="clothesImage" src="https://www.fashionn.com/files/board/2018/image/p1cforbgmvcok1ii51o8c1tecoc11.jpg"></td>
                                            <td>에스파 닝수 착용!!! 프린세스 원피스</td>
                                            <td>1,000,000원</td>
                                            <td><router-link id="btnDelete" to="">삭제</router-link></td>
                                        </tr>

                                        <tr>
                                            <td><img id="clothesImage" src="https://www.fashionn.com/files/board/2018/image/p1cforbgmvcok1ii51o8c1tecoc11.jpg"></td>
                                            <td>영수 스페셜 티셔츠</td>
                                            <td>10,000원</td>
                                            <td><router-link id="btnDelete" to="">삭제</router-link></td>
                                        </tr>

                                        <tr>
                                            <td><img id="clothesImage" src="https://www.fashionn.com/files/board/2018/image/p1cforbgmvcok1ii51o8c1tecoc11.jpg"></td>
                                            <td>영수 스페셜 진</td>
                                            <td>8,000원</td>
                                            <td><router-link id="btnDelete" to="">삭제</router-link></td>
                                        </tr>

                                        <tr>
                                            <td><img id="clothesImage" src="https://www.fashionn.com/files/board/2018/image/p1cforbgmvcok1ii51o8c1tecoc11.jpg"></td>
                                            <td>에스파 닝수 착용!!! 프린세스 원피스</td>
                                            <td>1,000,000원</td>
                                            <td><router-link id="btnDelete" to="">삭제</router-link></td>
                                        </tr>
                                    </tbody>
                                </table>

                                <router-link id="addBtn" to="">등록</router-link>

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
import "@/assets/css/admin/ProductAdminView.css";
import AdminAppFooter from "@/components/customer/AdminAppFooter.vue";
import AdminAppHeader from "@/components/customer/AdminAppHeader.vue";

export default {
    name: "ProductAdminView",
    components: {
        AdminAppHeader,
        AdminAppFooter,
    },
    data() {
        return {};
    },
    methods: {},
    created(){},
};
</script>

<style></style>