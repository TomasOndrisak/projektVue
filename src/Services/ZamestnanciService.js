
    import http from "./Http-api";

    class ZamestnanciService {  
         
      get() {  
            return http.get("/api/Zamestnanci");
          }  //GET
      

      getId(id) {  
            return http.get("/api/Zamestnanci/"+id);
          }  //GET+ID 
         
      Delete(id){
            return http.delete("/api/Zamestnanci/"+id)
        } //DELETE
      


        
            
    }  
    export default new ZamestnanciService();  
