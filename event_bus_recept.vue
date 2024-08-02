<template>
  <div>{{ 전달 받은 데이처 }}</div>
</template>

<script>
data() {
  return {전달 받은 데이터}
}
export default {
  created() {
    EventBus.$on("이벤트 이름", 실행 함수 => {
      this.전달 받은 데이터 = 전달할 데이터
    })
  }
}
</script>