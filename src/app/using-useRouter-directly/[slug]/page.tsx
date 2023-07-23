import { NavigatingButtons } from "@/app/using-useRouter-directly/[slug]/components/NavigatingButtons";
import { SearchParams } from "@/app/using-useRouter-directly/[slug]/components/SearchParams";
import { RandomLinks } from "@/app/using-useRouter-directly/[slug]/components/RandomLinks";
import Link from "next/link";
import { Counter } from "@/components/Counter";
import { Links } from "@/app/using-useRouter-directly/[slug]/components/Links";

type Props = {
  params: {
    slug: string
  }
}

export default function Page({ params }: Props) {
  console.log("Page rendered");

  const { slug } = params;

  return <main>
    <h2>Just use the hooks in the normal way - this is fine</h2>
    <h2>Slug: {slug}</h2>
    <SearchParams/>
    <RandomLinks Link={Link}/>
    <NavigatingButtons path={"/using-useRouter-directly"}/>
    <Links path={"/using-useRouter-directly"}/>
    <Counter/>
  </main>
}
