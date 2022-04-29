
    import http from "./Http-api";

    class PredosleService {  
         
      get(id) {  
            return http.get("/api/predoslepozicie/"+id);
          }  //GET idZamestnanca
  
    }  
    export default new PredosleService();  
