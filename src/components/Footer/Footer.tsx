import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsGithub, BsTiktok } from "react-icons/bs";
export default function FooterCom() {
  return (
    <Footer container className="border border-t-8  ">
      <div className="w-full max-w-7xl mx-auto">
        <div className=" grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="">
            <Link
              to=""
              className=" self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Meta
              </span>
              Blog
            </Link>
          </div>
          <div className=" grid grid-cols-2 gap-3 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                  100 JS Projects
                </Footer.Link>
                <Footer.Link
                  href="/About"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Meta Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                  100 JS Projects
                </Footer.Link>
                <Footer.Link
                  href="/About"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Meta Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className=" w-full sm:flex sm: items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Meta Blog"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} className="text-blue-600" />
            <Footer.Icon
              href="#"
              icon={BsInstagram}
              className="text-pink-600"
            />
            <Footer.Icon href="#" icon={BsGithub} className="text-black-600" />
            <Footer.Icon href="#" icon={BsTiktok} className="text-Black-600" />
          </div>
        </div>
      </div>
    </Footer>
  );
}
