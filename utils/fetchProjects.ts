import { client } from "../sanity/lib/client";
import { Project } from "../typings";
import { groq } from "next-sanity";

export const fetchProjects =async () => {
    // const res= await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`)

    
const query = groq`
*[_type == "project"] {
  ...,
  technologies[]->
}
`;

const res = await client.fetch(query)

    // const data = await res.json()

    // const projects:Project[] = data.projects;
    const projects:Project[] = res;

    // console.log("fetching", projects)

    return projects;
}