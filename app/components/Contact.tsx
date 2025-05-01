import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mb-20 text-center px-4 sm:px-6 md:px-12 lg:px-24">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-700">
        Let’s Build Something Amazing Together
      </h2>
      <p className="mt-2 text-sm sm:text-md text-gray-500 max-w-xl mx-auto">
        Reach out to start a conversation about your project, your goals, and
        how we can help.
      </p>

      <form
        action="https://docs.google.com/forms/d/e/1FAIpQLSdub5dS_BajWo1pKww_6gM3CagqLGwRg-CcMQ-6lfag0caa2A/formResponse"
        method="POST"
        className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
        <input
          type="text"
          name="entry.1650021733"
          placeholder="First Name"
          className="p-3 border border-gray-300 rounded-md"
          required
        />
        <input
          type="text"
          name="entry.797493205"
          placeholder="Last Name"
          className="p-3 border border-gray-300 rounded-md"
          required
        />
        <input
          type="email"
          name="entry.572024266"
          placeholder="Email"
          className="p-3 border border-gray-300 rounded-md col-span-1 sm:col-span-2"
          required
        />
        <select
          name="entry.553904971"
          className="p-3 border border-gray-300 rounded-md col-span-1 sm:col-span-2"
          required>
          <option value="">Select a Service</option>
          <option value="Web Development">Web Development</option>
          <option value="Web Design">Web Design</option>
          <option value="App Development">App Development</option>
          <option value="App Design">App Design</option>
          <option value="Other">Other</option>
        </select>

        <textarea
          name="entry.141412312"
          placeholder="Your Message (optional)"
          className="p-3 border border-gray-300 rounded-md col-span-1 sm:col-span-2 h-32 resize-none"
        />

        <button
          type="submit"
          className="mt-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-md col-span-1 sm:col-span-2 transition-all duration-200">
          Submit
        </button>
      </form>
    </section>
  );
}
