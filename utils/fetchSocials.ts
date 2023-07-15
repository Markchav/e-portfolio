import { client } from "../sanity/lib/client";
import { Social } from "../typings";
import { groq } from "next-sanity";

export const fetchSocials =async () => {
    // const res= await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);

    const query = groq`
    *[_type == "social"]
    `;

    const res = await client.fetch(query)

    // const data = await res.json();

    // const socials:Social[] = data.socials;
    const socials:Social[] = res;

    // console.log("fetching", socials)

    return socials;
}