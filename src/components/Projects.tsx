import { Card, Carousel } from "antd";
import projectPic1 from "../assets/images/project-pic1.jpg";
import projectPic2 from "../assets/images/project-pic2.jpg";
import projectPic3 from "../assets/images/project-pic3.jpg";
import projectPic4 from "../assets/images/project-pic4.jpg";
import projectPic5 from "../assets/images/project-pic5.jpg";

const Projects = () => {
  const projectImages = [
    projectPic1,
    projectPic2,
    projectPic3,
    projectPic4,
    projectPic5,
  ];
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Research Projects
        </h2>
        <Card className="shadow-lg border-teal-100">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="text-gray-800">
                  Exploration of Enzymes Production from Actinobacteria
                </span>
              </h3>
              <p className="text-gray-700 mb-6">
                All two isolates exhibited a higher enzyme activity for amylase
                enzymes. ABW,ABY isolated from raichur university are highly
                efficient in producing essential enzymes i.e.Amylase.
              </p>
              <p className="text-gray-700 mb-6">
                Such enzymes can serve as the outstanding resources for
                innovative biotechnological processes and can play an important
                role in the development of new biological insights. There is an
                ample scope for further research on optimization studies of the
                best isolate for an extensive range of applications.
              </p>
              <p className="text-gray-700">
                These isolates can be further used for optimizing the culture
                and the culture conditions using suitable production mediums
                besides the characterization of more enzymes would help to
                establish the biochemical and structural bases for molecular
                stability of the organisms isolated from environment.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <Carousel autoplay className="bg-teal-50 rounded-lg p-4">
                {projectImages?.map((data) => {
                  return (
                    <div>
                      <img
                        src={data}
                        alt="Project Image"
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Projects;
