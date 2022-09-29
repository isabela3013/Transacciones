let date = new Date;
export class ObjetoComprai {
        DocEntry:string = '';
        DocNum:string = '';
        DocDate:Date = date;
        Series:string = '';
        U_NumPorcipos:string = '';
        DocumentLines:[{
            ItemCode:string,
            Quantity:string,
            WarehouseCode:string,

        }];
        DocumentReferences:[{
            RefDocEntr:string,
        }];
        Quantity:string = '';
        WarehouseCode:string = '';
        Price?:string = '';
        RefDocEntr:string = '';
    }