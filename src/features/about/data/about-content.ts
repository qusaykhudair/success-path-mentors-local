import type { LucideIcon } from "lucide-react";
import {
  Shield,
  Lightbulb,
  Award,
  GraduationCap,
  BookOpen,
  Briefcase,
  UserCheck,
  CalendarClock,
  Target,
  Wallet,
  Laptop,
  TrendingUp,
  ClipboardList,
  ListChecks,
  Presentation,
  CheckCircle2,
  RefreshCw,
} from "lucide-react";

/**
 * Structural content for the About page. Per Architecture.md's
 * translation rule ("every visible string must come from translation
 * files"), this holds only stable IDs + icon references — the actual
 * copy lives in messages/en.json and messages/ar.json under
 * `about.coreValues.{id}`, `about.whyChooseUs.{id}`,
 * `about.methodology.{id}` respectively.
 */

export const coreValues: { id: string; icon: LucideIcon }[] = [
  { id: "integrity", icon: Shield },
  { id: "innovation", icon: Lightbulb },
  { id: "excellence", icon: Award },
  { id: "studentSuccess", icon: GraduationCap },
  { id: "continuousLearning", icon: BookOpen },
  { id: "professionalism", icon: Briefcase },
];

export const whyChooseUs: { id: string; icon: LucideIcon }[] = [
  { id: "experiencedTutors", icon: UserCheck },
  { id: "flexibleScheduling", icon: CalendarClock },
  { id: "personalizedLearning", icon: Target },
  { id: "affordablePrograms", icon: Wallet },
  { id: "onlineInPerson", icon: Laptop },
  { id: "progressTracking", icon: TrendingUp },
];

export const methodologySteps: { id: string; icon: LucideIcon }[] = [
  { id: "assessment", icon: ClipboardList },
  { id: "planning", icon: ListChecks },
  { id: "teaching", icon: Presentation },
  { id: "evaluation", icon: CheckCircle2 },
  { id: "continuousImprovement", icon: RefreshCw },
];

export const aboutFaqIds = [
  "howAreTutorsSelected",
  "howDoesLearningProcessWork",
  "whichSubjectsAreOffered",
  "whichLocationsAreServed",
] as const;
