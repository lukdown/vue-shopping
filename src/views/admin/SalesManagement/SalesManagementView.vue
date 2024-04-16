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

              <div id="content">
                <div class="dchart">
                  <canvas ref="MyChart"></canvas>
                </div>

                <div id="sales-table">
                  
                    

                  <table class="deleverymanagement hover">
                    <thead>
                      <tr>
                        <th class="title">상품명</th>
                        <th>출고량</th>
                        <th>일일 상품 매출 가격</th>
                        <th>한주 상품 매출 총가격</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colspan="4">ㄹㄴㅇㄷㄹ</td>
                      </tr>
                    </tbody>

                    <tfoot>
                      <tr>
                        <td>총합계</td>
                        <td>3213</td>
                        <td>412512</td>
                        <td>42131</td>
                      </tr>
                    </tfoot>
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
    <AdminAppFooter />
  </div>
</template>
  
<script>
import "@/assets/css/admin/SalesManagementView.css";
import { Chart, registerables } from "chart.js";
import AdminAppFooter from "@/components/admin/AdminAppFooter.vue";
import AdminAppHeader from "@/components/admin/AdminAppHeader.vue";
Chart.register(...registerables);

export default {
  name: "SalesManagementView",
  components: {
    AdminAppHeader,
    AdminAppFooter,
  },
  data: () => ({
    type: "bar",
    data: {
      labels: [
        "월요일",
        "화요일",
        "수요일",
        "목요일",
        "금요일",
        "토요일",
        "일요일",
      ],
      datasets: [
        {
          label: "# of Votes",
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
<style></style>