type GtagFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
  }
}

export type CtaAnalytics = {
  location: string;
  label?: string;
};

export function trackCtaClick(params: {
  cta_label: string;
  cta_location: string;
  page_path?: string;
}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }
  window.gtag("event", "cta_click", params);
}

export function trackConsultationSubmit(params: {
  topic: string;
  page_path?: string;
}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }
  window.gtag("event", "consultation_submit", params);
}
