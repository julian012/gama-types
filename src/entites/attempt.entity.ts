import ActivityEvaluationEntity from "./activity-evaluation.entity";

export default interface AttemptEntity {
    id: number;
    activity_evaluation: ActivityEvaluationEntity
}
