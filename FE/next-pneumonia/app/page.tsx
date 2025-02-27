import { FaCloudUploadAlt } from "react-icons/fa";
import { title, subtitle } from "@/components/primitives";
import PredictCard from "@/components/card";
import { Button } from "@heroui/button";
import { FcAddImage } from "react-icons/fc";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <div className="inline-block max-w-2xl text-center justify-center">
        <span className={title()}>AI-powered&nbsp;</span>
        <span className={title({ color: "violet" })}>Pneumonia&nbsp;</span>
        <br />
        <span className={title()}>Detection from Chest X-ray.</span>
        <div className={subtitle({ class: "mt-4" })}>
          Accurate, fast, and reliable deep learning-based diagnosis.
        </div>
      </div>

      <div>
        <PredictCard />
      </div>

      <div className="flex gap-3">
        <Button
          className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
          radius="full"
          size="lg"
          startContent= {<FcAddImage size={25}/>}
        >
          Upload your X-ray image
        </Button>
      </div>

      {/* <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div> */}
    </section>
  );
}
