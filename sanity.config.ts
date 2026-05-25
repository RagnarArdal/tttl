import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/sanity/schemaTypes";

export default defineConfig({
  name: "tttl-shop",
  title: "Tæki og Tól Til Leigu Admin",
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || "your_project_id",
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || "production",
  basePath: "/admin",
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});
