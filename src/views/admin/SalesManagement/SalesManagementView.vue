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
                <input type="date">
              </div>
              <div id="content">
                
                <div class="dchart">
                  <canvas ref="MyChart"></canvas>
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
                    <tr class="m-payment-table-content">
                        <td id="m-payment-date">gregseg</td>
                        <td id="m-payment-name">gsergsergsergesr</td>
                        <td id="m-payment-address">gresg</td>
                        <td>grseg</td>
                    </tr>
                    <tr class="m-payment-table-tfooter">
                      <td>총합계</td>
                      <td>321</td>
                      <td>22</td>
                      <td>11</td>
                    </tr>
                    
                </table>







                

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
import "@/assets/css/admin/SalesManagementView.css";
import { Chart, registerables } from "chart.js";
import AdminAppHeader from "@/components/admin/AdminAppHeader.vue";
Chart.register(...registerables);

export default {
  name: "SalesManagementView",
  components: {
    AdminAppHeader,
  },
  data: () => ({
    isModalViewed: false,
    type: "bar",
    data: {
      labels: [
        "상품명",
        "상품명",
        "상품명",
        "상품명",
        "상품명",
        "상품명",
        "상품명",
      ],
      datasets: [
        {
          label: "# 상품 매출 금액",
          data: [12, 19, 3, 5, 2, 3, 31],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  }),
  mounted() {
    this.createChart();
  },
  methods: {
    createChart() {
      new Chart(this.$refs.MyChart, {
        type: "bar",
        data: this.data,
        options: this.options,
      });
    },
  },
};
</script>
<style>

</style>