<template>
<div>
  <br>
<h1>Zoznam Zamestnancov</h1>
<div class="container">
    <br><br><br>
  <table class="table">
    <thead class="thead-light">
    <tr>
      <th scope="col">Meno priezvisko</th>
      <th scope="col">Pozícia</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
    </thead>
  <tbody>
      <!-- <tr v-for="zam in zamestnanci" :key="zam.Id">  
        <td><router-link :to="'/detail/'+ zam.id">{{zam.meno}} {{zam.priezvisko}}</router-link></td>  
        <td>{{zam.pozicia}}</td> 
        <td><router-link :to="'/edit/'+ zam.id" class="btn btn-warning">Editovať</router-link></td>
        <td><button v-on:click="Delete(zam.id)" type="button" class="btn btn-dark">Zmazať</button></td>
      </tr> -->
  </tbody>

</table>
  <router-link to="/Vytvorit" class="btn btn-success btn-square-md float-end">Pridať nového zamestnanca</router-link>
</div>

</div>

</template>

<script>  
    // import axios from 'axios';
    // import ZamestnanciService from "../ZamestnanciService";

        export default {  
    //          name: 'Zamestnanci',  
    //              data() {  
    //        return { 
    //       // zamestnanci:[], // pole zamestnancov
    //       // zamestnanec:"", // objekt zamestnanca pri vybere podla ID
          
    //       // archivovany: { // objekt archivovany na metodu POST do archivovany zamestnanci
    //       //   meno: "",
    //       //   priezvisko: "",
    //       //   adresa:"",
    //       //   datumNarodenia:"",
    //       //   datumPrepustenia: new Date(),
    //       //   pozicia: "",
    //       //   plat: ""
    //       //  }
    //       // ,
          
         

    //     };  
    //   },  
    //           created(){  
    //              this.Get();
    //              // pri nacitani /zamestnanci sa spusti metoda Get
    //                   },
    // methods: {
          


    //       // Get(){  
    //       // ZamestnanciService.get().then(response =>{  
    //       // this.zamestnanci = response.data;
    //       //     console.log(response.data);})
    //       //     }, //GET API

    //       // Delete(id){
    //       //  // Pri vybere OK sa ulozi zamestnanec do objektu archivovany a nasledne sa vykona metoda archivovat ktora ulozi zamestnanca do archivu 
    //       //   if(confirm("chcete archivovať zamestnanca ?")){
    //       // this.archivovat(id);
    //       //  ZamestnanciService.Delete(id).then(response => {this.Get();})
    //       // }
    //       // else if (confirm("Chcete trvalo zmazat zamestnanca ?")){ ZamestnanciService.Delete(id).then(response => {this.Get();})} // pri vybere zrusit sa zamestnanec trvalo vymaze z databazy
    //       // },//DELETE API

    //   //  archivovat(id){
    //   //       ZamestnanciService.getId(id).then(response => {  
          
    //   //       this.zamestnanec = response.data;
    //   //       this.archivovany.meno=this.zamestnanec.meno;
    //   //       this.archivovany.priezvisko=this.zamestnanec.priezvisko;
    //   //       this.archivovany.adresa=this.zamestnanec.adresa;
    //   //       this.archivovany.datumNarodenia=this.zamestnanec.datumNarodenia;
    //   //       this.archivovany.pozicia=this.zamestnanec.pozicia;
    //   //       this.archivovany.plat=this.zamestnanec.plat;
    //   //       //nastavenie atribútov zamestnanca do archivovany
    //   //       console.log(response.data);  
    //   //       // POST archivovany
    //   //       axios.post('https://localhost:49153/api/archivovany/',this.archivovany).then(res=>{
    //   //       console.log(res);})})
    //   //      }, // POST API /Archivovany
    //  }

    }
    </script>  
      