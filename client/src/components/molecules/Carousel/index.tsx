import * as React from "react";
import { Slide, ImageWithZoom, CarouselProvider } from "pure-react-carousel";
import {
  CustomButtonBack,
  CustomButtonFirst,
  CustomButtonLast,
  CustomButtonNext,
  CustomDotGroup,
  CustomSlider,
} from "./styles";

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
      <CustomButtonFirst>First</CustomButtonFirst>
      <CustomButtonBack>Back</CustomButtonBack>
      <CustomButtonNext>Next</CustomButtonNext>
      <CustomButtonLast>Last</CustomButtonLast>
      <CustomDotGroup dotNumbers />
    </CarouselProvider>
  );
};

export default Crousel;
