import { useContext } from "react";
import { RoutingContext } from "@/app/passing-router-via-context/[slug]/components/RoutingContext";

type Props = {
  target: string
}

export function NavigateTo({ target }: Props) {
  const { navigate } = useContext(RoutingContext)

  return <button onClick={() => navigate(target)}>
    Navigate to: {target}
  </button>
}
