import OrderEntity from "./order.entity";

export default interface OrderStateEntity {
    id: number;
    status_date: string;
    status: string;
    order: OrderEntity;
}
