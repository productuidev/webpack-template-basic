<template>
  <h1>{{count}}</h1>
</template>

<script>
export default {
  data() {
    return{
      count: 2
    }
  },
  beforeCreate() {
    console.log('before create!', this.count) // 생성 직전이기 때문에 데이터가 없어서 undefined가 출력
  },
  created() {
    console.log('create!', this.count) // 생성 직후이므로 2가 출력
    console.log(document.querySelector('h1')) // 아직 연결되지 전 상태이므로(html 구조 검색x) null 출력
  },
  beforeMount() {
    console.log('before mount!')
    console.log(document.querySelector('h1')) // 아직 연결되지 전 상태이므로(html 구조 검색x) null 출력
  },
  mounted() {
    console.log('mounted!')
    console.log(document.querySelector('h1')) // html 구조와 연결되서 조회되므로 <h1>2</h1> 출력
  }
}
</script>