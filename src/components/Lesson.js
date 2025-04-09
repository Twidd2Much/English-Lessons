
import { useState } from "react";
import { Button } from "@/components/ui/button";

const lessons = {
  "grocery": {
    title: "At the Grocery Store",
    dialogue: [
      { speaker: "Clerk", text: "Hello! Can I help you find something?" },
      { speaker: "You", text: "Yes, where is the rice?" },
      { speaker: "Clerk", text: "Aisle 3, near the noodles." },
      { speaker: "You", text: "Thank you!" }
    ]
  },
  "restaurant": {
    title: "At a Restaurant",
    dialogue: [
      { speaker: "Waiter", text: "Hi! Here's the menu." },
      { speaker: "You", text: "Thank you. I’ll have the chicken soup." },
      { speaker: "Waiter", text: "Great choice! Anything to drink?" },
      { speaker: "You", text: "Just water, please." }
    ]
  },
  "tv": {
    title: "Watching TV",
    dialogue: [
      { speaker: "You", text: "What’s this show called?" },
      { speaker: "Friend", text: "It’s called 'Funny Family'. It’s a comedy." },
      { speaker: "You", text: "I like it! It’s funny." }
    ]
  },
  "meeting": {
    title: "Meeting New People",
    dialogue: [
      { speaker: "You", text: "Hi, my name is Mali." },
      { speaker: "Other", text: "Nice to meet you, Mali. I'm Sarah." },
      { speaker: "You", text: "Nice to meet you too!" }
    ]
  },
  "directions": {
    title: "Asking for Directions",
    dialogue: [
      { speaker: "You", text: "Excuse me, where is the bank?" },
      { speaker: "Stranger", text: "It’s down the street, next to the post office." },
      { speaker: "You", text: "Thank you very much!" }
    ]
  },
  "hobbies": {
    title: "Talking About Hobbies",
    dialogue: [
      { speaker: "You", text: "I like to read books." },
      { speaker: "Friend", text: "Cool! I like to paint." },
      { speaker: "You", text: "Maybe we can do art together." }
    ]
  },
  "doctor": {
    title: "At the Doctor’s Office",
    dialogue: [
      { speaker: "Doctor", text: "How are you feeling today?" },
      { speaker: "You", text: "I have a headache." },
      { speaker: "Doctor", text: "Okay, let me check your temperature." }
    ]
  },
  "phonecall": {
    title: "Making a Phone Call",
    dialogue: [
      { speaker: "You", text: "Hello, is this Anna?" },
      { speaker: "Anna", text: "Yes, who is this?" },
      { speaker: "You", text: "This is Mali. Can we talk later?" },
      { speaker: "Anna", text: "Sure!" }
    ]
  },
  "clothes": {
    title: "Shopping for Clothes",
    dialogue: [
      { speaker: "Clerk", text: "Can I help you?" },
      { speaker: "You", text: "Yes, I want to buy a shirt." },
      { speaker: "Clerk", text: "What size are you?" },
      { speaker: "You", text: "Medium, please." }
    ]
  }
};

export default function Lesson({ lessonKey }) {
  const lesson = lessons[lessonKey] || { title: "Lesson not found", dialogue: [] };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{lesson.title}</h2>
      <div className="space-y-3">
        {lesson.dialogue.map((line, index) => (
          <div
            key={index}
            className="bg-gray-100 p-3 rounded-lg shadow-md"
          >
            <strong>{line.speaker}:</strong> {line.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export { lessons };
