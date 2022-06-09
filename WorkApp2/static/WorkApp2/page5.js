
const App1 = {
    data(){
        return{
            message:0
        }
    },
    methods:{
    increment: function(){
        this.message+=1
    }
}
}
app1 = Vue.createApp(App1)
app1.mount('#app1')

