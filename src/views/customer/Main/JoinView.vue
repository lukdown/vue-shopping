<template>
    <AppHeader/>
    <div>
        <div  id="join-form">
            <h1>Sign Up</h1>
            <form action="" id="join-table">
                <ul>
                    <li class="join-table-li">
                        <label for="" class="join-label">id</label>
                        <input type="text" class="join-input">
                        <button id="check-btn">중복체크</button>
                    </li>
                    <li class="join-table-li">
                        <label for="" class="join-label">이름</label>
                        <input type="text" class="join-input">
                    </li>
                    <li class="join-table-li">
                        <label for="" class="join-label">비밀번호</label>
                        <input type="password" class="join-input">
                    </li>
                    <li class="join-table-li">
                        <label for="" class="join-label">휴대폰번호</label>
                        <input type="text" class="join-input">
                    </li>
                    <li class="join-table-li">
                        <label for="" class="join-label">주소</label>
                        <input type="text" class="join-input">
                    </li>
                    <li class="join-table-li">
                        <label for="" class="join-label">성별</label>
                        <input type="radio">남자
                        <input type="radio">여자
                    </li>
                    <li class="join-table-li">
                        <label for="" class="join-label">나이</label>
                        <input type="text" class="join-input">
                    </li>
                </ul>
                <button id="join-btn">Sign up</button>
            </form>
        </div>
        <AppFooter/>
    </div>
</template>


<script>
import "@/assets/css/customer/Join.css"
import AppFooter from "@/components/customer/AppFooter.vue";
import AppHeader from "@/components/customer/AppHeader.vue";

export default {
    name: "JoinView",
    components: {AppFooter, AppHeader},
    data() {
        return {};
    },
    methods: {},
};
</script>


<style></style>