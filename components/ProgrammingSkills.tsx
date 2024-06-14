import React from "react";
import {CircularSkill} from "@/components/ui/CircularSkill";

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
            <h1 className="heading text-4xl font-bold text-center mb-10">
                My <span className="text-purple">Programming Skills</span>
            </h1>
            <div className="flex flex-wrap justify-center gap-10">
                {skills.slice(0, 3).map((skill, index) => (
                    <CircularSkill key={index} skill={skill}/>
                ))}
            </div>
            <div className="flex flex-wrap justify-center gap-10 mt-10">
                {skills.slice(3).map((skill, index) => (
                    <CircularSkill key={index} skill={skill}/>
                ))}
            </div>
        </section>
    );
};

export default ProgrammingSkills;
