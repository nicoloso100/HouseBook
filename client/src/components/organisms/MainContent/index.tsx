import * as React from "react";
import {
  MainContentCont,
  MainFilterPanel,
  MainFilterList,
  MainLineSeparator,
  MainFilterListCont,
  MainFilterListPagination,
} from "./styles";
import HomeCompleteFilters from "components/molecules/HomeCompleteFilters";
import ListPagination from "components/molecules/ListPagination";
import PropertyCard from "components/molecules/PropertyCard";
import { defaultContact } from "constants/mainConstants";
import MyModal from "components/atoms/MyModal";
import MainContactCard from "components/molecules/MainContactCard";

const information: IPropertyCard = {
  type: "Arriendo",
  property: "apartamento",
  neighborhood: "El cortijo",
  bathrooms: 1,
  bedrooms: 3,
  garages: 1,
  area: 140,
  price: 120000000,
  image:
    "https://image.shutterstock.com/image-photo/contemporary-residential-building-exterior-daylight-260nw-1658896948.jpg",
};

interface MainContentProps {
  defaultFilter: IFilters;
  isEdit?: boolean;
}

const MainContent: React.FC<MainContentProps> = ({ defaultFilter, isEdit }) => {
  const [contact, setContact] = React.useState<IContact>(defaultContact);

  const onFilter = (filters: IFilters) => {
    console.log(filters);
  };

  const onCardClick = () => {
    console.log("card click");
  };

  const onButtonClick = () => {
    setContact({ ...defaultContact, open: true });
  };

  const onContactClose = () => {
    setContact(defaultContact);
  };

  return (
    <React.Fragment>
      <MyModal title="Contacto:" open={contact.open} onClose={onContactClose}>
        <MainContactCard />
      </MyModal>
      <MainContentCont>
        {!isEdit && (
          <React.Fragment>
            <MainFilterPanel>
              <HomeCompleteFilters
                defaultFilter={defaultFilter}
                onFilter={onFilter}
              />
            </MainFilterPanel>
            <MainLineSeparator />
          </React.Fragment>
        )}
        <MainFilterList>
          <MainFilterListCont>
            <PropertyCard
              onCardClick={onCardClick}
              onButtonClick={onButtonClick}
              information={information}
            />
            <PropertyCard
              onCardClick={onCardClick}
              onButtonClick={onButtonClick}
              information={information}
            />
            <PropertyCard
              onCardClick={onCardClick}
              onButtonClick={onButtonClick}
              information={information}
            />
            <PropertyCard
              onCardClick={onCardClick}
              onButtonClick={onButtonClick}
              information={information}
            />
            <PropertyCard
              onCardClick={onCardClick}
              onButtonClick={onButtonClick}
              information={information}
            />
            <PropertyCard
              onCardClick={onCardClick}
              onButtonClick={onButtonClick}
              information={information}
            />
            <PropertyCard
              onCardClick={onCardClick}
              onButtonClick={onButtonClick}
              information={information}
            />
            <PropertyCard
              onCardClick={onCardClick}
              onButtonClick={onButtonClick}
              information={information}
            />
            <PropertyCard
              onCardClick={onCardClick}
              onButtonClick={onButtonClick}
              information={information}
            />
          </MainFilterListCont>
          <MainFilterListPagination>
            <ListPagination />
          </MainFilterListPagination>
        </MainFilterList>
      </MainContentCont>
    </React.Fragment>
  );
};

export default MainContent;
