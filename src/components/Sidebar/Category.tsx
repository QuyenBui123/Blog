// src/components/CategoryCarousel.tsx
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const categories = [
  {
    link: "https://themes.estudiopatagon.com/wordpress/wavy/category/buildings/",
    imgSrc:
      "https://themes.estudiopatagon.com/wordpress/wavy/wp-content/uploads/2023/12/Firefly-edificio-blanco-render-3d-sobre-fondo-plano-colores-pasteles-suaves-fondo-de-1-color-azul.jpg-660x660.webp",
    alt: "Buildings",
    title: "Buildings",
  },
  {
    link: "https://themes.estudiopatagon.com/wordpress/wavy/category/design/",
    imgSrc:
      "https://themes.estudiopatagon.com/wordpress/wavy/wp-content/uploads/2023/12/Untitled-7-1.jpeg-660x660.webp",
    alt: "Design",
    title: "Design",
  },
  {
    link: "https://themes.estudiopatagon.com/wordpress/wavy/category/nature/",
    imgSrc:
      "https://themes.estudiopatagon.com/wordpress/wavy/wp-content/uploads/2023/01/Firefly-chimpance-beb-render-3d-colores-pasteles-suaves-fondo-simple-de-1-o-2-colores-82745-2-660x660.webp",
    alt: "Nature",
    title: "Nature",
  },
  {
    link: "https://themes.estudiopatagon.com/wordpress/wavy/category/sports/",
    imgSrc:
      "https://themes.estudiopatagon.com/wordpress/wavy/wp-content/uploads/2023/10/Firefly-tierno-bal-n-de-b-isbol-render-3d-sobre-fondo-plano-colores-pasteles-suaves-fondo-de-1-o-1-1-660x660.webp",
    alt: "Sports",
    title: "Sports",
  },
  {
    link: "https://themes.estudiopatagon.com/wordpress/wavy/category/technology/",
    imgSrc:
      "https://themes.estudiopatagon.com/wordpress/wavy/wp-content/uploads/2023/10/Firefly-joystick-blanco-render-3d-sobre-fondo-plano-colores-pasteles-suaves-fondo-de-1-o-2-colore-2-1-1-660x660.webp",
    alt: "Technology",
    title: "Technology",
  },
];

const CategoryCarousel: React.FC = () => {
  const sliderRef = useRef<Slider>(null);

  //   const next = () => {
  //     sliderRef.current?.slickNext();
  //   };

  //   const previous = () => {
  //     sliderRef.current?.slickPrev();
  //   };

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  return (
    <div className="category-carousel">
      <Slider ref={sliderRef} {...settings}>
        {categories.map((category, index) => (
          <div key={index}>
            <a href={category.link} className="" tabIndex={-1}>
              <img
                className=" rounded-lg"
                src={category.imgSrc}
                alt={category.alt}
              />
            </a>
            <div className="flex justify-between mt-6">
              <span>{category.title}</span>
              {/* <div className=' flex '>
              <button onClick={previous} className=" mr-4">Previous</button>
              <button onClick={next}  >next</button>
              </div> */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CategoryCarousel;
