import Image from "next/image"
import Link from "next/link"
import { Banner } from "@/types"
import { urlFor } from "@/lib/client"

const HeroBanner = ({heroBanner}: {heroBanner: Banner}) => {
  return (
    <div className="hero-banner-container">
        <div className="">
            <p className="beats-solo">
                {heroBanner.smallText}
            </p>
            <h3>{heroBanner.midText}</h3>
            <h1>{heroBanner.largeText1}</h1>
            <img src={`${urlFor(heroBanner.image)}`} alt="headphones" className="hero-banner-image" />
            <div>
                <Link href={`/product/${heroBanner.product}`}>
                    <button type="button">{heroBanner.buttonText}</button>
                </Link>
                <div className="desc">
                    <h5>{heroBanner.desc}</h5>
                    <p>{heroBanner.desc}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner