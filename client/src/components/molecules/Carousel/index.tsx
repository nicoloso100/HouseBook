import * as React from "react";
import {
  Slide,
  ButtonBack,
  ButtonNext,
  ImageWithZoom,
  ButtonFirst,
  ButtonLast,
  DotGroup,
  CarouselProvider,
} from "pure-react-carousel";
import { CustomSlider } from "./styles";

interface CrouselProps {
  images: string[];
}

const Crousel: React.FC<CrouselProps> = ({ images }) => {
  return (
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
            <Slide key={index} index={index}>
              <ImageWithZoom src={image} />
            </Slide>
          );
        })}
      </CustomSlider>
      <ButtonFirst>First</ButtonFirst>
      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
      <ButtonLast>Last</ButtonLast>
      <DotGroup dotNumbers />
    </CarouselProvider>
  );
};

export default Crousel;
