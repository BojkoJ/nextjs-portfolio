"use server";

import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";
import ContactFormEmail from "@/email/ContactFormEmail";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 250)) {
    return {
      error: "Invalid sender email.",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message.",
    };
  }

  let data;
  try {
    await resend.emails.send({
      from: "Contact form <onboarding@resend.dev>",
      to: "honzabojko@seznam.cz",
      subject: "Message from contact form",
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
      //text: message as string,
      //react: <ContactFormEmail message={message} senderEmail={senderEmail} />
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
