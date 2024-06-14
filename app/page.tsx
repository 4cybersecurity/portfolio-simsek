"use client";

import {navItems} from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Abilities from "@/components/Abilities";
import RecentProjects from "@/components/RecentProjects";
import {FloatingNav} from "@/components/ui/FloatingNavbar";

const Home = () => {
    return (
        <main
            className="relative bg-white flex justify-center items-center flex-col mx-auto sm:px-10 px-5">
            <div className="max-w-7xl w-full">
                <FloatingNav navItems={navItems}/>
                <Hero/>
                <Grid/>
                <RecentProjects/>
                <Abilities/>
                <Footer/>
            </div>
        </main>
    );
};

export default Home;
