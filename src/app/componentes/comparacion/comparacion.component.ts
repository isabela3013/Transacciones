import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicios/servicio.service';
import * as FileSaver from 'file-saver';
import { Trans } from 'src/app/Modelos/Transacciones.interface';
import { ObjetoIntegracion } from 'src/app/Modelos/objeto-integracion.model';
import { ObjetoResultado } from 'src/app/Modelos/objeto-resultado.model';
import { ObjetoTraslados } from 'src/app/Modelos/objeto-traslados.model';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import { ObjetoDetalle } from 'src/app/Modelos/objeto-detalle.model';
import { ObjetoTraslador } from 'src/app/Modelos/objeto-traslador.model';
import { ObjetoFacturar } from 'src/app/Modelos/objeto-facturar.model';
import { ObjetoFacturai } from 'src/app/Modelos/objeto-facturai.model';
import { ObjetoComprai } from 'src/app/Modelos/objeto-comprai.model';
import { ObjetoComprar } from 'src/app/Modelos/objeto-comprar.model';
import { ObjetoSocioi } from 'src/app/Modelos/objeto-socioi.model';
import { ObjetoSocior } from 'src/app/Modelos/objeto-socior.model';

// import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'app-comparacion',
  templateUrl: './comparacion.component.html',
  styleUrls: ['./comparacion.component.css']
})
export class ComparacionComponent implements OnInit {

  table : Trans[];
  tableAux : Trans[];
  tableI : Trans[];
  cols : any[];
  colsI : any[];
  peopleFilter : any;
  selectedProduct1 : Trans;
  productDialog: boolean = false;
  productDialog2: boolean = false;
  product : Trans;
  objetoIntegracion : ObjetoIntegracion;
  listaObjetoIntegracion : ObjetoIntegracion[];
  objetoResultado : ObjetoResultado;
  listaObjetoResultado : ObjetoResultado[];
  comparacion : boolean = false;
  itemCodeR : string[] = [];
  quantityR : string[] = [];
  warehouseCodeR : string[] = [];
  objetoTraslados : ObjetoTraslados;
  listaObjetoTraslados : ObjetoTraslados[];
  itemCodeT : string[] = [];
  quantityT : string[] = [];
  warehouseCodeT : string[] = [];
  listaDetalle : ObjetoDetalle[] = [];
  objetoTraslador : ObjetoTraslador;
  listaObjetoTraslador : ObjetoTraslador[];
  objetoFacturar : ObjetoFacturar;
  listaObjetoFacturar : ObjetoFacturar[];
  objetoFacturai : ObjetoFacturai;
  listaObjetoFacturai : ObjetoFacturai[];
  objetoComprai : ObjetoComprai;
  listaObjetoComprai : ObjetoComprai[];
  objetoComprar : ObjetoComprar;
  listaObjetoComprar : ObjetoComprar[];
  DocNumT : string;
  U_NumPorciposT : string;
  RefDocEntrT : string[] = [];
  objetoSocioi : ObjetoSocioi;
  listaObjetoSocioi : ObjetoSocioi[];
  objetoSocior : ObjetoSocior;
  listaObjetoSocior : ObjetoSocior[];
  CardCodeT : string;
  CardNameT : string;
  CardCodeR : string;
  CardNameR : string;
  verificado: boolean;
  Integrado: boolean;


  constructor(
    private api: ServicioService,
  ) { }

  ngOnInit(): void {
    
    //Trae todas las transacciones
    this.api.getAllTrans().subscribe(data =>{
      //this.comparacionJson(data)

      //Asigna y filtra las transacciones
      this.table =  data

      // Asigna los valores de la tabla
      this.cols = [
        { field: 'Registro', header: 'Registro' },
        { field: 'FechaInsert', header: 'Inserción' },
        { field: 'FechaModificacion', header: 'Modificación' },
        // { field: 'ObjetoIntegracion', header: 'JSON' },
        { field: 'NombreIntegracion', header: 'Integración' },
        { field: 'Bodega', header: 'Bodega' },
        //{ field: 's', header: 'JSON' },
      ];

      // this.peopleFilter = {Bodega: 'PV-LCAS', Registro: '163169'};
    })

    // this.asignarObjetos();
  }


  editProduct(product: Trans) {
    this.product = {...product};

    if(product.IdIntegracion == 9)
    {
      this.productDialog2 = true;
    }
    else
    {
      this.productDialog = true;
    }
    
  }

  json(product : Trans): void {
    let textoJSON = product;
    console.log(product)
    console.log()
    //Teniendo un objeto...


    if(textoJSON.IdIntegracion == 4){
      console.log(textoJSON.ObjetoTraslados)

      let objeto1 = JSON.parse(textoJSON.ObjetoIntegracion);
      console.log(objeto1)
  
      this.objetoTraslados = objeto1;
      console.log(this.objetoTraslados)


      let objeto2 = JSON.parse(textoJSON.ObjetoResultado);
      console.log(objeto2)

      this.objetoTraslador = objeto2;
      console.log(this.objetoTraslador)
      
      this.DocNumT = (this.objetoTraslador.U_NumPorcipos)
      
      this.U_NumPorciposT = (this.objetoTraslados.DocNum)

      this.objetoTraslados.StockTransferLines.forEach(StockTransferLines => {

        this.itemCodeT.push(StockTransferLines.ItemCode)
        this.quantityT.push(StockTransferLines.Quantity)
        this.warehouseCodeT.push(StockTransferLines.WarehouseCode)
      });

      this.objetoTraslador.StockTransferLines.forEach(DocumentLine => {
  
        this.itemCodeR.push(DocumentLine.ItemCode)
        this.quantityR.push(DocumentLine.Quantity)
        this.warehouseCodeR.push(DocumentLine.WarehouseCode)
    
      });

    }

    if(textoJSON.IdIntegracion == 2){

      let objeto1 = JSON.parse(textoJSON.ObjetoIntegracion);
      console.log(objeto1)
      //Lo convertimos a JSON formateado con 2 espacios
      this.objetoIntegracion = objeto1;
      console.log(this.objetoIntegracion)
  
      let objeto2 = JSON.parse(textoJSON.ObjetoResultado);
      console.log(objeto2)
  
      this.objetoResultado = objeto2;
      console.log(this.objetoResultado)

      this.DocNumT = (this.objetoIntegracion.DocNum)
      
      this.U_NumPorciposT = (this.objetoResultado.U_NumPorcipos)

      this.objetoIntegracion.DocumentLines.forEach(DocumentLine => {

        this.itemCodeT.push(DocumentLine.ItemCode)
        this.quantityT.push(DocumentLine.Quantity)
        this.warehouseCodeT.push(DocumentLine.WarehouseCode)
    
      });
      this.objetoResultado.DocumentLines.forEach(DocumentLine => {
  
        this.itemCodeR.push(DocumentLine.ItemCode)
        this.quantityR.push(DocumentLine.Quantity)
        this.warehouseCodeR.push(DocumentLine.WarehouseCode)
    
      });
      
    }

    if(textoJSON.IdIntegracion == 3){

      let objeto1 = JSON.parse(textoJSON.ObjetoIntegracion);
      console.log(objeto1)
      //Lo convertimos a JSON formateado con 2 espacios
      this.objetoIntegracion = objeto1;
      console.log(this.objetoIntegracion)
  
      let objeto2 = JSON.parse(textoJSON.ObjetoResultado);
      console.log(objeto2)
  
      this.objetoResultado = objeto2;
      console.log(this.objetoResultado)

      this.DocNumT = (this.objetoIntegracion.DocNum)
      
      this.U_NumPorciposT = (this.objetoResultado.U_NumPorcipos)

      this.objetoIntegracion.DocumentLines.forEach(DocumentLine => {

        this.itemCodeT.push(DocumentLine.ItemCode)
        this.quantityT.push(DocumentLine.Quantity)
        this.warehouseCodeT.push(DocumentLine.WarehouseCode)
    
      });
      this.objetoResultado.DocumentLines.forEach(DocumentLine => {
  
        this.itemCodeR.push(DocumentLine.ItemCode)
        this.quantityR.push(DocumentLine.Quantity)
        this.warehouseCodeR.push(DocumentLine.WarehouseCode)
    
      });
      
    }

    if(textoJSON.IdIntegracion == 5){

      let objeto1 = JSON.parse(textoJSON.ObjetoIntegracion);
      console.log(objeto1)
      //Lo convertimos a JSON formateado con 2 espacios
      this.objetoIntegracion = objeto1;
      console.log(this.objetoIntegracion)
  
      let objeto2 = JSON.parse(textoJSON.ObjetoResultado);
      console.log(objeto2)
  
      this.objetoResultado = objeto2;
      console.log(this.objetoResultado)

      this.DocNumT = (this.objetoIntegracion.U_NumPorcipos)
      
      this.U_NumPorciposT = (this.objetoResultado.DocNum)

      this.objetoIntegracion.DocumentLines.forEach(DocumentLine => {

        this.itemCodeT.push(DocumentLine.ItemCode)
        this.quantityT.push(DocumentLine.Quantity)
        this.warehouseCodeT.push(DocumentLine.WarehouseCode)
    
      });
      this.objetoResultado.DocumentLines.forEach(DocumentLine => {
  
        this.itemCodeR.push(DocumentLine.ItemCode)
        this.quantityR.push(DocumentLine.Quantity)
        this.warehouseCodeR.push(DocumentLine.WarehouseCode)
    
      });
      
    }

    if(textoJSON.IdIntegracion == 6){

      let objeto1 = JSON.parse(textoJSON.ObjetoIntegracion);
      console.log(objeto1)
      //Lo convertimos a JSON formateado con 2 espacios
      this.objetoIntegracion = objeto1;
      console.log(this.objetoIntegracion)
  
      let objeto2 = JSON.parse(textoJSON.ObjetoResultado);
      console.log(objeto2)
  
      this.objetoResultado = objeto2;
      console.log(this.objetoResultado)

      this.DocNumT = (this.objetoIntegracion.U_NumPorcipos)
      
      this.U_NumPorciposT = (this.objetoResultado.U_NumPorcipos)

      this.objetoIntegracion.DocumentLines.forEach(DocumentLine => {

        this.itemCodeT.push(DocumentLine.ItemCode)
        this.quantityT.push(DocumentLine.Quantity)
        this.warehouseCodeT.push(DocumentLine.WarehouseCode)
    
      });
      this.objetoResultado.DocumentLines.forEach(DocumentLine => {
  
        this.itemCodeR.push(DocumentLine.ItemCode)
        this.quantityR.push(DocumentLine.Quantity)
        this.warehouseCodeR.push(DocumentLine.WarehouseCode)
    
      });
      
    }

    if(textoJSON.IdIntegracion == 8){

      let objeto1 = JSON.parse(textoJSON.ObjetoIntegracion);
      console.log(objeto1)
      //Lo convertimos a JSON formateado con 2 espacios
      this.objetoComprai = objeto1;
      console.log(this.objetoComprai)
  
      let objeto2 = JSON.parse(textoJSON.ObjetoResultado);
      console.log(objeto2)
  
      this.objetoComprar = objeto2;
      console.log(this.objetoComprar)

      this.U_NumPorciposT = (this.objetoComprar.DocEntry)

      this.objetoComprai.DocumentReferences.forEach(DocumentReferences => {

        this.RefDocEntrT.push(DocumentReferences.RefDocEntr)
      });
      console.log(this.RefDocEntrT)
      this.DocNumT = this.RefDocEntrT[0];

      this.objetoComprai.DocumentLines.forEach(DocumentLine => {
        this.itemCodeT.push(DocumentLine.ItemCode)
        this.quantityT.push(DocumentLine.Quantity)
        this.warehouseCodeT.push(DocumentLine.WarehouseCode)
      });
      this.objetoComprar.DocumentLines.forEach(DocumentLine => {
        this.itemCodeR.push(DocumentLine.ItemCode)
        this.quantityR.push(DocumentLine.Quantity)
        this.warehouseCodeR.push(DocumentLine.WarehouseCode)
    
      });
      
    }

    if(textoJSON.IdIntegracion == 7){

      let objeto1 = JSON.parse(textoJSON.ObjetoIntegracion);
      console.log(objeto1)
      //Lo convertimos a JSON formateado con 2 espacios
      this.objetoComprai = objeto1;
      console.log(this.objetoComprai)
  
      let objeto2 = JSON.parse(textoJSON.ObjetoResultado);
      console.log(objeto2)
  
      this.objetoComprar = objeto2;
      console.log(this.objetoComprar)

      this.U_NumPorciposT = (this.objetoComprar.U_NumPorcipos)
      this.DocNumT = (this.objetoComprai.U_NumPorcipos)
      
      this.objetoComprai.DocumentLines.forEach(DocumentLine => {
        this.itemCodeT.push(DocumentLine.ItemCode)
        this.quantityT.push(DocumentLine.Quantity)
        this.warehouseCodeT.push(DocumentLine.WarehouseCode)
      });

      this.objetoComprar.DocumentLines.forEach(DocumentLine => {
        this.itemCodeR.push(DocumentLine.ItemCode)
        this.quantityR.push(DocumentLine.Quantity)
        this.warehouseCodeR.push(DocumentLine.WarehouseCode)
    
      });
      
    }
    
    if(textoJSON.IdIntegracion == 9){

      let objeto1 = JSON.parse(textoJSON.ObjetoIntegracion);
      console.log(objeto1)
      //Lo convertimos a JSON formateado con 2 espacios
      this.objetoSocioi = objeto1;
      console.log(this.objetoSocioi)
  
      let objeto2 = JSON.parse(textoJSON.ObjetoResultado);
      console.log(objeto2)
  
      this.objetoSocior = objeto2;
      console.log(this.objetoSocior)

      this.CardNameT = (this.objetoSocioi.CardName)
      this.CardCodeT = (this.objetoSocioi.CardCode)
      this.CardNameR = (this.objetoSocior.CardName)
      this.CardCodeR = (this.objetoSocior.CardCode)
      
    }
    // if(this.comparacionJson()){
    //   this.comparacion = true;
    // }
    //this.listaObjetoIntegracion = this.objetoIntegracion;
    if(textoJSON.Error == false)

    {
    this.verificado == false
    }

  }
  comparacionJson(data : Trans[]) {
    data.forEach(product => {
      this.json(product);
      if(this.DocNumT == this.U_NumPorciposT){
        console.log("verdad");
      } else {
        console.log("falso");
      }
    })
    
  }

  hideDialog() {
    this.productDialog = false;
    this.itemCodeR= [];
    this.quantityR = [];
    this.warehouseCodeR = [];
    this.itemCodeT = [] ;
    this.quantityT = [];
    this.warehouseCodeT = [];
    this.DocNumT = ""
    this.U_NumPorciposT = ""
  }

  hideDialog2() {
    this.productDialog2 = false;
    this.CardCodeR = ""
    this.CardCodeT = ""
    this.CardNameT = ""
    this.CardNameR= ""
  }

  //#region Excel

  exportExcelI() {
    import("xlsx").then(xlsx => {
        const worksheet = xlsx.utils.json_to_sheet(this.table);
        const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, "products");
        console.log(this.saveAsExcelFile)
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
