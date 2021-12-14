export interface OrderResponse{
  id : number
  product: string
  quantity : number
  price :number
  side : string
  status : string
  exchangeTradedOn : number
  createdAt: number
  orderIdFromExchange: null
  updatedAt: number
 }


 export interface serverResponse{
  data: any;
  errors: Array<string>;
  message: string;
  status: string;
  timestamp: string;
 }
