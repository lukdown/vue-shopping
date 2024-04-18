<template>
  <AppHeader />
  <div class="clearfix" id="full">
    <div id="contentNav">
      <div class="side">
        <ul>
          <li @click="toggleCategories">
            <strong>상품 관리</strong>
            <span v-if="showCategories"> △ </span>
            <span v-else> ▽</span>
            <!-- 화살표 아이콘 -->
          </li>
          <ul v-show="showCategories">
            <!-- 카테고리 리스트 -->
            <li class="cate-li">
              <ul>
                <li @click="toggleCategories00">
                  <strong>침대</strong>
                  <span v-if="showCategories00"> △ </span>
                  <span v-else> ▽</span>
                  <!-- 화살표 아이콘 -->
                </li>
                <ul v-show="showCategories00">
                  <!-- 카테고리 리스트 -->
                  <li class="cate-li"><a href="">침대</a></li>
                  <li class="cate-li"><a href="">매트리스</a></li>
                  <li class="cate-li"><a href="">침대 프레임</a></li>
                </ul>
              </ul>
            </li>
            <li class="cate-li">
              <ul>
                <li @click="toggleCategories02">
                  <strong>쇼파</strong>
                  <span v-if="showCategories02"> △ </span>
                  <span v-else> ▽</span>
                  <!-- 화살표 아이콘 -->
                </li>
                <ul v-show="showCategories02">
                  <!-- 카테고리 리스트 -->
                  <li class="cate-li"><a href="">일반 쇼파</a></li>
                  <li class="cate-li"><a href="">좌식 쇼파</a></li>
                  <li class="cate-li"><a href="">1인용 쇼파</a></li>
                </ul>
              </ul>
            </li>
            <li class="cate-li">
              <ul>
                <li @click="toggleCategories03">
                  <strong>테이블</strong>
                  <span v-if="showCategories03"> △ </span>
                  <span v-else> ▽</span>
                  <!-- 화살표 아이콘 -->
                </li>
                <ul v-show="showCategories03">
                  <!-- 카테고리 리스트 -->
                  <li class="cate-li"><a href="">식탁</a></li>
                  <li class="cate-li"><a href="">사이드 테이블</a></li>
                </ul>
              </ul>
            </li>
            <li class="cate-li">
              <ul>
                <li @click="toggleCategories04">
                  <strong>옷장</strong>
                  <span v-if="showCategories04"> △ </span>
                  <span v-else> ▽</span>
                  <!-- 화살표 아이콘 -->
                </li>
                <ul v-show="showCategories04">
                  <!-- 카테고리 리스트 -->
                  <li class="cate-li"><a href="">옷장</a></li>
                  <li class="cate-li"><a href="">행거</a></li>
                  <li class="cate-li"><a href="">붙박이장</a></li>
                </ul>
              </ul>
            </li>
          </ul>
          <li @click="toggleCategories05">
            <strong>주문 관리</strong>
            <span v-if="showCategories05"> △ </span>
            <span v-else> ▽</span>
          </li>
          <ul v-show="showCategories05">
            <li class="cate-li"><a href="">주문 통계</a></li>
            <li class="cate-li"><a href="">주문 현황</a></li>
          </ul>
        </ul>
      </div>
    </div>

    <div id="contentMain">
      <div id="graph">
        <div class="clearfix" id="line">
          <h3 class="shvdl" id="eee2">통계</h3>
          <div class="ran">
            <p class="f-size">
              누적 판매량
              <span>{{ Number(this.ccount).toLocaleString("ko-KR") }}</span
              >, 누적 판매금액
              <span>{{ Number(this.cprice).toLocaleString("ko-KR") }}</span>
            </p>
            <p class="f-size">
              금일 판매량
              <span>{{ Number(this.tcount).toLocaleString("ko-KR") }}</span
              >, 금일 판매금액
              <span>{{ Number(this.tprice).toLocaleString("ko-KR") }}</span>
            </p>
          </div>
          <div id="ppgg">
            <canvas id="chart" ref="MyChart" />
          </div>
          <div id="pp">
            <canvas id="chart2" ref="MyChart2" />
          </div>
        </div>
      </div>
      <div class="outline">
        <table class="vy">
          <thead>
            <tr>
              <th class="whwjd" rowspan="2"></th>
              <th class="akwlakr" colspan="2">침대</th>
              <th class="akwlakr" colspan="2">쇼파</th>
              <th class="akwlakr" colspan="2">테이블</th>
              <th class="akwlakr" colspan="2">옷장</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>판매량|판매금액</td>
              <td>판매량</td>
              <td>판매금액</td>
              <td>판매량</td>
              <td>판매금액</td>
              <td>판매량</td>
              <td>판매금액</td>
              <td>판매량</td>
              <td>판매금액</td>
            </tr>
            <tr>
              <td>당월</td>
              <td>{{ Number(this.bedMonthC).toLocaleString("ko-KR") }}</td>
              <td class="bol">
                {{ Number(this.bedMonthM).toLocaleString("ko-KR") }}
              </td>
              <td>{{ Number(this.shopaMonthC).toLocaleString("ko-KR") }}</td>
              <td class="bol">
                {{ Number(this.shopaMonthM).toLocaleString("ko-KR") }}
              </td>
              <td>{{ Number(this.tableMonthC).toLocaleString("ko-KR") }}</td>
              <td class="bol">
                {{ Number(this.tableMonthM).toLocaleString("ko-KR") }}
              </td>
              <td>{{ Number(this.hangerMonthC).toLocaleString("ko-KR") }}</td>
              <td class="bol">
                {{ Number(this.hangerMonthM).toLocaleString("ko-KR") }}
              </td>
            </tr>
            <tr>
              <td>전월</td>
              <td>{{ Number(this.bedMonthC2).toLocaleString("ko-KR") }}</td>
              <td class="bol">
                {{ Number(this.bedMonthM2).toLocaleString("ko-KR") }}
              </td>
              <td>{{ Number(this.shopaMonthC2).toLocaleString("ko-KR") }}</td>
              <td class="bol">
                {{ Number(this.shopaMonthM2).toLocaleString("ko-KR") }}
              </td>
              <td>{{ Number(this.tableMonthC2).toLocaleString("ko-KR") }}</td>
              <td class="bol">
                {{ Number(this.tableMonthM2).toLocaleString("ko-KR") }}
              </td>
              <td>{{ Number(this.hangerMonthC2).toLocaleString("ko-KR") }}</td>
              <td class="bol">
                {{ Number(this.hangerMonthM2).toLocaleString("ko-KR") }}
              </td>
            </tr>
            <tr>
              <td>전전월</td>
              <td>{{ Number(this.bedMonthC3).toLocaleString("ko-KR") }}</td>
              <td class="bol">
                {{ Number(this.bedMonthM3).toLocaleString("ko-KR") }}
              </td>
              <td>{{ Number(this.shopaMonthC3).toLocaleString("ko-KR") }}</td>
              <td class="bol">
                {{ Number(this.shopaMonthM3).toLocaleString("ko-KR") }}
              </td>
              <td>{{ Number(this.tableMonthC3).toLocaleString("ko-KR") }}</td>
              <td class="bol">
                {{ Number(this.tableMonthM3).toLocaleString("ko-KR") }}
              </td>
              <td>{{ Number(this.hangerMonthC3).toLocaleString("ko-KR") }}</td>
              <td class="bol">
                {{ Number(this.hangerMonthM3).toLocaleString("ko-KR") }}
              </td>
            </tr>
            <tr>
              <td class="akwlakr">합계</td>
              <td class="akwlakr">
                {{
                  Number(
                    this.bedMonthC + this.bedMonthC2 + this.bedMonthC3
                  ).toLocaleString("ko-KR")
                }}
              </td>
              <td class="akwlakr">
                {{
                  Number(
                    this.bedMonthM + this.bedMonthM2 + this.bedMonthM3
                  ).toLocaleString("ko-KR")
                }}
              </td>
              <td class="akwlakr">
                {{
                  Number(
                    this.shopaMonthC + this.shopaMonthC2 + this.shopaMonthC3
                  ).toLocaleString("ko-KR")
                }}
              </td>
              <td class="akwlakr">
                {{
                  Number(
                    this.shopaMonthM + this.shopaMonthM2 + this.shopaMonthM3
                  ).toLocaleString("ko-KR")
                }}
              </td>
              <td class="akwlakr">
                {{
                  Number(
                    this.tableMonthC + this.tableMonthC2 + this.tableMonthC3
                  ).toLocaleString("ko-KR")
                }}
              </td>
              <td class="akwlakr">
                {{
                  Number(
                    this.tableMonthM + this.tableMonthM2 + this.tableMonthM3
                  ).toLocaleString("ko-KR")
                }}
              </td>
              <td class="akwlakr">
                {{
                  Number(
                    this.hangerMonthC + this.hangerMonthC2 + this.hangerMonthC3
                  ).toLocaleString("ko-KR")
                }}
              </td>
              <td class="akwlakr">
                {{
                  Number(
                    this.hangerMonthM + this.hangerMonthM2 + this.hangerMonthM3
                  ).toLocaleString("ko-KR")
                }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="clearfix"></div>
    </div>
  </div>
  <AppFooter />
</template>

<script>
import "@/assets/css/managerJ/main.css";
import "@/assets/css/managerY/productLIst.css";

import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
import ChartDataLabels from "chartjs-plugin-datalabels";
import axios from "axios";
import AppHeader from "../../components/AppHeaderManager.vue";
import AppFooter from "../../components/AppFooter.vue";

Chart.register(ChartDataLabels);
export default {
  name: "ManagerChart",

  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      showCategories: false,
      showCategories00: false,
      showCategories02: false,
      showCategories03: false,
      showCategories04: false,
      showCategories05: false,
      allbed: "",
      allshopa: "",
      alltable: "",
      allhanger: "",
      cprice: "",
      tprice: "",
      ccount: "",
      tcount: "",
      todaybed: "",
      todayshopa: "",
      todaytable: "",
      todayhanger: "",
      bedMonthC: "",
      bedMonthM: "",
      bedMonthC2: "",
      bedMonthM2: "",
      bedMonthC3: "",
      bedMonthM3: "",
      shopaMonthC: "",
      shopaMonthM: "",
      shopaMonthC2: "",
      shopaMonthM2: "",
      shopaMonthC3: "",
      shopaMonthM3: "",
      tableMonthC: "",
      tableMonthM: "",
      tableMonthC2: "",
      tableMonthM2: "",
      tableMonthC3: "",
      tableMonthM3: "",
      hangerMonthC: "",
      hangerMonthM: "",
      hangerMonthC2: "",
      hangerMonthM2: "",
      hangerMonthC3: "",
      hangerMonthM3: "",
    };
  },

  plugins: [ChartDataLabels],

  methods: {
    changeSort(sortType) {
      document.getElementById("sortButton").innerText = sortType;
      // 여기에 해당 정렬 처리 로직 추가
    },
    toggleCategories() {
      this.showCategories = !this.showCategories; // 클릭 시 카테고리 리스트를 보이거나 숨김
    },
    toggleCategories00() {
      this.showCategories00 = !this.showCategories00; // 클릭 시 카테고리 리스트를 보이거나 숨김
    },
    toggleCategories02() {
      this.showCategories02 = !this.showCategories02; // 클릭 시 카테고리 리스트를 보이거나 숨김
    },
    toggleCategories03() {
      this.showCategories03 = !this.showCategories03; // 클릭 시 카테고리 리스트를 보이거나 숨김
    },
    toggleCategories04() {
      this.showCategories04 = !this.showCategories04; // 클릭 시 카테고리 리스트를 보이거나 숨김
    },
    toggleCategories05() {
      this.showCategories05 = !this.showCategories05; // 클릭 시 카테고리 리스트를 보이거나 숨김
    },
    datas() {
      console.log("start");
      this.allbed = 1;
      console.log(this.allbed);

      axios({
        method: "get", // put, post, delete
        url: `${this.$store.state.apiBaseUrl}/home/manager/datas`,
        headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
        //params: guestbookVo, //get방식 파라미터로 값이 전달
        //data: guestbookVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달
        responseType: "json", //수신타입
      })
        .then((response) => {
          console.log(response.data); //수신데이타
          this.allbed = response.data.bedcount;
          this.allshopa = response.data.shopacount;
          this.alltable = response.data.tablecount;
          this.allhanger = response.data.hangercount;
          this.cprice = response.data.cprice;
          this.tprice = response.data.tprice;
          this.ccount = response.data.ccount;
          this.tcount = response.data.tcount;
          this.todaybed = response.data.todaybed;
          this.todayshopa = response.data.todayshopa;
          this.todaytable = response.data.todaytable;
          this.todayhanger = response.data.todayhanger;
          this.bedMonthC = response.data.bedMonthC;
          this.bedMonthM = response.data.bedMonthM;
          this.bedMonthC2 = response.data.bedMonthC2;
          this.bedMonthM2 = response.data.bedMonthM2;
          this.bedMonthC3 = response.data.bedMonthC3;
          this.bedMonthM3 = response.data.bedMonthM3;
          this.shopaMonthC = response.data.shopaMonthC;
          this.shopaMonthM = response.data.shopaMonthM;
          this.shopaMonthC2 = response.data.shopaMonthC2;
          this.shopaMonthM2 = response.data.shopaMonthM2;
          this.shopaMonthC3 = response.data.shopaMonthC3;
          this.shopaMonthM3 = response.data.shopaMonthM3;
          this.tableMonthC = response.data.tableMonthC;
          this.tableMonthM = response.data.tableMonthM;
          this.tableMonthC2 = response.data.tableMonthC2;
          this.tableMonthM2 = response.data.tableMonthM2;
          this.tableMonthC3 = response.data.tableMonthC3;
          this.tableMonthM3 = response.data.tableMonthM3;
          this.hangerMonthC = response.data.hangerMonthC;
          this.hangerMonthM = response.data.hangerMonthM;
          this.hangerMonthC2 = response.data.hangerMonthC2;
          this.hangerMonthM2 = response.data.hangerMonthM2;
          this.hangerMonthC3 = response.data.hangerMonthC3;
          this.hangerMonthM3 = response.data.hangerMonthM3;

          //window.location.reload() -> 새로고침 지금은 소용이 없다...

          //이건 원형
          new Chart(this.$refs.MyChart, {
            type: "doughnut",
            data: {
              labels: ["총침대", "총쇼파", "총테이블", "총옷장"],
              datasets: [
                {
                  dataIndex: true,
                  display: true,
                  data: [
                    this.allbed,
                    this.allshopa,
                    this.alltable,
                    this.allhanger,
                  ],
                  datalabels: {
                    color: "#000000",
                  },
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                  ],
                  borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                  ],
                  borderWidth: 1,
                },
              ],
            },

            options: {
              responsive: false,
              plugins: {
                datalabels: {
                  color: "#000000",
                },
                title: {
                  display: true,
                  text: "총 판매비율",
                },
              },
            },
          });

          //이건 가로
          new Chart(this.$refs.MyChart2, {
            type: "bar",
            data: {
              labels: ["침대", "쇼파", "테이블", "옷장"],
              datasets: [
                {
                  dataIndex: true,
                  display: true,
                  data: [
                    this.todaybed,
                    this.todayshopa,
                    this.todaytable,
                    this.todayhanger,
                  ],
                  datalabels: {
                    color: "#000000",
                  },
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                  ],
                  borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                  ],
                  borderWidth: 1,
                },
              ],
            },

            options: {
              responsive: false,
              plugins: {
                datalabels: {
                  color: "#000000",
                },
                title: {
                  display: true,
                  text: "금일 판매비율",
                },
              },
            },
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    createChart() {},
  },

  created() {
    this.datas();
  },

  mounted() {
    this.createChart();
  },
};
</script>