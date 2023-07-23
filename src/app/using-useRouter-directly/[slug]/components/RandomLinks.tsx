import React from "react";

type Props = {
  Link: ({ href, children }: { href: string, children: React.ReactNode }) => React.ReactNode
}

export function RandomLinks({ Link }: Props) {
  return <>
    <h2>Some links made by passing the Link component as a prop</h2>
    <ul>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"https://www.example.com"}>Example</Link>
      </li>
      <li>
        <Link href={"https://www.google.com"}>Google</Link>
      </li>
    </ul>
  </>
}
