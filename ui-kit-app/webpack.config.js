const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.ts", // Стартовая точка приложения
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    libraryTarget: "umd", // Позволят использовать required или import для пользователей этой библиотеки
  }, // файл и место, куда будет складываться билд
  resolve: {
    extensions: [".ts", ".tsx"],
  },
  externals: {
    // указываем какие модули исключить из бандла, но подразумевается что этот модуль будет в конечном приложении, там где будет использоваться
    react: "react",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/, // Ищем файлы с расширением
        use: ["ts-loader"], // Применяем лоадер
        exclude: /node_modules/, // Исключаем модули
      },
    ],
  },
};
