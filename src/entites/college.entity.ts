import LocationEntity from "./location.entity";
import SectorEntity from "./sector.entity";
import WorkdayEntity from "./workday.entity";

export default interface CollegeEntity {
    id: number;
    name: string;
    address: string;
    phone: string;
    email: string;
    nit: string;
    dane: string;
    state: number;
    location: LocationEntity;
    sector: SectorEntity;
    workday: WorkdayEntity;
}
