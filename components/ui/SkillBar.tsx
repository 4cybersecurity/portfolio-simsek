import React from "react";
import {motion} from "framer-motion";

type Skill = {
    name: string;
    level: number;
};

export const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => {
    return (
        <div className="w-full max-w-xl">
            <div className="flex justify-between mb-1">
                <span className="text-lg font-medium text-gray-700 dark:text-gray-300">
                    {skill.name}
                </span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {skill.level}%
                </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                <motion.div
                    className="bg-purple h-4 rounded-full"
                    initial={{width: 0}}
                    animate={{width: `${skill.level}%`}}
                    transition={{duration: 1.5}}
                />
            </div>
        </div>
    );
};