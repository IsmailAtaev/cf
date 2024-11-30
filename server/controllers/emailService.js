const nodemailer = require("nodemailer");
 

class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: "smtp.mail.ru",
      port: 465,
      secure: true,
      auth: {
        user: "cabel.factory@mail.ru",
        pass: "RqFvsdLTT4cMpfiRQAHg", //RqFvsdLTT4cMpfiRQAHg
      },
    });
  }

//   async sendActivationMail(to, link) {
//     console.log("isma activationLink: " + link);
//     console.log("EMAIL: " + to);

//     await this.transporter.sendMail({
//       from: "node.react@mail.ru",
//       to,
//       subject: "Activation account on " + process.env.API_URL,
//       text: "",
//       html: ` 
//           <div>
//             <h1>Для активации перейдите по ссылке</h1>
//             <a href="${link}">${link}</a>
//           </div>`,
//     });
//   }

//   async sendTicket(dirName, fileName, to) {
//     await this.transporter.sendMail({
//       from: "node.react@mail.ru",
//       to,
//       subject: "An Attached File",
//       text: "Check out this attached pdf file",
//       attachments: [
//         {
//           filename: fileName + ".pdf",
//           path: dirName,
//           contentType: "application/pdf",
//         },
//       ],
//       function(err, info) {
//         if (err) {
//           console.error(err);
//         } else {
//           console.log(info);
//         }
//       },
//     });
//   }

//   async sendValidateCard(to, Id) {
//     await this.transporter.sendMail({
//       from: "node.react@mail.ru",
//       to,
//       subject: "Activation account on " + process.env.API_URL,
//       text: "",
//       html: ` 
//           <div>
//             <h1>Введите Код для потверждения</h1>
//             <h2>${Id}</h2>
//           </div>`,
//     });
//   }
}

module.exports = new MailService();