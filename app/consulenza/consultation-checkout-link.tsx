"use client";

type ConsultationCheckoutLinkProps = {
  href: string;
  className: string;
  children: React.ReactNode;
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
      }
    ) => void;
  }
}

export function ConsultationCheckoutLink({
  href,
  className,
  children
}: ConsultationCheckoutLinkProps) {
  const trackBeginCheckout = () => {
    window.gtag?.("event", "begin_checkout", {
      value: 100,
      currency: "EUR",
      item_name: "AVM | Consulenza Immobiliare & Hospitality",
      transport_type: "beacon"
    });
  };

  return (
    <a href={href} className={className} onClick={trackBeginCheckout}>
      {children}
    </a>
  );
}
