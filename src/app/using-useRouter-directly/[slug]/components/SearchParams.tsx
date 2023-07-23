"use client";

import { useSearchParams } from "next/navigation";

export function SearchParams() {
  const searchParams = useSearchParams();
  const searchParamsEntries = [...searchParams.entries()]

  const renderParams = (params: [string, string][]) => params.map(([key, value]) => (
    <dl key={key}>
      <dt>{key}</dt>
      <dd>{value}</dd>
    </dl>
  ))

  return <>
    <h2>The search params</h2>
    {searchParamsEntries.length > 0 ? renderParams(searchParamsEntries) : <div>There are no search params</div>}
  </>
}
