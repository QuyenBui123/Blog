// import { useEffect, useRef, useState } from "react";
import Category from "./Category";
import About from "../../pages/About";
import Popular from "./Popular";
// import Sticky from 'react-stickynode';

export interface PostCardProps {
  title: string;
  excerpt: string;
  imageUrl: string;
}
export interface CategoryProps {
  imageUrl: string;
}

const Sidebar: React.FC = () => {
  // const [isSticky, setIsSticky] = useState(false);
  // const sidebarRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const footer = document.getElementById('footer');
  //     const sidebar = sidebarRef.current;

  //     if (footer && sidebar) {
  //       const footerRect = footer.getBoundingClientRect();
  //       const sidebarRect = sidebar.getBoundingClientRect();
  //       if (footerRect.top <= window.innerHeight) {
  //         setIsSticky(false);
  //       } else {
  //         setIsSticky(true);
  //       }
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    // <Sticky enabled={true} >
    <div>
      <div className="bg-orange-100 shadow-md rounded-lg p-4 max-w-full mb-7">
        <section className="w-full">
          <h3 className="text-2xl pb-6 font-semibold">About Me</h3>
          <About
            title="Modern and colorful style of caricatures created by AI"
            excerpt="Caricatures have long been a beloved form of art and satire. With the advent of artificial intelligence (AI), the world…"
            imageUrl="https://themes.estudiopatagon.com/wordpress/wavy/wp-content/uploads/2023/10/Untitled-3-660x660.webp"
          />
        </section>
      </div>
      <div className="bg-orange-100 shadow-md rounded-lg p-4 max-w-full">
        <section className="w-full">
          <h3 className="text-2xl pb-6 font-semibold">Popular Articles</h3>
          <Popular
            title="Modern and colorful style of caricatures created by AI"
            excerpt="Caricatures have long been a beloved form of art and satire. With the advent of artificial intelligence (AI), the world…"
            imageUrl="https://themes.estudiopatagon.com/wordpress/wavy/wp-content/uploads/2023/10/Untitled-3-660x660.webp"
          />
          <Popular
            title="Modern and colorful style of caricatures created by AI"
            excerpt="Caricatures have long been a beloved form of art and satire. With the advent of artificial intelligence (AI), the world…"
            imageUrl="https://themes.estudiopatagon.com/wordpress/wavy/wp-content/uploads/2023/10/Untitled-3-660x660.webp"
          />
          <Popular
            title="Modern and colorful style of caricatures created by AI"
            excerpt="Caricatures have long been a beloved form of art and satire. With the advent of artificial intelligence (AI), the world…"
            imageUrl="https://themes.estudiopatagon.com/wordpress/wavy/wp-content/uploads/2023/10/Untitled-3-660x660.webp"
          />
        </section>
      </div>
      <div className="mt-7 bg-orange-100 shadow-md rounded-lg p-4 max-w-full">
        <Category />
      </div>
    </div>
    // </Sticky>
  );
};

export default Sidebar;
