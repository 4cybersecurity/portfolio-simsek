import React from "react";
import {motion} from "framer-motion";

export const SkillColumn: React.FC<{ skill: { name: string; level: string }, levelOrder: string[] }> = ({ skill, levelOrder }) => {
    const levelIndex = levelOrder.indexOf(skill.level);
    const columnHeight = ((levelIndex + 1) / levelOrder.length) * 100;

    return (
        <div className="flex flex-col items-center">
            <div className="relative flex flex-col items-center h-64 w-20">
                <motion.div
                    className="bg-purple from-purple-500 to-purple-700 rounded-t-lg w-full absolute bottom-0"
                    initial={{ height: 0 }}
                    animate={{ height: `${columnHeight}%` }}
                    transition={{ duration: 1.5 }}
                />
            </div>
            <span className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-300">
                {skill.name}
            </span>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {skill.level}
            </span>
        </div>
    );
};