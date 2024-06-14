import React from "react";
import {SkillBar} from "@/components/ui/SkillBar";

type Skill = {
    name: string;
    level: number;
};
const ProgrammingSkills = () => {
    const skills: Skill[] = [
        { name: "JavaScript", level: 75 },
        { name: "HTML", level: 90 },
        { name: "Java", level: 80 },
        { name: "CSS", level: 90 },
        { name: "Flutter", level: 40 },
        { name: "Dart", level: 45 },
    ];


    return (
        <section className="w-full py-20">
            <h1 className="heading">
                My <span className="text-purple">Programming Skills</span>
            </h1>
            <div className="my-10 flex flex-col items-center justify-center w-full gap-6">
                {skills.map((skill, index) => (
                    <SkillBar key={index} skill={skill} />
                ))}
            </div>
        </section>
    );
};

export default ProgrammingSkills;
