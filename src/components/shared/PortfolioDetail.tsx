import { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@/hooks/use-media-query";
import { formatDateString } from "@/libs/utils";
import { PortfolioProps } from "@/types";
import PortfolioItem from "./PortfolioItem";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { CalendarCheck, Layers2 } from "lucide-react";

export default function PortfolioDetail({
  title,
  description,
  image_url,
  product_url,
  repo_url,
  category,
  tags,
  created_at,
}: PortfolioProps) {
  const [open, setOpen] = useState<boolean>(false);
  const isDesktop = useMediaQuery("(min-width: 640px)");

  return isDesktop ? (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
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
      </DialogTrigger>
      <DialogContent className="bg-[#1e1e20] p-0 md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg">
        <ScrollArea className="h-full max-h-[80vh] w-full rounded-md border">
          <DialogHeader className="rounded-md">
            <div className="h-auto w-full">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-2 group-hover:scale-125"
                src={image_url}
                alt={title}
              />
            </div>
          </DialogHeader>
          <div className="flex flex-col p-10">
            <h1 className="text-xl font-bold leading-none text-emerald-300 md:text-2xl">
              {title}
            </h1>
            <div className="my-1 flex flex-col text-gray-400">
              <div className="mt-2 flex gap-x-10">
                <span className="inline-flex items-center">
                  <CalendarCheck
                    size={16}
                    strokeWidth={1.6}
                    absoluteStrokeWidth
                    className="mr-1"
                  />
                  <p className=" zzztext-xs md:text-sm">
                    {formatDateString(created_at)}
                  </p>
                </span>
                <span className="inline-flex items-center">
                  <Layers2 size={16} strokeWidth={1.6} absoluteStrokeWidth />
                  <p className="flex items-center divide-x-[1px] divide-gray-400">
                    {category.map((item) => (
                      <span className="px-2 text-xs md:text-sm" key={item._id}>
                        {item.name}
                      </span>
                    ))}
                  </p>
                </span>
              </div>
              <span className="inline-flex items-center"></span>
            </div>
            <p className="my-2 text-justify">{description}</p>
            <div className="my-3 flex gap-x-4">
              <Button disabled={!product_url} size="sm">
                <Link to={product_url} target="_blank" rel="noreferrer">
                  Site
                </Link>
              </Button>
              <Button disabled={!repo_url} size="sm">
                <Link to={repo_url} target="_blank" rel="noreferrer">
                  Repository
                </Link>
              </Button>
            </div>
            <div>
              <p className="mb-2 font-semibold text-emerald-300 ">Tech used</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((item) => (
                  <span
                    className="rounded-full bg-[#2a2a2a] px-3 py-1 text-xs md:text-sm"
                    key={item._id}
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <ScrollBar className="" />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  ) : (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger>
        <PortfolioItem title={title} image_url={image_url} />
      </DrawerTrigger>
      <DrawerContent className="h-4/5 w-full bg-[#1e1e20]">
        <ScrollArea className="">
          <DrawerHeader className="flex justify-between p-0">
            <DrawerTitle>
              {" "}
              <div className="h-auto w-full">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-2 group-hover:scale-125"
                  src={image_url}
                  alt={title}
                />
              </div>
            </DrawerTitle>
          </DrawerHeader>
          <div className="flex flex-col p-5 py-10">
            <h1 className="text-xl font-bold leading-none text-emerald-300 md:text-2xl">
              {title}
            </h1>
            <div className="my-1 flex flex-col text-gray-400">
              <div className="mt-2 flex gap-x-10">
                <span className="inline-flex items-center">
                  <CalendarCheck
                    size={16}
                    strokeWidth={1.6}
                    absoluteStrokeWidth
                    className="mr-1"
                  />
                  <p className=" text-xs md:text-sm">
                    {formatDateString(created_at)}
                  </p>
                </span>
                <span className="inline-flex items-center">
                  <Layers2 size={16} strokeWidth={1.6} absoluteStrokeWidth />
                  <p className="flex items-center divide-x-[1px] divide-gray-400">
                    {category.map((item) => (
                      <span className="px-2 text-xs md:text-sm" key={item._id}>
                        {item.name}
                      </span>
                    ))}
                  </p>
                </span>
              </div>
              <span className="inline-flex items-center"></span>
            </div>
            <p className="my-2 text-justify">{description}</p>
            <div className="my-3 flex gap-x-4">
              <Button disabled={!product_url} size="sm">
                <Link to={product_url} target="_blank" rel="noreferrer">
                  Site
                </Link>
              </Button>
              <Button disabled={!repo_url} size="sm">
                <Link to={repo_url} target="_blank" rel="noreferrer">
                  Repository
                </Link>
              </Button>
            </div>
            <div>
              <p className="mb-2 font-semibold text-emerald-300">Tech used</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((item) => (
                  <span
                    className="rounded-full bg-[#2a2a2a] px-3 py-1 text-xs md:text-sm"
                    key={item._id}
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <ScrollBar orientation="vertical" />
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  );
}
