import CityModel from "../models/City";

class GeneralRepository {
  async getCities(filter: string): Promise<ICity[]> {
    const cities = await CityModel.find({
      municipio: { $regex: filter, $options: "i" },
    });
    return cities;
  }
}

const generalRepository = new GeneralRepository();
export default generalRepository;
