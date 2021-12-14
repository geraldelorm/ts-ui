export interface portfolioResponse{
  id: number;
  name: string;
  description: number;
  createdAt: any;
  products:Array<Product>;
}

export class Product{
  id: number;
  ticker: string;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
  value:number
}


