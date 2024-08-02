import Button from "@/ui/Button";
import React from "react";

const Contact = () => {
  return (
    <div
      className=" py-10 px-4"
      id="contact"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(245, 245, 245, 0.8), rgba(245, 245, 245, 0.8)), url(/images/bg.svg)",
      }}
    >
      <div className="container text-center">
        <h2 className="text-3xl font-bold mb-2">Contact</h2>
        <p className="text-lg mb-8">Let{"'"}s get in touch now!</p>
        <form
          action="https://formspree.io/f/mdkngler"
          method="POST"
          className="flex flex-col gap-6 max-w-[700px] mx-auto bg-white p-8 rounded-lg"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="self-start font-semibold text-sm">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="p-4 bg-[#f0f0f0] text-[#333] focus:outline-none rounded"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="self-start font-semibold text-sm">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="p-4 bg-[#f0f0f0] text-[#333] focus:outline-none rounded"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="self-start font-semibold text-sm"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Enter your message"
              className="p-4 bg-[#f0f0f0] text-[#333] focus:outline-none rounded resize-none"
              rows={5}
            />
          </div>
          <Button className="w-fit text-base self-end" type="submit">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
