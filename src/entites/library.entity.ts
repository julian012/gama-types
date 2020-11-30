import BookEntity from "./book.entity";
import UserEntity from "./user.entity";

export default interface LibraryEntity {
    id: number;
    book: BookEntity;
    favorite: boolean;
    owner: UserEntity;
    annotations: string;
}
