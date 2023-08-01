import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: "lgnovia9",
    dataset: "production",
    title: "My Personal Website",
    apiVersion: "2023-08-01",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: schemas }
});

export default config       