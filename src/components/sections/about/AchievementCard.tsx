import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogContent as DialogUI,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { DialogContent } from "./DialogContent";
import { Achievement, DialogAchievements } from "./types";

interface AchievementCardProps {
  achievement: Achievement;
  index: number;
  dialogData: DialogAchievements;
}

export function AchievementCard({
  achievement,
  index,
  dialogData,
}: AchievementCardProps) {
  return (
    <motion.div
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
              <p className="text-slate-400 text-sm group-hover:text-slate-300">
                Clique aqui para mais detalhes
              </p>
            </CardContent>
          </Card>
        </DialogTrigger>
        <DialogUI className="bg-black/1 backdrop-blur-xl border-slate-700/50 min-w-50 min-h-50">
          <DialogHeader className="text-white">
            <DialogTitle className="text-center space-y-3 items-center pb-4 border-b border-slate-700/50 w-full">
              {achievement.title}
            </DialogTitle>
          </DialogHeader>
          <div className="mt-6 text-slate-300">
            <DialogContent title={achievement.title} dialogData={dialogData} />
          </div>
        </DialogUI>
      </Dialog>
    </motion.div>
  );
}
