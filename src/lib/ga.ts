import { gaId } from '@/constant/env';

export interface WGtag extends Window {
  gtag?: (
    event: string,
    action: string,
    params?: Record<string, string>
  ) => void;
}

// log the pageview with their URL
export const pageview = (w: WGtag, url: string) => {
  w.gtag &&
    w.gtag('config', gaId, {
      page_path: url,
    });
};

// log specific events happening.
export const event = (
  w: WGtag,
  { action, params }: { action: string; params: Record<string, string> }
) => {
  w.gtag && w.gtag('event', action, params);
};
