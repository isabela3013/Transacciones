import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { Count } from 'src/app/Modelos/Count.interface';
import { Puntos } from 'src/app/Modelos/Puntos.interface';
import { Trans } from 'src/app/Modelos/Transacciones.interface';
import { ServicioService } from 'src/app/servicios/servicio.service';
import * as FileSaver from 'file-saver';


@Component({
  selector: 'app-integracion-error',
  templateUrl: './integracion-error.component.html',
  styleUrls: ['./integracion-error.component.css']
})
export class IntegracionErrorComponent implements OnInit {

  productDialog : boolean;
  submitted : boolean;
  table : Trans[];
  count : Count[];
  countid : Count[];
  List : Puntos[];
  product : Trans;
  productC : Count;
  productid : Count;
  formato : string;
  selectedProduct1 : Trans;
  cols : any[];
  colsC : any[];
  colsCid : any[];
  items : MenuItem[];
  seleccionados : Puntos[];
  ref : DynamicDialogRef;
  bodega : string;
  id : number;
  displayBasic2 : boolean;
  idc : number;
  peopleFilter : any;

  constructor(
    private api: ServicioService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.api.getAllTrans().subscribe(data =>{
      this.table =  data
 
      this.cols = [
        { field: 'Registro', header: 'Registro' },
        { field: 'FechaInsert', header: 'Inserción' },
        { field: 'FechaModificacion', header: 'Modificación' },
        { field: 'Observaciones', header: 'Observaciones' },
        // { field: 'ObjetoIntegracion', header: 'JSON' },
        { field: 'NombreIntegracion', header: 'Integración' },
        { field: 'Bodega', header: 'Bodega' }
      ];

      this.peopleFilter = {Bodega: 'PV-LCAS', Registro: '163169'};

    })

    this.api.getAllPvs().subscribe(datapv =>{
      this.List =  datapv;
    })
  }

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

  editProduct(product: Trans) {
    this.product = {...product};
    this.productDialog = true;
  }

  countTrans(productC: Count, num: number) {
    this.productC = {...productC};
    console.log(productC)
    this.bodega = productC.Bodega;
    this.id = productC.IdIntegracionID;
    if(num == 1)
    {
      this.displayBasic2 = true;
    }
  
    this.api.getAllCountid(this.bodega,this.id).subscribe(dataid =>{
      this.countid =  dataid;
      this.colsCid = [
        { field: 'Registro', header: 'Registro'},
        { field: 'Observaciones', header: 'Observaciones' },
      ];
    })
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  json(product : Trans) {
    let textoJSON = product,
    objeto;

    //Teniendo un objeto...
    objeto = JSON.parse(textoJSON.ObjetoIntegracion);
    //Lo convertimos a JSON formateado con 2 espacios
    let textoFormateado = JSON.stringify(objeto, undefined, 2);
    this.formato = textoFormateado;
  }

  cptura(){
    let bode = this.seleccionados.map(element => {
      return element.PuntoV;
    });

    this.api.getAllCount(bode.toString()).subscribe(countt =>{
      this.count =  countt;

      this.colsC = [
        { field: 'NombreIntegracion', header: 'Integración' },
        { field: 'IdIntegracion', header: 'Recuento' },
        { field: 'Bodega', header: 'Bodega' }
      ];
    })
  }

  showError() {
    this.messageService.add({severity:'error', summary: 'Error', detail: 'Message Content'});
  }

}
