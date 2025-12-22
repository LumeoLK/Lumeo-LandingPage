import React, { useState } from "react";
import axios from "axios";
import { Label, TextInput, Textarea } from "flowbite-react"; // Removed Button from here
import { Toaster, toast } from "sonner"; // <--- Import Sonner
import { LiquidButton } from "./LiquidButton.jsx"; // <--- Import your new component

const GetInTouch = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // Animation States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const sendMail = async (e) => {
    e.preventDefault();

    // Start Animation
    setIsSubmitting(true);

    const data = {
      service_id: "service_bd7lwvy",
      template_id: "template_mpgeakg",
      user_id: "ZQNJmGAAzg822K36s",
      template_params: {
        from_name: name,
        from_email: email,
        to_name: "Lumeo Team",
        message: message,
      },
    };

    const sheetData = {
      from_name: name,
      from_email: email,
      message: message,
    };

    try {
      // 1. Send to EmailJS
      await axios.post("https://api.emailjs.com/api/v1.0/email/send", data, {
        headers: { "Content-Type": "application/json" },
      });

      // 2. Send to Google Sheets (CORS fixed)
      const ress = await axios.post(
        "https://script.google.com/macros/s/AKfycbyYc02RKI2Znn2KAmZ0kbKi5VGh9-6SLv6BkbH-AlwhKyNyky7BxbW6bo4p0J7w6C9g5Q/exec",
        JSON.stringify(sheetData),
        { headers: { "Content-Type": "text/plain;charset=utf-8" } }
      );

      if (ress.data.status === "success") {
        console.log("Message saved to Google Sheet!");
      } else {
        console.error("Google Sheet error:", ress.data.message);
      }

      // 3. Handle Success
      setIsSubmitting(false); // Stop "loading"
      setIsSuccess(true); // Trigger Green "Success" state
      toast.success("Message sent successfully!"); // Show Notification

      // Clear Form
      setEmail("");
      setName("");
      setSubject("");
      setMessage("");

      // Reset button state after 3 seconds so user can send another if needed
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);

      // Handle Error
      setIsSubmitting(false);
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <section id="Reachus" className="bg-[#dbdbdb] py-20 px-6 lg:px-20 relative">
      {/* REQUIRED: This renders the toast notifications */}
      <Toaster position="top-center" richColors />

      <div className="max-w-6xl mx-auto mb-5 text-center mt-11">
        <h2 className="text-6xl lg:text-6xl font-[Anton] text-[#717171]">
          GET IN TOUCH
        </h2>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-start">
        <form
          onSubmit={sendMail}
          className="flex flex-col gap-3 w-full lg:w-1/2"
        >
          {/* Name & Email */}
          <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-4">
            <div className="flex flex-col gap-2">
              <div>
                <Label
                  htmlFor="input-name"
                  className="!text-[#717171]  text-xs uppercase tracking-wide"
                >
                  Name
                </Label>
                <TextInput
                  id="input-name"
                  placeholder="Your name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={isSubmitting || isSuccess}
                  className="!bg-[#ffffff] text-[#484546] border-[#e9e9e9] placeholder-gray-400"
                />
              </div>

              <div>
                <Label
                  htmlFor="email1"
                  className="!text-[#717171]  text-xs uppercase tracking-wide"
                >
                  Email
                </Label>
                <TextInput
                  id="email1"
                  type="email"
                  placeholder="name@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting || isSuccess}
                  className="!bg-[#ffffff] text-[#484546] !border-[#e9e9e9] placeholder-gray-400"
                />
              </div>
            </div>
          </div>

          {/* Subject */}
          <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-4">
            <Label
              htmlFor="input-subject"
              className="!text-[#717171] text-xs uppercase tracking-wide"
            >
              Subject
            </Label>
            <TextInput
              id="input-subject"
              placeholder="Subject"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              disabled={isSubmitting || isSuccess}
              className="bg-white text-[#484546] border-gray-200 placeholder-gray-400"
            />
          </div>

          {/* Message & Animated Button */}
          <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-4 flex flex-col gap-2">
            <Label
              htmlFor="comment"
              className="!text-[#717171] text-xs uppercase tracking-wide"
            >
              Message
            </Label>
            <Textarea
              id="comment"
              placeholder="Write your message..."
              rows={4}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={isSubmitting || isSuccess}
              className="!bg-[#ffffff] text-[#484546] !border-[#e9e9e9] placeholder-gray-400"
            />

            {/* REPLACED Flowbite Button with LiquidButton */}
            <div className="mt-2">
              <LiquidButton isSubmitting={isSubmitting} isSuccess={isSuccess}>
                SUBMIT MESSAGE
              </LiquidButton>
            </div>
          </div>
        </form>

        <div className="w-full lg:w-1/2 flex justify-center items-center">
          {/* You can put an image or map here later */}
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
