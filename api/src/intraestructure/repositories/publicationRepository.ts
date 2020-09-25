import { HandledError } from "../../utils/errorHandler/customError";
import PublicationModel, { IPublicationModel } from "../models/Publications";
class PublicationRepository {
  async createPublication(data: IPublication): Promise<IPublication> {
    try {
      const publication = new PublicationModel();
      publication.user_id = data.user_id;
      publication.title = data.title;
      publication.price = data.price;
      publication.dimensions = data.dimensions;
      publication.bathrooms = data.bathrooms;
      publication.rooms = data.rooms;
      publication.parkings = data.parkings;
      publication.neighborhood = data.neighborhood;
      publication.ubication = data.ubication;
      publication.nearby_sites = data.nearby_sites;
      publication.stratum = data.stratum;
      publication.antiquity = data.antiquity;
      publication.type_of_housing = data.type_of_housing;
      publication.type_of_sale = data.type_of_sale;
      publication.description = data.description;
      publication.city = data.city;
      publication.images = data.images;
      publication.thumbnail = data.thumbnail;
      publication.web_site = data.web_site;
      publication.whatsapp = data.whatsapp;
      publication.email = data.email;
      publication.phone = data.phone;
      publication.created_at = new Date();
      publication.expiration_date = new Date(publication.created_at.getDay + "/" + publication.created_at.getMonth + "/" + (publication.created_at.getFullYear() + 1));
      publication.save();
      return publication._id;
    } catch (error) {
      return error;
    }
  }
  async getPublicationById(_id: any): Promise<IPublicationModel | null> {
    try {
      const publication: any = await PublicationModel.findOne({ _id: _id });
      if (publication != null && publication.expiration_date > new Date()){
        publication.expired = true
      } else {
        publication.expired = false
      }
      return publication;
    } catch (error) {
      return error;
    }
  }
  async getPublicationByUser(user_id: any) {
    try {
      const publications: any = await PublicationModel.find({ user_id: user_id });
      publications.forEach(function (publication: any) {
          if (publication != null && publication.expiration_date > new Date()) {
            publication.expired = true;
          } else {
            publication.expired = false;
          }
        });
      return publications;
    } catch (error) {
      return error;
    }
  }
  async getPublicationByFilters(type_of_housing: object, type_of_sale: object, city: any) {
    let query: any = {};
    if (
      Object.keys(type_of_housing).length > 0 &&
      Object.keys(type_of_sale).length > 0 &&
      Object.keys(city).length > 0 
    ) {
      query = { type_of_housing, type_of_sale, city};
    } else if (Object.keys(type_of_housing).length > 0) {
      query = { type_of_housing: type_of_housing };
    } else if (Object.keys(type_of_sale).length > 0) {
      query = { type_of_sale: type_of_sale };
    } else if (Object.keys(city).length > 0) {
      query = { city: city};
    }
    var options = {
      "limit": 20,
      "skip": 10
    }
    const publications = await PublicationModel.find({query, expiration_date: {$gte: new Date()}}, options);
    return publications;
  }

  async deletePublicationById(_id: number) {
    try {
      await PublicationModel.deleteOne({ _id: _id });
      return;
    } catch (error) {
      return error;
    }
  }
  async updatePublication(data: IPublication, _id: any) {
    try {
      const publication = await PublicationModel.findOne({ _id: _id });
      if (publication == null) {
        throw new HandledError("No se ha encontrado el id de la publicación");
      }
      publication.title = data.title;
      publication.price = data.price;
      publication.dimensions = data.dimensions;
      publication.bathrooms = data.bathrooms;
      publication.rooms = data.rooms;
      publication.parkings = data.parkings;
      publication.neighborhood = data.neighborhood;
      publication.ubication = data.ubication;
      publication.nearby_sites = data.nearby_sites;
      publication.stratum = data.stratum;
      publication.antiquity = data.antiquity;
      publication.type_of_housing = data.type_of_housing;
      publication.type_of_sale = data.type_of_sale;
      publication.description = data.description;
      publication.city = data.city;
      publication.thumbnail = data.thumbnail;
      publication.web_site = data.web_site;
      publication.whatsapp = data.whatsapp;
      publication.email = data.email;
      publication.phone = data.phone;
      publication.save();
      return publication._id;
    } catch (error) {
      throw new HandledError(error.message);
    }
  }
}

const publicationRepository = new PublicationRepository();
export default publicationRepository;
