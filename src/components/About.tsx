import { Heart, Users, Award, Shield } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Despre Noi
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Suntem o echipă dedicată de profesioniști care pune sănătatea și confortul pacienților pe primul loc
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">
              Misiunea Noastră
            </h3>
            <p className="text-gray-600 leading-relaxed">
              La DentalCare Moldova, credem că fiecare pacient merită cea mai bună îngrijire dentară.
              Cu echipament modern și o echipă de specialiști calificați, oferim tratamente de calitate
              superioară într-un mediu confortabil și prietenos.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Ne dedicăm să facem experiența dentară cât mai plăcută posibilă, oferind tratamente
              personalizate pentru fiecare membru al familiei tale, de la cei mai mici până la cei mai
              în vârstă.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-blue-50 p-6 rounded-xl">
                <div className="text-3xl font-bold text-blue-500 mb-2">15+</div>
                <div className="text-sm text-gray-700">Ani de Experiență</div>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl">
                <div className="text-3xl font-bold text-blue-500 mb-2">8</div>
                <div className="text-sm text-gray-700">Medici Specialiști</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/6812564/pexels-photo-6812564.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Dental clinic team"
              className="rounded-2xl shadow-2xl w-full object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
              <Heart className="w-7 h-7 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">
              Îngrijire Centrată pe Pacient
            </h4>
            <p className="text-gray-600">
              Fiecare pacient este tratat cu atenție și respect, asigurând o experiență pozitivă
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
              <Users className="w-7 h-7 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">
              Echipă Calificată
            </h4>
            <p className="text-gray-600">
              Medici stomatologi cu formare continuă și experiență vastă în domeniu
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
              <Award className="w-7 h-7 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">
              Excelență în Tratamente
            </h4>
            <p className="text-gray-600">
              Utilizăm cele mai moderne tehnici și materiale de cea mai bună calitate
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">
              Siguranță Maximă
            </h4>
            <p className="text-gray-600">
              Respectăm cele mai stricte standarde de sterilizare și igienă
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
