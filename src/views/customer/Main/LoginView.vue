<template>
    <div>
        <AppHeader/>
        <div id="Login-area">
            <h1 id="Login-h1">LOGIN</h1>
            <ul>
                <li>
                    <label for="">ID</label>
                    <input type="text">
                </li>
                <li>
                    <label for="">password</label>
                    <input type="password">
                </li>
            </ul>
            <button>로그인</button>
            <button>회원가입</button>
        </div>
        <AppFooter/>
    </div>
</template>


<script>
import "@/assets/css/customer/Login.css"
import AppFooter from "@/components/customer/AppFooter.vue";
import AppHeader from "@/components/customer/AppHeader.vue";

export default {
    name: "LoginView",
    components: {
        AppFooter, AppHeader
    },
    data() {
        return {};
    },
    methods: {},
};
</script>


<style></style>