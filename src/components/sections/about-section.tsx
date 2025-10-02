"use client";

import { SplitText } from "@/components/ui/split-text";
import { motion } from "framer-motion";
import { AchievementCard } from "./about/AchievementCard";
import { achievements, dialogAchievements } from "./about/data";

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 bg-slate-950 relative tech-pattern overflow-hidden">
      <div className="container mx-auto px-6 ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <SplitText
            text="Sobre Mim"
            className="text-4xl md:text-5xl font-bold text-white mb-6 justify-center"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texto sobre */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>
            <div className="space-y-10 mb-2">
              <p className="text-lg text-slate-300 leading-relaxed">
                Sou um estudante apaixonado por tecnologia, sempre em busca de
                novos conhecimentos e desafios. Durante minha jornada acadêmica
                em Ciência da Computação, tenho me dedicado a desenvolver
                projetos que demonstram minhas habilidades técnicas e
                criatividade.
              </p>

              <p className="text-lg text-slate-300 leading-relaxed">
                Minha paixão pela programação começou cedo, e desde então tenho
                explorado diversas áreas do desenvolvimento de software, desde
                desenvolvimento web até aplicações mobile. Acredito que a
                tecnologia pode transformar o mundo e estou empolgado para fazer
                parte dessa transformação.
              </p>

              <p className="text-lg text-slate-300 leading-relaxed">
                Quando não estou codificando, gosto de estudar novas
                tecnologias, participar de comunidades de desenvolvedores e
                trabalhar em projetos pessoais que me desafiam a crescer
                profissionalmente.
              </p>
            </div>
          </motion.div>

          {/* Cards de conquistas */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <AchievementCard
                key={index}
                achievement={achievement}
                index={index}
                dialogData={dialogAchievements}
              />
            ))}
          </motion.div>
        </div>

        {/* Estatísticas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "2+", label: "Anos de Estudo" },
            { number: "10+", label: "Projetos Desenvolvidos" },
            { number: "5+", label: "Tecnologias Dominadas" },
            { number: "∞", label: "Vontade de Aprender" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">
                {stat.number}
              </div>
              <div className="text-slate-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
