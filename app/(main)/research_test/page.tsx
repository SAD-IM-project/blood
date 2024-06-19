// `app/page.tsx` is the UI for the `/` URL
"use client";
import Image from "next/image";
import { Loader } from "lucide-react";
import pic1 from "@/public/app_images/pic1.jpeg";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import { MessageSquare, Trash2 } from "lucide-react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { get } from "http";
import Loading from "@/components/Loading";

type DataType = {
  city_name: string;
  district_name: string;
  user_name: string;
  user_id: string;
  object_name: string;
  category_name: string;
  happen_time: string;
  address: string;
  post_by: string;
  post_time: string;
  img_url: string;
  description: string;
};
type CommentType = {
  comment_id: string;
  content: string;
  post_by: string;
  post_time: string;
  user_name: string;
  object_id: string;
};

export default function Content() {
  const router = useRouter();
  const [comment, setComment] = useState<string | undefined>("");
  const [data, setData] = useState<DataType | null>(null);
  const [comments, setComments] = useState<CommentType[]>([]);
  const [me, setMe] = useState<any>(null);



  return (
    <div className="flex flex-row items-start p-5 flex-wrap scroll-smooth focus:scroll-auto border-2 m-2 rounded-md">
      <div className="flex w-full h-1/2 ">
        <div className="w-1/2 h-1/3 pl-10 flex flex-col justify-center items-center">
          <div className="w-2/3 h-full relative">
            <AspectRatio ratio={1 / 1}>
                <Image
                  src={"/app_images/people.png"}
                  alt="Hero Image"
                  fill={true}
                  className="rounded-md object-contain"
                />
            </AspectRatio>
          </div>
        </div>
        <Card className="w-1/2 h-full dark:bg-white dark:text-black">
          <CardHeader>
            <CardTitle>Epigenetic Modifications in Hematologic Malignancies</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              <b>Company: </b>BioSynthesis Inc.
            </p>
            <p>
              <b>Quota: </b>29000
            </p>
            <p>
              <b>Price(starting from): </b>
              7,500 NTD
            </p>
            <p>
              <b>Country: </b>
              New Zealand
            </p>
            <p>
              <b>Symptoms: </b>
              Arthritis, Influenza(Flu)
            </p>
          </CardContent>
          <CardFooter className="flex justify-end">
            
          </CardFooter>
        </Card>
      
      </div>
    </div>
  ) 
}
