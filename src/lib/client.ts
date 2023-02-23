import {createClient, type ClientConfig} from '@sanity/client'
import {SanityImageSource} from '@sanity/image-url/lib/types/types'
import imageUrlBuilder from "@sanity/image-url";

const config: ClientConfig = {
    projectId: 'lus01qkt',
    dataset: 'production',
    apiVersion: '2023-02-23', // use current date (YYYY-MM-DD) to target the latest API version
    useCdn: true, // `false` if you want to ensure fresh data
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  }

export const client = createClient(config)

const builder = imageUrlBuilder(client);
export const urlFor = (source: SanityImageSource) => builder.image(source);