# Learnary

A modern Learning Management System (LMS) built with Next.js that provides real-time AI-powered teaching lessons for personalized learning experiences.

## Features

- **AI Teaching Lessons**: Interactive AI tutors for various subjects
- **Real-time Voice Sessions**: Engage with your tutor through live conversation
- **Personalized Journeys**: Track your progress and tailor your learning path
- **Bookmarking System**: Save and organize your favorite lessons

## Project Structure

```
│   README.md
│   package.json
│   tsconfig.json
│
├── app/
│   ├── (marketing)/
│   ├── api/
│   ├── companions/        # Lesson pages (route kept for now)
│   └── ...
├── components/
│   ├── CompanionCard.tsx  # Lesson card
│   ├── CompanionList.tsx  # Lesson list
│   └── ...
└── lib/
    └── actions/
        └── companion.actions.ts # Data access (table: companions)
```

## Using the App

### Creating a Lesson

1. Navigate to `/companions/new`
2. Fill in the lesson details:
   - Name, Subject, Topic, Duration, Style, Voice
3. Submit to create your lesson

### Starting a Lesson

1. Browse available lessons on the dashboard
2. Click on a lesson card to start a session
3. Interact with the tutor in real time
4. Bookmark lessons for quick access later

## Data Model

- **Lessons**: AI lesson configuration with subject, topic, and voice settings (stored in `companions` table)
- **Sessions**: User session history
- **Bookmarks**: User-saved lessons

---

If you plan to change routes from `/companions` to `/lessons`, add redirects and update imports/filenames accordingly. I can do that when you’re ready.
