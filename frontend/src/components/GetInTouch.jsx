import React, { useState } from "react";
import axios from "axios";
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import emailjs from "@emailjs/browser";

const GetInTouch = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); // Added to show feedback

  // WARNING: Ideally, move these to a .env file!

  const sendMail = async (e) => {
    e.preventDefault(); // This now stops the page reload properly
    setStatus("Sending...");

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

    try {
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Email sent", res.data);
      const sheetData = {
        from_name: name,
        from_email: email,
        message: message,
      };

      // --- FIXED AXIOS CALL ---
      const ress = await axios.post(
        "https://script.google.com/macros/s/AKfycbyYc02RKI2Znn2KAmZ0kbKi5VGh9-6SLv6BkbH-AlwhKyNyky7BxbW6bo4p0J7w6C9g5Q/exec",
        JSON.stringify(sheetData), // 1. Manually stringify the data
        {
          headers: {
            "Content-Type": "text/plain;charset=utf-8", // 2. This bypasses the CORS preflight check
          },
        }
      );

      if (ress.data.status === "success") {
        console.log("Message saved to Google Sheet!");
      } else {
        console.error("Google Sheet error:", ress.data.message);
      }

      setEmail("");
      setName("");
      setSubject("");
      setMessage("");
      setStatus("Message sent successfully!");
    } catch (error) {
      console.error("EmailJS error:", error.response?.data || error.message);
      setStatus("Failed to send.");
    }
  };

  return (
    <section id="Reachus" className="bg-[#dbdbdb] py-20 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto mb-5 text-center mt-11">
        <h2 className="text-6xl lg:text-6xl font-[Anton] text-[#717171]">
          GET IN TOUCH
        </h2>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-start">
        {/* ADDED FORM TAG HERE */}
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
                  className="text-[#dbdbdb] text-xs uppercase tracking-wide"
                >
                  Name
                </Label>
                <TextInput
                  id="input-name"
                  placeholder="Your name"
                  required // Now this works!
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-white text-[#484546] border-gray-200 placeholder-gray-400"
                />
              </div>

              <div>
                <Label
                  htmlFor="email1"
                  className="text-[#dbdbdb] text-xs uppercase tracking-wide"
                >
                  Email
                </Label>
                <TextInput
                  id="email1"
                  type="email"
                  placeholder="name@example.com"
                  required // Now this works!
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white text-[#484546] border-gray-200 placeholder-gray-400"
                />
              </div>
            </div>
          </div>

          {/* Subject */}
          <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-4">
            <Label
              htmlFor="input-subject"
              className="text-[#dbdbdb] text-xs uppercase tracking-wide"
            >
              Subject
            </Label>
            <TextInput
              id="input-subject"
              placeholder="Subject"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="bg-white text-[#484546] border-gray-200 placeholder-gray-400"
            />
          </div>

          {/* Message & Button */}
          <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-4 flex flex-col gap-2">
            <Label
              htmlFor="comment"
              className="text-[#dbdbdb] text-xs uppercase tracking-wide"
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
              className="bg-white text-[#484546] border-gray-200 placeholder-gray-400"
            />

            {/* REMOVED onClick={sendMail} from button. The form onSubmit handles it now. */}
            <Button
              type="submit"
              className="mt-2 bg-[#fbb040] hover:bg-[#faae1c] text-white font-medium rounded-lg"
            >
              {status || "Submit"}
            </Button>
          </div>
        </form>

        <div className="w-full lg:w-1/2 flex justify-center items-center"></div>
      </div>
    </section>
  );
};

export default GetInTouch;
