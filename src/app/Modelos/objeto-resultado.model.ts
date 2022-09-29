let date = new Date;
export class ObjetoResultado {
    DocEntry:string = '';
    DocNum:string = '';
    DocDate:Date = date;
    Series:string = '';
    U_NumPorcipos:string = '';
    DocumentLines:[{
        ItemCode:string,
        Quantity:string,
        WarehouseCode:string
    }]
    ItemCode:string = '';
    Quantity:string = '';
    WarehouseCode:string = '';
    Price?:string = '';

}
