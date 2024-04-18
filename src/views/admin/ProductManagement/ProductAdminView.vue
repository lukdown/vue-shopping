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


                            <!-- <h1>상품 관리 (등록/삭제/수정)</h1> -->

                            <div id="productFormGroup">


                                <table>
                                    <thead>
                                        <tr id="admin-product-thtr">
                                            <th id="firstTh">사진</th>
                                            <th id="secondTh">상품명</th>
                                            <th id="thirdTh">가격</th>
                                            <th id="fourthTh">삭제</th>
                                        </tr>
                                    </thead>

                                    <tbody v-bind:key="i" v-for="(pVo, i) in pList">
                                        <tr id="trOne">
                                            <td>
                                                <!--
                                                    <img id="clothesImage"
                                                    src="https://www.fashionn.com/files/board/2018/image/p1cforbgmvcok1ii51o8c1tecoc11.jpg">
                                                -->
                                                <img id="clothesImage" v-bind:src="`http://localhost:9002/upload/${pVo.saveName}`">
                                            </td>
                                            <td>{{ pVo.p_name }}</td>
                                            <td>{{ pVo.p_price }}원</td>
                                            <td>
                                                <button v-on:click="remove(pVo.p_no)" id="admin-product-remove-btn">삭제</button>
                                            </td>
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
        <AppFooter />
    </div>
</template>

<script>
import axios from 'axios';
import "@/assets/css/admin/ProductAdminView.css";
import AppFooter from "@/components/admin/AdminAppFooter.vue";
import AppHeader from "@/components/admin/AdminAppHeader.vue";

export default {
    name: "ProductAdminView",
    components: {
        AppHeader,
        AppFooter,
    },
    data() {
        return {
            pList: [],
            pVo: {
                p_no: "",
                p_name: "",
                p_price: "",
                saveName: ""
            },
        };
    },
    methods: {
        getList() {
            console.log("리스트 가져오기");

            axios({
                method: "get", // put, post, delete
                url: "http://localhost:9002/api/admin/productlist",
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                //params: guestbookVo, //get방식 파라미터로 값이 전달
                //data: guestbookVo, //put, post, de    lete 방식 자동으로 JSON으로 변환 전달

                responseType: "json", //수신타입
            })
                .then((response) => {
                    //console.log(response.data.apiData); //수신데이타
                    this.pList = response.data.apiData;
                })
                .catch((error) => {
                    console.log(error);
                });

        },/*
        remove(p_no){
            console.log("클릭클릭");
            console.log(p_no);

            axios({
                method: 'post', // put, post, delete                   
                url: 'http://localhost:9002/api/admin/delete/'+p_no,
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                //params: guestbookVo, //get방식 파라미터로 값이 전달
                //data: { p_no }, //put, post, delete 방식 자동으로 JSON으로 변환 전달

                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response.data); //수신데이타

                const row=document.getElementsByTagName('tr');
                document.getElementById('trOne').style.display

                row.style.display='none';

                this.getLst();

            }).catch(error => {
                console.log(error);
            });
        }*/
    },
    created() {
        this.getList();
    },
};
</script>

<style></style>