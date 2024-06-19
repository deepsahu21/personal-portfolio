
import BlogTitle from "./pages/Blog/blog-components";
import BackButton from "./components/back-button";
export default function Test() {
  return (
    <>
      <BackButton title="Back" href="/"/>
      <div className="lg:w-1/2 max-w-[600px] justify-center mx-auto px-10 sm:px-0 md:px-0">
        <div className="flex gap-4 flex-col">
          <div className="flex justify-between items-center">
            <BlogTitle title="Making this website..."/>
          </div>

          <div>
            <p className="font-inter text-base">
              <span className="italic font-newsreader">
                Designing, coding, and innovating.
              </span>{" "}
              This is what I do, I am Sidharth Hejamadi and I love making
              websites and solving problems. I attend the University of
              Urbana-Champaign studying Computer Science and Statistics.
            </p>
          </div>
        </div>
        <footer className="h-10"> {/* This is a box */}</footer>
      </div>
    </>
  );
}
