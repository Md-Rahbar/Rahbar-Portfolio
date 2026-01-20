import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    query: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Invalid email";
    }

    if (!form.query.trim()) newErrors.query = "Query is required";

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.length < 10) {
      newErrors.message = "Min 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    console.log("Submitted:", form);

    setForm({
      name: "",
      email: "",
      query: "",
      message: "",
    });
    setErrors({});
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const inputBase =
    "w-full px-5 py-3.5 rounded-xl outline-none bg-white text-gray-900 placeholder:text-gray-400 border border-gray-200 focus:border-gray-400 focus:ring-2 focus:ring-gray-200 transition";

  const errorStyle =
    "border border-red-500 placeholder:text-red-400";

  return (
    <section className="w-full bg-transparent py-24 px-6">
      <div className="w-full max-w-6xl mx-auto">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-16 text-gray-900"
        >
        Contact
        </motion.h2>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-16 items-stretch">

          {/* LEFT — RESUME */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white/80 rounded-3xl p-6 shadow-md flex flex-col"
          >
            <iframe
              src="/resume.pdf"
              title="Resume Preview"
              className="w-full flex-1 rounded-2xl"
            />

            <a
              href="/resume.pdf"
              download
              className="mt-6 block w-full text-center px-6 py-3 rounded-full bg-gray-900 text-white hover:bg-gray-800 cursor-pointer"
            >
              Download Resume
            </a>
          </motion.div>

          {/* RIGHT — FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white/80 rounded-3xl p-10 shadow-md flex flex-col justify-between"
          >
            <div className="space-y-7">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder={errors.name || "Your name"}
                className={`${inputBase} ${errors.name && errorStyle}`}
              />

              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder={errors.email || "Your email"}
                className={`${inputBase} ${errors.email && errorStyle}`}
              />

              <input
                name="query"
                value={form.query}
                onChange={handleChange}
                placeholder={errors.query || "Your query"}
                className={`${inputBase} ${errors.query && errorStyle}`}
              />

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="6"
                placeholder={errors.message || "Your message"}
                className={`${inputBase} resize-none ${
                  errors.message && errorStyle
                }`}
              />
            </div>

            <button
              type="submit"
              className="mt-10 w-full px-6 py-4 rounded-full bg-gray-900 text-white hover:bg-gray-800 cursor-pointer"
            >
              Submit
            </button>
          </motion.form>

        </div>

        {/* ✅ CONTACT DETAILS — RESTORED */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center space-y-3"
        >
          <p className="text-gray-700">
            Gmail: <span className="font-medium">md.rahbar.cs@gmail.com</span>
          </p>

          <a
            href="https://www.linkedin.com/in/md-rahbar-alam"
            target="_blank"
            rel="noreferrer"
            className="underline text-gray-800 cursor-pointer"
          >
            Connect on LinkedIn
          </a>

          <p className="text-sm text-gray-600">
            I usually reply within 24 hours.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
