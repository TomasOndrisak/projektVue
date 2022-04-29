<template>
<div class="container col-3">
 

 <br><br><br>

 <form @submit.prevent="PostData" class="border container form-inline"><br>
  <div class="mb-2">

    <input type="text" class="form-control" id="Pozicia" v-model="pozicia.nazov" placeholder="Názov pozície"> 
  </div>
    <button type="submit" class="btn btn-success btn-square-md">Vytvoriť</button> <br> <br>
  </form>
  
    
  </div>

</template>

<script>
import axios from 'axios';

export default {
name:"VytvoritPoziciu",
        data() {
       return {
      
       pozicia:{
                id: 0,
                nazov:"",
            }
    };
   },

   methods:{
     PostData(){
         axios.post('https://localhost:49153/api/pozicie/',this.pozicia).then(res=>{
           console.log(res);
           this.$router.push('/pozicie')})
         
       }
     },
   }


</script>
