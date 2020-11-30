import BookEntity from "./book.entity";

export default interface BookPreviewEntity {
    id: number;
    book: BookEntity;
    url: string;
}
