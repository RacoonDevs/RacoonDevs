import { Quote } from "lucide-react";
import GlassCard from "./GlassCard";
import { cn } from "../../utils/cn";

const TestimonialCard = ({ quote, name, company, project, featured }) => (
  <GlassCard
    className={cn(
      "relative",
      featured ? "p-8 lg:p-10 border-l-2 border-l-primary" : "p-6",
    )}
  >
    <Quote
      className={cn("mb-4 text-primary/20", featured ? "w-10 h-10" : "w-7 h-7")}
    />
    <p
      className={cn(
        "text-txt-2 leading-relaxed italic mb-6",
        featured ? "text-base sm:text-lg" : "text-sm sm:text-base",
      )}
    >
      &ldquo;{quote}&rdquo;
    </p>
    <div>
      <p className="text-sm font-semibold text-txt">
        {name}
        {company && <span className="text-txt-3 font-normal"> — {company}</span>}
      </p>
      {project && (
        <p className="text-xs text-primary/70 mt-0.5">{project}</p>
      )}
    </div>
  </GlassCard>
);

export default TestimonialCard;
