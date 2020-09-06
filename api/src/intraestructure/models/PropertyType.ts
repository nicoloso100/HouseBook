import { Schema, model, Document, mongo } from "mongoose";

export type IPropertyTypeModel = IPropertyType & Document;

const propertyTypeSchema = new Schema({
    name: String,
    description: String,
});

const PropertyTypeModel = model<IPropertyTypeModel>("PropertyType", propertyTypeSchema);
export default PropertyTypeModel;
