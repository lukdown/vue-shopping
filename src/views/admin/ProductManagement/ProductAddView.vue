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
                                    <form action="" method="">

                                        <div id="addFormTitleGroup">

                                            <div id="">
                                                <div id="insertImg">
                                                    <img id="clothesImgPreview" src="#">
                                                    <div id="imageGroup">
                                                        <label id="productAddFormTitle">착장 사진</label>
                                                        <input type="file">
                                                    </div>
                                                </div>
                                            </div>

                                            <div id="productAddFormGroup">
                                                <label id="productAddFormTitle">상품명</label>
                                                <input type="text">
                                            </div>

                                            <div id="productAddFormGroup">
                                                <label id="productAddFormTitle">가격</label>
                                                <input type="text"> 원
                                            </div>

                                            <div id="productAddFormGroup">
                                                <span id="productAddFormTitle">종류</span>

                                                <input type="radio" name="productType" value="outer">
                                                <label>아우터</label>

                                                <input type="radio" name="productType" value="top">
                                                <label>상의</label>

                                                <input type="radio" name="productType" value="bottom">
                                                <label>하의</label>
                                            </div>

                                            <div id="productAddFormGroup">
                                                <label id="productAddFormTitle">설명</label>
                                                <textarea></textarea>
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
import "@/assets/css/admin/ProductAddView.css";
import AppFooter from "@/components/admin/AdminAppFooter.vue";
import AppHeader from "@/components/admin/AdminAppFooter.vue";

export default {
    name: "ProductAddView",
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