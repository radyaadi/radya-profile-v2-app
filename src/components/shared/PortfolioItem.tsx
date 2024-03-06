export default function PortfolioItem({
  title,
  image_url,
}: {
  title: string;
  image_url: string;
}) {
  return (
    <div className="group relative h-auto w-full cursor-pointer items-center justify-center justify-self-center overflow-hidden rounded-lg sm:max-w-full">
      <img
        className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-2 group-hover:scale-125"
        src={image_url}
        alt=""
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/80 group-hover:via-black/50 group-hover:to-black/95"></div>
      <div className="absolute inset-0 flex translate-y-[35%] flex-col items-center justify-center px-9 text-center transition-all duration-300 group-hover:translate-y-0">
        <h1 className="text-xl font-bold text-white">{title}</h1>
        <p className="mt-2 hidden rounded-xl bg-emerald-300 px-3 py-1 font-medium group-hover:block">
          View More
        </p>
      </div>
    </div>
  );
}
