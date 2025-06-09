
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, subject, message }: ContactEmailRequest = await req.json();

    console.log("Sending contact email for:", { name, email, subject });

    // Send confirmation email to the user
    const confirmationEmailResponse = await resend.emails.send({
      from: "JKB Construction <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for contacting JKB Construction",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #282d40;">Thank you for contacting us, ${name}!</h1>
          <p>We have received your message regarding: <strong>${subject}</strong></p>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>Your Message:</h3>
            <p style="font-style: italic;">"${message}"</p>
          </div>
          <p>Our team will review your inquiry and get back to you within 24-48 hours.</p>
          <hr style="border: 1px solid #eee; margin: 30px 0;">
          <p style="color: #666; font-size: 14px;">
            Best regards,<br>
            The JKB Construction Team<br>
            📧 info@jkbconstruction.com<br>
            📞 +91 44 1234 5678
          </p>
        </div>
      `,
    });

    // Send notification email to the company
    const notificationEmailResponse = await resend.emails.send({
      from: "JKB Construction <onboarding@resend.dev>",
      to: ["info@jkbconstruction.com"], // Replace with actual company email
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #d92546;">New Contact Form Submission</h1>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>Contact Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          <div style="background-color: #fff; border-left: 4px solid #d92546; padding: 20px; margin: 20px 0;">
            <h3>Message:</h3>
            <p>${message}</p>
          </div>
          <p style="color: #666; font-size: 14px;">
            This email was sent automatically from the JKB Construction website contact form.
          </p>
        </div>
      `,
    });

    console.log("Email sent successfully:", { confirmationEmailResponse, notificationEmailResponse });

    return new Response(JSON.stringify({ 
      success: true,
      confirmationEmailId: confirmationEmailResponse.data?.id,
      notificationEmailId: notificationEmailResponse.data?.id
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
