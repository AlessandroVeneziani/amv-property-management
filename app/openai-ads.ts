"use client";

type OpenAiAdsEventPayload = {
  type: "contents";
};

type OpenAiAdsQueue = (
  command: "measure",
  eventName: "checkout_started",
  eventPayload: OpenAiAdsEventPayload
) => void;

declare global {
  interface Window {
    oaiq?: OpenAiAdsQueue;
  }
}

export function trackOpenAiCheckoutStarted() {
  window.oaiq?.("measure", "checkout_started", { type: "contents" });
}
