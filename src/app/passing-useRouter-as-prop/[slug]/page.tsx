import { useRouter } from "next/navigation";
import { NavigateTo } from "@/app/passing-useRouter-as-prop/[slug]/components/NavigateTo";

type Props = {
  params: {
    slug: string
  }
}

export default function Page({ params }: Props) {
  const { slug } = params;

  return <main>
    <div>Slug: {slug}</div>
    <ul>
      {/*
        error - can't pass a function from a server component -> client component
        props passed from server -> client components must be serializable
        https://nextjs.org/docs/getting-started/react-essentials#passing-props-from-server-to-client-components-serialization
      */}
      <li><NavigateTo target={"foo"} useRouter={useRouter}/></li>
      <li><NavigateTo target={"bar"} useRouter={useRouter}/></li>
      <li><NavigateTo target={"baz"} useRouter={useRouter}/></li>
    </ul>
  </main>
}
