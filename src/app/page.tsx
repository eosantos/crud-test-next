import { AddTag } from "@/components/add-tag";
import { Tags } from "@/components/tags";

export default function Home() {
  return (
    <main>
      <div>
        <Tags />
        <AddTag />
      </div>
    </main>
  );
}
