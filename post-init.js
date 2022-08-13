const { exec } = require("child_process");
const fs = require("fs");

exec("npx pod-install ios").on("error", (err) => {
	console.log(err);
});

const renameEnvArr = ["_env", "_env.production", "_env.development"];

renameEnvArr.forEach((filePath) => {
	const exists = fs.existsSync(filePath);
	if (exists) {
		fs.renameSync(filePath, filePath.replace("_env", ".env"));
	}
});
