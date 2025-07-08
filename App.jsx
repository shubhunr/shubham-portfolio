
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-black"}>
      <div className="container mx-auto p-4 min-h-screen transition-colors">
        <div className="flex justify-end">
          <Button variant="ghost" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Sun /> : <Moon />}
          </Button>
        </div>
        <div className="text-center mt-10">
          <img
            src="/shubham-profile.jpg"
            alt="Shubham Roy"
            className="w-32 h-32 mx-auto rounded-full shadow-xl border-4 border-gray-300"
          />
          <h1 className="text-4xl font-bold mt-4">Shubham Roy</h1>
          <p className="text-xl text-gray-500 dark:text-gray-300">ITAM & CMDB Analyst</p>
          <div className="mt-4">
            <a href="https://www.linkedin.com/in/shubhunr" className="mr-4 text-blue-500 hover:underline" target="_blank">LinkedIn</a>
            <a href="https://github.com/shubhunr" className="text-blue-500 hover:underline" target="_blank">GitHub</a>
          </div>
          <a
            href="/Shubham_Roy_Resume.pdf"
            download
            className="inline-block mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Download Resume
          </a>
        </div>
        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p>
            Driven ITAM & CMDB Analyst with 4 years of experience, specializing in maintaining accurate configuration item data and optimizing IT asset lifecycle processes. Proven expertise in leveraging ServiceNow and Cherwell for CMDB discovery, health management, and ensuring software license compliance.
          </p>
        </section>
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <ul className="grid grid-cols-2 gap-2">
            <li>ServiceNow</li><li>Cherwell</li><li>CMDB Discovery</li><li>Health Management (3Cs)</li>
            <li>Server Retirement</li><li>Asset Replacement</li><li>License Management</li><li>Software Metering</li>
            <li>HTML5, CSS3, JavaScript</li><li>ReactJS</li><li>Microsoft Intune</li><li>Excel, SCCM, Bomgar</li>
          </ul>
        </section>
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <Card className="mb-4"><CardContent>
            <h3 className="text-lg font-bold">ITAM & CMDB Analyst @ Consumers Energy (HCLTech)</h3>
            <p className="text-sm text-gray-500">2024 – June 2025</p>
            <p className="mt-2">Maintained CMDB, executed discovery processes, managed server retirement & asset replacement, ensured 3Cs of data, and created CMDB health reports.</p>
          </CardContent></Card>
          <Card className="mb-4"><CardContent>
            <h3 className="text-lg font-bold">ITAM & CMDB Analyst @ SC Johnson (HCLTech)</h3>
            <p className="text-sm text-gray-500">2021 – June 2024</p>
            <p className="mt-2">Managed full asset and license lifecycle, tracked configuration dependencies, handled vendor negotiations, led audits, and trained users on ServiceNow and Cherwell.</p>
          </CardContent></Card>
        </section>
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <p><strong>BITS Pilani</strong> – Bachelor's in Design and Computing (2022 – 2026)</p>
        </section>
        <footer className="mt-20 text-center text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Shubham Roy. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
