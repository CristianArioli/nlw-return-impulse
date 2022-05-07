import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "d6508cf8f726df",
    pass: "f28de69560d2cd",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {
    await transport.sendMail({
    from: "Equipe Feedget <oi@feedget.com>",
    to: "Cristian Arioli <arioli.cristian@gmail.com>",
    subject,
    html: body,
  });
  };
}