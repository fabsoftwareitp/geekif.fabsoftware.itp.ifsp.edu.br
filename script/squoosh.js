const fs = require("fs");
let text = `# Instruções para compressão de imagens

Para mudar o formato do arquivo de saída (atualmente .webp), basta alterar o parâmetro do script "compress" em ./package.json. Formatos possíveis incluem
- .jpg (--mozjpeg)
- .png (--oxipng)
- .webp (--webp)
- .avif (--avif)
- .jxl (--jxl)
- .wp2 (--wp2)

É possível também alterar a qualidade da imagem de saída, o fator de compressão e o método de compressão.

Mais informações em [npmjs.com/@squoosh/cli](https://www.npmjs.com/package/@squoosh/cli).`;

function deleteFiles(dirPath) {
  let filesList = fs.readdirSync(__dirname + dirPath, (err, files) => {
    if (err) throw err;
  });

  filesList.forEach((file) => {
    fs.unlink(__dirname + dirPath + file, (err) => {
      if (err) throw err;
      console.log(`O arquivo ${file} foi deletado com sucesso!`);
    });
  });
}

function moveFiles(dirPath) {
  fs.readdir(__dirname, (err, files) => {
    if (err) throw err;
    let newFilesList = files.filter((file) => file.includes(".webp"));
    newFilesList.forEach((file) => {
      fs.rename(__dirname + "/" + file, __dirname + dirPath + file, (err) => {
        if (err) throw err;
        console.log(
          `O arquivo ${file} foi movido ao diretório ${dirPath} com sucesso!`
        );
      });
    });
  });
}

function displayMessage() {
  fs.writeFile(__dirname + "/imgs/README.md", text, (err) => {
    if (err) throw err;
    console.log("\n\nPara mais informações, confira ./imgs/README.md\n");
  });

  fs.readFile(__dirname + "/imgs/README.MD", (err, data) => {
    if (err) throw err;
    console.log("\n" + data.toString() + "\n");
  });
}

deleteFiles("/imgs/");
moveFiles("/imgs/");

deleteFiles("/imgs/ONGs/");
moveFiles("/imgs/ONGs/");

deleteFiles("/imgs/footer/");
moveFiles("/imgs/footer/");

deleteFiles("/imgs/galery/");
moveFiles("/imgs/galery/");

displayMessage();