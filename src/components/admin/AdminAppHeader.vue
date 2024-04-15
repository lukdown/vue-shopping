<template>
    <div>


            <div class="navbar header" aria-label="Light offcanvas navbar">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbarLight" aria-controls="offcanvasNavbarLight">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <router-link to="/">
                        <img id="logo" src="@/assets/img/logo.png" alt="youngground" />
                    </router-link>

                    <div id="ls-gather-btn">
                        <router-link to="#">Login</router-link>
                        <router-link to="#">Sign Up</router-link>
                    </div>
                    

                    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbarLight" aria-labelledby="offcanvasNavbarLightLabel">

                        <div class="offcanvas-header border-bottom">
                            <h5 class="offcanvas-title" id="offcanvasNavbarLightLabel">Offcanvas</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>

                        <ul class="list-unstyled ps-0">
                        <li class="mb-1">
                            <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                            Home
                            </button>
                            <div class="collapse show" id="home-collapse">
                            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><router-link to="#" class="link-dark d-inline-flex text-decoration-none rounded">Overview</router-link></li>
                                <li><router-link to="#" class="link-dark d-inline-flex text-decoration-none rounded">Updates</router-link></li>
                                <li><router-link to="#" class="link-dark d-inline-flex text-decoration-none rounded">Reports</router-link></li>
                            </ul>
                            </div>
                        </li>
                        <li class="mb-1">
                            <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                            Dashboard
                            </button>
                            <div class="collapse" id="dashboard-collapse">
                            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><router-link to="#" class="link-dark d-inline-flex text-decoration-none rounded">Overview</router-link></li>
                                <li><router-link to="#" class="link-dark d-inline-flex text-decoration-none rounded">Weekly</router-link></li>
                                <li><router-link to="#" class="link-dark d-inline-flex text-decoration-none rounded">Monthly</router-link></li>
                                <li><router-link to="#" class="link-dark d-inline-flex text-decoration-none rounded">Annually</router-link></li>
                            </ul>
                            </div>
                        </li>
                        <li class="mb-1">
                            <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
                            Orders
                            </button>
                            <div class="collapse" id="orders-collapse">
                            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><router-link to="#" class="link-dark d-inline-flex text-decoration-none rounded">New</router-link></li>
                                <li><router-link to="#" class="link-dark d-inline-flex text-decoration-none rounded">Processed</router-link></li>
                                <li><router-link to="#" class="link-dark d-inline-flex text-decoration-none rounded">Shipped</router-link></li>
                                <li><router-link to="#" class="link-dark d-inline-flex text-decoration-none rounded">Returned</router-link></li>
                            </ul>
                            </div>
                        </li>
                        <li class="border-top my-3"></li>
                        <li class="mb-1">
                            <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                            Account
                            </button>
                            <div class="collapse" id="account-collapse">
                            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><router-link to="#" class="link-dark d-inline-flex text-decoration-none rounded">New...</router-link></li>
                                <li><router-link to="#" class="link-dark d-inline-flex text-decoration-none rounded">Profile</router-link></li>
                                <li><router-link to="#" class="link-dark d-inline-flex text-decoration-none rounded">Settings</router-link></li>
                                <li><router-link to="#" class="link-dark d-inline-flex text-decoration-none rounded">Sign out</router-link></li>
                            </ul>
                            </div>
                        </li>
                        </ul>

                    </div>
                </div>
            </div>









































        
    </div> 
</template>
<script>
import '@/assets/css/admin/AdminAppHeader.css'

export default {
    name: "AppHeader",
    components: {},
    data() {
        return {};
    },
    methods: {
    },
    created() { }
};
</script>