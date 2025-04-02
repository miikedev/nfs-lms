import {Card, CardHeader, CardBody, CardFooter} from "@heroui/card";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
interface CardProps {
    type: "free" | "soon" | "paid"
    text: "html/css" | "js" | "go" | "react"
}
export default function ShowcaseCard(
    {type, text}: CardProps
) {
    const typeText = type === "free"? "Free" : type === "soon"? "Soon" : "Paid";
    const subText = type === "free"? "Join" : type === "soon" ? "Notify Me": "Unlock Access"
    const url = text === "html/css" ? "/html-1.png" : text === "go" ? "go.png" : text === "js" ? "js.png" : "react.png"
  return (
    <Card isFooterBlurred className="border-none" radius="lg" className="min-w-[12rem]">
      <Image
        alt="Woman listing to music"
        className="object-cover"
        height={200}
        src={url}
        width={200}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">{typeText}</p>
        <Button
          className="text-tiny text-white bg-black/20"
          color="default"
          radius="lg"
          size="sm"
          variant="flat"
        >
          {subText}
        </Button>
      </CardFooter>
    </Card>
  );
}
