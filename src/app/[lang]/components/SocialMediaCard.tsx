import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Link } from "@heroui/link";
import { Image } from "@heroui/image";

interface SocialMediaCardProps {
  cardBody: string;
  sourceCode: string;
}

export default function SocialMediaCard({ cardBody, sourceCode }: SocialMediaCardProps) {

  return (
    <Card className="max-w-[500px] bg-gray-900 max-h-[250px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="profile photo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/39068356?v=4"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">Nachom12</p>
          <p className="text-small text-default-500">@Nachom12</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        {cardBody}
        <Link href="https://www.linkedin.com/in/juan-medina-114074197/">
          Linkedin
          <Image
            src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000"
            height={20}
            width={20}
            alt="LinkedIn logo"
          />
        </Link>
        <Link href="https://www.instagram.com/nachomedina_12/">
          Instagram
          <Image
            src="https://img.icons8.com/?size=100&id=32323&format=png&color=000000"
            height={20}
            width={20}
            alt="Instagram logo"
          />
        </Link>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link isExternal showAnchorIcon href="https://github.com/nachom12/lang-example">
          {sourceCode}
        </Link>
      </CardFooter>
    </Card>
  );
}