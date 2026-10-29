"use client";

import Link from "next/link";
import { Search, Compass, Bookmark, MessageSquare, ArrowUpRight } from "lucide-react";

export default function ExploreScene() {
  const steps = [
    {
      icon: Search,
      title: "Browse Residences",
      description: "Explore our typed portfolio across 6 premier global capitals.",
      link: "/developments",
      label: "View Catalogue",
    },
    {
      icon: Compass,
      title: "Filter by Atmosphere",
      description: "Match by geographic location, budget ceiling, or typology.",
      link: "/discover",
      label: "Launch Matrix",
    },
    {
      icon: Bookmark,
      title: "Curate & Save",
      description: "Save residences to your private portfolio with local persistence.",
      link: "/saved",
      label: "View Portfolio",
    },
    {
      icon: MessageSquare,
      title: "Request Viewing",
      description: "Schedule a confidential private viewing or request architectural dossiers.",
      link: "/contact",
      label: "Private Advisory",
    },
  ];

  return (
    <section className="py-24 sm:py-36 bg-[#F7F6F2] text-[#20211F] border-b border-[#E6DED0] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#55544F] block">
            05 / Discovery Gateway
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#20211F] leading-tight tracking-tight">
            Explore the WAYSTAR Experience
          </h2>
          <p className="text-sm sm:text-base text-[#55544F] font-light leading-relaxed">
            Navigate our international collection through practical discovery tools designed for collectors of architecture.
          </p>
        </div>

        {/* 4 Gateway Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 border border-[#E6DED0] hover:border-[#20211F] transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-full bg-[#F7F6F2] border border-[#E6DED0] flex items-center justify-center text-[#B9A994] group-hover:text-[#20211F] transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif text-xl font-normal text-[#20211F]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#55544F] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-8">
                  <Link
                    href={item.link}
                    className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-[#20211F] font-semibold group-hover:text-[#B9A994] transition-colors"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
