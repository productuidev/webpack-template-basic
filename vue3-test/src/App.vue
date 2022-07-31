<template>
  <!-- 반응성(Reactivity) 개념 :
      count라는 데이터가 변경되면 브라우저가 갱신된다 (모던 프론트엔드 프레임워크의 핵심)
  -->
  <!-- h1을 클릭하면(onClick) 함수 실행 -->
  <h1 @click="increase">
    {{ count }}
  </h1>
</template>


<script>
export default {
  data() { // data 정의
    return {
      count: 0 // 초기값 지정
    }
  },
  methods: { // methods
    increase() { // function
      this.count += 1 // this = script 전체, count에 접근하여 함수가 실행되면 1씩 증가
    }
  }
}
</script>

<style>
  h1 { font-size:50px; color:royalblue; }
</style>