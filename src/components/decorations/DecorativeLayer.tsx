import { PlumBlossom } from "@/components/decorations/PlumBlossom";
import { InkStroke } from "@/components/decorations/InkStroke";
import { FloatingPetals } from "@/components/decorations/FloatingPetals";
import { PaperTexture } from "@/components/decorations/PaperTexture";

/** Fixed layer behind content; not wrapped in page fade so opacity stays stable. */
export function DecorativeLayer() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden"
      aria-hidden
    >
      <PaperTexture />
      <FloatingPetals />

      <PlumBlossom className="absolute left-3 top-14 h-40 w-28 text-sage opacity-[0.14] sm:left-6 sm:top-16 sm:h-48 sm:w-32 dark:text-sage dark:opacity-[0.12]" />

      <InkStroke className="absolute bottom-10 right-3 h-16 w-44 text-primary opacity-[0.1] sm:bottom-14 sm:right-8 sm:h-20 sm:w-52 dark:opacity-[0.11]" />
    </div>
  );
}
