import ClassModuleEntity from "./class-module.entity";

export default interface ClassFileEntity {
    id: number;
    title: string;
    description: string;
    file: string;
    upload_date: string;
    state: number;
    class_module: ClassModuleEntity;
}
