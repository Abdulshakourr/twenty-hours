import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-3 md:mt-5">
              Master any skill and monitor in simple easy way
            </h1>
            <p className="md:text-xl text-base text-gray-500 mt-4">
              this is the easies and most compeling way to master any skill
            </p>
          </div>
          <div className="my-8 py-4 flex items-center justify-center">
            <Button
              size="lg"
              variant={"outline"}
              className="text-gray-600 py-3 text-md"
            >
              Start Learning
            </Button>
          </div>
          {/* the image shawcase */}

          <div>
            <div className="max-w-6xl w-full mx-auto bg-gray-200 h-[600px] rounded-md"></div>
          </div>
        </div>
      </div>
    </>
  );
}
