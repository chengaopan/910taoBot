const axios = require("axios");
const {
	FileBox
} = require("file-box");

module.exports = (msg, length) => {
	return new Promise(async (resolve, reject) => {
		let requestUrl = "";
		if (msg.text() === "随机一言" || msg.text() === "1") {
			requestUrl = "http://api.7cyd.com/api/api/yiyan.php";
			axios.get(requestUrl).then(async (response) => {
				let result = response.data;
				resolve(result);
			});
		} else if (msg.text() === "情话" || msg.text() === "2") {
			requestUrl = "http://api.7cyd.com/api/vip/sjqh.php";
			axios.get(requestUrl).then(async (response) => {
				let result = response.data;
				resolve(result.data.content);
			});
		} else if (msg.text() === "图片") {
			const photo = FileBox.fromFile("img/910tao.jpg");
			resolve(photo);
		} else {
			resolve("嗯~~~,这个问题人家还不会呢~");
		}
	});
};
