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
      publication.parkings = data.parkings;
      publication.neighborhood = data.neighborhood;
      publication.ubication = data.ubication;
      publication.nearby_sites = data.nearby_sites;
      publication.stratum = data.stratum;
      publication.antiquity = data.antiquity;
      publication.type_of_housing = data.type_of_housing;
      publication.type_of_sale = data.type_of_sale;
      publication.description = data.description;
      publication.created_at = new Date();
      publication.save();
      return publication._id;
    } catch (error) {
      return error;
    }
  }
  async getPublications() {
    try {
      const publications = await PublicationModel.find({});
      return publications;
    } catch (error) {
      return error;
    }
  }
  async getPublicationById(_id: any) {
    try {
      const publications = await PublicationModel.find({ _id: _id });
      if (publications.length > 0) {
        return {
          status: true,
          message: "Publicación encontrada",
          data: publications,
        };
      } else {
        return {
          status: false,
          message: "No se encuentra la publicación",
          data: [],
        };
      }
    } catch (error) {
      return {
        status: false,
        message: "No se encuentra la publicación",
        data: error,
      };
    }
  }
  async getPublicationsByType(type: number, search: string) {
    try {
      let publications;
      switch (type) {
        case 1:
          publications = await PublicationModel.find({ title: search });
          break;
        case 2:
          publications = await PublicationModel.find({ dimensions: search });
          break;
      }
      return publications;
    } catch (error) {
      return error;
    }
  }
  async deletePublicationById(_id: number) {
    try {
      await PublicationModel.deleteOne({ _id: _id });
      return;
    } catch (error) {
      return error;
    }
  }
}

const publicationRepository = new PublicationRepository();
export default publicationRepository;
