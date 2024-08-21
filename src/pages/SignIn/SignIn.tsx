import { Button, Label, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import { setUser } from "../../redux/user/UserSlice";

interface FormValues {
  email: string;
  password: string;
}

export default function SignIn() {
  const [formValues, setFormValues] = useState<FormValues>({
    email: "test@gmail.com",
    password: "123456",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const testUser = {
      email: "test@gmail.com",
      password: "123456",
      profilePicture:
        "https://dthezntil550i.cloudfront.net/n4/latest/n41611050401464760001833695/1280_960/1128ba0a-efcb-4370-97cf-7704d4c0555d.png",
      isAdmin: Boolean,
    };
    localStorage.setItem("testUser", JSON.stringify(testUser));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const storedUser = localStorage.getItem("testUser");

    if (storedUser) {
      const { email, password } = JSON.parse(storedUser);

      if (formValues.email === email && formValues.password === password) {
        dispatch(
          setUser({
            username: "Test User",
            email: formValues.email,
            profilePicture:
              "https://dthezntil550i.cloudfront.net/n4/latest/n41611050401464760001833695/1280_960/1128ba0a-efcb-4370-97cf-7704d4c0555d.png",
            isAdmin: true,
          })
        );
        navigate("/");
      } else {
        console.error("Login failed: Invalid credentials");
      }
    } else {
      console.error("No user found in local storage");
    }
  };
  return (
    <div className="min-h-screen mt-20 ">
      <div className=" flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Meta
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            This is a demo project. You can sign with your email and password or
            with Google.
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4 " onSubmit={handleSubmit}>
            <div className="">
              <Label value="Your email" />
              {/* <TextInput type='text ' placeholder='Email' id='email'/> */}
              <TextInput
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
            <div className="">
              <Label value="Your Password" />
              {/* <TextInput type='text ' placeholder='*********' id='password'/> */}
              <TextInput
                type="password"
                placeholder="*********"
                id="password"
                name="password"
                value={formValues.password}
                onChange={handleChange}
              />
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit">
              Sign In
            </Button>
          </form>
          <div className="mt-2">
            <span>Don't Have an account?</span>
            <Link to="/SignUp" className="text-blue-500">
              {" "}
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
