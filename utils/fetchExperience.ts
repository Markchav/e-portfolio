import { client } from "../sanity/lib/client";
import { Experience } from "../typings";
import { groq } from 'next-sanity'

export const fetchExperience =async () => {
    // const res= await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`)

    
    const query = groq`
    *[_type == "experience"] | order(dateEnded desc) {
      ...,
      technologies[]->
    }
    `;

    const res = await client.fetch(query)

    // const data = await res.json()

    // const experiences:Experience[] = data.experiences;
    const experiences:Experience[] = res;

    // console.log("fetching", experiences)

    return experiences;
}