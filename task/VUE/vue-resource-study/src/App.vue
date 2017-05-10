<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1></h1>
    <h2>Essential Links</h2>
    <div class="post-http">
      <input type="text" v-model="user_input.task">
      <button type="button" @click="submitData">Submit</button>
    </div>
    <div class="get-http">
      <input type="text" v-model="uri">      
      <button type="button" @click="fetchData">Fetch</button>
    </div>
    <ul class="fetched-data">
      <li class="fetched-data-item" v-for="data in datalist">
        <label><input type="checkbox" v-model="data.done">{{ data.task }}</label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      user_input: {
        done: false,
        task: ''
      },
      datalist: [],
      resource: {},
      uri: 'todoList'
    }
  },
  created() {
    // Resource 객체에 새롭게 정의한 사용자 정의 메서드 추가
    const customActions = {
      saveAlt: { url: 'alternateTodoList.json', method: 'POST' },
      fetch: { method: 'GET' }
    };
    this.resource = this.$resource('{uri}.json', {}, customActions);
  },
  methods: {
    submitData() {
      // VueResource === $http
      // this.$http.post('', this.user_input)
      //           .then( response => console.log(response) )  

      // Vue Resource Object 사용
      // this.resource.save({}, this.user_input)
      //              .then( response => console.log(response) )
      this.resource.saveAlt({}, this.user_input)
                  //  .then( response => console.log(response) )
    },
    fetchData() {
      // this.$http.get('')
      //           .then( response => { return response.json(); } )
      //           .then( data => { this.datalist = Object.values(data); } )
      //           .catch( error => console.error(error.message) );
      // this.resource.get({})
      //              .then( response => {
      //                return response.json();
      //              })
      //              .then(data => {
      //                this.datalist = Object.values(data);
      //              });
        this.resource.fetch({uri: this.uri})
                     .then(res => res.json())
                     .then(data => this.datalist = Object.values(data));
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
