<script>
export default {
  watch: {
    $route: {
      handler() {
        라우터가 변경될 때 실행할 명령문
      }, 
      immediate: true
    }
  }
}
</script>