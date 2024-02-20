import { AddTag } from "@/components/add-tag";
import { Tags } from "@/components/tags";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <div>
        <Suspense fallback={<p>Carregando Tags...</p>}>
          <Tags />
        </Suspense>
        <AddTag />
      </div>
    </main>
  );
}
