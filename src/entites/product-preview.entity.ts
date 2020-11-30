import ProductEntity from "./product.entity";

export default interface ProductPreviewEntity {
    id: number;
    product: ProductEntity;
    url: string;
}
