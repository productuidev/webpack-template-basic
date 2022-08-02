<template>
  <!-- 반응성(Reactivity) 개념 :
      count라는 데이터가 변경되면 브라우저가 갱신된다 (모던 프론트엔드 프레임워크의 핵심)
  -->
  <!-- h1을 클릭하면(onClick) 함수 실행 -->
  <h1 @click="increase">
    {{ count }}
  </h1>
  <!-- v-if 조건문 -->
  <div v-if="count > 4">
    4보다 큽니다!
  </div>
  <ul>
    <!-- v-for 반복문 -->
    <!-- fruit in fruits : fruits 배열 데이터 반복, fruit라는 변수에 담기 -->
    <!-- 해당 data가 고유한지 증명 :key="fruit" -->
    <Fruit
      v-for="fruit in fruits"
      :key="fruit"
      :name="fruit">
      {{ fruit }}
    </Fruit>
  </ul>
</template>


<script>
import Fruit from '~/components/Fruit'

export default {
  components: {
    Fruit: Fruit
  },

  data() { // data 정의
    return {
      count: 0, // 초기값 지정,
      fruits: ['Apple', 'Banana', 'Cherry'], // 배열 추가
    }
  },
  methods: { // methods
    increase() { // function
      this.count += 1 // this = script 전체, count에 접근하여 함수가 실행되면 1씩 증가
    }
  }
}
</script>

<style lang="scss">/* scss 사용 시 lang 설정 */
  h1 { font-size:50px; color:royalblue; }
  ul {
    li { font-size:40px; }
  }
</style>