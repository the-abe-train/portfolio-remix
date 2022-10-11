import nodemailer from "nodemailer";
import { MailOptions } from "nodemailer/lib/sendmail-transport";

const FROM_EMAIL = process.env.FROM_EMAIL || "";
const TO_EMAIL = process.env.TO_EMAIL || "";
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD || "";

const transporter = nodemailer.createTransport({
  pool: true,
  host: "smtp.porkbun.com",
  port: 465,
  secure: true,
  auth: {
    user: FROM_EMAIL,
    pass: EMAIL_PASSWORD,
  },
});

type Props = {
  name: string;
  email: string;
  text: string;
  subject: string;
};

export function sendEmail({ name, email, text, subject }: Props) {
  const emailBody = `<p>Name: ${name}</p>
<p>Email: ${email}</p>
<p>${text}</p>`;

  console.log(emailBody);

  const options: MailOptions = {
    from: FROM_EMAIL,
    to: TO_EMAIL,
    subject,
    html: emailBody,
  };
  console.log("Email sent from", email);

  return new Promise<number>((res, rej) => {
    transporter.sendMail(options, (err, info) => {
      if (err) {
        console.error(err);
        return rej(err);
      }
      res(200);
    });
  });
}
