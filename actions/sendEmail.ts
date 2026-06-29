"use server";

import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";
import ContactFormEmail from "@/email/ContactFormEmail";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("email");
  const message = formData.get("message");

  if (!validateString(senderEmail, 250)) {
    return { error: "Invalid sender email." };
  }
  if (!validateString(message, 5000)) {
    return { error: "Invalid message." };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Contact form <onboarding@resend.dev>",
      to: "honzabojko@seznam.cz",
      subject: "Message from portfolio contact form",
      replyTo: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message,
        senderEmail,
      }),
    });

    if (error) {
      return { error: getErrorMessage(error) };
    }

    return { data };
  } catch (error) {
    return { error: getErrorMessage(error) };
  }
};
