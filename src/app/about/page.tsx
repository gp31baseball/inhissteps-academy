import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="flex flex-col">
      {/* HEADER */}
      <section className="w-full bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 pt-10 pb-6 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold text-slate-900">
            About In His Steps Academy
          </h1>
        </div>

        <div className="max-w-6xl mx-auto px-6 pb-12">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <Image
              src="/about5.png"
              alt="All About Me classroom illustration"
              width={1600}
              height={900}
              className="w-full h-auto rounded-md"
              priority
            />

            <p className="mt-6 text-center text-slate-600 max-w-2xl mx-auto">
              Every child has a story. At In His Steps Academy, we take time to
              know each one—academically, spiritually, and personally.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-4xl mx-auto px-6 py-20 space-y-12">
        {/* Mission */}
        <div className="rounded-xl bg-blue-50 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">
            Our Mission
          </h2>
          <p className="text-slate-600 leading-relaxed">
            The elementary years are some of the most influential in a child’s
            life, and our teachers take their role in that influence very
            seriously. Our staff is made up of committed Christians who are
            dedicated to nurturing each child spiritually, socially,
            emotionally, and academically.
          </p>
        </div>

        {/* Educational Approach */}
        <div className="rounded-xl bg-yellow-50 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">
            Our Educational Approach
          </h2>
          <p className="text-slate-600 leading-relaxed">
            While our program is based on learning through play, each classroom
            is thoughtfully organized and structured. Our teachers are
            compassionate and attentive to every child’s individual needs. We
            use the Bob Jones curriculum along with a variety of additional
            resources to provide a well-balanced educational foundation.
          </p>
        </div>

        {/* History */}
        <div className="rounded-xl bg-green-50 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">
            Our History
          </h2>
          <p className="text-slate-600 leading-relaxed">
            In His Steps Preschool and Mother’s Day Out has been a distinguished
            part of the Pearland community for over 26 years. In His Steps
            Academy began in 2017 and expanded in 2022 by adding elementary
            grades. We are excited to continue growing by adding 5th grade for
            the 2026–2027 school year.
          </p>
        </div>

        {/* School Model */}
        <div className="rounded-xl bg-purple-50 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">
            Our School Model
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Founded on the principle of a small Christian learning environment,
            we approach education one student at a time. School is in session
            Monday through Thursday from 8:30 a.m. to 2:30 p.m. for grades 1–5,
            with no school on Fridays.
          </p>
        </div>
      </section>
    </main>
  );
}
