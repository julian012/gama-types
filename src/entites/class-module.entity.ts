import SubjectEntity from "./subject.entity";
import CourseEntity from "./course.entity";
import UserEntity from "./user.entity";
import BookEntity from "./book.entity";

export default interface ClassModuleEntity {
    id: number;
    name: string;
    description: string;
    token_access: string;
    subject: SubjectEntity;
    course: CourseEntity;
    teacher: UserEntity;
    book: BookEntity;
    state: string;
    creation_date: string;
}
