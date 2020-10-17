<template>
  <div>
    <h1>新路径</h1>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  // 定义属性
  data() {
    return {
      a: 1,
    }
  },
  computed: {
    number: {
      get() {
        return this.a + 1
      },
      set() {},
    },
  },
  watch: {},
  methods: {
    init() {},
  },
  created() {
    this.init()
  },
  mounted() {},
}
</script>

<style lang="less" scoped></style>
