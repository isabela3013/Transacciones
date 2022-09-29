let date = new Date;
export class ObjetoFacturai {
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
    
    Quantity:string = '';
    WarehouseCode:string = '';
    Price?:string = '';
}
