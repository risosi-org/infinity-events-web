import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation";

export async function POST(request: Request) {
  try {
    const json = await request.json();

    // Validate request body
    const validatedData = contactFormSchema.parse(json);

    // Spam honeypot detection
    if (validatedData.website) {
      return NextResponse.json({ success: true, message: "Accepted" });
    }

    const endpoint = process.env.CONTACT_FORM_ENDPOINT;

    if (endpoint) {
      // Forward to external endpoint (Formspree, CRM webhook, etc.)
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: validatedData.name,
          phone: validatedData.phone,
          email: validatedData.email,
          type: validatedData.type,
          date: validatedData.date || "Flexible",
          message: validatedData.message,
        }),
      });

      if (!response.ok) {
        throw new Error(`External endpoint returned status ${response.status}`);
      }

      return NextResponse.json({
        success: true,
        message: "Enquiry submitted successfully",
      });
    }

    // When no external endpoint is configured, return fallbackMailto flag so client gracefully opens mailto
    return NextResponse.json({
      success: false,
      fallbackMailto: true,
      message: "No CRM endpoint configured. Falling back to email client.",
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : "Validation or submission error",
      },
      { status: 400 }
    );
  }
}
