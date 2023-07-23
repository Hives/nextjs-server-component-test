"use client";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

type Props = {
  target: string
  useRouter: () => AppRouterInstance
}

export function NavigateTo({ target, useRouter }: Props) {
  const router = useRouter()

  return <button onClick={() => router.push(target)}>
    Navigate to: {target}
  </button>
}
