import BookEntity from "./book.entity";
import RoleEntity from "./role.entity";
import UserEntity from "./user.entity";

export default interface PinEntity {
    id: number;
    token: string;
    creation_date: string;
    registration_date: string;
    expiration_date: string;
    book: BookEntity;
    role: RoleEntity;
    user: UserEntity;
}
