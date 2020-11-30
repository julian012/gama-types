import ProductTypeEntity from "./product-type.entity";
import BookEntity from "./book.entity";

export default interface ProductEntity {
    id: number;
    title: string;
    type: ProductTypeEntity;
    description: string;
    cover: string;
    state: number;
    stock: number;
    publication_date: string;
    books: Array<BookEntity>;
}
