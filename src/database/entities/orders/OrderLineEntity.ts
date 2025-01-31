import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import ProductEntity from "../products/ProductEntity";
import OrderEntity from "./OrderEntity";
import BaseEntity from "../BaseEntity";

@Entity("order_lines")
class OrderLineEntity extends BaseEntity {
  @ManyToOne(() => OrderEntity, (order) => order.order_lines, { onDelete: "CASCADE" })
  @JoinColumn({ name: "order_id" })
  order!: OrderEntity;

  @Column({ type: "int", nullable: false })
  order_id!: number;

  @ManyToOne(() => ProductEntity, (product) => product.id)
  @JoinColumn({ name: "product_id" })
  product!: ProductEntity;

  @Column({ type: "int", nullable: false })
  product_id!: number;

  @Column({ type: "int", nullable: false })
  quantity!: number;
}

export default OrderLineEntity;
