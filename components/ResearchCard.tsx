import { Card } from "@/components/ui/card";
import React from "react";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Research } from "@/app/(main)/research/fake_research";
import { useRouter } from "next/navigation";

type Props = {
  post: Research;
  handlePostClick: (id: string) => void;
  className?: string;
};

export default function ResearchCard({
  post,
  handlePostClick,
  className,
}: Props) {
  const router = useRouter();
  return (
    <Card
      key={post.id}
      onClick={() => router.push(`/research_test`)}
      className={className}
    >
      <div className="flex flex-wrap h-full">
        <div className="w-3/5 h-full">
          <div className="flex mr-2 flex-wrap h-full justify-normal overflow-auto">
            <div className="flex w-full h-[20%] items-center">
              <h3 className="font-semibold w-full">{post.research_name}</h3>
            </div>
            <div className="flex w-full h-[20%] items-center">
              <h5 className="font-semibold w-full text-gray-300">{post.corporation_name}</h5>
            </div>
            <div className="flex w-full h-[20%] items-center">
              <span
                className={`inline-block text-sm px-2 py-1 rounded mr-2 bg-red-200 text-red-800`}
              >
                {"Quota: " + post.quota + " people"}
              </span>
              <span className="inline-block bg-blue-200/80 text-blue-800 text-xs px-2 py-1 rounded-full mr-2">
                {"Price (start from): " + post.price + " NTD"}
              </span>
              <span className="inline-block bg-orange-200/80 text-orange-800 text-xs px-2 py-1 rounded-full mr-2 max-w-20 overflow-clip whitespace-nowrap">
                {post.country}
              </span>
            </div>
            <div className="flex w-full h-[40%] py-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full mr-2 h-fit"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        {/* if post.img_url is not null, show image, else says 'no image'. normalize the size of the image to the height of this card*/}
        <div className="w-2/5 h-full flex justify-center items-center">
          {/* {post.img_url ? ( */}
          <AspectRatio ratio={2 / 1}>
            <Image
              src={"/app_images/people.png"}
              alt={`${post.id}的圖片`}
              fill={true}
              className="rounded-md object-contain"
            />
          </AspectRatio>
          {/* ) : (
            <div className="flex aspect-square h-full items-center justify-center rounded-md ">
              <div className="flex w-full h-full items-center justify-center bg-gray-200 rounded-md">
                <span className="text-gray-500">no image</span>
              </div>
            </div> // Replace this with your placeholder component
          )} */}
        </div>
      </div>
    </Card>
  );
}
