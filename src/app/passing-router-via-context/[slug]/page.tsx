"use client"; // required for createContext() *AND* useRouter()!

import { useRouter } from "next/navigation";
import { RoutingContext } from "@/app/passing-router-via-context/[slug]/components/RoutingContext";
import { NavigateTo } from "@/app/passing-router-via-context/[slug]/components/NavigateTo";

type Props = {
  params: {
    slug: string
  }
}

export default function Page({ params }: Props) {
  const { slug } = params;
  const router = useRouter();
  const navigate = (s: string) => router.push(`/passing-router-via-context/${s}`)

  return <main>
    <RoutingContext.Provider value={{ navigate }}>
      <div>Slug: {slug}</div>
      <ul>
        <li><NavigateTo target={"foo"}/></li>
        <li><NavigateTo target={"bar"}/></li>
        <li><NavigateTo target={"baz"}/></li>
      </ul>
    </RoutingContext.Provider>
  </main>
}
