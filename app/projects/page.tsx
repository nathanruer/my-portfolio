import AnimatedText from "../components/AnimatedText"
import Header from "../components/Header"
import FeaturedProject from "./components/FeaturedProject"
import Project from "./components/Project";

import crypto_screener_application from "@/public/images/crypto_screener_application.png";
import airbnb_clone from "@/public/images/airbnb_clone.png";
import swap_app from "@/public/images/swap_app.png";

const Home = () => {
  return (
    <main className='flex w-full flex-col items-center justify-center'>
      <div className="w-full h-full inline-block py-16">
        <AnimatedText text="Imagination Trumps Knowledge!" />

        <div className="px-8 lg:px-32 py-16">
          <Header title="Check my recent projects!" />

          <FeaturedProject 
            type="Featured Project"
            title="Crypto Screener Application"
            summary="The described website project utilizes the Binance API, Next.js, Tailwind, and TypeScript to display real-time prices of selected cryptocurrencies available on the Binance platform. Next.js serves as the framework for building a performant and dynamic web application, while Tailwind simplifies the UI design with its utility classes. TypeScript adds static typing to enhance development reliability. The Binance API integration retrieves the necessary data for displaying real-time prices on the website."
            img={crypto_screener_application}
            link="https://crypto-screener-application-nathanruer.vercel.app"
            github="https://github.com/nathanruer/crypto-prices-binance"
          />

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-12">
            <Project 
              type="Website"
              title="Airbnb Clone"
              img={airbnb_clone}
              link="https://airbnb-clone-nathanruer.vercel.app/"
              github="https://github.com/nathanruer/airbnb-clone"
            />
            <Project 
              type="Website"
              title="Web3 Swap App"
              img={swap_app}
              github="https://github.com/nathanruer/web3-swap-app-v2"
            />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home