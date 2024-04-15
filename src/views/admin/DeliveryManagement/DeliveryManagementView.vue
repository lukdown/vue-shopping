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

                <section class="main container">
                    <div class="inner">
                        <!-- 제목 영역 -->
                        <div class="main-title">
                            <h1>주문/배송 관리</h1>
                            <p>주문/배송 정보 확인</p>
                        </div>

                        <div class="dm-btn-box">
                            <div class="item">
                                <select name="search-type" id="search-type" class="input-search">
                                    <option value="0">전체</option>
                                    <option value="1">주문번호</option>
                                    <option value="2">상품이름</option>
                                </select>
                                <input type="text" name="keyword" id="keyword" class="input-search"
                                    autocomplete="on">
                                <a href="javascript:;" class="dm-btn" id="btn-search">검색</a>
                            </div>
                            <!-- 

                                <div class="item">
                                    <a href="#" class="dm-btn">글쓰기</a>
                                </div>
                            -->
                        </div>

                        <div class="info">
                            <!-- 
                            <p>게시글 <span id="totalCount">0</span> 건이 조회되었습니다.</p>
                             -->
                        </div>
                
                        <!-- 게시글 목록 -->
                        <table class="deleverymanagement hover">
                            <thead>
                                <tr>
                                    <td class="num">주문번호</td>
                                    <td class="num">회원아이디</td>
                                    <td class="title">상품이름</td>
                                    <td class="writer">받는분</td>
                                    <td class="date">주소</td>
                                    <td class="view">배송상황</td>
                                </tr>
                            </thead>
                            <tbody id="deleverymanagement-data">
                                <tr>
                                    <td colspan="5">조회된 데이터가 없습니다.</td>
                                </tr>
                            </tbody>
                        </table>

                        <!-- 페이지네이션 -->
                        <div class="pagination">
                            <a href="#" class="page-arrow" id="first">&laquo;</a>
                            <a href="#" class="page-arrow" id="prev">&lsaquo;</a>
                            <!-- 페이지 번호 목록 -->
                            <div class="page-list">

                            </div>
                            <a href="javascript:;" class="page-arrow" id="next">&rsaquo;</a>
                            <a href="javascript:;" class="page-arrow" id="last">&raquo;</a>
                        </div>


                        
                    </div>
                </section>
                



                

                
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
    import "@/assets/css/admin/DeliveryManagementView.css";
    import AdminAppFooter from "@/components/admin/AdminAppFooter.vue";
    import AdminAppHeader from "@/components/admin/AdminAppHeader.vue";

    export default {
    name: "PaymentManageView",
    components: {
        AdminAppHeader,
        AdminAppFooter,
    },
    data() {
        return {};
    },
    methods: {},
    created() {},
    };
</script>
<style>

</style>