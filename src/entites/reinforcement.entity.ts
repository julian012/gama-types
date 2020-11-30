import UserEntity from "./user.entity";
import ClassModuleEntity from "./class-module.entity";

export default interface ReinforcementEntity {
    id: number;
    title: string;
    instructions: string;
    estimated_time: number;
    date_start: string;
    date_end: string;
    student: UserEntity;
    class_module: ClassModuleEntity;
    file: string;
}
