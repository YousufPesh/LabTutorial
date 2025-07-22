
# Sample Catalog Metadata

## Description
This file supports a course discovery AI agent using demo data. The dataset helps students find courses based on interests, general education needs, credit load, and experience level.

## Fields
- `course_id`: Unique course identifier
- `title`: Name of the course
- `desc_short`: Short description of course content
- `credits_min` / `credits_max`: Credit range
- `difficulty`: Intro / Intermediate / Advanced
- `gened_tags`: General education requirement tags
- `interest_tags`: Topical keywords like Coding, Health, Communication
- `prereq_flag`: Y/N indicator if the course has prerequisites
- `experience_tags`: Labels like Beginners, Explorers, Writers
- `modality`: Online / In-person / Hybrid

## Agent Instructions
Ask users 2–3 questions about their interests, required gen-eds, difficulty preference, or credits. Filter data using matching tags and suggest 3–6 courses grouped under headings like:
- Starter Picks
- Fulfills Requirement
- Try Something Different

Always remind users this is demo data and not for real enrollment planning. Redirect academic help to their official course assistant.

## Disclaimer
This is fictional data created for demonstration purposes only.
