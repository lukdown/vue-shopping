<template>
  <div>
    <AppHeader />
    <div id="wrap">
      <div id="container" class="clearfix">
        <!-- aside 없음 -->
        <div id="full-content">
          <!-- content-head 없음 -->

          <div id="index">
            <div id="greetings">


              <canvas ref="MyChart"></canvas>

              <table border="1">
                <colgroup>
                    <col style="width: 100px;">
                    <col style="width: 120px;">
                    <col style="width: 120px;">
                    <col style="width: 100px;">
                </colgroup>

                <thead>
                    <tr>
                        <th>이름(name)</th>
                        <th>핸드폰(hp)</th>
                        <th>회사(company)</th>
                        <th>관리</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>dsadsa</td>
                        <td>dsadsa</td>
                        <td>211</td>
                        <td>dsadsa</td>
                    </tr>
                </tbody>

            </table>


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
    <AppFooter />
  </div>
</template>
  
<script>
import "@/assets/css/admin/SalesManagementView.css";
import { Chart, registerables } from 'chart.js'
import AppFooter from "@/components/customer/AppFooter.vue";
import AppHeader from "@/components/customer/AppHeader.vue";
Chart.register(...registerables)

export default {
  name: "MainView",
  components: {
    AppHeader,
    AppFooter,
  },
  data:() => ({
    type: 'bar',
    data: {
      labels: [ '월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일' ],
      datasets: [{
        label: '# of Votes',
        data: [ 12, 19, 3, 5, 2, 3, 31 ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  }),
  mounted(){
    this.createChart()
  },
  methods:{
    createChart(){
      new Chart(this.$refs.MyChart, {
        type:'bar',
        data:this.data,
        options:this.options
      })

    }
  }

}
</script>
<style></style>