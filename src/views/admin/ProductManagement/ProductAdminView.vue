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

                                <router-link id="addBtn" to="/admin/productadd">등록</router-link>
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
                                                <img id="clothesImage"
                                                    v-bind:src="`${this.$store.state.apiBaseUrl}/upload/${pVo.saveName}`">
                                            </td>
                                            <td>{{ pVo.p_name }}</td>
                                            <td>{{ pVo.p_price }}원  {{ pVo.ep_no }}</td>
                                            <td>

                                                <button v-if="pVo.ep_no != 0" v-on:click="remove(pVo.p_no)" type="button" id="admin-product-remove-btn">삭제</button>

                                                

                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <input type="text" id="productadminSearch" placeholder="검색" v-model="pVo.keyword"
                                    v-on:keyup.enter="search">
                                <ol id="productadminList">

                                    <li class="" v-if="prev != false" v-on:click="prevPage">이전</li>
                                    <li class="" v-else-if="prev == true" v-on:click="prevPage">이전</li>
                                    <li id="productadminlistpage" v-bind:key="index" v-for="(i, index) in endNo - startNo + 1">

                                        <a v-on:click.prevent="list(startNo + i)">{{ startNo + i - 1 }}</a>

                                    </li>
                                    <li v-if="next == true" v-on:click="nextPage">다음</li>

                                </ol>
                                

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
        getList(list) {
            console.log("리스트 가져오기");
            if (this.pVo.crtPage == 1) {
                this.pVo.crtPage = 1;
            } else if (this.pVo.crtPage < 1) {
                this.pVo.crtPage = 1;
            }
            else {
                this.pVo.crtPage = list - 1;
            }

            console.log(this.pVo.crtPage);
            axios({
                method: "post", // put, post, delete
                url: `${this.$store.state.apiBaseUrl}/api/admin/productlist`,
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                //params: guestbookVo, //get방식 파라미터로 값이 전달
                data: this.pVo, //put, post, de    lete 방식 자동으로 JSON으로 변환 전달

                responseType: "json", //수신타입
            })
                .then((response) => {
                    console.log(response.data.apiData); //수신데이타
                    this.pList = response.data.apiData.pList;
                    this.endNo = response.data.apiData.endPageBtnNo;
                    this.startNo = response.data.apiData.startPageBtnNo;
                    this.next = response.data.apiData.next;
                    this.prev = response.data.apiData.prev
                })
                .catch((error) => {
                    console.log(error);
                });

        },
        search() {
            this.pVo.crtPage = 1;
            this.getList();
        },
        list(page) {
            this.pVo.crtPage = page;
            this.getList(this.pVo.crtPage);
        },
        prevPage() {
            if (this.prev == false) {
                console.log(this.pVo.crtPage);
                this.getList(this.pVo.crtPage);
            }
        },
        nextPage() {
            if (this.next == true) {
                this.pVo.crtPage = this.pVo.crtPage + 6;
                this.getList(this.pVo.crtPage);
            }
        },
        remove(p_no){
            console.log("클릭클릭");
            console.log(p_no);

            axios({
                method: 'delete', // put, post, delete                   
                url: `${this.$store.state.apiBaseUrl}/api/admin/delete/`+p_no,
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                //params: guestbookVo, //get방식 파라미터로 값이 전달
                //data: { p_no }, //put, post, delete 방식 자동으로 JSON으로 변환 전달

                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response.data.apiData); //수신데이타

                this.getList();

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

<style></style>