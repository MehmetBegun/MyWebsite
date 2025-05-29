import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Hakkımda</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gray-100 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Eğitim</h3>
              <p className="text-gray-600 mb-4">
                [Üniversite Adı] - [Bölüm] <br />
                [Başlangıç Yılı] - [Bitiş Yılı]
              </p>
              <p className="text-gray-600">
                [Lise Adı] <br />
                [Başlangıç Yılı] - [Bitiş Yılı]
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6">
              <div className="card">
                <h3 className="text-xl font-semibold mb-4">Kişisel Bilgiler</h3>
                <p className="text-gray-600">
                  [Kendinizi kısaca tanıtın. Kişiliğiniz, ilgi alanlarınız ve hedefleriniz hakkında bilgi verin.]
                </p>
              </div>

              <div className="card">
                <h3 className="text-xl font-semibold mb-4">Yabancı Dil</h3>
                <div className="space-y-2">
                  <div>
                    <p className="font-medium">İngilizce</p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-primary h-2.5 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  {/* Diğer diller için benzer yapıyı ekleyebilirsiniz */}
                </div>
              </div>

              <div className="card">
                <h3 className="text-xl font-semibold mb-4">Hobiler</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-primary rounded-full text-sm">
                    [Hobi 1]
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-primary rounded-full text-sm">
                    [Hobi 2]
                  </span>
                  {/* Diğer hobiler için benzer yapıyı ekleyebilirsiniz */}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 