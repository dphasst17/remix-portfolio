import type { MetaFunction } from "@remix-run/node";
import {Timeline} from "~/components/ui/timeline";
import TimeLineData from "~/data/timeline";
import HeroSection from "~/components/ui/hero-section";
import {useEffect} from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Portfolio for D_FAST" },
    { name: "description", content: "Welcome to my portfolio" },
  ];
};

export default function Index() {
    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    },[])
    return (
        <div className="w-full h-dvh">
            <HeroSection />
            <Timeline data={TimeLineData} />
        </div>
    );
}
