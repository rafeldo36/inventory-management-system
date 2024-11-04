import { Schema, model } from "mongoose";

const itemSchema = new Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  unit: { type: String, required: true },
});

const Item = model("Item", itemSchema);

export default Item;
