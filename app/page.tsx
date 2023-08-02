import { getProjects } from "@/sanity/sanity-utils";


export default async function Home() {

  const projects = await getProjects();

  return (
    <div className="max-w-5xl mx-auto py-20">
        <h1 className="text-7xl font-extrabold">I'm <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">Lavosbit</span>!</h1>

        <p className="mt-3 text-xl text-gray-600">Hello everyone! Check out my projects!</p>
      
        <h2 className="mt-24 font-bold text-gray-700 text-3xl" >My Projects</h2>

      {projects.map((project) => (
        <div key={project._id}>{project.name}</div>
      ))}
    </div>
  );
}
