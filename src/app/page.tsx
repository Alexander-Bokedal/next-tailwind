
import ExpandableAccordians from "@/components/expandableAccordians";
import ExpandableButtons from "@/components/expandableButtons";

export default function Home() {
  return (
    <div className='grid flex-col text-black bg-teal-950 h-dvh items-center justify-center gap-y-4 p-4'>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-8">
        <ExpandableButtons />
        <ExpandableAccordians />
      </div>
    </div>
  );
}
