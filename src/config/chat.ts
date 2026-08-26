// WBC Chat (slackwebsitechat) — the chat bubble and every website form both
// deliver into the academy's own Slack channel through this one connection.
//
// This is the academy's own chat site, separate from the church's: messages land
// in #lbasarasota, not the church's #lbcsarasota, and the greeting is the
// academy's. Both sites are served by the same shared @website_chat bot.
//
// The api key is public by design: it ships in the widget's <script> tag.
// Slack credentials live in the WBC backend, never here.
export const CHAT = {
  origin: "https://slackwebsitechat.vercel.app",
  apiKey: "wbc_8d147eae9103ec5d6938be0718a871bdafeeb42c464ff817",
} as const;
