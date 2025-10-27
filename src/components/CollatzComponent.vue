<template>
    <div>
        <label>Numero</label>
        <input type="number" v-model="numero">
        <button @click="generarCollatz()">Generar Collatz</button>
        <ul>
            <li v-for="num in array" :key="num" v-html="$filters.metodoColor(num)">
                
            </li>
        </ul>
    </div>
</template>

<script>
    export default{
        name:"CollatzComponent",
        data(){
            return{
                numero:0,
                array:[]
            }
        },
        methods:{
            generarCollatz(){

                var numero=this.numero;

                let aux=[numero];

                while(numero!=1){
                    if(numero%2==0){
                        numero=numero/2
                    }else{
                        numero= numero*3+1
                    }

                    aux.push(numero)
                }

                this.array=aux;

                
            }
        }
    }
</script>
<style>
    
</style>