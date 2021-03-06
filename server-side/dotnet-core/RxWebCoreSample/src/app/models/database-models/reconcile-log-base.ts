import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class ReconcileLogBase {

//#region reconcileLogId Prop
        @prop()
        reconcileLogId : number;
//#endregion reconcileLogId Prop


//#region quantity Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        quantity : number;
//#endregion quantity Prop


//#region comments Prop
        @maxLength({value:4000})
        comments : string;
//#endregion comments Prop


//#region reconcileDate Prop
        @required()
        reconcileDate : Date;
//#endregion reconcileDate Prop


//#region reconcileUserId Prop
        @prop()
        reconcileUserId : number;
//#endregion reconcileUserId Prop


//#region reconcileLoginId Prop
        @prop()
        reconcileLoginId : number;
//#endregion reconcileLoginId Prop


//#region deliveryDetailId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        deliveryDetailId : number;
//#endregion deliveryDetailId Prop


//#region createdBy Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        createdBy : number;
//#endregion createdBy Prop


//#region createdDateTime Prop
        @required()
        createdDateTime : any;
//#endregion createdDateTime Prop


//#region updatedBy Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        updatedBy : number;
//#endregion updatedBy Prop


//#region updatedDateTime Prop
        @required()
        updatedDateTime : any;
//#endregion updatedDateTime Prop









}