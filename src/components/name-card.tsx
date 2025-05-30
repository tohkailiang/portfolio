import { Card, CardTitle, CardDescription } from "./ui/card";

function NameCard() {
  return (
    <Card className="w-2xs p-8">
      <CardTitle className="text-2xl text">Toh Kai Liang</CardTitle>
      <CardDescription>Software Developer</CardDescription>
    </Card>
  );
}

export default NameCard;
