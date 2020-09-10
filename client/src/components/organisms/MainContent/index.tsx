import * as React from "react";
import {
  MainContentCont,
  MainFilterPanel,
  MainFilterList,
  MainLineSeparator,
  MainFilterListCont,
  MainFilterListPagination,
  FilterContainer,
  FilterResponsiveContainer,
  ToggleFilterResponsiveCont,
} from "./styles";
import HomeCompleteFilters from "components/molecules/HomeCompleteFilters";
import ListPagination from "components/molecules/ListPagination";
import PropertyCard from "components/molecules/PropertyCard";
import { defaultContact } from "constants/mainConstants";
import MyModal from "components/atoms/MyModal";
import MainContactCard from "components/molecules/MainContactCard";
import MainContentContext from "states/context/mainContentContext";
import { Collapse } from "reactstrap";
import NoDataComponent from "components/molecules/NoDataComponent";

interface MainContentProps {
  defaultFilter: IFilters;
  isEdit?: boolean;
  onAction?: (id: string) => void;
  posts: ISummaryPost[];
  onFilter?: (filters: IFilters) => void;
}

const MainContent: React.FC<MainContentProps> = ({
  defaultFilter,
  isEdit,
  onAction,
  posts,
  onFilter,
}) => {
  const context = React.useContext(MainContentContext);
  const [contact, setContact] = React.useState<IContact>(defaultContact);
  const [collapse, setCollapse] = React.useState<boolean>(false);

  const onCardClick = (id: string) => {
    window.open(`#/post/${id}`, "_blank");
  };

  const onContactClose = () => {
    setContact(defaultContact);
  };

  const onButtonClick = (id: string) => {
    if (context.isContact) setContact({ ...defaultContact, open: true });
    else if (onAction && context.isEdit) onAction(id);
    else if (onAction && context.isRemove) onAction(id);
  };

  return (
    <React.Fragment>
      <MyModal title="Contacto:" open={contact.open} onClose={onContactClose}>
        <MainContactCard />
      </MyModal>
      <MainContentCont>
        {!isEdit && onFilter && (
          <React.Fragment>
            <FilterContainer>
              <MainFilterPanel>
                <HomeCompleteFilters
                  defaultFilter={defaultFilter}
                  onFilter={onFilter}
                />
              </MainFilterPanel>
              <MainLineSeparator />
            </FilterContainer>
            <FilterResponsiveContainer>
              <MainFilterPanel>
                <ToggleFilterResponsiveCont>
                  <label className="custom-toggle">
                    <input
                      type="checkbox"
                      onChange={(e) => setCollapse(e.target.checked)}
                    />
                    <span className="custom-toggle-slider rounded-circle" />
                  </label>
                  <span>
                    {!collapse ? "Mostrar filtros" : "Ocultar filtros"}
                  </span>
                </ToggleFilterResponsiveCont>
                <Collapse isOpen={collapse}>
                  <HomeCompleteFilters
                    defaultFilter={defaultFilter}
                    onFilter={onFilter}
                  />
                </Collapse>
              </MainFilterPanel>
            </FilterResponsiveContainer>
          </React.Fragment>
        )}
        <MainFilterList>
          {posts.length > 0 ? (
            <MainFilterListCont>
              {posts.map((post) => {
                return (
                  <PropertyCard
                    key={post._id}
                    onCardClick={onCardClick}
                    onButtonClick={!context.isShow ? onButtonClick : undefined}
                    information={post}
                  />
                );
              })}
            </MainFilterListCont>
          ) : (
            <NoDataComponent />
          )}
          <MainFilterListPagination>
            <ListPagination />
          </MainFilterListPagination>
        </MainFilterList>
      </MainContentCont>
    </React.Fragment>
  );
};

export default MainContent;
