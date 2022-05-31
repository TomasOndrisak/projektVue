<template>
  
<br>
<h1>Archív zamestnancov</h1>

  <div class="container">
    <br><br><br>
    
  
 
<table class="table">
  <thead class="thead-light">
    <tr>
      <th scope="col">Meno Priezvisko</th>
      <th scope="col">Posledná pozícia</th>
      <th scope="col">Dátum prepustenia</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
  <tr v-for="zam in archivovany" :key="zam.Id">  
        <!-- <td><router-link :to="'/detailarchivovany/'+ zam.id">{{zam.meno}} {{zam.priezvisko}}</router-link></td>   -->
        <td>{{zam.pozicia}}</td>
        <td>{{Datum(zam.datumPrepustenia)}}</td> 
        <td><button v-on:click="deleteArchivovany(zam.id)" type="button" class="btn btn-dark">Zmazať</button></td>
      </tr>



   

  </tbody>
</table>


  </div>
</template>
<script>

  import moment from 'moment';


  export default {  
             name: 'Archivovany',  
                 data() {  
           return {  
          // archivovany: [],
         

        };  
      },  

     created(){  
         this.getArchivovany();  
      },
  
    
  methods: {

    Datum(datumPrepustenia) {
        return moment(datumPrepustenia).format('DD.MM.YYYY');
    },

    getArchivovany(){  
          Archivovanyservice.get().then(response => {  
          this.archivovany = response.data;
          
              console.log(response.data);})
    }, //get
    

    deleteArchivovany(id){
       if(confirm("Chcete určite trvalo zmazať zamestnanca ?")){
          Archivovanyservice.Delete(id).then(response => {this.getArchivovany();})
        }
    },//delete


  }
  }

</script>

