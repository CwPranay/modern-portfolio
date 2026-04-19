# **App Name**: VibrantFolio

## Core Features:

- Static Profile Card Display: Implement a fixed profile card on the left side of the layout, remaining visible during scroll on desktop and tablet, and stacked on mobile.
- Dynamic Content Loading: Fetch and display portfolio sections like projects, tools, and testimonials dynamically, populating the scrolling content on the right side.
- Responsive Split Layout: Adjust the two-column layout for desktop (35%/65%), tablet (40%/60%), and single-column stacked layout for mobile.
- Smooth Scroll Experience: Integrate Lenis or CSS smooth scroll for a soft and premium navigation experience.
- Content Scroll Animations: Apply 'initial: opacity: 0, y: 40' and 'whileInView: opacity: 1, y: 0' animations with a staggered transition to elements as they scroll into view on the right side.
- AI-Powered Content Suggestions Tool: Provide a generative AI tool to assist the user in drafting concise project descriptions or impactful summary statements for their profile, based on key inputs.
- Hover Interaction: Implement subtle scaling (max 1.04) on interactive elements upon hover.

## Style Guidelines:

- Color scheme: Dark theme, using a very dark background (#0B0B0C) and slightly lighter card elements (#111113) for depth and contrast.
- Primary accent color: Vibrant deep purple (#7C3AED) for highlighting key information, calls to action, and section titles.
- Analogous accent color: A complementing strong blue (#5480EB) to be used sparingly for secondary accents or subtle interactive elements.
- Text colors: Predominantly white for primary text and lighter grey (zinc-400 equivalent) for secondary or descriptive text, ensuring readability against dark backgrounds.
- Body and headline font: 'Inter' (sans-serif) for a modern, objective, and highly legible aesthetic across all content.
- Minimalist and modern icons that align with a professional, tech-oriented portfolio. Icons should be clear and not overly ornate to maintain visual cleanliness.
- Desktop layout: A grid with a fixed 35% left column for the profile card and a scrollable 65% right column for content. Tablet: Left 40% / Right 60%. Mobile: Single-column stacking (profile card, then content).
- Right side content items animate into view with a subtle slide-up and fade-in effect (opacity: 0, y: 40 initially, transitioning to opacity: 1, y: 0), with a soft easeOut duration of 0.6 seconds and 0.08 seconds stagger per item.
- Hover effects: Interactive elements like buttons and project cards should have a subtle scale effect (max 1.04) on hover, without aggressive visual changes.