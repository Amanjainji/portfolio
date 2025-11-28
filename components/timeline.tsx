"use client"

import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

const experiences = [
  {
    title: "SDE Intern (Upcoming)",
    company: "Microsoft",
    period: "May 2026 - July 2026",
    description: "Selected for the Summer 2026 internship as an On Campus opportunity with the Microsoft Core team. Will be contributing to high-impact system design and collaborating with senior software engineers to deliver scalable solutions.",
  },
  {
    title: "ML Research Intern",
    company: "MLR LAB DTU, Delhi",
    period: "June 2025 - August 2025",
    description:
      "Conducting research on Action recognition in Dark on ARIDv1.5 and ELLAR. Collaborating with cross-functional teams to develop and implement ML models pipelines to achieve better performance on classification.",
  },
  {
    title: "Corporate Coordinator",
    company: "Literature and Film Society, DTU",
    period: "2023 - 2025",
    description:
      "Spearheaded sponsorship acquisition by initiating partnerships, negotiating deals, forged corporate relationships and led a team of executives, ensuring financial support for the fest Yuvaan.",
  },
  {
    title: "Educator - Networks, Programming & Digital Electronics",
    company: "15ForTeen - YouTube Education Platform",
    period: "June 2024 - December 2024",
    description:
      "Delivering video lectures on Programming fundamentals(C/C++) and core subjects like Digital Electronics and Computer Networks for IP University students. Creating exam-oriented content and tutorials to support conceptual clarity and academic success.",
  },
  {
    title: "Event Management Lead",
    company: "Smart India Hackathon, Character on Road Hackathon",
    period: "September 2024",
    description: "Orchestrated logistics at major hackathons and events including Character On Road and Smart India Hackathon at DTU managing 1,000+ participants to ensure seamless event execution.",
  },
]

export function Timeline() {
  const isMobile = useMobile()

  return (
    <div
      className={`space-y-12 relative ${
        !isMobile
          ? "before:absolute before:inset-0 before:left-1/2 before:ml-0 before:-translate-x-px before:border-l-2 before:border-zinc-700 before:h-full before:z-0"
          : ""
      }`}
    >
      {experiences.map((experience, index) => (
        <div
          key={index}
          className={`relative z-10 flex items-center ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
        >
          <motion.div
            className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-10" : "md:pr-10"}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 transition-all duration-300 hover:border-purple-500/50">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

              <div className="relative">
                <h3 className="text-xl font-bold">{experience.title}</h3>
                <div className="text-zinc-400 mb-4">
                  {experience.company} | {experience.period}
                </div>
                <p className="text-zinc-300">{experience.description}</p>
              </div>
            </div>
          </motion.div>

          {!isMobile && (
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
              <motion.div
                className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 z-10 flex items-center justify-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </motion.div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
