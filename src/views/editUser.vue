<template>


<div class="container col-3">
<br><br><br>
    <form @submit.prevent="put" class="border container form-inline"><br>

  <div class="mb-2">
    <th>Meno</th>
    <input type="text" class="form-control" id="meno" v-model="zamestnanec.meno" placeholder="meno" required> 
  </div>
  <th>Priezvisko</th>
  <div class="mb-2">
    <input type="text" class="form-control" id="priezvisko" v-model="zamestnanec.priezvisko" placeholder="priezvisko" required>
 </div>
 <th>Adresa</th>
  <div class="mb-2">
    <input type="text" class="form-control" id="adresa" v-model="zamestnanec.adresa" placeholder="adresa" required>
  </div>
  <th>Dátum narodenia</th>
  <div class="mb-2">
    <Datepicker v-model="zamestnanec.datumNarodenia" ref="datepicker" :enableTimePicker="false" :maxDate="new Date(2004, 3, 31)" required/>
 </div>
 <th>Dátum Nástupu</th>
 <div class="mb-2">
   <Datepicker v-model="zamestnanec.datumNastupu" ref="datepicker" :enableTimePicker="false" :minDate="new Date()" required/>
 </div>
<th>Pozícia</th>
<div class="input-group mb-3">
                
                <select class="form-select" v-model="zamestnanec.pozicia" required>
                    <option v-for="poz in Pozicie" :key="poz.Id">
                    {{poz.nazov}}
                    </option>
                </select>
            </div>

<th>Plat</th>
<div class="mb-2">
  <input type="number" class="form-control" id="plat" v-model="zamestnanec.plat" placeholder="plat" required>
</div>



<button type="submit" class="btn btn-success btn-square-md float-end m-1">Uložiť zmenu</button>
<router-link to="/" class="btn btn-warning btn-square-md float-end m-1">Zrušiť</router-link>

</form>

<table class="table">
    <thead class="thead-light">
    <tr>
      <th scope="col">Pozicia</th>
      <th scope="col">datum nastupu</th>
      <th scope="col">datum ukoncenia</th>
    </tr>

    </thead>
    <tbody>
      <tr v-for="pred in PredoslePozicie" v-bind:key="pred.Id">  
        <td>{{pred.pozicia}}</td> 
        <td>{{DatumNas(pred.datumNastupu)}}</td>
        <td>{{DatumPrep(pred.datumUkoncenia)}}</td>
      </tr>
  </tbody>
    </table>


</div>
  
  
</template>

<script>
import axios from 'axios';
import moment from 'moment';
import PozicieService from "../Pozicieservice";  
import ZamestnanciService from "../ZamestnanciService";
import PredosleService from "../PredosleService"
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';


export default {
  name:"UpravitZamestnanca",
       components: { Datepicker },
data(){
   return {
              id: this.$route.params.id, //id zamestnanca
           
           Pozicie:[],
           zamestnanec: {
                  meno: "",
                  priezvisko: "",
                  adresa: "",
                  datumNarodenia:  "", 
                  datumNastupu: "",
                  pozicia: "",
                  plat: "" },


                  PredoslePozicie: {
                    pozicia:"",
                    datumNastupu: "",
                    datumUkoncenia: "",
                  },


                  predoslePozicie: {
                    id:0,
                    datumNastupu: "",
                    datumUkoncenia: new Date(),
                    pozicia: "",
                    idZamestnanca: this.$route.params.id,
                  },
           }
           
},
created(){  this.getZamestnanci();
            this.getPozicie(); 
            this.getPredosle();
            },

methods:{

DatumNas(datumNastupu) {
        return moment(datumNastupu).format('DD.MM.YYYY');
    },

DatumPrep(datumPrepustenia){
  return moment(datumPrepustenia).format('DD.MM.YYYY');
},

postPredosle(){
axios.post('https://localhost:49153/api/predoslepozicie/', this.predoslePozicie).then(response =>{ console.log(response);})
}, //metoda POST pre predosle pozicie

put(){ // put zamestnanci
  if (this.zamestnanec.pozicia != this.predoslePozicie.pozicia) // ak sa pozicia nezmeni, tak sa nevlozi do predoslych pozicii
this.postPredosle() // metoda post do predoslychPozici ak sa splni podmienka

axios.put('https://localhost:49153/api/zamestnanci/'+ this.id, this.zamestnanec).then(res => {
  this.$router.push('/zamestnanci'); // navrat na zoznam aktualnych zamestnancov
}) //uprava udajov zamestnanca

},


getPredosle(){  
          PredosleService.get(this.id)
            .then(res => {
            this.PredoslePozicie = res.data;  
            console.log(res.data);
            });},




getPozicie(){
         PozicieService.get()
         .then((response)=>{
           this.Pozicie=response.data;
         })},


 getZamestnanci(){  
          ZamestnanciService.getId(this.id)
          .then(response => {
            //vytvorenie objektu zamestnanec  
            this.zamestnanec = response.data;
            //vlozenie atributov do metody post predoslePozicie
            this.predoslePozicie.datumNastupu=this.zamestnanec.datumNastupu; 
            this.predoslePozicie.pozicia=this.zamestnanec.pozicia;
              console.log(response.data);})
              }, //get
},

}
</script>