import { Clock, Users, BarChart3, CheckCircle, Calendar, FileText, Shield, Star } from 'lucide-react';

const AttendanceInfoSection = () => {

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sistema de Control de Asistencia
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Optimiza la gestión de tu equipo con nuestra plataforma integral de control de asistencia, 
            diseñada especialmente para empresas modernas como <span className="font-semibold text-teal-600">Lavandería Milenio Bogotá</span>
          </p>
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            ¿Por qué elegir nuestro sistema?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-8 h-8" />
              </div>
              <h4 className="font-semibold mb-2">Seguro y Confiable</h4>
              <p className="text-sm opacity-90">Protección de datos con estándares de seguridad empresarial</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="w-8 h-8" />
              </div>
              <h4 className="font-semibold mb-2">Ahorro de Tiempo</h4>
              <p className="text-sm opacity-90">Automatiza procesos y reduce el tiempo administrativo</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <BarChart3 className="w-8 h-8" />
              </div>
              <h4 className="font-semibold mb-2">Análisis Detallado</h4>
              <p className="text-sm opacity-90">Reportes y métricas para optimizar el rendimiento</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Star className="w-8 h-8" />
              </div>
              <h4 className="font-semibold mb-2">Fácil de Usar</h4>
              <p className="text-sm opacity-90">Interfaz intuitiva que no requiere capacitación extensa</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Listo para modernizar tu gestión de asistencia?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Únete a las empresas que ya confían en nuestro sistema para gestionar su talento humano 
              de manera eficiente y transparente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-teal-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Solicitar Demo
              </button>
              <button className="border-2 border-teal-500 text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-all duration-300">
                Más Información
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-teal-600 mb-2">99.9%</div>
            <div className="text-gray-600 text-sm">Tiempo de actividad</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600 text-sm">Empresas confían</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">24/7</div>
            <div className="text-gray-600 text-sm">Soporte técnico</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">50%</div>
            <div className="text-gray-600 text-sm">Reducción en gestión</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AttendanceInfoSection;