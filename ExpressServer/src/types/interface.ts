export interface ProductDetails {
  ProductID?: number;
  ProductName?: string;
  Category?: string;
  MRP?: number;
  Discount?: number;
}

export interface DataManagerRequest {
  skip?: number;
  take?: number;
  requiresCounts?: boolean;
}