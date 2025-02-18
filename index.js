const { Client } = require('discord.js-selfbot-v13');
require('dotenv').config();
const express = require('express');



const app = express();
const PORT = process.env.PORT || 5000
const client = new Client();


client.once('ready', async () => {
    console.log(`Logged in as ${client.user.username}`);

    // Replace with the channel ID where you want to send messages
    const channelId = '1209630080603791430'; 
    const channel = await client.channels.fetch(channelId);

    if (!channel) {
        console.log('Channel not found.');
        return;
    }

    const messages = [
        "GmGm! 🌞 How are you feeling today?",
        "Rise and shine! 🌟 Let’s make today awesome!",
        "Another beautiful day ahead! ✨ What's your plan?",
        "Hey there! 👋 Let’s get this day started with some energy!",
        "Got anything exciting planned today? 😁",
        "Just wanted to check in and say 'Hi!' 👋",
        "GmGm! Any big goals for today? 💪",
        "Hope you have an amazing day ahead! 🌼",
        "Feeling great today! 🌟 Let’s keep that energy going!",
        "Excited for what today brings! Let’s get started! 🔥",
        "How’s your morning going? Let’s make today count! ✨",
        "Morning vibes! 🌞 Ready to take on the day? 💪",
        "Good vibes only today! ✨ What’s the plan?",
        "The sun is shining, and so is your potential! 🌞",
        "You’ve got this, whatever today brings! 💪",
        "Keep that positivity flowing today! 🚀",
        "Chase those dreams today. 🌠 What's on your mind?",
        "GmGm! Feeling optimistic for today! 🌟",
        "Let’s start today with a positive mindset! ✨",
        "How about we make today better than yesterday? 💯",
        "I’m bullish on Sahara AI today! 🚀 The future looks bright!",
        "Did you check out the latest from Sahara AI? Things are looking exciting! 🔥",
        "Hey, have you seen what Sahara AI is up to lately? 🚀",
        "Sahara AI is on fire today 🔥! What about you?",
        "Morning! 🌅 If you’re bullish on Sahara AI, today’s a good day!",
        "I’m all in on Sahara AI today, feeling good! 💥",
        "The world’s moving fast, and Sahara AI is leading the way! ⚡",
        "Can’t wait to see how Sahara AI grows this year! 🤖",
        "Another day, another opportunity to explore Sahara AI! 💡",
        "Sahara AI is changing the game. What are you excited about? 🎮",
        "GmGm! Did you know Sahara AI just got even smarter? 🤩",
        "Let’s get things done today, powered by Sahara AI! 💼",
        "GmGm! I’m feeling positive and ready for whatever comes next, powered by Sahara AI! 💡",
        "Morning motivation: You + Sahara AI = unstoppable. 💯",
        "The future is now, and Sahara AI is leading the charge! ⚡",
        "Another chance to be awesome! And remember, Sahara AI’s got your back. 🤗",
        "Let’s get started with some positive Sahara AI vibes! 💡",
        "GmGm! Just checking in to remind you that Sahara AI is always evolving! 💡",
        "Ready for a productive day, powered by your energy and Sahara AI!",
        "Rise and shine, superstar! 🌟 Ready for a Sahara AI-inspired day?",
        "What’s up? How are you doing today?",
        "Time for a fresh start today, let’s do it!",
        "What’s on your mind today? Let’s talk about it.",
        "Here’s to another day of making things happen! 🚀",
        "Feeling energized today? Let's make it count!",
        "What’s your big goal for today?",
        "GmGm! 🌞 What’s on your to-do list?",
        "Rise and shine, let’s get to it! 💪",
        "Another fresh start to chase your dreams!",
        "What are you excited about today?",
        "Feeling ready to take on whatever today brings? 💥",
        "Let’s kickstart today with some inspiration! ✨",
        "Today’s a great day to start something new! 🌱",
        "Let’s keep the momentum going! 🔥",
        "The world is full of opportunities. Let’s seize them today! 🌍",
        "GmGm! Let’s make today productive and fun! 😎",
        "What’s one thing you’re looking forward to today?",
        "Rise and shine, ready to take on the world? 🌏",
        "Let’s make today legendary! 💯",
        "How about making today count in a big way? ✨",
        "GmGm, ready to hit the ground running? 🏃‍♂️",
        "Another day to work on your goals, let’s get it!",
        "Hope today is as amazing as you are! ✨",
        "Let’s make today a step closer to your dreams! 💭",
        "Every day is a new opportunity. Let’s make it amazing! 🌟",
        "Whos managing the reward payouts?",
    ];


  let lastMessages = [];

    // Randomly select a message from the array ensuring no repetition within 4 messages
    const getRandomMessage = () => {
        let randomIndex;
        let selectedMessage;

        // Keep trying until we find a message that wasn't used in the last 4
        do {
            randomIndex = Math.floor(Math.random() * messages.length);
            selectedMessage = messages[randomIndex];
        } while (lastMessages.includes(selectedMessage));

        // Update the last 4 messages
        lastMessages.push(selectedMessage);
        if (lastMessages.length > 4) {
            lastMessages.shift(); // Remove the oldest message
        }

        return selectedMessage;
    };

    // Send a random message every 2 minutes
    setInterval(() => {
        const message = getRandomMessage();
        channel.send(message)
            .then(() => console.log('Message sent!'))
            .catch(err => console.error('Error sending message:', err));
    }, 2* 60 * 1000); // Sends message every 2 minutes
});

client.login(process.env.TOKEN);

app.get('/', (req, res) => {
    res.send('Bot is running!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});