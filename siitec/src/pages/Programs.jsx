// src/components/Programs.js
import React, { useState } from "react";
import "../styles/Programs.css";
import image1 from "../assets/albums/DSC_3872.jpg";
import image2 from "../assets/albums/DSC_7121.jpg";
import image3 from "../assets/albums/continuing.jpg";
import image4 from "../assets/albums/DSC_3894.jpg";
import matbot from "../assets/albums/IMG_5932.jpg";
import manu from "../assets/albums/manu.jpg";
import image5 from "../assets/albums/advsystem.jpg";
import image6 from "../assets/albums/Nano123456.JPG";
import {
  FaUserGraduate,
  FaBook,
  FaMicroscope,
  FaBriefcase,
  FaGraduationCap,
  FaGlobeAmericas,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

const Programs = () => {
  const [activeDegree, setActiveDegree] = useState("bachelor");
  const navigate = useNavigate();

  const programsData = {
    bachelor: {
      title: "Bachelor Programs",
      degrees: [
        {
          id: "be-nme",
          name: "BE. in Nanomaterial Engineering",
          code: "NANO",
          department: "Department of Nanoscience and Nanotechnology",
          description:
            "Nanotechnology is a crucial new field of science for national development in the era of globalization. It requires the integration of knowledge from various disciplines, and thus has been included in the national strategic plan.",
          image: image1,

          // Program Overview
          overview: {
            introText:
              "Nanotechnology is a crucial new field of science for national development in the era of globalization. The program integrates physics, chemistry, biology, and engineering to create novel materials and devices at the nanoscale.",
            stats: {
              credits: "135 credits",
              duration: "4 years",
              applicationPeriod: "November",
              tuition: "25,000 THB/semester",
              degreeLevel: "Bachelor",
              language: "Thai",
            },
          },

          // Curriculum
          curriculum: {
            description: "Download comprehensive curriculum documents",
            documents: [
              {
                title:
                  "Bachelor of Engineering Program in Nanomaterials Engineering (Revised Curriculum 2025)",
                url: "https://drive.google.com/file/d/1D3iQ2yQY29jMm5eadVS2-M2LuY34G0Rd/view",
                size: "PDF • 2.4 MB",
                description:
                  "Latest curriculum with updated courses and requirements",
              },
              {
                title:
                  "Bachelor of Engineering Program in Nanomaterials Engineering (Revised Curriculum 2020)",
                url: "http://www.reg.kmitl.ac.th/curriculum/file/bachelor/10/NanomaterialEngineering2563_edit.pdf",
                size: "PDF",
                description: "Previous curriculum for reference and comparison",
              },
              {
                title:
                  "Bachelor of Engineering Program in Nanomaterials Engineering (Revised Curriculum 2016)",
                url: "http://www.cmit.kmitl.ac.th/docs/undergrad/undergrad-2559.pdf",
                size: "PDF",
                description: "Previous curriculum for reference and comparison",
              },
              {
                title:
                  "Bachelor of Engineering Program in Nanomaterials Engineering (Revised Curriculum 2010)",
                url: "http://www.cmit.kmitl.ac.th/docs/undergrad/undergrad-2553.pdf",
                size: "PDF",
                description: "Previous curriculum for reference and comparison",
              },
              {
                title:
                  "The Dual Bachelor's Degree Program includes a Bachelor of Engineering (Nanomaterial Engineering) and a Bachelor of Engineering (Polymer Materials and Engineering) at BUCT.",
                url: "http://www.cmit.kmitl.ac.th/wp-content/uploads/2024/02/Dual-degree-BUCT-CMIT-2563.pdf",
                size: "PDF",
                description: "Previous curriculum for reference and comparison",
              },
            ],
          },

          // Career Paths
          careers: {
            // startingSalary: "30,000 baht",
            categories: [
              {
                title: "Industry & Research",
                jobs: [
                  "Production Engineer",
                  "Process Control Engineer",
                  "R&D Engineer",
                  "Failure Analysis Engineer",
                  "Material Engineering",
                  "Researcher",
                ],
              },
              {
                title: "Emerging Fields",
                jobs: [
                  "Government Jobs / Leading State Enterprise Jobs",
                  "Robotics and Artificial Intelligence Engineer",
                  "Systems Integration Engineer",
                  "Programming Engineer",
                  "Professor at Science and Technology Institute",
                  "Freelancer, Entrepreneur, and Self-Employed in Related Fields",
                ],
              },
            ],
          },

          // Admissions
          admissions: {
            requirements: [
              "Currently studying or have completed grade 12 (or equivalent) of the 2014 Basic Education Curriculum.",
              "Science-Mathematics study plan",
              "Be a Thai national or legally residing in Thailand.",
            ],
            deadlines: {
              earlyApplication: "January 15",
              regularDeadline: "March 1",
            },
          },

          // Scholarships
          scholarships: [
            {
              name: "Merit Excellence Scholarship",
              amount: "$10,000/year",
              description:
                "For top-performing students entering the program with outstanding academic records.",
            },
            {
              name: "Future Innovators Award",
              amount: "$7,500",
              description:
                "For students demonstrating exceptional innovation in science and technology.",
            },
          ],
        },

        {
          id: "be-nme",
          name: "BE. in Smart Materials Technology (Multidisciplinary)(International Program)",
          code: "NANO",
          department: "Department of Nanoscience and Nanotechnology",
          description:
            "A cutting-edge multidisciplinary program focusing on smart materials, sensor technology, robotics, and AI, aligned with Thailand 4.0 strategy and new S-curve industries. This international program prepares engineers for the future of industrial robotics and sensor technology.",
          image: image4,

          // Program Overview
          overview: {
            introText:
              "The Bachelor of Engineering Program in Smart Materials Technology (Multidisciplinary) represents a pioneering educational initiative at the intersection of advanced materials science, artificial intelligence, and next-generation manufacturing. As an International Program, it delivers comprehensive training in smart materials design, sensor technology, robotics integration, and AI applications, directly addressing the critical skills gap in Thailand's strategic S-curve industries.\n\nThis innovative curriculum bridges traditional engineering disciplines with emerging technologies, creating versatile engineers capable of driving Thailand's transformation under the Thailand 4.0 economic model. The program emphasizes hands-on experience with intelligent materials systems, IoT-enabled sensor networks, and robotic automation solutions that are revolutionizing industries from advanced manufacturing to healthcare and sustainable energy.",
            stats: {
              credits: "125 credits",
              duration: "4 years",
              applicationPeriod: "November",
              tuition: "90,000 THB/semester",
              degreeLevel: "Bachelor",
              language: "English",
            },
          },

          // Curriculum
          curriculum: {
            description: "Download comprehensive curriculum documents",
            documents: [
              {
                title:
                  "BACHELOR OF ENGINEERING PROGRAM IN SMART MATERIALS TECHNOLOGY (revied 2025)",
                url: "https://drive.google.com/file/d/1SfgnIeuSPm_5-4svjmG1EKpBM-xNUTtG/view",
                size: "PDF • 2.4 MB",
                description:
                  "Latest curriculum with updated courses and requirements",
              },
              {
                title:
                  "BACHELOR OF ENGINEERING PROGRAM IN SMART MATERIALS TECHNOLOGY (revied 2020)",
                url: "http://www.cmit.kmitl.ac.th/wp-content/uploads/2019/11/TQF2-SMART-MATERIALS-TECHNOLOGY-RAI-20-Sep-noiden.pdf",
                size: "PDF",
                description: "Previous curriculum for reference and comparison",
              },
            ],
          },

          // Career Paths
          careers: {
            // startingSalary: "35,000-45,000 baht",
            categories: [
              {
                title: "Core Technical Specializations",
                jobs: [
                  "Roboticist / Robotic Engineer",
                  "AI Engineer",
                  "Machine Vision Engineer",
                  "System Engineer",
                  "Systems Integration Engineer",
                  "IoT Engineer",
                  "Software Engineer for Mechatronics",
                  "Robotic Security Analyst",
                  "Expert Systems Analyst",
                  "Machine Designer",
                  "Software Architect for AI",
                  "Programming Engineer",
                ],
              },
              {
                title: "Leadership & Innovation Roles",
                jobs: [
                  "Technology Manager for Robotics and AI",
                  "Solution Engineer",
                  "Solution Architect",
                  "Startup Entrepreneur in High Tech",
                  "Professor at Science and Technology Institute",
                  "Government / State Enterprise Engineer",
                  "Freelancer / Self-Employed Consultant",
                  "Innovation Manager",
                ],
              },
            ],
          },
          // Admissions
          admissions: {
            requirements: [
              "Currently studying or have completed grade 12 (or equivalent) of the 2014 Basic Education Curriculum.",
              "Science-Mathematics study plan",
              "Be a Thai national or legally residing in Thailand.",
            ],
            deadlines: {
              earlyApplication: "January 15",
              regularDeadline: "March 1",
            },
          },

          // Scholarships
          scholarships: [
            {
              name: "Merit Excellence Scholarship",
              amount: "$10,000/year",
              description:
                "For top-performing students entering the program with outstanding academic records.",
            },
            {
              name: "Future Innovators Award",
              amount: "$7,500",
              description:
                "For students demonstrating exceptional innovation in science and technology.",
            },
          ],
        },

        {
          id: "be-nme",
          name: "Dual Bachelor's Degree Program B.Eng (Smart Materials Technology) & B.Eng (Robotics and AI Engineering)",
          code: "NANO",
          department: "Department of Nanoscience and Nanotechnology",
          description:
            "An intensive 4-year dual degree program combining Smart Materials Technology with Robotics and AI Engineering. Designed for students seeking mastery in both nanotechnology-enabled sensors/energy systems and intelligent robotics/AI systems to drive innovation across industrial applications.",
          image: matbot,

          // Program Overview
          overview: {
            introText:
              "The 4-year Dual Bachelor's Degree Program represents a revolutionary educational model that converges two transformative disciplines: Smart Materials Technology and Robotics & AI Engineering. This intensive program is specifically designed for ambitious students who seek comprehensive mastery in both nanotechnology-driven sensor/energy systems and intelligent autonomous systems.\n\nStudents develop unparalleled expertise at the intersection of materials innovation and artificial intelligence, learning to design nanotechnological sensors, advanced energy storage systems, and industrial instruments while simultaneously mastering robotics control systems, machine learning algorithms, and autonomous system integration. The program's core mission is to cultivate engineers capable of creating breakthrough innovations and solving complex, cross-disciplinary challenges across manufacturing, healthcare, energy, and advanced technology sectors.\n\nThis dual-degree approach enables graduates to bridge the gap between materials innovation and intelligent systems, positioning them as uniquely qualified professionals for Thailand's Industry 4.0 transformation and global technological advancement",
            stats: {
              credits: "151 credits",
              duration: "4 years",
              applicationPeriod: "November",
              tuition: "120,000 THB/semester",
              degreeLevel: "Bachelor",
              language: "English",
            },
          },

          // Curriculum
          curriculum: {
            description: "Download comprehensive curriculum documents",
            documents: [
              {
                title:
                  "Curriculum document-Dual Bachelor's Degree Program (Revised 2025)",
                url: "http://www.cmit.kmitl.ac.th/wp-content/uploads/2025/07/DualDegree-SMT-RAI-15-5-25.pdf",
                size: "PDF • 2.4 MB",
                description:
                  "Latest curriculum with updated courses and requirements",
              },
              {
                title: "Curriculum document-Dual Bachelor's Degree Program",
                url: "http://www.cmit.kmitl.ac.th/wp-content/uploads/2024/06/DualDegreeProjectForm-May24-revised2567.pdf",
                size: "PDF",
                description: "Previous curriculum for reference and comparison",
              },
              {
                title: "Introduce-Dual Bachelor's Degree Program",
                url: "http://www.cmit.kmitl.ac.th/wp-content/uploads/2021/10/SMT-RAI-rev01.pdf",
                size: "PDF",
                description: "Previous curriculum for reference and comparison",
              },
            ],
          },

          // Career Paths
          careers: {
            // startingSalary: "35,000-55,000 THB",
            categories: [
              {
                title: "AI & Robotics Development",
                industry: "Tech/Automation",
                jobs: [
                  "Robotic Engineer",
                  "AI Engineer",
                  "Machine Vision Engineer",
                  "Robotic Security Analyst",
                ],
              },
              {
                title: "Software & IoT Systems",
                industry: "Software/Tech",
                jobs: [
                  "Software Engineer (Mechatronics)",
                  "Software Architect (AI)",
                  "System Engineer",
                  "IoT Engineer",
                  "Solution Architect",
                ],
              },
              {
                title: "Design & Analysis",
                industry: "Engineering/Design",
                jobs: [
                  "Machine Designer",
                  "Expert Systems Analyst",
                  "Solution Engineer",
                ],
              },
              {
                title: "Business & Innovation",
                industry: "Entrepreneurship/Management",
                jobs: [
                  "Technology Manager",
                  "Startup Entrepreneur",
                  "High-Tech Innovation Lead",
                ],
              },
            ],
          },
          // Admissions
          admissions: {
            requirements: [
              "Graduated from or studying in Matthayom 6 or equivalent",
              "Graduated from or studying in the final year of grade 12 or grade 13 at an accredited college or higher-education institution in Thailand or abroad.",
              "Obtained or expected to receive a qualification equivalent to Matthayom 6 as approved by the Ministry of Education before the start of Academic Year.",
            ],
            deadlines: {
              earlyApplication: "January 15",
              regularDeadline: "March 1",
            },
          },

          // Scholarships
          scholarships: [
            {
              name: "Merit Excellence Scholarship",
              amount: "$10,000/year",
              description:
                "For top-performing students entering the program with outstanding academic records.",
            },
            {
              name: "Future Innovators Award",
              amount: "$7,500",
              description:
                "For students demonstrating exceptional innovation in science and technology.",
            },
          ],
        },

        {
          id: "be-mse",
          name: "BE. in Manufacturing System Engineering",
          code: "MANU",
          department: "College of Advanced Manufacturing Innovation",
          description:
            "The manufacturing system engineering is 4 years program designed to develop specialized engineers for today's rapidly evolving industrial landscape. The program cultivates innovators who create distinctive solutions for real-world challenges and launch Deep Tech Startups from their research into business.",
          image: manu,

          overview: {
            introText:
              "The Manufacturing System Engineering program integrates various disciplinaries including Electrical engineering, Industry engineering, Mechanical engineering, Electronics engineering, Control engineering, and Management industry. Duration: 4 Years. SIITec Project Tracker.",
            stats: {
              credits: "148 credits",
              duration: "4 years",
              applicationPeriod: "November",
              tuition: "25,000 THB/semester",
              degreeLevel: "Bachelor",
              language: "Thai",
            },
          },

          curriculum: {
            description:
              "Comprehensive curriculum focusing on manufacturing systems",
            documents: [
              {
                title: "Manufacturing System Engineering Curriculum 2024",
                url: "https://ami.kmitl.ac.th/wp-content/uploads/2022/12/manufac_edit2565.pdf",
                size: "PDF • 1.8 MB",
                description:
                  "Complete curriculum for Manufacturing System Engineering",
              },
            ],
          },

          careers: {
            // startingSalary: "30,000 baht",
            categories: [
              {
                title: "Manufacturing & Industry",
                jobs: [
                  "Production Engineer",
                  "Process Control Engineer",
                  "R&D Engineer",
                  "Failure Analysis Engineer",
                  "Material Engineering",
                  "Researcher",
                ],
              },
              {
                title: "Advanced Fields",
                jobs: [
                  "Government Jobs / Leading State Enterprise Jobs",
                  "Robotics and Artificial Intelligence Engineer",
                  "Systems Integration Engineer",
                  "Programming Engineer",
                  "Professor at Science and Technology Institute",
                  "Freelancer, Entrepreneur, and Self-Employed in Related Fields",
                ],
              },
            ],
          },

          admissions: {
            requirements: [
              "Currently studying or have completed grade 12 (or equivalent)",
              "Science-Mathematics study plan",
              "Be a Thai national or legally residing in Thailand",
            ],
            deadlines: {
              earlyApplication: "January 15",
              regularDeadline: "March 1",
            },
          },
        },

        {
          id: "be-msecp",
          name: "BE. in Manufacturing System Engineering (Continuing Program)",
          code: "MANU",
          department: "College of Advanced Manufacturing Innovation",
          description:
            "The Manufacturing System Engineering (Continue program) is 2years program tailored for vocational diploma holders pursuing an undergraduate degree with the industry-co-designed curriculum, the program develops specialized manufacturing engineers ready for real-world careers.",
          image: image3,

          overview: {
            introText:
              "This continuing program condenses various disciplinaries in a very short period of study (2 years) to accommodate working professionals. Duration: 2 Years. SIITec Project Tracker.",
            stats: {
              credits: "90 credits",
              duration: "2 and a half years",
              applicationPeriod: "December",
              tuition: "28,000 THB/semester",
              degreeLevel: "Bachelor (Continuing)",
              language: "Thai",
            },
          },

          curriculum: {
            description: "Accelerated curriculum for working professionals",
            documents: [
              {
                title: "Continuing Program Curriculum 2024",
                url: "https://ami.kmitl.ac.th/wp-content/uploads/2023/06/manufac_2565-1.pdf",
                size: "PDF • 1.5 MB",
                description: "Accelerated curriculum for working professionals",
              },
            ],
          },

          careers: {
            // startingSalary: "30,000+ baht",
            categories: [
              {
                title: "Career Advancement",
                jobs: [
                  "Production Engineer",
                  "Process Control Engineer",
                  "R&D Engineer",
                  "Failure Analysis Engineer",
                  "Material Engineering",
                  "Researcher",
                ],
              },
              {
                title: "Leadership Roles",
                jobs: [
                  "Government Jobs / Leading State Enterprise Jobs",
                  "Robotics and Artificial Intelligence Engineer",
                  "Systems Integration Engineer",
                  "Programming Engineer",
                  "Professor at Science and Technology Institute",
                  "Freelancer, Entrepreneur, and Self-Employed in Related Fields",
                ],
              },
            ],
          },

          admissions: {
            requirements: [
              "Diploma or equivalent qualification",
              "Minimum 2 years work experience",
              "Currently employed in related field",
              "Science-Mathematics background preferred",
            ],
            deadlines: {
              earlyApplication: "Rolling admissions",
              regularDeadline: "Monthly intakes",
            },
          },
        },
      ],
    },

    master: {
      title: "Master Programs",
      degrees: [
        {
          id: "me-amse",
          name: "Master of Engineering Program in Advanced Manufacturing System Engineering",
          code: "MANU",
          department: "College of Advanced Manufacturing Innovation",
          abbreviation: "M.Eng. (Advanced Manufacturing System Engineering)",
          description:
            "Advance your career in manufacturing innovation with a flexible program offering three distinct plans tailored to your professional goals. Choose between research-intensive, balanced coursework-research, or course-based approaches to master advanced manufacturing systems.",
          image: image5,

          overview: {
            introText:
              "The Master of Engineering in Advanced Manufacturing System Engineering offers a flexible, career-oriented graduate education with three distinct study plans. Designed for engineers seeking to lead in smart manufacturing, Industry 4.0 implementation, and advanced production systems, this program combines rigorous academic training with practical applications. Students can select from research-focused, balanced, or course-based paths to match their professional aspirations and learning preferences.",
            stats: {
              credits: "36 credits (depending on plan)",
              duration: "2 years full-time",
              applicationPeriod: "From May Onwards",
              tuition: "As Announced by the University",
              degreeLevel: "Master of Engineering",
              language: "English",
            },
            programStructure:
              "Program structure is classified into 3 plans based on student requirements",
          },

          curriculum: {
            description:
              "Flexible curriculum with three study plans tailored to different career paths",
            plans: [
              {
                name: "Plan A-1",
                type: "Research-based program",
                requirements: [
                  "Thesis: 36 credit hours",
                  "Seminar: 1 non-credit hour",
                  "Research methodology for manufacturing process: 3 non-credit hours",
                ],
                description:
                  "Ideal for students pursuing academic research or doctoral studies",
              },
              {
                name: "Plan A-2",
                type: "Coursework and research requirement",
                requirements: [
                  "Thesis: 12 credit hours",
                  "Seminar: 1 non-credit hour",
                  "Research methodology for manufacturing process: 3 non-credit hours",
                  "Basic courses in advanced manufacturing system: 9 credit hours",
                  "Elective courses: 15 credit hours",
                ],
                description:
                  "Balanced approach combining coursework with research experience",
              },
              {
                name: "Plan B",
                type: "Course-based program",
                requirements: [
                  "Independent study: 6 credit hours",
                  "Seminar: 1 non-credit hour",
                  "Research methodology for manufacturing process: 3 credit hours",
                  "Basic courses in advanced manufacturing system: 27 credit hours",
                ],
                description:
                  "Professional-focused program emphasizing coursework and practical skills",
              },
            ],
            documents: [
              {
                title: "Curriculum Standard M.Eng. 2569",
                url: "https://drive.google.com/file/d/1E09ycqymWWkDzmG-mJBzNTVYOCHvWgVr/view?usp=drive_link",
                size: "External Link",
                description: "Official curriculum standards and requirements",
              },
            ],
          },

          careers: {
            // startingSalary: "45,000-65,000 baht",
            categories: [
              {
                title: "Advanced Manufacturing Leadership",
                jobs: [
                  "Advanced Manufacturing Systems Manager",
                  "Industry 4.0 Implementation Specialist",
                  "Smart Factory Project Lead",
                  "Manufacturing Process Innovation Manager",
                  "Production Systems Optimization Engineer",
                ],
              },
              {
                title: "Research & Development",
                jobs: [
                  "R&D Engineer (Advanced Manufacturing)",
                  "Manufacturing Technology Researcher",
                  "Process Development Specialist",
                  "New Product Introduction Engineer",
                  "Technology Transfer Coordinator",
                ],
              },
              {
                title: "Consulting & Strategy",
                jobs: [
                  "Manufacturing Systems Consultant",
                  "Operations Strategy Advisor",
                  "Digital Transformation Specialist",
                  "Supply Chain Optimization Expert",
                  "Industrial Automation Consultant",
                ],
              },
            ],
          },

          admissions: {
            requirements: [
              "Bachelor's degree in Engineering or related field (minimum GPA 2.75)",
              "Relevant work experience preferred (for Plan B)",
              "Research proposal (for Plan A-1 applicants)",
              "English proficiency for international track",
              "Letters of recommendation",
            ],
            deadlines: {
              januaryIntake: "October 31",
              juneIntake: "March 31",
            },
          },
        },
        {
          id: "msc-nnt",
          name: "M.Sc. in Nanoscience and Nanotechnology",
          code: "NANO",
          department: "Department of Nanoscience and Nanotechnology",
          description:
            "Explore the frontier of technology at the atomic level. Our graduate programs in Nanoscience and Nanotechnology offer rigorous training and cutting-edge research opportunities, from fundamental discovery to real-world application.",
          image: image6,
          overview: {
            introText:
              "The Master of Science in Nanoscience and Nanotechnology offers a flexible, career-oriented graduate education. Designed for engineers seeking to lead in nanotechnology research and development, this program combines rigorous academic training with practical applications. Students can select from research-focused, balanced, or course-based paths to match their professional aspirations and learning preferences.",
            stats: {
              credits: "36 credits (depending on plan)",
              duration: "2 years full-time",
              applicationPeriod: "From May Onwards",
              tuition: "35,000 THB/semester",
              degreeLevel: "Master of Science",
              language: "Thai",
            },
            programStructure:
              "Program structure is classified into 3 plans based on student requirements",
          },

          curriculum: {
            description:
              "Flexible curriculum with three study plans tailored to different career paths",
            plans: [
              {
                name: "Plan A-1",
                type: "Research-based program",
                requirements: [
                  "Thesis: 36 credits",
                  "Seminar: 2 credits (non-credit requirement)",
                  "Foundation Courses in Nanoscience and Nanotechnology: 12 credits (non-credit requirement)",
                  "Elective Course in Nanoscience and Nanotechnology: 3 credits (non-credit requirement)",
                ],
                description:
                  "Ideal for students pursuing academic research or doctoral studies",
              },
            ],
            documents: [
              // {
              //   title: "Master Degree Prospectus (2564 version)",
              //   url: "#",
              //   size: "PDF • 2.1 MB",
              //   description:
              //     "For students enrolling from Academic Year 2564 (2021) onwards",
              //   note: "Current version",
              // },
              // {
              //   title: "Master Degree Prospectus (2559 version)",
              //   url: "#",
              //   size: "PDF • 1.8 MB",
              //   description:
              //     "For students enrolling before Academic Year 2564 (2021)",
              //   note: "Legacy version",
              // },
              {
                title: "Curriculum Standard M.Eng. 2569",
                url: "https://drive.google.com/file/d/1E09ycqymWWkDzmG-mJBzNTVYOCHvWgVr/view?usp=sharing",
                size: "External Link",
                description: "Official curriculum standards and requirements",
              },
            ],
          },

          careers: {
            //  : "45,000-65,000 baht",
            categories: [
              {
                title: "Research & Development",
                jobs: [
                  "Nanotechnology R&D Engineer",
                  "Nano Materials Research Scientist",
                  "Advanced Materials Development Specialist",
                  "Nanofabrication Process Engineer",
                  "Technology Innovation Researcher",
                ],
              },
              {
                title: "Nanomaterials & Advanced Materials",
                jobs: [
                  "Nanomaterials Engineer",
                  "Semiconductor Materials Specialist",
                  "Energy Storage Materials Researcher",
                  "Functional Coatings Engineer",
                  "Materials Characterization Scientist",
                ],
              },
              {
                title: "Nanoelectronics & Semiconductor Technology",
                jobs: [
                  "Nanoelectronics Engineer",
                  "Semiconductor Process Engineer",
                  "MEMS/NEMS Development Engineer",
                  "Microfabrication Research Engineer",
                  "Device Integration Specialist",
                ],
              },

              {
                title: "Academic & Research Careers",
                jobs: [
                  "University Research Assistant",
                  "Research Laboratory Scientist",
                  "Doctoral Research Candidate (Ph.D.)",
                  "Academic Research Fellow",
                  "Government Research Institute Scientist",
                ],
              },
            ],
          },

          admissions: {
            requirements: [
              "Bachelor's degree in Engineering or related field (minimum GPA 2.75)",
              "Relevant work experience preferred (for Plan B)",
              "Research proposal (for Plan A-1 applicants)",
              "English proficiency for international track",
              "Letters of recommendation",
            ],
            deadlines: {
              januaryIntake: "October 31",
              juneIntake: "March 31",
            },
          },
        },
      ],
    },

    doctoral: {
      title: "Doctoral Programs",
      degrees: [
        {
          id: "phd-amse",
          name: "Doctor of Philosophy Program in Advanced Manufacturing System Engineering (International Program)",
          code: "MANU",
          department: "College of Advanced Manufacturing Innovation",
          abbreviation: "Ph.D. (Advanced Manufacturing System Engineering)",
          description:
            "An advanced research degree offering flexible study plans for graduates of all levels. Combine deep theoretical study with practical thesis research to master the complexities of modern manufacturing system engineering in our international program.",
          image: image2,

          overview: {
            introText:
              "The Doctor of Philosophy in Advanced Manufacturing System Engineering (International Program) represents the highest level of academic achievement in manufacturing systems research. This research-intensive program is designed to develop world-class researchers and innovators capable of advancing the frontiers of manufacturing technology. With three flexible study plans accommodating both Master's and exceptional Bachelor's graduates, the program provides comprehensive training in advanced research methodologies, theoretical frameworks, and practical applications for next-generation manufacturing systems.",
            stats: {
              credits: "Plan 1.1:48, Plan 2.1:48, Plan 2.2:72",
              duration: "3-5 years full-time",
              applicationPeriod: "From May Onwards",
              tuition: "As Announced by the University",
              degreeLevel: "Doctor of Philosophy (International)",
              language: "English",
            },
            programStructure:
              "Program structure is classified into 3 plans based on student background and requirements",
          },

          curriculum: {
            description:
              "Research-intensive doctoral program with multiple entry paths",
            plans: [
              {
                name: "Plan 1.1",
                type: "Research-based program ",
                requirements: [
                  "Thesis: 48 credit hours",
                  "Research methodology for manufacturing process: 3 non-credit hours",
                  "Seminar: 1 non-credit hour",
                  "Qualifying examination: Required",
                ],
                target:
                  "Master's degree holders seeking research-focused doctoral training",
              },
              {
                name: "Plan 2.1",
                type: "Coursework and research requirement ",
                requirements: [
                  "Thesis: 36 credit hours",
                  "Basic courses in advanced manufacturing system: 6 credit hours",
                  "Elective courses: 6 credit hours",
                  "Research methodology for manufacturing process: 3 non-credit hours",
                  "Seminar: 1 non-credit hour",
                  "Qualifying examination: Required",
                ],
                target:
                  "Master's degree holders preferring balanced coursework-research approach",
              },
              {
                name: "Plan 2.2",
                type: "Coursework and research requirement ",
                requirements: [
                  "Thesis: 48 credit hours",
                  "Basic courses in advanced manufacturing system: 9 credit hours",
                  "Elective courses: 15 credit hours",
                  "Research methodology for manufacturing process: 3 non-credit hours",
                  "Seminar: 1 non-credit hour",
                  "Qualifying examination: Required",
                ],
                target:
                  "Exceptional Bachelor's degree holders with First Class Honors",
              },
            ],
            documents: [
              // {
              //   title: "Doctoral Degree Prospectus (2564 version)",
              //   url: "#",
              //   size: "PDF • 2.4 MB",
              //   description:
              //     "For students enrolling from Academic Year 2564 (2021) onwards",
              //   note: "Current version",
              // },
              // {
              //   title: "Doctoral Degree Prospectus (2559 version)",
              //   url: "#",
              //   size: "PDF • 2.0 MB",
              //   description:
              //     "For students enrolling before Academic Year 2564 (2021)",
              //   note: "Legacy version",
              // },
              {
                title: "Curriculum Standard Ph.D. 2569",
                url: "https://drive.google.com/file/d/1E09ycqymWWkDzmG-mJBzNTVYOCHvWgVr/view?usp=sharing",
                size: "External Link",
                description:
                  "Official curriculum standards and requirements for doctoral program",
              },
            ],
          },

          careers: {
            // startingSalary: "60,000-90,000+ baht",
            categories: [
              {
                title: "Academic & Research Leadership",
                jobs: [
                  "University Professor in Manufacturing Engineering",
                  "Director of Advanced Manufacturing Research Center",
                  "Chief Research Scientist",
                  "Research Lab Director",
                  "Postdoctoral Research Fellow",
                ],
              },
              {
                title: "Industry Innovation Leadership",
                jobs: [
                  "Chief Technology Officer (Manufacturing)",
                  "VP of Research & Development",
                  "Advanced Manufacturing Technology Director",
                  "Innovation Strategy Lead",
                  "Corporate Research Principal Investigator",
                ],
              },
              {
                title: "Government & Policy",
                jobs: [
                  "National Manufacturing Policy Advisor",
                  "Technology Standards Committee Chair",
                  "Industrial Development Consultant",
                  "Public Sector Innovation Director",
                  "International Technology Collaboration Lead",
                ],
              },
            ],
          },

          admissions: {
            requirements: [
              "For Plan 1.1 & 2.1: Master's degree in Engineering or related field (minimum GPA 3.5)",
              "For Plan 2.2: Bachelor's degree with First Class Honors",
              "Strong research proposal aligned with faculty expertise",
              "English proficiency: TOEFL 90+/IELTS 6.5+",
              "Publications in related fields (preferred)",
              "Faculty interview and research aptitude assessment",
            ],
            deadlines: {
              rollingAdmissions: "Applications accepted year-round",
              reviewCycles: "Quarterly committee reviews",
            },
          },

          researchAreas: [
            "Smart Manufacturing and Industry 4.0 Systems",
            "Additive Manufacturing and Advanced Materials Processing",
            "Robotics and Autonomous Manufacturing Systems",
            "Digital Twin and Cyber-Physical Systems",
            "Sustainable and Circular Manufacturing",
            "AI/ML Applications in Manufacturing",
            "Advanced Quality Control and Metrology",
          ],
        },
        {
          id: "phd-nnt",
          name: "Ph.D. in Nanoscience and Nanotechnology",
          code: "NANO",
          department: "Department of Nanoscience and Nanotechnology",
          description:
            "A research-intensive program designed to push the boundaries of nanoscale science. Candidates engage in pioneering research, developing novel materials and technologies to solve complex global challenges.",
          image:
            "https://images.pexels.com/photos/17485658/pexels-photo-17485658.png",

          overview: {
            introText:
              "The Doctor of Philosophy in Nanoscience and Nanotechnology offers two flexible study plans accommodating both Master's and exceptional Bachelor's graduates, the program provides comprehensive training in advanced research methodologies, theoretical frameworks, and practical applications for next-generation nanotechnology systems.",
            stats: {
              credits: "Plan 1.1:48, Plan 1.2:72",
              duration: "3-5 years full-time",
              applicationPeriod: "From May Onwards",
              tuition: "As Announced by the University",
              degreeLevel: "Doctor of Philosophy (International)",
              language: "Thai",
            },
            programStructure:
              "Program structure is classified into 2 plans based on student background and requirements",
          },

          curriculum: {
            description:
              "Research-intensive doctoral program with multiple entry paths",
            plans: [
              {
                name: "Plan 1.1",
                type: "Research-based program",
                requirements: [
                  "Thesis: 48 credit hours",
                  "Seminar: 3 (non-credit requirement)",
                  "Foundation Courses in Nanoscience and Nanotechnology: 12 credits (non-credit requirement)",
                  "Elective Courses in Nanoscience and Nanotechnology: 6 credits (non-credit requirement)",
                ],
                target: "Research-Based Study Plan (Thesis-Only)",
              },
              {
                name: "Plan 1.2",
                type: "Coursework and research requirement",
                requirements: [
                  "Thesis: 72 credit hours",
                  "Seminar: 3 credits (non-credit requirement)",
                  "Foundation Courses in Nanoscience and Nanotechnology: 12 credits (non-credit requirement)",
                  "Elective Courses in Nanoscience and Nanotechnology: 9 credits (non-credit requirement)",
                ],
                target:
                  "For applicants holding a Bachelor's degree with Honors",
              },
            ],
            documents: [
              // {
              //   title: "Doctoral Degree Prospectus (2564 version)",
              //   url: "#",
              //   size: "PDF • 2.4 MB",
              //   description:
              //     "For students enrolling from Academic Year 2564 (2021) onwards",
              //   note: "Current version",
              // },
              // {
              //   title: "Doctoral Degree Prospectus (2559 version)",
              //   url: "#",
              //   size: "PDF • 2.0 MB",
              //   description:
              //     "For students enrolling before Academic Year 2564 (2021)",
              //   note: "Legacy version",
              // },
              {
                title: "Curriculum Standard Ph.D. 2569",
                url: "https://drive.google.com/file/d/1s2GQX3oi6QHJK7x4Wa3eLbLl4zO50WPe/view?usp=sharing",
                size: "External Link",
                description:
                  "Official curriculum standards and requirements for doctoral program",
              },
            ],
          },

          careers: {
            // startingSalary: "60,000-90,000+ baht",
            categories: [
              {
                title: "Advanced Research & Innovation",
                jobs: [
                  "Senior Research Scientist",
                  "Principal Nanotechnology Researcher",
                  "Advanced Materials Scientist",
                  "Nanotechnology Innovation Lead",
                  "Research Program Director",
                ],
              },
              {
                title: "Academic & Higher Education",
                jobs: [
                  "University Professor",
                  "Postdoctoral Research Fellow",
                  "Academic Research Scientist",
                  "Principal Investigator",
                  "Research Laboratory Director",
                ],
              },
              {
                title: "Semiconductor & High-Tech Industries",
                jobs: [
                  "Senior Semiconductor Process Engineer",
                  "Nanoelectronics Technology Specialist",
                  "MEMS/NEMS Research Engineer",
                  "Advanced Manufacturing Scientist",
                  "Technology Development Manager",
                ],
              },

              {
                title: "Research Leadership & Consulting",
                jobs: [
                  "Chief Technology Officer (CTO)",
                  "Research & Development Director",
                  "Technology Commercialization Manager",
                  "Scientific Consultant",
                  "Government Research Institute Director",
                ],
              },
            ],
          },

          admissions: {
            requirements: [
              "For Plan 1.1 & 2.1: Master's degree in Engineering or related field (minimum GPA 3.5)",
              "For Plan 2.2: Bachelor's degree with First Class Honors",
              "Strong research proposal aligned with faculty expertise",
              "English proficiency: TOEFL 90+/IELTS 6.5+",
              "Publications in related fields (preferred)",
              "Faculty interview and research aptitude assessment",
            ],
            deadlines: {
              rollingAdmissions: "Applications accepted year-round",
              reviewCycles: "Quarterly committee reviews",
            },
          },

          researchAreas: [
            "Smart Manufacturing and Industry 4.0 Systems",
            "Additive Manufacturing and Advanced Materials Processing",
            "Robotics and Autonomous Manufacturing Systems",
            "Digital Twin and Cyber-Physical Systems",
            "Sustainable and Circular Manufacturing",
            "AI/ML Applications in Manufacturing",
            "Advanced Quality Control and Metrology",
          ],
        },
      ],
    },
  };

  // Function to handle program details navigation
  const handleProgramDetails = (program) => {
    navigate("/ProgramDetailsWithNav", {
      state: { program }, // Pass the entire program object
    });
  };

  // Function to handle navigation for additional info cards
  const handleFinancialAid = () => {
    navigate("https://osda.kmitl.ac.th/scholarship/");
  };

  const handleInternships = () => {
    navigate("https://oia.kmitl.ac.th/");
  };

  const handleInternationalStudents = () => {
    navigate("/InternationalStudentPage");
  };

  return (
    <section id="programs" className="section programs-section">
      <div className="container">
        <div className="section-title">
          <h2>Academic Programs</h2>
          <p>Choose your path in integrated innovative technology education</p>
        </div>

        {/* Degree Level Selector */}
        <div className="degree-selector">
          {["bachelor", "master", "doctoral"].map((degree) => (
            <button
              key={degree}
              className={`degree-tab ${activeDegree === degree ? "active" : ""}`}
              onClick={() => setActiveDegree(degree)}
            >
              <span className="degree-icon">
                {degree === "bachelor" ? (
                  <FaUserGraduate />
                ) : degree === "master" ? (
                  <FaBook />
                ) : (
                  <FaMicroscope />
                )}
              </span>
              <span className="degree-text">
                {degree === "bachelor"
                  ? "Bachelor"
                  : degree === "master"
                    ? "Master"
                    : "Doctoral"}
              </span>
            </button>
          ))}
        </div>

        {/* Program Content */}
        <div className="programs-content">
          <div className="program-header">
            <h3>{programsData[activeDegree].title}</h3>
            <div className="programs_program-duration">
              <span className="programs_duration-badge">
                Duration:{" "}
                {activeDegree === "bachelor"
                  ? "4 years"
                  : activeDegree === "master"
                    ? "2 years"
                    : "4-5 years"}
              </span>
            </div>
          </div>

          <div className="degrees-grid">
            {programsData[activeDegree].degrees.map((degree, index) => (
              <div key={index} className="degree-card card">
                <div className="degree-image-wrapper">
                  <img
                    src={degree.image}
                    alt={degree.name}
                    className="degree-image"
                  />
                </div>
                <div className="details-des">
                  <div className="degree-card-header">
                    <h4>{degree.name}</h4>
                    <span className="degree-code">{degree.code}</span>
                  </div>

                  <p className="degree-description">{degree.description}</p>

                  <div className="degree-actions">
                    <button
                      className="btn btn-primary"
                      onClick={() =>
                        window.open(
                          "https://admission.reg.kmitl.ac.th/#/",
                          "_blank",
                          "noopener,noreferrer",
                        )
                      }
                    >
                      Apply Now
                    </button>
                    <button
                      className="btn btn-secondary"
                      onClick={() => handleProgramDetails(degree)}
                    >
                      Program Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className="programs-info">
          <div className="info-card card">
            <div className="info-card-icon">
              <FaGraduationCap />
            </div>
            <h4>Financial Aid & Scholarships</h4>
            <p>
              We offer various scholarship opportunities for outstanding
              students at all degree levels.
            </p>
            <button className="btn btn-secondary" onClick={handleFinancialAid}>
              Learn More
            </button>
          </div>

          <div className="info-card card">
            <div className="info-card-icon">
              {activeDegree === "bachelor" ? <FaBriefcase /> : <FaMicroscope />}
            </div>
            <h4>
              {activeDegree === "bachelor"
                ? "Internships Opportunity"
                : "Research Opportunities"}
            </h4>
            <p>
              {activeDegree === "bachelor"
                ? "Gain real-world experience through industry partnerships and internship programs."
                : "Work with leading researchers and access state-of-the-art facilities."}
            </p>
            <button className="btn btn-secondary" onClick={handleInternships}>
              {activeDegree === "bachelor"
                ? "Explore Internships"
                : "Explore Research"}
            </button>
          </div>

          <div className="info-card card">
            <div className="info-card-icon">
              <FaGlobeAmericas />
            </div>
            <h4>International Students</h4>
            <p>
              Join our diverse community with dedicated support for
              international applicants.
            </p>
            <button
              className="btn btn-secondary"
              onClick={handleInternationalStudents}
            >
              International Info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
