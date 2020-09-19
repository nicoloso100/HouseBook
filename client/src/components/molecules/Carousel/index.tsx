import * as React from "react";
import { Slide, ImageWithZoom, CarouselProvider } from "pure-react-carousel";
import ImgsViewer from "react-images-viewer";
import {
  CustomButtonBack,
  CustomButtonFirst,
  CustomButtonLast,
  CustomButtonNext,
  CustomDotGroup,
  CustomSlider,
} from "./styles";
import { defaultOpenModal } from "constants/userConstants";

interface CrouselProps {
  images: string[];
}

const Crousel: React.FC<CrouselProps> = ({ images }) => {
  const [openModal, setOpenModal] = React.useState<IOpenModal>(
    defaultOpenModal
  );

  const imagesView = React.useMemo(() => {
    return images.map((image) => ({ src: image }));
  }, [images]);

  const onOpenModal = (index: number) => {
    setOpenModal({
      open: true,
      value: index,
    });
  };
  const onCloseModal = () => {
    setOpenModal(defaultOpenModal);
  };

  const onClickNext = () => {
    setOpenModal((x) => ({ ...x, value: x.value + 1 }));
  };

  const onClickPrev = () => {
    setOpenModal((x) => ({ ...x, value: x.value - 1 }));
  };

  const onClickThumbnail = (index: number) => {
    setOpenModal((x) => ({ ...x, value: index }));
  };

  return (
    <>
      <ImgsViewer
        showThumbnails
        backdropCloseable
        currImg={openModal.value}
        imgs={imagesView}
        isOpen={openModal.open}
        onClose={onCloseModal}
        onClickNext={onClickNext}
        onClickPrev={onClickPrev}
        onClickThumbnail={onClickThumbnail}
      />
      <CarouselProvider
        visibleSlides={2}
        totalSlides={images.length}
        step={2}
        dragStep={2}
        naturalSlideWidth={800}
        naturalSlideHeight={600}
      >
        <CustomSlider>
          {images.map((image, index) => {
            return (
              <div key={index} onClick={() => onOpenModal(index)}>
                <Slide index={index}>
                  <ImageWithZoom src={image} />
                </Slide>
              </div>
            );
          })}
        </CustomSlider>
        <CustomButtonFirst>Primera</CustomButtonFirst>
        <CustomButtonBack>Anterior</CustomButtonBack>
        <CustomButtonNext>Siguiente</CustomButtonNext>
        <CustomButtonLast>Última</CustomButtonLast>
        <CustomDotGroup dotNumbers />
      </CarouselProvider>
    </>
  );
};

export default Crousel;
