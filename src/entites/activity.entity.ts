import BookResourceEntity from "./book-resource.entity";
import TopicEntity from "./topic.entity";
import ClassModuleEntity from "./class-module.entity";

export default interface ActivityEntity {
    id: number;
    resource: BookResourceEntity;
    title: string;
    instructions: string;
    estimated_time: number;
    date_start: string;
    date_end: string;
    attempts: number;
    topic: TopicEntity;
    class_module: ClassModuleEntity;
    state: number;

}
