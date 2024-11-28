import { motion } from "framer-motion";
import { Linkedin, Mail, Phone } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "raghavendra@example.com",
      href: "mailto:raghavendra@example.com",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "+91 7483822484",
      href: "tel:7483822484",
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://linkedin.com/in/raghavendra",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-teal-50 to-emerald-50"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600">
            Let's connect and discuss potential opportunities
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {contactInfo.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target={item.label === "LinkedIn" ? "_blank" : undefined}
              rel={
                item.label === "LinkedIn" ? "noopener noreferrer" : undefined
              }
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group block"
            >
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-teal-50 rounded-full text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      {item.label}
                    </h3>
                    <p className="text-gray-600 text-sm">{item.value}</p>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
