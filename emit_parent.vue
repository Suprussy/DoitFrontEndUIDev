<template>
  <div>
    <자식_컴포넌트 v-on:부모 컴포넌트에서 받을 함수명="부모 컴포넌트에서 실행할 함수"></자식_컴포넌트>
  </div>
</template>

<script>
export default {
  methods: {
    부모 컴포넌트에서 실행할 함수(전달 받은 데이터) {
      console.log(전달 받은 데이터);
    }
  }
}
</script>