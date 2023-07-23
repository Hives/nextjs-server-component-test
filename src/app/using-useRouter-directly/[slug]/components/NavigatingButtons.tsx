"use client";

import { useRouter } from "next/navigation";

type Props = {
  path: string
}

export function NavigatingButtons({ path }: Props) {
  const router = useRouter()

  return <>
    <h2>Navigating with router.push</h2>
    <ul>
      <li>
        <button onClick={() => router.push(`${path}/foo`)}>
          Navigate to foo
        </button>
      </li>
      <li>
        <button onClick={() => router.push(`${path}/bar`)}>
          Navigate to bar
        </button>
      </li>
      <li>
        <button onClick={() => router.push(`${path}/baz`)}>
          Navigate to baz
        </button>
      </li>
    </ul>
  </>
}
