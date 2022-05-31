<template>
<br>
<h1>Detail Archivovaného Zamestnanca</h1>
 <div class="container">
     <br><br><br>
<table class="table">
    <thead class="thead-light">
    <tr>
      <th scope="col">Meno priezvisko</th>
      <th scope="col">Adresa</th>
      <th scope="col">Dátum Narodenia</th>
      <th scope="col">Dátum Prepustenia</th>
      <th scope="col">Posledná pozícia</th>
      <th scope="col">Plat</th>
    </tr>
    </thead>
  <tbody>
      <tr>  
        <td> {{zamestnanec.meno}} {{zamestnanec.priezvisko}}</td>  
        <td>{{zamestnanec.adresa}}</td> 
        <td>{{Datum(zamestnanec.datumNarodenia)}}</td>
        <td>{{Datum(zamestnanec.datumPrepustenia)}}</td>
        <td>{{zamestnanec.pozicia}}</td>
        <td>{{zamestnanec.plat}}</td>    
      </tr>
  </tbody>

</table>
</div>
</template>

<script>

import moment from 'moment';

export default {
  name:"ArchivovanyDetail",
data(){
   return {
              
           
           
                id: this.$route.params.id,

                zamestnanec:{
                meno: "",
                priezvisko: "",
                adresa: "",
                datumNarodenia:  "", 
                datumPrepustenia: "",
                pozicia: "",
                plat: ""   }
           }
           
          },

created(){  this.getArchivovany();
          
          },

methods:{

Datum(datumPrepustenia) {
        return moment(datumPrepustenia).format('DD.MM.YYYY');
    },
 getArchivovany(){  
          Archivovanyservice.getId(this.id).then(response => {  
          this.zamestnanec = response.data;  
              console.log(response.data); })
                
                }, //get id
    



},




}
</script>

<style>

</style>