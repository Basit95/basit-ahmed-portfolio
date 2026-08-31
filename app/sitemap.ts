import type {MetadataRoute} from "next";
import {allProjects} from "../data/projects";
export default function sitemap():MetadataRoute.Sitemap{const base="https://basit-portfolio.basit-ahmed906.chatgpt.site";return [{url:base,lastModified:new Date(),changeFrequency:"monthly" as const,priority:1},...allProjects.map(project=>({url:`${base}/projects/${project.slug}`,lastModified:new Date(),changeFrequency:"monthly" as const,priority:.8}))]}
