import ActivityEntity from "./activity.entity";
import UserEntity from "./user.entity";

export default interface ActivityEvaluationEntity {
   id: number;
   activity: ActivityEntity;
   student: UserEntity;
}
