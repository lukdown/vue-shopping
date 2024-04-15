<template>
    <AppHeader/>
    <div>
        <h1>회원가입</h1>
        <form action="">
            <ul>
                <li>
                    <label for="">id</label>
                    <input type="text">
                    <button>중복체크</button>
                </li>
                <li>
                    <label for="">이름</label>
                    <input type="text">
                </li>
                <li>
                    <label for="">비밀번호</label>
                    <input type="password">
                </li>
                <li>
                    <label for="">휴대폰번호</label>
                    <input type="text">
                </li>
                <li>
                    <label for="">성별</label>
                    <input type="radio">남자
                    <input type="radio">여자
                </li>
                <li>
                    <label for="">나이</label>
                    <input type="text">
                </li>
            </ul>
            <button>회원가입하기</button>
        </form>
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