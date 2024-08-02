<template>
  <div>
    <!-- v-bind: 이름 바인딩 -->>  
    <!-- v-on: 입력 요소에서 변경된 데이터 전달 -->>  
    <input v-model="이름" type="text">
    <p>username: {{ 이름 }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      이름: "데이터"
    }
  }
}
</script>