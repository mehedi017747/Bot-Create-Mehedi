const axios = require("axios");
const fs = require("fs");
const request = require("request");

const emojiAudioMap = {
 "🥺": {
 url: "https://drive.google.com/uc?export=download&id=1Gyi-zGUv5Yctk5eJRYcqMD2sbgrS_c1R",
 caption: "মিস ইউ বেপি...🥺"
 },
 "😍": {
 url: "https://drive.google.com/uc?export=download&id=1lIsUIvmH1GFnI-Uz-2WSy8-5u69yQ0By",
 caption: "তোমার প্রতি ভালোবাসা দিনকে দিন বাড়ছে... 😍"
 },
 "😭": {
 url: "https://drive.google.com/uc?export=download&id=1qU27pXIm5MV1uTyJVEVslrfLP4odHwsa",
 caption: "জান তুমি কান্না করতেছো কোনো... 😭"
 },
"😓": {
 url: "https://drive.google.com/uc?export=download&id=1t-9gT9wwaEpiucBCbHkpGTnplQjidDtJ",
 caption: "শুন মামা যে ঠগায় সেও ঠগে... 😓"
 },
"😘": {
 url: "https://drive.google.com/uc?export=download&id=1gAz3t79lAIkgdCJOlsCO8v29Se6jBxji",
 caption: "কিরে পাগল ছাগল গুরুপে এতো চুম্মাচুম্মি করোস কেন... 😘"
 },
"Jumma Mubarak": {
 url: "https://drive.google.com/uc?export=download&id=1JV5VFPIlQEEjN53VyL9vjhG_ricPhypq",
 caption: "আসসালামু আলাইকুম পবিত্র জুম্মা মোবারক... Jumma Mubarak"
 },
"Sorry": {
 url: "https://drive.google.com/uc?export=download&id=1l4cGfBYYOWiA3Ef58RT-y31693jRqzst",
 caption: "সরি বললেই কি সব কিছু সমাধান হয়ে যায়..! Sorry"
 },
"Ex": {
 url: "https://drive.google.com/uc?export=download&id=1udda6_58ahOV3A0bkThQ9TuJv19tUm2r",
 caption: "এক কাপ চা বানাই ex এর জন্য...! Ex"
 },
"Vule gecho": {
 url: "https://drive.google.com/uc?export=download&id=1yY0YaxsdLjX40CQpviINOcEikj0KaJ8a",
 caption: "তুমি আমার হইতা যদি বাইসা যাইতাম মোদের জোয়ারে রে সাইকেল চালাইয়া খুজি তোমাকে তোমাকে...! Vule gecho"
 },
"😤": {
 url: "https://drive.google.com/uc?export=download&id=1wv_rDv8d89kxu8u6WUlyU4--WLvO91tV",
 caption: "রাগ করে না বাবু তোমাকে একটা গান শুনিয়ে রাগ কমিয়ে দিচ্ছি.! 😤"
 },
"🫦": {
 url: "https://drive.google.com/uc?export=download&id=1RLMHybwyvv5i5ku1tFbWgkfjox1Tbv0p",
 caption: "বুঝছো... 🫦"
 },
"🥵": {
 url: "https://drive.google.com/uc?export=download&id=1FQVCHtp_J9CTUmfYUf2xoH8xCAb2Pq5Y",
 caption: "নো পারে... 🥵"
 },
"🥵": {
 url: "https://drive.google.com/uc?export=download&id=1WL8uOQ1e7kGCzsYYaBzgcYKd6ntEdibT",
 caption: "আমি কিছু বললেই দোষ হয়ে যায়... 🥵"
 },
"😿": {
 url: "https://drive.google.com/uc?export=download&id=1az0nNqd49dx8pvPCdj9wiSCX2ZrnLEVA",
 caption: "সরি বললেই কি সব সমস্যার সমাধান হয়ে যাবে....? 😿"
 },
"😏": {
 url: "https://drive.google.com/uc?export=download&id=1ETFG0Djwnv--ZezXsdsMg4wEOie6kEEJ",
 caption: "যা বাগ পাগল ছাগল... 😏"
 },
"😅": {
 url: "https://drive.google.com/uc?export=download&id=1u58SXdURjx8u3mt0uIDZmYAb2SV-FZIB",
 caption: "আজও তোমায় মনে পড়ে... 😅"
 },
"🤗": {
 url: "https://drive.google.com/uc?export=download&id=1Dq3EnKRVxn-8oVmo_MQ9CKJu_OAESS7F",
 caption: "খুব খুশি আছো মনে হচ্ছে,নেও আরেকটা গান শুনে যাও... 🤗"
 },
"😹": {
 url: "https://drive.google.com/uc?export=download&id=1baJfj8dWLnzbF_6387KXcWCoVNCHJlqK",
 caption: "কেমন ছিল... 😹"
 },
"😊": {
 url: "https://drive.google.com/uc?export=download&id=1wwtBLd9qt6D5gNiaND1ICGDHScUH8Tho",
 caption: "শুধু তোমার জন্য... 😊"
 },
"Mood off": {
 url: "https://drive.google.com/uc?export=download&id=1XHKembVKwSfTaIt3DwKM8gnZ-aUe0m_K",
 caption: "গান শুনিয়ে দিলাম এখন আর মোড অফ করে থাকিস না প্লিজ... Mood off"
 },
"Hi": {
 url: "https://drive.google.com/uc?export=download&id=1U9kdNG-kMZxKZ33spjnBxogPjfAatQj1",
 caption: "কেমন আাছেন আপনারা... Hi"
 },
"🥰": {
 url: "https://drive.google.com/uc?export=download&id=1CilpsMH4CvFNvTiCc-m3a6oBv9bnV-D0",
 caption: "অনেক সুন্দর হয়ছে জান... 🥰"
 },
 "😡": {
 url: "https://drive.google.com/uc?export=download&id=1S_I7b3_f4Eb8znzm10vWn99Y7XHaSPYa",
 caption: "রাগ কমাও, মাফ করাই বড়ত্ব... 😡"
 },
 "🙄": {
 url: "https://drive.google.com/uc?export=download&id=1gtovrHXVmQHyhK2I9F8d2Xbu7nKAa5GD",
 caption: "এভাবে তাকিও না তুমি ভেবে লজ্জা লাগে ... 🙄"
 },
 "😑": {
 url: "https://drive.google.com/uc?export=download&id=1azElOD2QeaMbV2OdCY_W3tErD8JQ3T7P",
 caption: "লেবু খাও জান সব ঠিক হয়ে যাবে 😑"
 },
 "😒": {
 url: "https://drive.google.com/uc?export=download&id=1tbKe8yiU0RbINPlQgOwnig7KPXPDzjXv",
 caption: "বিরক্ত করো না জান... ❤️"
 },
 "🤣": {
 url: "https://drive.google.com/uc?export=download&id=1Hvy_Xee8dAYp-Nul7iZtAq-xQt6-rNpU",
 caption: "হাসলে তোমাকে পাগল এর মতো লাগে... 🤣"
 },
 "💔": {
 url: "https://drive.google.com/uc?export=download&id=1jQDnFc5MyxRFg_7PsZXCVJisIIqTI8ZY",
 caption: "feel this song... 💔"
 },
 "🙂": {
 url: "https://drive.usercontent.google.com/u/0/uc?id=1-Pdww0LPRMvLhgmL_C4HWHfT320Bp8-v&export=download",
 caption: "আবাল ... 🙂"
 }
};

module.exports.config = {
 name: "emoji_voice",
 version: "1.0.0",
 hasPermssion: 0,
 credits: "Islamick Chat Modified by Cyber-Sujon",
 description: "10 emoji = 10 voice response",
 commandCategory: "noprefix",
 usages: "🥺 😍 😭 etc.",
 cooldowns: 5
};

module.exports.handleEvent = async ({ api, event }) => {
 const { threadID, messageID, body } = event;
 if (!body) return;

 const emoji = body.trim();
 const audioData = emojiAudioMap[emoji];

 if (!audioData) return;

 const filePath = `${__dirname}/cache/${encodeURIComponent(emoji)}.mp3`;

 const callback = () => api.sendMessage({
 body: `╭•┄┅════❁🌺❁════┅┄•╮\n\n${audioData.caption}\n\n╰•┄┅════❁🌺❁════┅┄•╯`,
 attachment: fs.createReadStream(filePath)
 }, threadID, () => fs.unlinkSync(filePath), messageID);

 const stream = request(encodeURI(audioData.url));
 stream.pipe(fs.createWriteStream(filePath)).on("close", () => callback());
};

module.exports.run = () => {};
