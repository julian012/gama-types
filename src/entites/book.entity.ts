import CategoryEntity from "./category.entity";
import GradeEntity from "./grade.entity";
import SubjectEntity from "./subject.entity";

export default interface BookEntity {
   id: number;
   title: string;
   category: CategoryEntity;
   book_type: number;
   grade: GradeEntity;
   subject: SubjectEntity;
   description: string;
   cover: string;
   url_path: string;
}
