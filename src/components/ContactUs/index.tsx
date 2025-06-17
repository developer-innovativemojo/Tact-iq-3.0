import React from "react";

import Text from "../ui/Text";
import Button from "../ui/Button";
import { BoxesCore } from "../magicui/background-boxes";

const ContactUs = () => {
  return (
    <>
      <div className="relative w-full h-[582px] overflow-hidden">
        {/* Background Animation */}
        <BoxesCore className="absolute top-0 left-0 w-full h-full z-10" />

        {/* Content Layer */}
        <div className="relative z-0 flex items-center justify-start h-full text-center w-full max-w-[1200px] mx-auto">
          <div>
            <Text as="h2" className="mb-[15px] text-secondary text-left">
              Contact Us
            </Text>
            <Text as="h4" className="text-left">
              Ready to Collaborate? {"Let's"} Connect
            </Text>
          </div>
        </div>
      </div>

      <div className="w-full h-full bg-[#1D272F] flex justify-center items-center relative">
        <div>
          <div className="w-full max-w-[593px] bg-white min-h-[936px] absolute top-[-50%] z-20 right-[10%] contact-form-grad flex justify-center items-center">
            <form className="w-full max-w-[480px] mx-auto">
              <Text className="mb-[48px]">
                Explore how{" "}
                <span className="text-secondary font-bold"> TactIQ </span> +{" "}
                <span className="font-bold text-accent">Bizzell </span> can
                support your federal initiatives
              </Text>
              <div className="flex justify-between mb-[24px]">
                <div className="w-[224px]">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-left text-[18px] font-medium text-[#454545]"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="First name"
                    className="mt-1 block w-full border border-[#D5D7DA] rounded-[8px] px-4 py-3 focus:outline-none input-gradient"
                  />
                </div>
                <div className="w-[224px]">
                  <label
                    htmlFor="last name"
                    className="block mb-2 text-left text-[18px] font-medium text-[#454545]"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    id="last name"
                    placeholder="Last name"
                    className="mt-1 block w-full border border-[#D5D7DA] rounded-[8px] px-4 py-3 focus:outline-none input-gradient"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-left text-[18px] font-medium text-[#454545]"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@company.com"
                  className="mt-1 block w-full border border-[#D5D7DA] rounded-[8px] px-4 py-3 focus:outline-none input-gradient"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="Agency"
                  className="block mb-2 text-left text-[18px] font-medium text-[#454545]"
                >
                  Agency/Organization
                </label>
                <input
                  type="text"
                  id="Agency"
                  placeholder="you@company.com"
                  className="mt-1 block w-full border border-[#D5D7DA] rounded-[8px] px-4 py-3 focus:outline-none input-gradient"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="Project"
                  className="block text-left text-[18px] font-medium text-[#454545]"
                >
                  Project or Subject
                </label>
                <input
                  type="text"
                  id="Project"
                  placeholder="Subject"
                  className="mt-1 block w-full border border-[#D5D7DA] rounded-[8px] px-4 py-3 focus:outline-none input-gradient"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-left text-[18px] font-medium text-[#454545]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full border border-[#D5D7DA] rounded-md px-4 py-3 focus:outline-none"
                ></textarea>
              </div>
              <div className="flex items-center gap-2 mb-[32px]">
                <input type="checkbox" />
                <Text className="text-[14px] text-[#6D6D6D]">
                  You agree to our friendly privacy policy.
                </Text>
              </div>
              <Button
                type="submit"
                className="w-full bg-accent text-white h-[45px]"
              >
                Submit Your Inquiry
              </Button>
            </form>
          </div>
        </div>
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="w-full max-w-[486px] min-h-[667px] flex justify-center items-center">
            <Text className="text-white text-[28px] font-medium text-left">
              Contact Information
              <br />
              <br />
              Email: info@wearetactiq.com contracts@bizzell.us Phone: (202)
              695-8449
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
