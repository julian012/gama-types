import ResourceTypeEntity from "./resource-type.entity";

export default interface BookResourceEntity {
    id: number;
    book: BookResourceEntity;
    resource_type: ResourceTypeEntity;
    cover: string;
    title: string;
    topic: string;
    dba: string;
    performance: string;
    dimension: string;
    guiding: string;
    path: string;
    audio_intro: string;
    audio: string;
    description: string;
    has_song: boolean;
    background: string;
    state: number;
}
