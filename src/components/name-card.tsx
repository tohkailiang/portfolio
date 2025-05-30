import { Card, CardTitle, CardDescription } from "./ui/card";
import { DM_Sans } from "next/font/google";

const font = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

function NameCard() {
  return (
    <Card className="w-2xl px-10 py-8 gap-0">
      <CardTitle className={`${font.className} text-5xl`}>Kai Liang</CardTitle>
      <CardDescription className={`${font.className} text-xl`}>
        Software Developer
      </CardDescription>
      <CardDescription className={`${font.className}`}>
        Singapore
      </CardDescription>
    </Card>
  );
}

export default NameCard;
