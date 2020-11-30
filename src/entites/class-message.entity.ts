import ClassModuleEntity from "./class-module.entity";

export default interface ClassMessageEntity {
    id: number;
    class_module: ClassModuleEntity;
    title: string;
    description: string;
    published_date: string;
}
