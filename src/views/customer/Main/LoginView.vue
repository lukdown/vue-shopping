<template>
    <div>
        <AppHeader/>
        <div id="Login-area">
            <h1 id="Login-h1">LOGIN</h1>

            <form v-on:submit.prevent="login()" method="">

                <!-- 아이디 -->
                <div class="login-form">
                    <label class="Login-label" for="login-id">ID</label>
                    <input class="login-input" id="login-id" type="text" name="user_id" v-model="userVo.user_id">
                </div>

                <!-- 비밀번호 -->
                <div class="login-form">
                    <label class="Login-label" id="login-pw">PW</label>
                    <input class="login-input" id="login-pw" type="password" name="user_pw" v-model="userVo.user_pw">
                </div>


                <!-- 버튼영역 -->
                <div id="login-btns">
                    <button type="submit" class="login-btn">LOGIN</button>
                    <router-link to="/customer/join"><button class="login-btn" type="button">Sign Up</button></router-link>
                </div>
                
            </form>
        </div>
        <AppFooter/>
    </div>
</template>


<script>
import "@/assets/css/customer/Login.css"
import AppFooter from "@/components/customer/AppFooter.vue";
import AppHeader from "@/components/customer/AppHeader.vue";
import axios from "axios";

export default {
    name: "LoginView",
    components: {
        AppFooter, AppHeader
    },
    data() {
        return {
            userVo:{
                user_id:"",
                user_pw:""
            }
        };
    },
    methods: {
        login(){
            console.log("로그인");
            console.log(this.userVo);
            axios({
                method: 'post', // put, post, delete 
                url: `${this.$store.state.apiBaseUrl}/api/customer/login`,
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                // params: this.userVo, //get방식 파라미터로 값이 전달  // ModelAttribute로 받음
                data: this.userVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달  // RequestBody로 받음

                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response.data); //수신데이타
                if(response.data.result == "success"){
                    //로그인 사용자 정보
                    let authUser = response.data.apiData;

                    //token은 응답문서의 헤더에 있음
                    console.log(response.headers.authorization.split(" ")[1]);
                    const token = response.headers.authorization.split(" ")[1];

                    //vuex 저장
                    this.$store.commit("setAuthUser", authUser);
                    this.$store.commit("setToken", token);

                    console.log(authUser);
                    console.log(token);

                    this.$router.push("/");
                }else {
                    console.log(response.data.message);
                    alert("재시도");
                }

            }).catch(error => {
                console.log(error);
            });

        }
    },
    logout(){
        console.log("로그아웃");
        this.$store.commit("setAuthUser", null);
        this.$store.commit("setToken", null);
    }
};
</script>


<style></style>