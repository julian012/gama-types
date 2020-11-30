import SeasonEntity from "./season.entity";
import CollegeEntity from "./college.entity";
import UserEntity from "./user.entity";

export default interface CollegeSeasonEntity {
    id: number;
    season: SeasonEntity;
    college: CollegeEntity;
    supervisor: UserEntity;
    teachers: Array<UserEntity>
}
