import LocationEntity from "./location.entity";
import RoleEntity from "./role.entity";

export default interface UserEntity {
    id: number;
    first_name: string;
    last_name: string,
    type_identification: number;
    identification: string;
    birthdate: string;
    gender: string;
    cellphone: string;
    username: string;
    email: string;
    character?: string;
    state: number;
    photo?: string;
    location: LocationEntity;
    role: RoleEntity;
}
