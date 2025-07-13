// pages/index.js
import Head from 'next/head';

export default function Home() {
  return (
    <div style={{
      backgroundImage: 'url(/images/ghumakadapp.jpeg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      color: '#fff'
    }}>
      <Head>
        <title>Ghumakad – Your Personal Travel Companion</title>
        <meta
          name="description"
          content="Effortless, chat-based travel planning with AI-powered itineraries."
        />
      </Head>

      <header style={{ textAlign: 'center', padding: '2rem 0' }}>
        <h1 style={{ fontSize: '3rem' }}>
          Ghumakad: Your Personal Travel Companion
        </h1>
      </header>

      <main style={{ maxWidth: 800, margin: '2rem auto', lineHeight: 1.6 }}>
        <p>
          Imagine you’re planning your dream vacation—exploring hidden gems in a new city,
          savoring local cuisine, and creating memories that last a lifetime. But between
          juggling flights, accommodations, activities, and dietary preferences, it can
          quickly become overwhelming.
        </p>
        <p>
          Ghumakad changes the game by guiding you through every step of the trip,
          without burdening you with technical details or multiple apps.
        </p>

        <h2>The Traveler’s Story</h2>
        <p>
          You—a busy professional who loves to travel but has little time to plan. You want:
        </p>
        <ul>
          <li>A clear, day-by-day itinerary</li>
          <li>Personalized recommendations based on your interests</li>
          <li>Easy ways to book transportation, accommodation, and experiences</li>
          <li>Offline access so you can stay on track, even without Wi-Fi</li>
        </ul>

        <h2>How It Works</h2>
        <p>
          Simply chat in plain language—e.g., “Plan a 5-day trip to Paris with a mid-range
          budget and art museums”—and Ghumakad handles the rest. In seconds you get:
        </p>
        <ol>
          <li>
            A <strong>complete itinerary</strong> covering transport, lodging, and daily activities
          </li>
          <li>
            <strong>Local insights</strong> into must-see spots and hidden gems
          </li>
          <li>
            <strong>Dining suggestions</strong> that match your tastes and dietary needs
          </li>
          <li>A <strong>mobile-friendly</strong> plan you can access offline</li>
        </ol>

        <h2>Example Conversation</h2>
        <blockquote style={{ background: '#f0f0f0', padding: '1rem', borderRadius: 4 }}>
          <p>
            <strong>You</strong>: “Plan a 5-day trip to Kyoto on a budget, focusing on temples and
            local cuisine.”
          </p>
          <p>
            <strong>Ghumakad</strong>: “Absolutely! Here’s your customized 5-day itinerary: Day 1: … Day
            2: …”
          </p>
        </blockquote>

        <h2>Key Benefits</h2>
        <ul>
          <li><strong>Time Saver</strong>: Focus on excitement, not logistics.</li>
          <li><strong>Personalized Experiences</strong>: AI-driven suggestions tailored to you.</li>
          <li>
            <strong>All-in-One Platform</strong>: Book flights, hotels, tours, and more—without
            switching apps.
          </li>
          <li><strong>Offline Access</strong>: Download your plan and travel stress-free.</li>
        </ul>

        <h2>Ready to Wander?</h2>
        <p>
          Whether you’re a solo adventurer, a couple seeking romance, or a family looking for fun,
          Ghumakad makes travel planning effortless. Say goodbye to planning paralysis—let
          Ghumakad lead the way.
        </p>
      </main>

      <footer style={{ textAlign: 'center', padding: '1rem 0', borderTop: '1px solid #ddd' }}>
        <em>Ghumakad – Crafted for travelers, by travelers.</em>
      </footer>
    </div>
  );
}
