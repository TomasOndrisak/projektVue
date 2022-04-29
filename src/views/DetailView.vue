<template>
<br>
<h1>Detail Zamestnanca</h1>
 <div class="container">
     <br><br><br>
<table class="table">
    <thead class="thead-light">
    <tr>
      <th scope="col">Meno priezvisko</th>
      <th scope="col">Adresa</th>
      <th scope="col">Dátum Narodenia</th>
      <th scope="col">Dátum Nástupu</th>
      <th scope="col">Pozícia</th>
      <th scope="col">Plat</th>
    </tr>
    </thead>
  <tbody>
      <tr>  
        <td> {{zamestnanec.meno}} {{zamestnanec.priezvisko}}</td>  
        <td>{{zamestnanec.adresa}}</td> 
        <td>{{DatumNar(zamestnanec.datumNarodenia)}}</td>
        <td>{{DatumNas(zamestnanec.datumNastupu)}}</td>
        <td>{{zamestnanec.pozicia}}</td>
        <td>{{zamestnanec.plat}}</td>    
      </tr>
  </tbody>

</table>
</div>
</template>

<script>
import ZamestnanciService from "../ZamestnanciService";
import moment from 'moment';
export default {
  name:"DetailZamestnanca",
  
data(){
   return {
                id: this.$route.params.id, //id zamestnanca z routeru
zamestnanec:{
                meno: "",
                priezvisko: "",
                adresa: "",
                datumNarodenia:  "", 
                datumNastupu: "",
                pozicia: "",
                plat: "" }
           }
           
},
created(){  this.getZamestnanci();
            },

methods:{

DatumNar(datumNarodenia) {
        return moment(datumNarodenia).format('DD.MM.YYYY');
    },
DatumNas(datumNastupu) {
        return moment(datumNastupu).format('DD.MM.YYYY');
    },
 getZamestnanci(){  
          ZamestnanciService.getId(this.id).then(response => {  
          this.zamestnanec = response.data;  
              console.log(response.data);})
              }, //get
},




}
</script>

<style>

</style>