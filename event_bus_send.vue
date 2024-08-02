<template>
  <div>
    <수신_컴포넌트>
    <button @click="함수명"></button>
  </div>
</template>

<script>
import { EventBus } from 등록한 스크립트 경로;
export default {
  data() {
    data() {return {전달할 데이터}}
    methods: {
      함수명() {
        EventBus.$emit("이벤트 이름", 전달할 데이터)
      }
    }
  }
}
</script>