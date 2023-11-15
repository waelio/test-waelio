import mongoose from "mongoose";
const { Schema } = mongoose;

export const Products = new Schema({
  name: "ProductsSchema",
  schema: {
    id: {
      type: Number,
    },
    title: {
      type: String,
      unique: true,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    url: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    created_at: Date,
  },
});
export const OrderItem = new Schema({
  name: "OrderItemSchema",
  schema: {
    id: {
      type: Number,
    },
    orderId: {
      type: Number,
      required: true,
    },
    productId: {
      type: Number,
      required: true,
    },
    created_at: {
      type: Date,
    },
    product: [Products],
  },
});

export const Orders = new Schema({
  name: "OrdersSchema",
  schema: {
    id: {
      type: Number,
    },

    userId: {
      type: String,
    },

    stripeId: {
      type: String,
      required: false,
    },

    name: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: false,
    },

    zipcode: {
      type: String,
    },

    city: {
      type: String,
      required: false,
    },

    country: {
      type: String,
      required: true,
    },

    created_at: {
      type: Date,
    },
  },
});
Orders.add({ orderItem: OrderItem });
OrderItem.add({ order: Orders });
Products.add({ orderItem: OrderItem });
