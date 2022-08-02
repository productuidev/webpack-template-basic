<template>
  <li>{{ name }}</li> <!-- 데이터 출력 -->
</template>

<script>
export default {
  props: {
    name: {  
      type: String, // 데이터 타입
      default: '' // 데이터가 들어오지 않으면 빈 문자
    }
  }
}
</script>

<style scoped lang="scss">
  h1 { color:red !important; }
</style>