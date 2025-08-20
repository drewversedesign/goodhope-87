
export const WHATSAPP_NUMBER = "+256790281993";

export type MessageType = 
  | "general"
  | "sponsor" 
  | "volunteer"
  | "partner"
  | "event"
  | "donation"
  | "programs";

const messageTemplates: Record<MessageType, string> = {
  general: "Hello! 👋 I'm interested in learning more about Good Hope Ministries and how you're transforming children's lives in Uganda. Could you please share information about your programs and how I can get involved? Thank you! 🙏",
  sponsor: "Hello! ❤️ I would love to sponsor a child through Good Hope Ministries and make a direct impact on their education and future. Could you please guide me through your child sponsorship program and help me find a child to support? I'm excited to begin this journey! 🌟",
  volunteer: "Hello! 🤝 I'm passionate about helping children and would like to volunteer with Good Hope Ministries. Could you please tell me about current volunteer opportunities, requirements, and how I can contribute my skills to your mission? I'm ready to make a difference! 💪",
  partner: "Hello! 🤝 I'm interested in exploring partnership opportunities with Good Hope Ministries. Our organization shares your commitment to children's welfare, and I'd love to discuss how we can collaborate to expand your impact. Could you please share partnership details? 🌍",
  event: "Hello! 🎉 I'm excited to organize a fundraising event for Good Hope Ministries and help raise awareness about your amazing work. Could you please provide guidance on how to plan an effective event and what support you can offer? Let's make it impactful! 🚀",
  donation: "Hello! 💖 I want to make a meaningful donation to support Good Hope Ministries and the incredible work you do for children. Could you please share information about donation options and how my contribution will directly impact the lives of children? Thank you! 🙏",
  programs: "Hello! 📚 I'm curious to learn more about the specific programs Good Hope Ministries offers - education, healthcare, protection, and community development. Could you please provide detailed information about your current initiatives and success stories? 🌟"
};

export const redirectToWhatsApp = (messageType: MessageType, customMessage?: string) => {
  const message = customMessage || messageTemplates[messageType];
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
};

export const getWhatsAppUrl = (messageType: MessageType, customMessage?: string) => {
  const message = customMessage || messageTemplates[messageType];
  return `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(message)}`;
};
