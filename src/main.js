import { createApp } from 'vue'
import App from './App.vue'
import router from './Router'

var app= createApp(App)
app.config.globalProperties.$filters={
    metodoColor(num){
        if(num%2==0){
            return "<span style='color:red'>"+num+"</span>";
        }else{
            return "<span style='color:green'>"+num+"</span>";
        }
    },
    getOperacion(numero, multi){
        return numero + "*" + multi
    },
    getResultado(numero,multi){
        return numero*multi
    }
}

app.use(router).mount('#app')
