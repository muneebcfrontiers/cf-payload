import Link from "next/link";
import { Button } from "../ui/button";

export default function CallToAction() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,145,255,0.1)] p-10 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Ready to start your project?
          </h2>

          <div className="flex flex-col items-center md:items-center">
            <Button
                asChild
                className="w-full font-bold md:w-auto"
                >
                <Link href="/contact">
                    Book an intro call
                </Link>
            </Button>
            <p className="text-sm text-gray-500 mt-2">
              Process walkthrough + Q&A <br />
              Typically takes 15 minutes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
