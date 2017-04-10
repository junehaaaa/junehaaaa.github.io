<template>
  <div id="app">
    <h1></h1>
      <h2>회원가입</h2>
    <div class="user-info">
      <input type="text" v-model="user_info.email" placeholder="이메일을 입력하세요">
      <input type="password" v-model="user_info.password" placeholder="패스워드를 입력하세요">
      <input type="text" v-model="user_info.nickname" placeholder="닉네임을 입력하세요">
      <input type="text" v-model="user_info.age" placeholder="나이를 입력하세요">
      <input type="tetx" v-model="user_info.gender" placeholder="성별을 입력하세요">
      <button type="button" @click="submitData">Submit</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'app',
  data () {
    return {
      user_info: {
        email: '',
        password: '',
        nickname: '',
        age: null,
        gender: null
      },
      datalist: [],
      resource: {},
      uri: 'SignUp'
    }
  },

  // created() {
  //   // Resource 객체에 새롭게 정의한 사용자 정의 메서드 추가
  //   const customActions = {
  //     saveAlt: { url: 'alternateTodoList.json', method: 'POST' }
  //   };
  //   this.axios = this.$axios('{uri}.json', {}, customActions);
  // },

  methods: {
    submitData() {
      axios.post('https://vue-http-1b8e7.firebaseio.com/SignUp.json', this.user_info);
      // this.axios.saveAlt({}, this.user_info);
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
