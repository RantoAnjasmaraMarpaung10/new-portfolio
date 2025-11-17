import StarIcon from "@/assets/icons/star.svg"

const words = [
  "Accessible",
  "Interactive",
  "Maintainable",
  "Performant",
  "Reliable",
  "Responsive",
  "Scalable",
  "Secure",
  "Search Optimized",
  "Usable",
  "User Friendly"
]

export const TapeSection = () => {
  const loopWords = [...words, ...words, ...words, ...words, ...words];

  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right, transparent, black_10%, black_90%, transparent)]">
          <div className="flex flex-none gap-4 p-3 animate-slide">
            {[...words, ...words, ...words, ...words].map((word, i) => (
              <div key={i} className="inline-flex gap-4 items-center">
                <span className="text-gray-900 uppercase font-extrabold text-sm">{word}</span>
                <StarIcon className="size-6 text-gray-900 -rotate-12"/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
