import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import ShowcaseCard from "@/components/showcase-card";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-2 md:py-10">
        <div className="inline-block max-w-[90%] lg:max-w-[50%] text-center justify-center">
          <span className={title()}>Space for&nbsp;</span>
          <span className={title({color: "red"})}>leveraging&nbsp;</span>
          <span className={title()}>your</span>
          {/* <span className={title({})}>your</span> */}
          <br />
          <span className={title({ color: "orange" })}>
            programming
          </span>
          <br className="lg:hidden" />
          <span className={title()}>&nbsp;knowledge</span>
          <div className={subtitle({ class: "mt-4" })}>
            Unlock Web Development Skills with Hands-On Learning
          </div>
        </div>

        <div className="flex flex-wrap gap-[2rem] max-w-[36%] justify-center">
          <Link
            isExternal
            // className={buttonStyles({
            //   color: "primary",
            //   radius: "full",
            //   variant: "shadow",
            // })}
            href={siteConfig.links.docs}
          >
            <ShowcaseCard type="free" text="html/css"/>
          </Link>
          <Link
            isExternal
            // className={buttonStyles({
            //   color: "primary",
            //   radius: "full",
            //   variant: "shadow",
            // })}
            href={siteConfig.links.docs}
          >
            <ShowcaseCard type="free" text="js"/>
          </Link>
          <Link
            isExternal
            // className={buttonStyles({
            //   color: "primary",
            //   radius: "full",
            //   variant: "shadow",
            // })}
            href={siteConfig.links.docs}
          >
            <ShowcaseCard type="soon" text="go"/>
          </Link>
          <Link
            isExternal
            // className={buttonStyles({
            //   color: "primary",
            //   radius: "full",
            //   variant: "shadow",
            // })}
            href={siteConfig.links.docs}
          >
            <ShowcaseCard text="react" type="paid"/>
          </Link>
          
          {/* <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link> */}
        </div>

        <div className="mt-8">
          {/* <Snippet hideCopyButton hideSymbol variant="bordered"> */}
            <span>
              <Code color="default">Start Learning Now!</Code>
            </span>
          {/* </Snippet> */}
        </div>
      </section>
    </DefaultLayout>
  );
}
