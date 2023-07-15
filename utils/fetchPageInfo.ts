import { client } from "../sanity/lib/client";
import { PageInfo } from "../typings";
import { groq } from 'next-sanity'


export const fetchPageInfo =async () => {
    // const res= await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`)

    const query = groq`
*[_type == "pageInfo"][0]{
  ...,
  technologies[]->
}
`;

    const res = await client.fetch(query);

    // const data = await res.json()

    // const pageInfo:PageInfo = data.pageInfo;
    const pageInfo:PageInfo = res;

    // console.log("fetching", pageInfo)

    return pageInfo;
}