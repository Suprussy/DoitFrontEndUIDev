<template>
  <div>
    <p>데이터: {{ 이름 }}</p>
    <p>결과: {{ 함수 }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      이름: "값"
    }
  },
  computed: {
    함수() {
      // 데이터 변경에 따른 실행문 작성
      return "함수 실행 결과";
    }
  }
}
</script>