const path = require("path");

module.exports = (baseConfig, env, config) => {
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        use: [
            require.resolve("awesome-typescript-loader"),
            require.resolve("react-docgen-typescript-loader"),
        ],
    }, {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "../")
    });
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
};