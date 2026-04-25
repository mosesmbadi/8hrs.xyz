export interface Course {
  id: number;
  title: string;
  description: string;
}

export const courses: Course[] = [
  {
    id: 1,
    title: "Self Taught Computer Science",
    description: "Master the fundamentals of computer science through self-paced learning. Learn algorithms, data structures, and computational thinking from scratch. Perfect for beginners looking to build a strong foundation in tech."
  },
  {
    id: 2,
    title: "Graphic Design",
    description: "Dive into the world of visual communication. Learn design principles, color theory, typography, and industry-standard tools. Create stunning visuals for web, print, and digital media."
  },
  {
    id: 3,
    title: "2D Animation",
    description: "Bring your ideas to life with 2D animation. Learn animation principles, character design, and frame-by-frame animation techniques. Create compelling animated content for various platforms."
  },
  {
    id: 4,
    title: "Cyber Security",
    description: "Protect systems and networks from digital attacks. Learn security protocols, ethical hacking, threat analysis, and how to implement robust security measures to safeguard data."
  },
  {
    id: 5,
    title: "Networking for Beginners",
    description: "Understand the fundamentals of computer networking. Learn about TCP/IP, DNS, routers, and network architecture. Build a solid foundation for network administration and IT infrastructure."
  },
  {
    id: 6,
    title: "DevOps",
    description: "Master the intersection of development and operations. Learn CI/CD pipelines, containerization, infrastructure as code, and deployment automation to streamline software delivery."
  },
  {
    id: 7,
    title: "Cloud Computing",
    description: "Explore cloud technologies and platforms like AWS, Azure, and Google Cloud. Learn about scalability, deployment, and how to leverage cloud services for modern applications."
  },
  {
    id: 8,
    title: "Computer Repair",
    description: "Learn practical skills to troubleshoot and repair computers. From hardware diagnostics to software troubleshooting, become proficient in maintaining and fixing computer systems."
  },
  {
    id: 9,
    title: "Management in IT",
    description: "Develop leadership and management skills for IT professionals. Learn team management, project leadership, and strategic planning to advance your career in IT management."
  }
];
