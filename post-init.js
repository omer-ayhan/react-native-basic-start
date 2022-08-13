const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

exec("yarn install").on("close", () => {
	exec("npx pod-install ios").on("error", (err) => {
		console.log(err);
	});
});

const renameEnvArr = ["_env", "_env.production", "_env.development"];

exec("chmod -R a+rwx " + __dirname).on("close", () => {
	renameEnvArr.forEach((file) => {
		const filePath = path.join(__dirname, file);
		const exists = fs.existsSync(filePath);
		if (exists) {
			fs.renameSync(filePath, filePath.replace("_env", ".env"));
		}
	});
});
