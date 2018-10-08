# kim-vue-touch

### Installation

```
npm install kim-vue-touch
```

### Usage

```
import vueTouch from 'kim-vue-touch'

Vue.use(vueTouch)

```
* 在您的html代码中使用（不要忘记转义所有反斜杠）

```
<template>
    <div class="box" 
        v-tap="(e)=>vueTouch('点击',e)" 
        v-longtap="(e)=>vueTouch('长按',e)" 
        v-swipeleft="(e)=>vueTouch('左滑',e)"
        v-swiperight="(e)=>vueTouch('右滑',e)"
        v-swipeup="(e)=>vueTouch('上滑',e)"
        v-swipedown="(e)=>vueTouch('下滑',e)"
    ></div>
</template>
<script>
    export default {
        name: 'App',
        data () {
            return {
                name:'touch',
            }
        },
        methods:{
            vueTouch:function(txt,e){
                this.name = txt;
            }
        }
    }
</script>
```