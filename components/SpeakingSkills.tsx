import React from "react";
import {SkillColumn} from "@/components/ui/SkillColumn";
import { GlareCard } from "./ui/GlareCard";


const SpeakingSkills: React.FC = () => {
    const skills = [
        { name: "Turkish", level: "C2" },
        { name: "English", level: "C1" },
        { name: "Dutch", level: "B2" }
    ];

    const levelOrder = ["A1", "A2", "B1", "B2", "C1", "C2"];

    return (
        <section className="w-full py-20" id="speakingskills">
            <h1 className="heading text-4xl font-bold text-center mb-10">
                My <span className="text-purple">Speaking Skills</span>
            </h1>
            <div className="flex justify-center">
                <GlareCard className="p-6 max-w-4xl w-full flex items-center justify-center flex-col">
                    <div className="flex items-end justify-center w-full gap-6">
                        {skills.map((skill, index) => (
                            <SkillColumn key={index} skill={skill} levelOrder={levelOrder} />
                        ))}
                    </div>
                </GlareCard>
            </div>
        </section>
    );
};

export default SpeakingSkills;
