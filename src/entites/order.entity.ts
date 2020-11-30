import LocationEntity from "./location.entity";
import ProductEntity from "./product.entity";

export default interface OrderEntity {
    id: number;
    order_date: string;
    first_name: string;
    last_name: string;
    type_identification: number;
    identification: string;
    cellphone: string;
    email: string;
    address: string;
    additional_description: string;
    order_price: number;
    location: LocationEntity;
    products: Array<ProductEntity>;
}
