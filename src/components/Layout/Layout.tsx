// src/components/Layout.tsx
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}
// const backgroundStyle = {
//   backgroundImage:
//     "url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgICAgIBwgHBwcHBwoHBwcHBw8ICQcNFREWFhURExMYHSggGCYlJxMTITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NDw0NDisZFRk3NystNystLSsrKysrKy0rKysrKystKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALcBEwMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAABAAIDBAcF/8QAHhABAQEBAAICAwAAAAAAAAAAAAECERIxAyFBUWH/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EABcRAQEBAQAAAAAAAAAAAAAAAAABEQL/2gAMAwEAAhEDEQA/APo2Mu2YMRuRXvqkbkEjciMqR0zBmOmYM0yNSKRqQZMMUIyklQUajMagNRqMxqDJhBVAKRUGUVwVlca4uAxWa3WKKzRTRRoBAVJIGUQKkEDx5bZy1FdGpGpBG8xGWsx0zGZG8wZrUjUikakGBwlCAECowGA3GoxD0ZbTPSIguqAUkolUgZrNjpxnUFcqxXTUc6jcASRQkhUKRVGSkDxZrplyy65HSumXTMYy6ZGK3G5GctwZrUajMagyQQIgQCSSCPQYo0uhCExkwCkVEczrLpPQlXGbGqzRHPUcdvRXD5IjfLmkkbQKVRxFAwmuIH5+XXLnmOuYOldMumWMukGK3luMRqDFbhjMaghQQiSSCSQIgqJJAjAYDSAVGpftvrlK3KFjVrK6BFXH5nbrz/Jrt/kRqMBBGyklUpIAQgeLMdY55dMjddMtxmNQZajUZhGW40zCMkslAoQiJJAjAYokkCKAK1CoCPICiunkLpzHQxre/wBOdLNRqAECmFQqgTQqjKKFePLpljLpEbrcajMagy1CEMtwswiNIFEKBBEFQoIQpIEggQQFQQqCoQFQpAoMhkSiMFXQIF0zdA0nPzQuOGXSOcbg3W43HONQZbLPTBGo1GY0MlJAUCiIhKEhAUECSAJJABSEVlEUVIGAQRVAKWaCrnpuueqNQIJFZjcZkakVWoYyYI3GoxG4MtRqMwiFAohIKokCBSAFBAQiARAAGsoqBAqSo6BVHR1RVmm0Wis6rnWtVio1B0soV0hgjUaQpFEMajMaEaiBghjUZjUEKSESPEARQBEAlAYgQkozQ0KKyiKKLR0UVFPR0UdVTazarWKCrNNFRoIIV3ka4sxrjTAkPCpBBI3I1M8KJrHDxoyCCQmQ8EB4eHgjK41xcBlFAyGqyKFDJ1rgCQ2JUGeMt1iiis2ms0Vmg1moootVA0qzTQAoqoFCSFezM+jTn0K25prPtnjeUStg/hkQtZZjeRKSKYISI1IIOBvg4JrPA1YEVis1us0aih6EB7EygNZsPRaK51mtVkaZorQorFDVjNRWaK1WaKARRQkge+CpNualMSEV0ehINxuJDK61AgreWyhihJCBmxIVmsVJG4EkASQooSBmipDQZqQCs0JGhWakKBUhQEgf/9k=')",
//   backgroundSize: "cover",
//   backgroundPosition: "center",
//   backgroundRepeat: "no-repeat",
// };
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className=" min-h-screen">
      {/* <header className="bg-white shadow-md py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-primary">Classic Blog</h1>
        </div>
      </header> */}
      <main className="mx-auto xl:ml-10 xl:px-4 py-10">{children}</main>
    </div>
  );
};

export default Layout;
