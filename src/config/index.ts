export const mailConfig = {
  host: process.env.MAIL_HOST!,
  port: parseInt(process.env.MAIL_PORT!, 2),
  auth: {
    user: process.env.MAIL_USER!,
    pass: process.env.MAIL_PASS!
  },
  options: {
    encrypt: false
  }
}
