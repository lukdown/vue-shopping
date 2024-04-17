<template>
    <AppHeader />
    <div>
        <div id="join-form">
            <h1>Sign Up</h1>
            <form v-on:submit.prevent="join" action="" id="join-table">
                <ul>
                    <div class="join-table-div">
                        <label for="id" class="join-label id">id</label>
                        <input type="text" class="join-input id" id="id" v-model="userVo.user_id">
                        <button id="check-btn" v-on:click="idCheck">중복체크</button>
                    </div>
                    <div class="duplicate-check-div">
                        <label for="" class="join-label">중복체크</label>
                        <p class="duplicate-P" v-if="isDuplicated">중복된 아이디입니다.</p>
                        <p class="duplicate-P" v-if="isNotDuplicated">사용 가능한 아이디입니다.</p>
                        <p class="duplicate-P" v-else>아이디를 입력해주세요</p>
                    </div>
                    <div class="join-table-div">
                        <label for="name" class="join-label">이름</label>
                        <input type="text" class="join-input" id="name" v-model="userVo.user_name">
                    </div>
                    <div class="join-table-div">
                        <label for="pw" class="join-label">비밀번호</label>
                        <input type="password" class="join-input" id="pw" v-model="userVo.user_pw">
                    </div>
                    <div class="join-table-div">
                        <label for="phoneNum" class="join-label">휴대폰번호</label>
                        <input type="text" class="join-input" id="phoneNum" v-model="userVo.user_hp">
                    </div>
                    <div class="join-table-div">
                        <label for="address" class="join-label">주소</label>
                        <input type="text" class="join-input6" id="address" v-model="userVo.user_address">
                    </div>
                    <div class="join-table-div">
                        <span class="join-label">성별</span>
                        <label for="gender-male">남자</label>
                        <input type="radio" id="gender-male" name="gender" value="male" v-model="userVo.user_gender">
                        <label for="gender-female">여자</label>
                        <input type="radio" id="gender-female" name="gender" value="female" v-model="userVo.user_gender">
                    </div>
                    <div class="join-table-div">
                        <label for="age" class="join-label">생년월일</label>
                        <input type="text" class="join-input" id="age" v-model="userVo.user_age">
                    </div>
                </ul>
                <button id="join-btn" type="submit">Sign up</button>
            </form>
        </div>
        <AppFooter />
    </div>
</template>


<script>
import "@/assets/css/customer/Join.css"
import AppFooter from "@/components/customer/AppFooter.vue";
import AppHeader from "@/components/customer/AppHeader.vue";
import axios from "axios";


export default {
    name: "JoinView",
    components: { AppFooter, AppHeader },
    data() {

        return {
            userVo: {
                user_id: "",
                user_pw: "",
                user_name: "",
                user_age: "",
                user_hp: "",
                user_gender: "",
                user_address: ""
            },
            check: 0,
            isDuplicated : false,
            isNotDuplicated : false
        };
    },
    methods: {
        idCheck() {
            if (this.userVo.user_id == "") {
                alert("아이디를 입력해주세요");

            } else {
                axios({
                    method: 'put', // put, post, delete                   
                    url: 'http://localhost:9002/api/customer/idcheck',
                    headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                    //params: guestbookVo, //get방식 파라미터로 값이 전달
                    data: this.userVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달

                    responseType: 'json' //수신타입
                }).then(response => {
                    console.log(response.data); //수신데이타

                    if(response.data ==0){
                        this.isNotDuplicated = true;
                        this.isDuplicated = false;
                        this.check = 1;
                    }else{
                        this.isDuplicated = true;
                        this.isNotDuplicated = false;
                    }

                }).catch(error => {
                    console.log(error);
                });

            }

        },
        join() {
            if (this.check != 1) {
                alert("아이디 중복확인을 해주세요")
            } else {
                axios({
                    method: 'put', // put, post, delete                   
                    url: 'http://localhost:9002/api/customer/join',
                    headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                    //params: guestbookVo, //get방식 파라미터로 값이 전달
                    data: this.userVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달

                    responseType: 'json' //수신타입
                }).then(response => {
                    console.log(response.data); //수신데이타

                    if(response.data == 1){
                        alert("회원가입 성공");
                        this.$router.push("/");
                    }else{
                        alert("회원가입 실패");
                    }

                }).catch(error => {
                    console.log(error);
                });

            }
        }

    },
};
</script>


<style></style>