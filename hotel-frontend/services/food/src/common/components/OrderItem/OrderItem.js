import React from "react";

// styles
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  OrderWrapper,
  OrderListing,
  OrderDelivery,
} from "./styles";

const calcPrice = (order) => {
  let total = 0;
  order.forEach((item) => (total += item.food?.price * item.quantity));
  return total;
};

const OrderItem = ({ id, order, createdAt }) => {
  return (
    <Card>
      <CardHeader>
        <h2>Order Ref: {id}</h2>
        <p className="order_status">
          Order status: <span>Pending</span>
        </p>
      </CardHeader>
      <CardBody>
        <OrderWrapper>
          {order.map((item) => (
            <OrderListing>
              <p>{item.food?.name}</p>
              <h5 className="quantity">x{item.quantity}</h5>
              <h5 className="price">${item.food?.price}</h5>
            </OrderListing>
          ))}
        </OrderWrapper>
        <OrderDelivery>
          <p>Estimated Delivery time</p>
          <h3>12:30PM</h3>
        </OrderDelivery>
      </CardBody>
      <CardFooter>
        <p>Total</p>
        <h2>${calcPrice(order)}</h2>
      </CardFooter>
    </Card>
  );
};

export default OrderItem;
