import React from "react";
import {motion} from "framer-motion";

type Skill = {
    name: string;
    level: number;
};

export const CircularSkill: React.FC<{ skill: Skill }> = ({ skill }) => {
    const circleSize = 100;
    const circleStroke = 10;
    const radius = (circleSize - circleStroke) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (skill.level / 100) * circumference;

    return (
        <div className="flex flex-col items-center">
            <svg width={circleSize} height={circleSize} className="relative">
                <circle
                    stroke="#e2e8f0"
                    fill="transparent"
                    strokeWidth={circleStroke}
                    r={radius}
                    cx={circleSize / 2}
                    cy={circleSize / 2}
                />
                <motion.circle
                    stroke="#7c3aed"
                    fill="transparent"
                    strokeWidth={circleStroke}
                    r={radius}
                    cx={circleSize / 2}
                    cy={circleSize / 2}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    initial={{ strokeDashoffset: circumference }}
                    animate={{ strokeDashoffset: offset }}
                    transition={{ duration: 1.5 }}
                />
                <text
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fill="#7c3aed"
                    className="text-lg font-bold"
                >
                    {skill.level}%
                </text>
            </svg>
            <span className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-300">
                {skill.name}
            </span>
        </div>
    );
};
