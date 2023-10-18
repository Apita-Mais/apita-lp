import { ComponentProps } from "react";

type ContainerProps = ComponentProps<"main">;

export function Container(props: ContainerProps) {
  return <main className="mx-auto w-full max-w-5xl px-10" {...props} />;
}
