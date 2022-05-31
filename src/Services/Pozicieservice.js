
    import http from "./Http-api";  
    class PozicieService {  
         
        get() {  
            return http.get("/api/Pozicie/");
          } 
        Delete(id){
            return http.delete("/api/Pozicie/"+id)
        } //DELETE 
            
    }  
    export default new PozicieService();  
