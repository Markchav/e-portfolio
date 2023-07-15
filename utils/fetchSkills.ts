import { client } from "../sanity/lib/client";
import { Skill } from "../typings";
import { groq } from "next-sanity";

export const fetchSkills =async () => {
    // const res= await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`)

    const query = groq`
*[_type == "skill"]
`;

const res = await client.fetch(query);

    // const data = await res.json()

    // const skills:Skill[] = data.skills;
    const skills:Skill[] = res;

    // console.log("fetching", skills)

    return skills;
}