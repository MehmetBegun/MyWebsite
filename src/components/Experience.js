import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: 'Stajyer Yazılım Geliştirici',
      company: '[Şirket Adı]',
      period: '[Başlangıç Tarihi] - [Bitiş Tarihi]',
      description: '[Staj deneyiminizi ve öğrendiklerinizi anlatın]',
    },
    // Diğer deneyimler için benzer yapıyı ekleyebilirsiniz
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Deneyim</h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-primary">{exp.title}</h3>
                  <p className="text-gray-600">{exp.company}</p>
                </div>
                <p className="text-gray-500 mt-2 md:mt-0">{exp.period}</p>
              </div>
              <p className="text-gray-600">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 