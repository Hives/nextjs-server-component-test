import Link from "next/link";

type Props = {
  path: string
}

export function Links({ path }: Props) {
  return <>
    <h2>Navigating with Link component</h2>
    <ul>
      <li>
        <Link href={`${path}/foo`}>foo</Link>
      </li>
      <li>
        <Link href={`${path}/bar`}>bar</Link>
      </li>
      <li>
        <Link href={`${path}/baz`}>baz</Link>
      </li>
    </ul>
  </>
}
