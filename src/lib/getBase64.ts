import { getPlaiceholder } from "plaiceholder";
 
export default async function getBase64(imageUrl: string) {
  try {
    const res = await fetch(imageUrl)

    if (!res.ok) {
      throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`)
    }

    const buffer = await res.arrayBuffer()
    const { base64 } = await getPlaiceholder(Buffer.from(buffer))
   
    return base64
  } catch (err) {
    if (err instanceof Error) console.log(err)
  }
}

// Logs
// data:image/jpeg;base64,/9j/2wBDAAYEBQY…