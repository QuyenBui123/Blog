import React from "react";
import Sidebar from "../../components/Sidebar";
import PostCardnew from "../../components/Postcardnew";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-1 container mx-auto px-4 py-8">
        <main className="w-full lg:w-3/4 px-4">
          <PostCardnew
            title="Modern and colorful style of caricatures created by AI"
            excerpt="Caricatures have long been a beloved form of art and satire. With the advent of artificial intelligence (AI), the world…"
            imageUrl="https://themes.estudiopatagon.com/wordpress/wavy/wp-content/uploads/2023/10/Untitled-3-660x660.webp"
          />
          <PostCardnew
            title="Modern and colorful style of caricatures created by AI"
            excerpt="Caricatures have long been a beloved form of art and satire. With the advent of artificial intelligence (AI), the world…"
            imageUrl="https://themes.estudiopatagon.com/wordpress/wavy/wp-content/uploads/2023/10/Untitled-3-660x660.webp"
          />
          <PostCardnew
            title="Modern and colorful style of caricatures created by AI"
            excerpt="Caricatures have long been a beloved form of art and satire. With the advent of artificial intelligence (AI), the world…"
            imageUrl="https://themes.estudiopatagon.com/wordpress/wavy/wp-content/uploads/2023/10/Untitled-3-660x660.webp"
          />
          <PostCardnew
            title="Modern and colorful style of caricatures created by AI"
            excerpt="Caricatures have long been a beloved form of art and satire. With the advent of artificial intelligence (AI), the world…"
            imageUrl="https://themes.estudiopatagon.com/wordpress/wavy/wp-content/uploads/2023/10/Untitled-3-660x660.webp"
          />
        </main>
        <aside className="w-full hidden lg:block lg:w-1/4 px-4">
          <Sidebar />
        </aside>
      </div>
    </div>
  );
};

export default Home;
