<template>
<br>
<h1>Zoznam pozícií vo firme</h1>
 <div class="container">
 <br><br><br>
  
  <div class="Pozicie">
<table class="table">
  <thead class="thead-light">
    <tr>
      <th scope="col">Názov pozície</th>
      
     
    </tr>
  </thead>
  <tbody>
   
      <tr v-for="poz in pozicie" :key="poz.PoziciaId">  
                   <td>{{poz.NazovPozicie}}</td>  
                
      <th></th>
      <td><button v-on:click="Delete(poz.id)" type="button" class="btn btn-dark">Zmazať</button></td>
   </tr>  

  </tbody>
</table>
</div>

<router-link to="/Vytvoritpoziciu" class="btn btn-success btn-square-md float-end col-1">Vytvorit pozíciu</router-link>
  </div>
</template>

<script>  
    import PozicieService from "../Pozicieservice";  
    
        export default {  
             name: 'Pozicie',

                 data() {  
           return {  
          pozicie: [],  
        };  
      },  
    created(){  
          this.Get();  
    },  
          
        methods: { 

    Get() {  
          PozicieService.get()
          .then(response => {  
          this.pozicie = response.data;  
              console.log(response.data);  
            })  
    },  

    Delete(id){
            
            PozicieService.Delete(id).then(response => {  // zmazanie pozicie
            this.Get(); // obnovenie pozicii po zmene
              
            }) 

        }  
        },
    }  
    </script>  
   