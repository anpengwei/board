import Vue from "vue";

const Coms = [
  {
    name: "canvasBarTop",
    component: () => import("./canvas_bar_top.vue"),
  },
  {
    name: "canvasLineTop",
    component: () => import("./canvas_line_top.vue"),
  },
  {
    name: "canvasBarBottom",
    component: () => import("./canvas_bar_bottom.vue"),
  },
  {
    name: "chinaChart",
    component: () => import("./china_chart.vue"),
  },
  {
    name: "pieChart",
    component: () => import("./pie_chart.vue"),
  },
];

const vueComs = () => {
  Coms.forEach((item) => {
    return Vue.component(item.name, item.component);
  });
};
export default vueComs;
