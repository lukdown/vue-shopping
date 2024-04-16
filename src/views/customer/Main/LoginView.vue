<template>
    <div>
        <AppHeader/>
        <div id="Login-area">
            <h1 id="Login-h1">LOGIN</h1>
            <ul id="login-form">
                <li class="login-form-li">
                    <label for="" class="Login-label">ID</label>
                    <input type="text" class="login-input">
                </li>
                <li class="login-form-li">
                    <label for="" class="Login-label">PW</label>
                    <input type="password" class="login-input">
                </li>
            </ul>
            <div id="login-btns">
                <button class="login-btn">LOGIN</button>
                <router-link to="/join">
                    <button class="login-btn">Sign Up</button>
                </router-link>
            </div>
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