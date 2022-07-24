const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
const ffmpeg = require("fluent-ffmpeg");
ffmpeg.setFfmpegPath(ffmpegPath);

// const request = require("request");
const authToken =
	"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlFVUTRNemhDUVVWQk1rTkJNemszUTBNMlFVVTRRekkyUmpWQ056VTJRelUxUTBVeE5EZzFNUSJ9.eyJodHRwczovL3BsYXRmb3JtLnN5bWJsLmFpL3VzZXJJZCI6IjU3NDExNDc5MjUyNTAwNDgiLCJpc3MiOiJodHRwczovL2RpcmVjdC1wbGF0Zm9ybS5hdXRoMC5jb20vIiwic3ViIjoiNTM1UU82UDQ2OU9JQnFYS3BGb2tRc1pPVWc5b2h1Y0xAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vcGxhdGZvcm0ucmFtbWVyLmFpIiwiaWF0IjoxNjU4NjIwODg3LCJleHAiOjE2NTg3MDcyODcsImF6cCI6IjUzNVFPNlA0NjlPSUJxWEtwRm9rUXNaT1VnOW9odWNMIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.B6Yk5i2E4dHH5jo9oLPT441AiGqAPfSiUDX5TVtbLD8oUnUguIThxHnbFJwbiPEQ94FdPYJZgKFtYWUW-OIakQoqWjiT2eBYSOmslTmUeDEHYx5VvpY8UyG4qSBIut7WppvqO7HWDTgECJhBpSgl_9yURgB5RNdj3iLGDLNGODPpL8qqmJ9WAzpViBI8BOl7_qZyOMvAta534EVrHwt7wqHx4SGPSHFaSPKZjTtpArJ8Jf5lYUk1rANArAyNcfy7d29EmVUO04DlzV8R2qFTLdaWl5WLwZ_9SI620HvmgEwY0AKcKX092W368jJlHA12Cir4wNKfWRjIekBXUaxbWw";
const payload = {
	url: "https://symbltestdata.s3.us-east-2.amazonaws.com/sample_video_file.mp4",
	name: "BusinessMeeting",
};

const videoOption = {
	url: "https://api.symbl.ai/v1/process/video/url",
	headers: {
		Authorization: `Bearer ${authToken}`,
		"Content-Type": "application/json",
	},
	body: JSON.stringify(payload),
};

const responses = {
	400: "Bad Request! Please refer docs for correct input fields.",
	401: "Unauthorized. Please generate a new access token.",
	404: "The conversation and/or it's metadata you asked could not be found, please check the input provided",
	429: "Maximum number of concurrent jobs reached. Please wait for some requests to complete.",
	500: "Something went wrong! Please contact support@symbl.ai",
};

export default function makeRequest() {
	request.post(videoOption, (err, response, body) => {
		const statusCode = response.statusCode;
		if (err || Object.keys(responses).indexOf(statusCode.toString()) !== -1) {
			throw new Error(responses[statusCode]);
		}
		console.log("Status code: ", statusCode);
		console.log("Body", response.body);
	});
}

function getVideoInfo() {
	const conversationId = "6391739341340672";
	request.get(
		{
			url: `https://api.symbl.ai/v1/conversations/${conversationId}/messages`,
			headers: { Authorization: `Bearer ${authToken}` },
			json: true,
		},
		(err, response, body) => {
			console.log(body);
			getCroppedVideo(
				url,
				body.messages[0].startTime,
				body.messages[0].endTime,
				"output.mp4"
			);
		}
	);
}

function getCroppedVideo(videoPath, startTime, endTime, outputPath) {
	return new Promise((resolve, reject) => {
		ffmpeg(videoPath)
			.setStartTime(startTime)
			.setDuration(endTime - startTime)
			.output(outputPath)
			.on("end", () => {
				resolve(outputPath);
			})
			.on("error", (err) => {
				reject(err);
			})
			.run();
	});
}
