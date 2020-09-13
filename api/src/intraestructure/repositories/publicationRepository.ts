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
      publication.save();
      return publication._id;
    } catch (error) {
      return error;
    }
  }
  async getPublicationById(_id: any): Promise<IPublicationModel | null> {
    try {
      const publication = await PublicationModel.findOne({ _id: _id });
      return publication;
    } catch (error) {
      return error;
    }
  }
  async getPublicationByUser(user_id: any) {
    try {
      const publications = await PublicationModel.find({ user_id: user_id });
      return publications;
    } catch (error) {
      return error;
    }
  }
  async getPublicationByFilters(type_of_housing: object, type_of_sale: object) {
    let query: any = {};
    if (
      Object.keys(type_of_housing).length > 0 &&
      Object.keys(type_of_sale).length > 0
    ) {
      query = { type_of_housing, type_of_sale };
    } else if (Object.keys(type_of_housing).length > 0) {
      query = { type_of_housing: type_of_housing };
    } else if (Object.keys(type_of_sale).length > 0) {
      query = { type_of_sale: type_of_sale };
    }
    const publications = await PublicationModel.find(query);
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
  async updatePublication(data: IPublication, _id: any){
    try {
      const publication: any  = await PublicationModel.find({ _id: _id});
      if (publication.length == 0){
        return false;
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
      return error;
    }
  }
}

const publicationRepository = new PublicationRepository();
export default publicationRepository;
