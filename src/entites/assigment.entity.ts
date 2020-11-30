import ClassModuleEntity from "./class-module.entity";
import UserEntity from "./user.entity";

export default interface AssigmentEntity {
    id: number;
    class_module: ClassModuleEntity;
    student: UserEntity;
    registration_date: string;
    state: number;
}
