let date = new Date;
export class ObjetoTraslador {
    DocEntry:string = '';
    DocNum:string = '';
    DocDate:Date = date;
    Series:string = '';
    U_NumPorcipos:string = '';
    StockTransferLines:[{
        ItemCode:string,
        Quantity:string,
        WarehouseCode:string
    }]
    ItemCode:string = '';
    Quantity:string = '';
    WarehouseCode:string = '';
    Price?:string = '';
}
