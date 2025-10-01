"use client";

import { Card, CardContent } from "@/components/ui/card";
import { SplitText } from "@/components/ui/split-text";
import { motion } from "framer-motion";
import { Code2, GraduationCap, Target, Users } from "lucide-react";
import { Dialog, DialogContent } from "../ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";

export function AboutSection() {
  const achievements = [
    {
      icon: GraduationCap,
      title: "Formação",
      description: "Cursando Ciência da Computação",
    },
    {
      icon: Code2,
      title: "Desenvolvimento",
      description: "Experiência em projetos web e mobile",
    },
    {
      icon: Target,
      title: "Foco",
      description: "Sempre buscando aprender novas tecnologias",
    },
    {
      icon: Users,
      title: "Colaboração",
      description: "Trabalho bem em equipe e projetos colaborativos",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-slate-950 relative tech-pattern overflow-hidden">
      <div className="container mx-auto px-6">
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
            <div className="space-y-6">
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
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}>
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="glass-card hover:border-blue-500/50 transition-all duration-300 h-full tech-hover group">
                      <CardContent className="p-6 text-center relative">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                          <achievement.icon className="h-8 w-8 text-blue-400 group-hover:text-blue-300" />
                        </div>
                        <h3 className="text-white font-semibold mb-2 group-hover:text-blue-100">
                          {achievement.title}
                        </h3>
                        <p className="text-slate-400 text-sm group-hover:text-slate-300">
                          {achievement.description}
                        </p>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="backdrop-blur-xl opacity-1 min-w-50 min-h-50">
                    <p>
                      {achievement.title} - {achievement.description}
                    </p>
                  </DialogContent>
                </Dialog>
              </motion.div>
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
