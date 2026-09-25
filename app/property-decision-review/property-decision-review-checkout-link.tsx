"use client";

import type { MouseEvent, ReactNode } from "react";

type PropertyDecisionReviewCheckoutLinkProps = {
  href: string;
  className: string;
  children: ReactNode;
};

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: string,
      eventParameters: {
        value: number;
        currency: string;
        item_name: string;
        transport_type: string;
        event_callback: () => void;
        event_timeout: number;
      }
    ) => void;
  }
}

export function PropertyDecisionReviewCheckoutLink({
  href,
  className,
  children
}: PropertyDecisionReviewCheckoutLinkProps) {
  const trackBeginCheckout = (event: MouseEvent<HTMLAnchorElement>) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();

    let shouldNavigate = true;
    const navigateToCheckout = () => {
      if (!shouldNavigate) {
        return;
      }

      shouldNavigate = false;
      window.location.href = href;
    };

    window.setTimeout(navigateToCheckout, 800);

    if (!window.gtag) {
      navigateToCheckout();
      return;
    }

    window.gtag?.("event", "begin_checkout", {
      value: 350,
      currency: "EUR",
      item_name: "AVM | Property Decision Review",
      transport_type: "beacon",
      event_callback: navigateToCheckout,
      event_timeout: 800
    });
  };

  return (
    <a href={href} className={className} onClick={trackBeginCheckout}>
      {children}
    </a>
  );
}
