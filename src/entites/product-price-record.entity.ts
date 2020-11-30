import ProductEntity from "./product.entity";

export default interface ProductPriceRecordEntity {
    id: number;
    product: ProductEntity;
    start_date: string;
    end_date: string;
    price_book_record: number;
}
