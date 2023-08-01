import { createClient, groq } from "next-sanity";
import { config } from "process";

export async function getProjects() {
    const client = createClient({
        projectId: "lgnovia9",
        dataset: "production",
        apiVersion: "2023-08-01",
    });

    return client.fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`
    )

}