<template>
  <div id="app">
    <h1></h1>
      <h2>더미데이터 생성기</h2>
    <div class="user-info">
      <input type="text" v-model="user_info.email" placeholder="이메일을 입력하세요">
      <input type="password" v-model="user_info.password" placeholder="패스워드를 입력하세요">
      <input type="text" v-model="user_info.nickname" placeholder="닉네임을 입력하세요">
      <input type="text" v-model="user_info.age" placeholder="나이를 입력하세요">
      <input type="tetx" v-model="user_info.gender" placeholder="성별을 입력하세요">
      <button type="button" @click="submitData">Submit</button>
    </div>
    <div class="playlist_info">
      <input type="text" v-model="playlist_info.list_new_title" placeholder="리스트 제목">
      <input type="text" v-model="playlist_info.user_name" placeholder="유저네임">
      <input type="text" v-model="playlist_info.cover" placeholder="커버 이미지">
      <input type="text" v-model="playlist_info.list_track_number" placeholder="트랙 넘버">
      <input type="text" v-model="playlist_info.alt" placeholder="이미지 설명">
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

      playlist_info: {
        list_new_title: '',
        user_name: '',
        list_track_number: '',
        cover: '',
        alt: ''
      },

      datalist: [],
      resource: {},
      uri: 'SignUp'
    }
  },

  created() {
    // Resource 객체에 새롭게 정의한 사용자 정의 메서드 추가
    const customActions = {
      saveAlt: { url: 'alternateTodoList.json', method: 'POST' }
    };
    this.axios = this.$axios('{uri}.json', {}, customActions);
  },

  methods: {
    submitData() {
      axios.post('https://vue-http-1b8e7.firebaseio.com/playlist.json', this.playlist_info);
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
