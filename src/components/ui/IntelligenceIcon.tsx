import type { LucideIcon } from "lucide-react";
import {
  Activity,
  AlertTriangle,
  Award,
  BadgeCheck,
  Ban,
  Banknote,
  BarChart3,
  Binoculars,
  Boxes,
  Building2,
  CheckCircle2,
  Circle,
  CircleDollarSign,
  ClipboardList,
  Clock,
  Compass,
  Cookie,
  CreditCard,
  Crosshair,
  DollarSign,
  Eye,
  FileCheck,
  FileText,
  Filter,
  Funnel,
  Gauge,
  Gem,
  Globe2,
  Handshake,
  IdCard,
  Info,
  Layers,
  LayoutTemplate,
  Lightbulb,
  LineChart,
  Link2,
  Lock,
  Mail,
  MessageCircle,
  Network,
  Percent,
  Phone,
  PieChart,
  RefreshCw,
  Rocket,
  Scale,
  Search,
  Settings2,
  ShieldCheck,
  Sparkles,
  Tag,
  Target,
  Telescope,
  TrendingUp,
  Trophy,
  Upload,
  UserRound,
  Users,
  X,
  Zap,
} from "lucide-react";

import { cn } from "@/lib/cn";

type IntelligenceIconProps = {
  name: string;
  className?: string;
  size?: number;
  strokeWidth?: number;
};

const icons: Record<string, LucideIcon> = {
  market: BarChart3,
  competitor: Users,
  customer: UserRound,
  brand: Gem,
  product: Boxes,
  experience: IdCard,
  conversion: Filter,
  commercial: CircleDollarSign,
  visibility: Search,
  lifecycle: RefreshCw,
  refresh: RefreshCw,
  operational: Settings2,
  executive: BadgeCheck,
  globe: Globe2,
  pie: PieChart,
  trend: TrendingUp,
  compass: Compass,
  bank: Building2,
  bars: BarChart3,
  shield: ShieldCheck,
  shieldCheck: ShieldCheck,
  check: CheckCircle2,
  rocket: Rocket,
  users: Users,
  target: Target,
  scale: Scale,
  warning: AlertTriangle,
  chart: LineChart,
  binoculars: Binoculars,
  sparkles: Sparkles,
  banknote: Banknote,
  telescope: Telescope,
  layoutTemplate: LayoutTemplate,
  lightbulb: Lightbulb,
  fileCheck: FileCheck,
  clipboardList: ClipboardList,
  trophy: Trophy,
  crosshair: Crosshair,
  eye: Eye,
  funnel: Funnel,
  lock: Lock,
  gauge: Gauge,
  activity: Activity,
  messageCircle: MessageCircle,
  clock: Clock,
  zap: Zap,
  percent: Percent,
  dollarSign: DollarSign,
  layers: Layers,
  handshake: Handshake,
  tag: Tag,
  award: Award,
  network: Network,
  userRound: UserRound,
  settings2: Settings2,
  mail: Mail,
  phone: Phone,
  building: Building2,
  ban: Ban,
  cookie: Cookie,
  creditCard: CreditCard,
  fileText: FileText,
  info: Info,
  link2: Link2,
  upload: Upload,
  x: X,
  default: Circle,
};

export function IntelligenceIcon({
  name,
  className,
  size = 24,
  strokeWidth = 1,
}: IntelligenceIconProps) {
  const Icon = icons[name] ?? icons.default;

  return (
    <Icon
      size={size}
      aria-hidden
      strokeWidth={strokeWidth}
      className={cn("shrink-0 text-[var(--color-accent)]", className)}
    />
  );
}

export const intelligenceIconNames = Object.keys(icons).filter(
  (key) => key !== "default",
);
