import ProductEntity from "./product.entity";

export default interface CommentEntity {
    id: number;
    title: string;
    message: string;
    product: ProductEntity;
}
