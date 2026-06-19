const QRCode = require("qrcode");
const prompt = require("prompt");
const fs = require("fs");

console.log("================================");
console.log(" GERADOR DE QR CODE E-COMMERCE ");
console.log("================================\n");

prompt.start();

prompt.get(
  [
    {
      name: "url",
      description: "Digite a URL do produto",
      required: true
    }
  ],
  async function (err, result) {
    if (err) {
      return console.log(err);
    }

    const url = result.url;

    try {

      console.log("\nQR Code gerado:\n");

      const qrTerminal = await QRCode.toString(url, {
        type: "terminal",
        small: true
      });

      console.log(qrTerminal);

      if (!fs.existsSync("./qr-codes")) {
        fs.mkdirSync("./qr-codes");
      }

      const fileName = `./qr-codes/produto-${Date.now()}.png`;

      await QRCode.toFile(fileName, url, {
        color: {
          dark: "#000000",
          light: "#FFFFFF"
        }
      });

      console.log(`\nImagem salva em: ${fileName}`);

    } catch (error) {
      console.error("Erro ao gerar QR Code:", error);
    }
  }
);