import { ReactComponent as Cal } from "../assets/images/heroImage/cal.svg";
import { ReactComponent as Expenses } from "../assets/images/heroImage/expense.svg";
import { ReactComponent as Currency } from "../assets/images/heroImage/currency.svg";
import { ReactComponent as Bal } from "../assets/images/heroImage/bal.svg";
import { ReactComponent as User } from "../assets/images/heroImage/user.svg";
import { ReactComponent as Stat } from "../assets/images/heroImage/stat.svg";
import Button from "components/Button";

function HeroHome() {
  return (
    <section className="relative">
      {/* Illustration behind hero content */}

      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        {/* Hero content */}
        <div className="pt-20 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16 ">
            <h1
              className="mb-4 text-5xl font-extrabold tracking-tighter text-center md:text-6xl leading-tighter"
              data-aos="zoom-y-out"
            >
              We make it easy for<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
                everyone to invest
              </span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="mb-8 text-xl text-gray-600"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Investment is a term with several meanings related to finance
                and economics. The term relates to the accumulation of an assets
                in the forms of an expectation of the future profits.
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div>
                  <Button text="Get Started" />
                </div>
                <div >
                  <Button text="Watch Video" clx="text-green-500 bg-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="flex items-center gap-6">
            <Cal />
            <div className="flex flex-col gap-y-6">
              <Expenses />
              <Currency />
            </div>
            <div className="flex flex-col gap-y-6">
              <Bal />
              <Stat />
            </div>
            <User />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
