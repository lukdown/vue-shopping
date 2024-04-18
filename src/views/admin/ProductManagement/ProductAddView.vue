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
                                    <form v-on:submit.prevent="uploadImgFile" action="" method="">

                                        <div id="addFormTitleGroup">

                                            <div id="insertImg">
                                                <div id="clothesImgPreviewAll">
                                                    
                                                    <img v-if="previewImage != '' " class="clothesImgPreview" v-bind:src="previewImage">
                                                </div>
                                                
                                                <div id="imageGroup">
                                                    <label id="productAddFormTitle">착장 사진:</label>
                                                    <input v-on:change="selectFile" id="file" type="file">
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

                                                <input type="radio" name="productType" value="outer"
                                                    v-model="productVo.p_category">
                                                <label>아우터</label>

                                                <input type="radio" name="productType" value="top"
                                                    v-model="productVo.p_category">
                                                <label>상의</label>

                                                <input type="radio" name="productType" value="bottom"
                                                    v-model="productVo.p_category">
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
            productVo: {
                p_name: "",
                p_price: "",
                p_category: "",
                p_explanation: ""
            },
            file: "",
            previewImage: ""
        };
    },
    methods: {
        selectFile(event) {
            console.log("파일등록");
            this.file = event.target.files[0];

            // Create a FileReader object
            let reader = new FileReader();

            // Define a function to handle the load event when reading is completed
            reader.onload = (e) => {
                // Set the previewImage data with the result of reading the file
                this.previewImage = e.target.result;
            };

            // Read the selected file
            if (this.file) {
                reader.readAsDataURL(this.file);
            }
        },
        /*
        handleImagePreview(event) {

            // 선택한 파일
            const file = event.target.files[0];

            // FileReader 객체를 사용하여 이미지를 읽음
            const reader = new FileReader();

            // 읽기가 완료된 후 실행되는 콜백 함수
            reader.onload = (e) => {
                // 읽은 이미지 데이터를 previewImage에 할당하여 이미지 미리보기 업데이트
                this.previewImage = e.target.result;
            };

            // 파일을 읽음
            if (file) {
                reader.readAsDataURL(file);
            }

            this.file = event.target.value;

            this.productVo.saveName = this.previewImage;
        },*/
        uploadImgFile() {
            console.log("등록");

            let formData = new FormData();
            formData.append("file", this.file);
            formData.append("p_name", this.productVo.p_name);
            formData.append("p_price", this.productVo.p_price);
            formData.append("p_category", this.productVo.p_category);
            formData.append("p_explanation", this.productVo.p_explanation);

            console.log(formData);

            axios({
                method: 'post', // put, post, delete                   
                url: 'http://localhost:9002/api/admin/add',
                headers: {
                    "Content-Type": "multipart/form-data",
                },//전송타입+토큰
                //params: guestbookVo, //get방식 파라미터로 값이 전달
                data: formData, //put, post, delete 방식 자동으로 JSON으로 변환 전달

                responseType: 'json' //수신타입
            }).then(response => {


                console.log(response.data.apiData);

                this.$router.push({ path: '/admin/productadmin' });

            }).catch(error => {
                console.log(error);
            });
        },
    },
    created() {

    },
};
</script>

<style></style>