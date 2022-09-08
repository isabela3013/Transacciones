import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicios/servicio.service';
import * as FileSaver from 'file-saver';
import { Trans } from 'src/app/Modelos/Transacciones.interface';
import { ObjetoIntegracion } from 'src/app/Modelos/objeto-integracion.model';
import { ObjetoResultado } from 'src/app/Modelos/objeto-resultado.model';

@Component({
  selector: 'app-comparacion',
  templateUrl: './comparacion.component.html',
  styleUrls: ['./comparacion.component.css']
})
export class ComparacionComponent implements OnInit {

  table : Trans[];
  cols : any[];
  peopleFilter : any;
  selectedProduct1 : Trans;
  productDialog: boolean = false;
  product : Trans;
  objetoIntegracion : ObjetoIntegracion;
  objetoResultado : ObjetoResultado;
  comparacion : boolean = false;

  constructor(
    private api: ServicioService,
  ) { }

  ngOnInit(): void {
    //Trae todas las transacciones
    this.api.getAllTrans().subscribe(data =>{
      
      //Asigna y filtra las transacciones
      this.table =  data.filter(it => it.Error == false)
      console.log(this.table)
      console.log(data)
      
      // Asigna los valores de la tabla
      this.cols = [
        { field: 'Registro', header: 'Registro' },
        { field: 'FechaInsert', header: 'Inserción' },
        { field: 'FechaModificacion', header: 'Modificación' },
        // { field: 'ObjetoIntegracion', header: 'JSON' },
        { field: 'NombreIntegracion', header: 'Integración' },
        { field: 'Bodega', header: 'Bodega' },
        { field: 'ObjetoIntegracion', header: 'JSON' }
      ];

      this.peopleFilter = {Bodega: 'PV-LCAS', Registro: '163169'};

    })
  }

  editProduct(product: Trans) {
    this.product = {...product};
    this.productDialog = true;
  }

  json(product : Trans) {
    let textoJSON = product;
    console.log(product)

    //Teniendo un objeto...
    let objeto1 = JSON.parse(textoJSON.ObjetoIntegracion);
    console.log(objeto1)
    //Lo convertimos a JSON formateado con 2 espacios
    this.objetoIntegracion = objeto1;
    console.log(this.objetoIntegracion)

    let objeto2 = JSON.parse(textoJSON.ObjetoResultado);
    this.objetoResultado = objeto2;
    console.log(this.objetoResultado)

    if(this.comparacionJson()){
      this.comparacion = true;
    }
  }

  comparacionJson() {
    if(this.objetoIntegracion.DocNum == this.objetoResultado.U_NumPorcipos){
      return true;
    } else {
      return false;
    }
  }

  hideDialog() {
    this.productDialog = false;
    //this.submitted = false;
  }

  //#region Excel

  exportExcel() {
    import("xlsx").then(xlsx => {
        const worksheet = xlsx.utils.json_to_sheet(this.table);
        const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, "products");
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }

  //#endregion Excel

  

  

}
