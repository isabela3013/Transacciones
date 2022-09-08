export interface Trans {
   Id : number;
   Registro: string;
   FechaInsert: Date;
   FechaModificacion : Date;  
   Observaciones : string; 
   Bodega : string;
   NombreIntegracion : string;
   ObjetoIntegracion : string;
   Error : boolean;
   ObjetoResultado : string;
}