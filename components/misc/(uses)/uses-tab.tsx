"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import {
  BrowserTab,
  EverydayTab,
  SoftwareTab,
} from "@/components/misc/(uses)/uses-tabs-comps";

type TabKey =
  | "everyday"
  | "software"
  | "browser"

const tabs: Array<{ id: TabKey; title: string }> = [
  { id: "everyday", title: "Everyday" },
  { id: "software", title: "Software" },
  { id: "browser", title: "Browser" },
] as const;

const tabContent: Record<TabKey, React.ReactNode> = {
  everyday: <EverydayTab />,
  software: <SoftwareTab />,
  browser: <BrowserTab />,
};

export const UsesTabs = () => {
  return (
    <Tabs defaultValue="everyday" className="w-full">
      <TabsList>
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.id}
            value={tab.id}
          >
            {tab.title}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent
          key={tab.id}
          value={tab.id}
        >
          {tabContent[tab.id]}
        </TabsContent>
      ))}
    </Tabs>
  );
};
