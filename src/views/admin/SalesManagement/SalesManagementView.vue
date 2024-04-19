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
              <div id="sales-title">
                <h1>매출정보</h1>
              </div>
              <div id="sales-title">
                <p>매출</p>
              </div>
              <div>
                <input v-model="salesVo.keyword" type="date" name="keyword" id="keyword" class="input-search" autocomplete="on" v-on:keyup.enter="search" placeholder="검색어를 입력하세요">
                <button @click="getOneChartList(salesVo.keyword)">버튼</button>
              </div>
              <div id="content">
                
                <div class="dchart">
                  <canvas ref="MyChart" style="width: 800px; height: 500px;"></canvas>
                </div>

                <div id="sales-table">


                  <!--결제관리 table-->
                <table id="m-payment-table">
                    <tr class="m-payment-table-th">
                        <th>상품명</th>
                        <th>출고량</th>
                        <th>매출금액</th>
                        <th>날짜</th>
                    </tr>

                    <!-- 반복문 -->
                    <tr class="m-payment-table-content" v-bind:key="i" v-for="(salesVo, i) in adminproductList">
                        <td id="m-payment-date">{{ salesVo.p_name }}{{ salesVo.p_no }}</td>
                        <td id="m-payment-name">{{ salesVo.e_amount }}</td>
                        <td id="m-payment-address">{{salesVo.p_price * salesVo.e_amount}}</td>
                        <td id="m-payment-date">{{salesVo.o_date}}</td>
                    </tr>
                      <!-- /반복문 -->


                    <tr class="m-payment-table-tfooter">
                      <td>총합계</td>
                      <td>321</td>
                      <td>22</td>
                      <td>11</td>
                    </tr>
                    
                </table>


                <div class="pagination">
                    <a href="#" class="page-arrow" id="prev" v-if="prev == true" v-on:click="prevPage">&lt;</a>
                    <!-- 페이지 번호 목록 -->
                    <div class="page-list" v-bind:key="index" v-for="(i, index) in endNo-startNo+1">
                        <a v-on:click.prevent="list(startNo+i)" href="">{{startNo+i-1}}</a>
                    </div>
                    <a href="javascript:;" class="page-arrow" id="next" v-if="next == true" v-on:click="nextPage">	&gt;</a>
                </div>




                

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
  </div>
</template>
  
<script>
import axios from 'axios';
import "@/assets/css/admin/SalesManagementView.css";
import { Chart, registerables } from "chart.js";
import AdminAppHeader from "@/components/admin/AdminAppHeader.vue";
Chart.register(...registerables);

export default {
  name: "SalesManagementView",
  components: {
    AdminAppHeader,
  },
  data () { 
    return{
      cList: [],
      labels: [],
      sp_name: "",
      adminproductList: [],
      salesVo: {
          crtPage: 1,
          keyword: "",
          
      },
      startNo: 0,
      endNo: 0,
      next: "",
      prev: "",
      
      type: "bar",
      data: {
        labels: [
        ],
        datasets: [
          {
            label: "# 상품 매출 금액",
            data: [
            ],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
              responsive: false,
              plugins: {
                
                title: {
                  display: true,
                  text: "총 판매비율",
                },
              },
            },
    };
  },
  mounted() {
    
  },
  methods: {
    createChart() {
      console.log("----------------");
      //console.log(this.data.labels);
      new Chart(this.$refs.MyChart, {
        type: "bar",
        data: this.data,
        options: this.options,
      });
    },
    getList(list){
            console.log("데이터 가져오기");
            // http://localhost:9000/api/guests
            if (this.salesVo.crtPage == 1) {
                this.salesVo.crtPage = 1;
            } else if (this.salesVo.crtPage < 1) {
                this.salesVo.crtPage = 1;
            }
            else {
                this.salesVo.crtPage = list - 1;
            }

            //console.log(this.salesVo.crtPage);
            axios({
                method: 'post', // put, post, delete 
                url: `${this.$store.state.apiBaseUrl}/api/admin/list`,
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                // params: guestbookVo, //get방식 파라미터로 값이 전달
                data: this.salesVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달

                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response.data.apiData); //수신데이타
                this.adminproductList = response.data.apiData.apList;
                this.endNo = response.data.apiData.endPageBtnNo;
                this.startNo = response.data.apiData.startPageBtnNo;
                this.next = response.data.apiData.next;
                this.prev = response.data.apiData.prev;

                //console.log(this.adminproductList);
              
                
                // for (let i = 0; i < this.adminproductList.length; i++) {
                //   //console.log(this.adminproductList[i].p_name);
                //   this.data.labels.push(this.adminproductList[i].p_name)

                //   //console.log(this.adminproductList[i].p_price * this.adminproductList[i].e_amount);

                //   this.data.datasets[0].data.push(this.adminproductList[i].p_price * this.adminproductList[i].e_amount);

                // }

                // this.createChart();
                //console.log(this.data.labels);


            }).catch(error => {
                console.log(error);

            });
        },
        search() {
            this.salesVo.crtPage = 1;
            this.getList();
            //this.getOneChartList(this.salesVo.keyword);
            //this.createChart();
        },
        list(page) {
            this.salesVo.crtPage = page;
            this.getList(this.salesVo.crtPage);
        },
        prevPage() {
            if (this.prev == true) {
                console.log(this.salesVo.crtPage);
                this.salesVo.crtPage = this.salesVo.crtPage - 6;
                this.getList(this.salesVo.crtPage);
            }
        },
        nextPage() {
            if (this.next == true) {
                this.salesVo.crtPage = this.salesVo.crtPage + 6;
                this.getList(this.salesVo.crtPage);
            }
        },
        getOneChartList(keyword) {
          axios({
                method: 'get',
                url: `${this.$store.state.apiBaseUrl}/api/admin/list`,
                headers: { "Content-Type": "application/json; charset=utf-8" },
                params: {
                  keyword
                },
                responseType: 'json'
            }).then(response => {
                this.cList = response.data.apiData;
                //console.log(this.cList);

                for (let i = 0; i < this.adminproductList.length; i++) {
                  //console.log(this.adminproductList[i].p_name);
                  this.data.labels.push(this.adminproductList[i].p_name)

                  //console.log(this.adminproductList[i].p_price * this.adminproductList[i].e_amount);

                  this.data.datasets[0].data.push(this.adminproductList[i].p_price * this.adminproductList[i].e_amount);

                }
                this.createChart();

                // this.data.labels.push();
                // this.data.datasets[0].data.push();
                this.data.labels.slice(0);
                this.data.datasets[0].data.slice(0);
                //this.getList();


            }).catch(error => {
                console.log(error);
            });
        }
  },
  created(){
    this.getList();
    //this.getOneChartList();
  }
};
</script>
<style>

</style>