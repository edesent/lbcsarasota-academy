"use client";

import Script from "next/script";
import { useEffect } from "react";
import { CHAT } from "@/config/chat";

// Show the academy's greeting bubble without playing an unsolicited sound.

export default function ChatWidget() {
  useEffect(() => {
    const originalPlay = HTMLMediaElement.prototype.play;

    HTMLMediaElement.prototype.play = function () {
      if (this instanceof HTMLAudioElement) {
        return Promise.resolve();
      }
      return originalPlay.call(this);
    };

    return () => {
      HTMLMediaElement.prototype.play = originalPlay;
    };
  }, []);

  return (
    <Script
      src={`${CHAT.origin}/widget/wbc-chat.js`}
      data-api={CHAT.origin}
      data-key={CHAT.apiKey}
      data-greeting-message="Have a question for us?"
      data-agent-icon-url="/7b1eee1b-bef8-4a45-a48c-34e027163fb1.png"
      data-dismiss-days="14"
      strategy="afterInteractive"
    />
  );
}
