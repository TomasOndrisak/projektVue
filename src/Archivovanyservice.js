
    import http from "./Http-api";  
    class ArchivovanyService {  
         
        get() {  
            return http.get("/api/Archivovany/");
          }  
        
        Delete(id){
            return http.delete("/api/archivovany/"+id)
        }
        getId(id){
            return http.get("/api/archivovany/"+id);
        }
            
    }  
    export default new ArchivovanyService();  
