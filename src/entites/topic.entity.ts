import ClassModuleEntity from "./class-module.entity";

export default interface TopicEntity {
    id: number;
    name: string;
    class_module: ClassModuleEntity
}
