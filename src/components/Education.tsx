import React from 'react';
import { Card } from 'antd';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Education</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card 
            className="shadow-lg hover:shadow-xl transition-shadow border-teal-100"
            title={
              <div className="flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-teal-600" />
                <span className="text-gray-800">M.Sc. in Microbiology</span>
              </div>
            }
          >
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <Calendar className="h-4 w-4" />
              <span>2022 - 2024</span>
            </div>
            <p className="text-gray-700">Raichur University</p>
          </Card>

          <Card 
            className="shadow-lg hover:shadow-xl transition-shadow border-teal-100"
            title={
              <div className="flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-teal-600" />
                <span className="text-gray-800">B.Sc. in Zoology</span>
              </div>
            }
          >
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <Calendar className="h-4 w-4" />
              <span>2018 - 2021</span>
            </div>
            <p className="text-gray-700">R.V Independent College, Yadgir</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education