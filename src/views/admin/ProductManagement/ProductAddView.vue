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



                            <!-- <h1>상품 등록창</h1> -->

                            <div id="addContentGroup">
                                
                                <h1>상품 관리</h1>

                                <p>상품 등록</p>

                                <div id="productAddForm">
                                    <form v-on:submit.prevent="addProduct" action="" method="post">

                                        <div id="addFormTitleGroup">

                                                <div id="insertImg">
                                                    <img id="clothesImgPreview" src="#">
                                                    <div id="imageGroup">
                                                        <label id="productAddFormTitle">착장 사진</label>
                                                        <input id="clothesImg" type="file">
                                                        <!-- v-model="productVo.saveName" -->
                                                    </div>
                                                </div>

                                            <div id="productAddFormGroup">
                                                <label id="productAddFormTitle">상품명</label>
                                                <input type="text" v-model="productVo.p_name">
                                            </div>

                                            <div id="productAddFormGroup">
                                                <label id="productAddFormTitle">가격</label>
                                                <input type="text" v-model="productVo.p_price"> 원
                                            </div>

                                            <div id="productAddFormGroup">
                                                <span id="productAddFormTitle">종류</span>

                                                <input type="radio" name="productType" value="outer" v-model="productVo.p_category">
                                                <label>아우터</label>

                                                <input type="radio" name="productType" value="top" v-model="productVo.p_category">
                                                <label>상의</label>

                                                <input type="radio" name="productType" value="bottom" v-model="productVo.p_category">
                                                <label>하의</label>
                                            </div>

                                            <div id="productAddFormGroup">
                                                <label id="productAddFormTitle">설명</label>
                                                <textarea v-model="productVo.p_explanation"></textarea>
                                            </div>

                                        </div>

                                        <div id="btnAdd">
                                            <button type="submit">등록하기</button>
                                        </div>

                                    </form>
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
import "@/assets/css/admin/ProductAddView.css";
import AppFooter from "@/components/admin/AdminAppFooter.vue";
import AppHeader from "@/components/admin/AdminAppHeader.vue";

export default {
    name: "ProductAddView",
    components: {
        AppHeader,
        AppFooter,
    },
    data() {
        return {
            pList:[],
            productVo:{
                p_name:"",
                p_price:"",
                p_category:"",
                p_explanation:""
            }
        };
    },
    methods: {/*
        imgPreview(){
            let file=document.getElementById("clothesImg");
            let preview=document.getElementById("clothesImgPreview");

            file.addEventListener("change", ()=>{
                let reader=new FileReader();
                reader.onload=()=>{
                    preview.src=reader.result;
                }
                reader.readAsDataURL(file.files[0]);
            });
        },*/
        addProduct(){
            console.log("등록");
            //console.log(this.productVo);

            axios({
                method: 'post',  //put,post,delete
                url: 'http://localhost:9002/api/admin/add',
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                //params: guestbookVo, //get방식 파라미터로 값이 전달
                data: this.productVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달

                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response.data); //수신데이타
                //this.pList.unshift(response.data);

            }).catch(error => {
                console.log(error);
            });
        }
    },
    created(){},
};
</script>

<style></style>