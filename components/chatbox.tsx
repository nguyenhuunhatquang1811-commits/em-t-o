"use client"

import { useEffect } from "react"

export function Chatbox() {
  useEffect(() => {
    // Load Botpress webchat script
    const script = document.createElement("script")
    script.src = "https://cdn.botpress.cloud/webchat/v3.3/inject.js"
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      // Initialize Botpress webchat
      if (window.botpressWebChat) {
        window.botpressWebChat.init({
          composerPlaceholder: "Nhắn tin cho chúng tôi...",
          botConversationDescription: "Khách Sạn ABC",
          botId: "your-bot-id",
          hostUrl: "https://cdn.botpress.cloud/webchat/v3.3",
          messagingUrl: "https://messaging.botpress.cloud",
          clientId: "your-client-id",
          webhookId: "your-webhook-id",
          lazySocket: true,
          themeName: "prism",
          botName: "Khách Sạn ABC",
          stylesheet: "https://webchat-styler-css.botpress.app/prod/code/your-style-id/v12345/style.css",
          frontendVersion: "v3.3",
          useSessionStorage: true,
          enableConversationDeletion: true,
          showPoweredBy: false,
          theme: "prism",
          themeColor: "#C5A572",
        })
      }
    }

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return <div id="webchat" />
}

declare global {
  interface Window {
    botpressWebChat: any
  }
}
