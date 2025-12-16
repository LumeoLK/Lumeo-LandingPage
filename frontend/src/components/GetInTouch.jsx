import React, { useState } from "react";
import axios from "axios";
import { Button, Label, TextInput, Textarea } from "flowbite-react";

const GetInTouch = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendMail = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/send-email", {
        email,
        name,
        subject,
        message,
      });
      alert("Email sent successfully!");
      setEmail("");
      setName("");
      setSubject("");
      setMessage("");
    } catch (err) {
      console.error("Error sending email:", err);
      alert("Failed to send email.");
    }
  };

  return (
    <section id="Reachus" className="bg-[#dbdbdb] py-20 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto mb-12 text-center">
        <h2 className="text-6xl lg:text-6xl font-[Anton] text-[#717171]">
          GET IN TOUCH
        </h2>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-start">
        
        {/* Left Side */}
        <div className="flex flex-col gap-3 w-full lg:w-1/2">

          {/* Name & Email */}
          <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-4">
            <div className="flex flex-col gap-2">
              <div>
                <Label htmlFor="input-name" className="text-[#dbdbdb] text-xs uppercase tracking-wide">
                  Name
                </Label>
                <TextInput
                  id="input-name"
                  placeholder="Your name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-white text-[#484546] border-gray-200 placeholder-gray-400"
                />
              </div>

              <div>
                <Label htmlFor="email1" className="text-[#dbdbdb] text-xs uppercase tracking-wide">
                  Email
                </Label>
                <TextInput
                  id="email1"
                  type="email"
                  placeholder="name@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white text-[#484546] border-gray-200 placeholder-gray-400"
                />
              </div>
            </div>
          </div>

          {/* Subject */}
          <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-4">
            <Label htmlFor="input-subject" className="text-[#dbdbdb] text-xs uppercase tracking-wide">
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
            <Label htmlFor="comment" className="text-[#dbdbdb] text-xs uppercase tracking-wide">
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

            <Button
              type="submit"
              onClick={sendMail}
              className="mt-2 bg-[#fbb040] hover:bg-[#faae1c] text-white font-medium rounded-lg"
            >
              Submit
            </Button>
          </div>
        </div>

        {/* Right Side Illustration */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
