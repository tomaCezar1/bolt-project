import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Maria Popescu',
      role: 'Pacient',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'Sunt extrem de mulțumită de serviciile primite! Echipa este profesionistă și foarte prietenoasă. M-au făcut să mă simt confortabilă pe tot parcursul tratamentului. Recomand cu încredere!',
      rating: 5
    },
    {
      name: 'Ion Ionescu',
      role: 'Pacient',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'Am fost impresionat de echipamentul modern și de profesionalismul medicilor. Am făcut un implant dentar și rezultatul a fost perfect. Prețurile sunt corecte și transparente.',
      rating: 5
    },
    {
      name: 'Elena Sandu',
      role: 'Pacient',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'Clinica perfectă pentru copii! Fiica mea nu mai are frică de dentist datorită atmosferei prietenoase și abordării delicate a doctorilor. Mulțumim din suflet!',
      rating: 5
    },
    {
      name: 'Andrei Moraru',
      role: 'Pacient',
      image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'Cea mai bună experiență dentară pe care am avut-o vreodată! Tratamentul de albire a fost rapid și rezultatele sunt spectaculoase. Personal foarte atent și empatic.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ce Spun Pacienții Noștri
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mii de pacienți mulțumiți ne-au acordat încrederea lor. Iată ce au de spus
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-blue-200" />

              <div className="flex items-start space-x-4 mb-6 relative z-10">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <div className="flex space-x-1 mt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-500 rounded-3xl p-8 md:p-12 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-yellow-300 text-yellow-300" />
              ))}
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              5000+ Pacienți Mulțumiți
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              Cu o rată de satisfacție de 99%, suntem mândri să oferim cea mai bună îngrijire dentară din Moldova
            </p>
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div>
                <div className="text-4xl font-bold mb-2">99%</div>
                <div className="text-blue-100">Satisfacție</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">5000+</div>
                <div className="text-blue-100">Pacienți</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-blue-100">Ani Experiență</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
