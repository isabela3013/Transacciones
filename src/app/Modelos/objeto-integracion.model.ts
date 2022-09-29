let date = new Date;
export class ObjetoIntegracion {
    DocEntry:string = '';
    DocNum:string = '';
    DocDate:Date = date;
    Series:string = '';
    U_NumPorcipos:string = '';
    DocumentLines:[{
        ItemCode:string,
        Quantity:string,
        WarehouseCode:string,
    }]
    Quantity:string = '';
    WarehouseCode:string = '';
    Price?:string = '';
}
