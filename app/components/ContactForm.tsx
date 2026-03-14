"use client";

export default function ContactForm() {
  return (
    <form className="mt-10 space-y-6" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <label className="relative block">
          <span className="sr-only">Your Name</span>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full rounded-xl border border-gray-200 bg-white py-3.5 pl-4 pr-11 text-gray-900 shadow-sm transition placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          />
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-blue-500/70">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </span>
        </label>
        <label className="relative block">
          <span className="sr-only">Email Address</span>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full rounded-xl border border-gray-200 bg-white py-3.5 pl-4 pr-11 text-gray-900 shadow-sm transition placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          />
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-blue-500/70">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </span>
        </label>
        <label className="relative block">
          <span className="sr-only">Subject</span>
          <select
            name="subject"
            className="w-full appearance-none rounded-xl border border-gray-200 bg-white py-3.5 pl-4 pr-11 text-gray-700 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          >
            <option value="">Select Subject</option>
            <option value="general">General Inquiry</option>
            <option value="support">Support</option>
            <option value="sales">Sales</option>
            <option value="partnership">Partnership</option>
          </select>
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-blue-500/70">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </label>
        <label className="relative block">
          <span className="sr-only">Phone Number</span>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="w-full rounded-xl border border-gray-200 bg-white py-3.5 pl-4 pr-11 text-gray-900 shadow-sm transition placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          />
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-blue-500/70">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </span>
        </label>
      </div>
      <label className="relative block">
        <span className="sr-only">Your Message</span>
        <textarea
          name="message"
          rows={5}
          placeholder="Your Message"
          className="w-full resize-y rounded-xl border border-gray-200 bg-white py-3.5 pl-4 pr-11 pt-4 text-gray-900 shadow-sm transition placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
        />
        <span className="pointer-events-none absolute right-3 top-4 text-blue-500/70">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </span>
      </label>
      <div className="pt-2">
        <button
          type="submit"
          className="btn-3d w-full rounded-xl bg-blue-500 py-4 text-base font-semibold text-white transition hover:bg-blue-600"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
