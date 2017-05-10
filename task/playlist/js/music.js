//외국에선 트리구조가 밑에서... 자식들이 위에 있고 마지막으로 큰 애가 잡아줌.
var model = new Model(data);

Vue.component('audio-control', {
    props: ['propNowSong', 'propAutoPlay'],
    template:`
    <div class="audio-control">
        <audio 
            ref="audio"
            @canplay="canPlay"
            @ended="ended"
            controls :src="propNowSong.source"></audio controls>
        <img :src="propNowSong.cover" :alt="propNowSong.title">
        <p>{{ propNowSong.title }}</p>
    </div>
    `,
    methods: {
        play: function(){
            this.$refs.audio.currentTime = 0;
            // this.$refs.audio.play();
        },
        canPlay: function(){
            if( this.propAutoPlay)
            this.$refs.audio.play();
        },
        ended: function(){
                this.$emit('onEnded');
        }
    }
});
Vue.component('audio-item',{
    props: ['propSongListItem'],
    template:`
    <li @click="songClick">
    <img :src="propSongListItem.cover" :alt="propSongListItem.title">
        <span>{{propSongListItem.title}}</span>
    </li>
    `,
    methods: {
        songClick: function(){
            console.log(this.propSongListItem);
            this.$emit('onSongClick', this.propSongListItem);
        }
    }
})
Vue.component('audio-list', {
    props: ['propNowSong','propSongList'],
    template:`
    <ol>
        <li is="audio-item"
        :class="{'is-active': propNowSong === song}"
        v-for="song in propSongList"
        :propSongListItem="song"
        @onSongClick="songClick">
        </li>
    </ol>
    `,
    methods: {
        songClick: function(song){
            console.log('audio-list', song);
            this.$emit('onSongClick', song);
        }
    }
});
Vue.component('audio-player', {
    template:`
    <div>
        <h2>Audio Player</h2>

        <audio-control ref="control" 
        :propNowSong="nowSong"
        :propAutoPlay="autoPlay"
        @onEnded="nextSong">
        </audio-control>

        <audio-list 
            :propNowSong="nowSong" 
            :propSongList="songList"
            @onSongClick="songClick">
        </audio-List>
    </div>
    `,
    methods: {
        songClick: function(song){
            this.nowSong = song;
            this.autoPlay = true;
            this.$refs.control.play();
        },
            nextSong: function() {
            var nextId = model.nextId();
            this.nowSong = model.read(nextId);
        }
    },

    data: function(){
        return{
            autoPlay: false,
            nowSong: model.read(0),
            songList: model.read(),
        }
    }
})
var app = new Vue({
    el: "#app"

});