<template>
  <div v-on:click="부모 컴포넌트로 보낼 이벤트"></div>
</template>

<script>
export default {
  methods: {
    부모 컴포넌트로 보낼 이벤트() {
      this.$emit('부모 컴포넌트에서 받을 함수명', 전달할 데이터);
    }
  }
}
</script>