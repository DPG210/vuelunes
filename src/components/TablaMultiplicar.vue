<template>
    <div>
        <label>Numero</label>
        <input type="number" v-model="numero">
            <button @click="generarTabla()">Generar tabla</button>
            <table border="1">
                <thead>
                    <tr>
                        <th>Operacion</th>
                        <th>Resultado</th>
                    </tr>
                </thead>
                <tbody v-html="html">
                </tbody>
            </table>
            <table>
                <thead>
                    <tr>
                        <th>Operacion</th>
                        <th>Resultado</th>
                    </tr>
                </thead>
                    <tbody>
                    <tr v-for="contador in 11" :key="contador">
                        
                        <td>
                            {{numero+ "*"+ (contador-1)}}
                        </td>
                        <td>
                            {{numero*(contador-1)}}
                        </td>
                    </tr>
                </tbody>
                
            </table>
            <table>
                <thead>
                    <tr>
                        <th>Operacion</th>
                        <th>Resultado</th>
                    </tr>
                </thead>
                
                    <tbody v-if="numero !=0">
                    <tr v-for="contador in 11" :key="contador">
                        <td>
                            {{$filters.getOperacion(numero,(contador-1))}}
                        </td>
                        <td>
                           {{$filters.getResultado(numero,(contador-1))}}
                        </td>
                    </tr>
                </tbody>
                
            </table>
    </div>
</template>

<script>
export default {
    name:"TablaMultiplicar",
    data(){
        return{
            numero:0,
            html:"",
            contador:0
        }
    },
    methods:{
        generarTabla(){
            
            let aux="";

            for (var i=0;i<=10;i++){
                aux+="<tr>";
                aux+="<td>"+this.numero+"*"+i+"</td>";
                aux +="<td>"+(this.numero*i)+"</td>"
                aux+="</tr>"
            }
            this.html=aux;
            
        }
    },
    
}
</script>

<style>
    table{
     margin: auto;
     width: 70%;
     border-collapse: collapse;
    }
</style>