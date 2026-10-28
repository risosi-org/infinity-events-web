import { siteConfig } from "@/config/site";
import type { EventPlannerState } from "@/types";

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function generatePlannerWhatsAppUrl(data: EventPlannerState): string {
  const eventType = data.type || "—";
  const guestCount = data.guests >= 2000 ? "2000+" : data.guests.toString();
  const services = data.services.length > 0 ? data.services.join(", ") : "—";
  const dateStr = data.date ? data.date : "Flexible";
  const venueStr = data.venue.trim() || "—";

  const message =
    `Hello Infinity Events! I'd like to plan an event.\n\n` +
    `• Event: ${eventType}\n` +
    `• Guests: ${guestCount}\n` +
    `• Services: ${services}\n` +
    `• Date: ${dateStr}\n` +
    `• Venue/City: ${venueStr}\n\n` +
    `Name: ${data.name}\n` +
    `Phone: ${data.phone}`;

  return siteConfig.links.whatsapp(message);
}
