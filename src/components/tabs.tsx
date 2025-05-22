"use client";
import { useState } from "react";
import { motion } from "framer-motion"; // fixed incorrect import
import { cn } from "../lib/utils";

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName
}) => {
  const [active, setActive] = useState(propTabs[0]);
  const [tabs, setTabs] = useState(propTabs);
  const [hovering, setHovering] = useState(true);

  const moveSelectedTabToTop = (idx) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  return (
    <>
      <div
        className={cn(
          "flex flex-row flex-wrap items-center justify-center [perspective:1000px] sm:pb-[0px] pb-[30px] pt-[20px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full text-center gap-2",
          containerClassName
        )}>
        {propTabs.map((tab, idx) => {
          const isActive = active.value === tab.value;
          return (
            <button
              key={tab.title}
              onClick={() => moveSelectedTabToTop(idx)}
              onMouseEnter={() => setHovering(true)}
              // onMouseLeave={() => setHovering(false)}
              className={cn(
                "relative sm:px-4 px-3 py-2 sm:text-[16px] text-[14px] rounded-full transition-colors duration-300",
                isActive
                  ? "bg-[#333387]  text-white"
                  : "text-black",
                tabClassName
              )}
              style={{
                transformStyle: "preserve-3d",
              }}>
              {isActive && (
                <motion.div
                  layoutId="clickedbutton"
                  transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                  className={cn(
                    "absolute inset-0 rounded-full",
                    activeTabClassName
                  )}
                />
              )}
              <span className="relative block z-10">{tab.title}</span>
            </button>
          );
        })}
      </div>

      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        hovering={hovering}
        className={cn("mt-32", contentClassName)} />
    </>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
  hovering
}) => {
  const isActive = (tab) => tab.value === tabs[0].value;

  return (
    <div className="relative w-full h-full">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            top: hovering ? idx * -50 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
          animate={{
            y: isActive(tab) ? [0, 40, 0] : 0,
          }}
          className={cn("w-full h-full absolute top-0 left-0", className)}>
          {tab.content}
        </motion.div>
      ))}
    </div>
  );
};
