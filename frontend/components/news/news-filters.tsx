import { Button } from "@/components/ui/button"

const categories = ["All", "Soccer", "Basketball", "Football", "Tennis", "Baseball"]

export function NewsFilters() {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map((category) => (
        <Button
          key={category}
          variant={category === "All" ? "default" : "outline"}
          size="sm"
          className={
            category === "All"
              ? "bg-emerald-600 hover:bg-emerald-700"
              : "border-slate-600 text-slate-300 hover:bg-slate-800"
          }
        >
          {category}
        </Button>
      ))}
    </div>
  )
}
