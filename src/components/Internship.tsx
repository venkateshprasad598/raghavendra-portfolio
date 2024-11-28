import React from 'react';
import { Card, Button } from 'antd';
import { FileText } from 'lucide-react';

const Internship = () => {
  return (
    <section id="internship" className="py-20 bg-gradient-to-br from-teal-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Internship Experience</h2>
        <Card className="shadow-lg border-teal-100">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">EDUSCIENT PRIVATE LIMITED</h3>
              <p className="text-gray-600 mb-4">Research Intern</p>
              <h4 className="font-medium mb-2 text-teal-700">Project: Tumor Suppressor Proteins and Networks in Lung Cancer</h4>
              <p className="text-gray-700 mb-6">
                Conducted research on tumor suppressor proteins and their networks in lung cancer,
                contributing to the understanding of cancer biology and potential therapeutic targets.
              </p>
              <Button 
                type="primary"
                icon={<FileText className="h-4 w-4" />}
                className="bg-teal-600 hover:bg-teal-700"
                onClick={() => window.open('https://chocolate-tiffany-12.tiiny.site/')}
              >
                View Certificate
              </Button>
            </div>
            <div className="w-full md:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&q=80"
                alt="Laboratory Research"
                className="w-full rounded-lg shadow-md"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Internship