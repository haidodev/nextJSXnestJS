import { trpc } from "@web/app/trpc";
import ClientSide from "./component/ClientSide";

export default async function Home() {
  const { greeting } = await trpc.hello.query({ name: `Tom` });
  return (
    <>
    <div>{greeting}</div>
    <ClientSide />
    </>
  );
}
