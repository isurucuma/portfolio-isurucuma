import React, { useState } from "react";
import {
  PhoneIcon,
  MapIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";

type Props = {};

type formdataType = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactMe({}: Props) {
  const [formData, setFormData] = useState<formdataType>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  let onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  let onSubmitHandler = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(formData);
    window.location.href = `mailto:cumaranathunga@gmail.com?subject=${formData.subject}&body=hi I am ${formData.name}, ${formData.message} (${formData.email})`;
  };

  return (
    <div className="h-screen flex flex-col md:flex-row justify-evenly items-center relative overflow-hidden">
      <h1 className="absolute top-20 text-xl text-gray-500 uppercase tracking-[20px]">
        Contact
      </h1>

      <div className="flex flex-col items-center">
        <h4 className="text-4xl font-semibold text-center">
          I have got what you need
        </h4>
        <span className="mb-8 decoration-[#F7AB0A]/50 underline text-2xl">
          Lets Talk
        </span>

        <div className="space-y-5">
          <div className="flex items-center justify-center space-x-5">
            <PhoneIcon className="h-7 w-7 text-[#F7AB0A] animate-pulse" />
            <p className="text-xl">+94773793214</p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <EnvelopeIcon className="h-7 w-7 text-[#F7AB0A] animate-pulse" />
            <p className="text-xl">isurucuma@gmail.com</p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <MapPinIcon className="h-7 w-7 text-[#F7AB0A] animate-pulse" />
            <p className="text-xl">61130, Dankotuwa, Sri Lanka</p>
          </div>
        </div>
      </div>
      <form className="flex flex-col space-y-5 w-fit" action="">
        <div className="flex space-x-2">
          <input
            className="contact-form"
            placeholder="Name"
            type="text"
            name="name"
            id=""
            onChange={onChangeHandler}
            value={formData.name}
          />
          <input
            className="contact-form"
            placeholder="Email"
            type="email"
            name="email"
            id=""
            onChange={onChangeHandler}
            value={formData.email}
          />
        </div>

        <input
          className="contact-form"
          placeholder="Subject"
          type="text"
          name="subject"
          id=""
          onChange={onChangeHandler}
          value={formData.subject}
        />
        <textarea
          className="contact-form"
          placeholder="Message"
          name="message"
          id=""
          onChange={onChangeHandler}
          value={formData.message}
        ></textarea>
        <button
          className="w-full bg-yellow-600 py-4 rounded-md text-black text-lg font-bold"
          onClick={onSubmitHandler}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactMe;
