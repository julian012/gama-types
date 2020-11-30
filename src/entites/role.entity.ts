import PermissionEntity from "./permission.entity";

export default interface RoleEntity {
    id: number;
    name_role: string;
    state_role: number;
    permissions: Array<PermissionEntity>
}
