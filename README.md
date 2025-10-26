# **WeatherNow – Real-Time Weather Watchlist App**

**WeatherNow** is a modern, responsive web application that provides **real-time weather information** for cities across the globe.  
It’s designed for **travel enthusiasts** who want to plan trips with **weather-conscious decisions**, allowing them to add cities to a **personalized watchlist** that updates automatically every **5 minutes**.

## 🚀 **Features**

- 🌍 **Search** for any city and view **detailed weather data**
- 📋 **Add cities** to a **live-updating watchlist**
- ☀️ **Dark / Light mode** support
- ⏱️ **Auto-refresh** every **5 minutes** for watchlisted cities
- 🔍 **Filtering**, **sorting**, and **clean data visualization**

## 🧩 **Tech Stack**

- **React (Vite)** – for **fast development** and **modular UI**
- **Tailwind CSS** – for **utility-first styling** and **dark mode theming**
- **Weather API** – for **real-time weather data**
- **JavaScript (ES6+)** – core logic & **API integration**

## ⚙️ **Setup Instructions**

1. **Clone Repository**  
  ```bash
  git clone https://github.com/yourusername/weathernow.git
  ```

2. **Install Dependencies**
  ```bash
  npm install
  ```

3. **Add Environment Variables**

  Create a .env file in the root:

  ```
  VITE_WEATHER_API_KEY=your_openweathermap_api_key
  ```

4. **Run Locally**
  ```bash
  npm run dev
  ```

5. **Build for Production**
  ```bash
  npm run build
  ```

## Technical Decisions & Trade-offs

### Framework Choice

**React** was chosen for its **component-driven structure**, **rapid re-render capability**, and **strong community support**.

**Vite** offers **instant hot reload** and **faster build times** compared to CRA.

### Styling

**Tailwind CSS** provides **scalability** and **consistency** without repetitive CSS.

Chose **utility-first approach** over **SCSS** for **speed** and **maintainability** with multiple contributors.

### API Integration

**OpenWeatherMap** was selected due to its **global coverage** and “**Group API**” capability for fetching multiple cities efficiently.

**Trade-off**: Requires city IDs for batching but reduces API calls by up to **80%**.

### State & Data Refresh

Used **useEffect** + **setInterval** for lightweight **auto-refresh logic**.

Chose **simplicity** over **Redux** since the app state is minimal and easily managed locally.

## 🤖 AI Usage Notes

AI (**ChatGPT – GPT-5**) was used to:

- Brainstorm **UI layout** & **UX flow**
- Draft initial **Tailwind CSS layout**
- Generate **README structure** and phrasing

All final decisions, logic, and code were reviewed and refined manually by the developer.

## 🧱 Scaling Plan (Team of 3–5 Frontend Engineers)

## 🧱 Scaling Guidelines

Each feature module (e.g., Search, Watchlist, CityDetails) is self-contained with its own UI, hooks, and tests.

Adopt component ownership — each engineer maintains and improves one module.

Shared logic like date formatting, temperature conversion, or API wrappers will live under `/utils`.

## 📈 Feature Growth Roadmap

As the app scales, we can extend it with more city-focused functionalities, such as:

🏙️ **City Details Page**: Detailed 7-day forecast, air quality, and sunrise/sunset times.

📊 **Historical Trends**: Show past temperature patterns for each city.

❤️ **Favorites & Categories**: Group cities by country or travel plan.

🌍 **Interactive Map**: Visualize weather across multiple cities on a map view.

🔔 **Weather Alerts**: Notify users when a saved city experiences extreme conditions.

## Team Practices

### Code Reviews

Every PR must have at least one peer reviewer.

Use GitHub PR templates enforcing checklist:

- ✅ Code linted and formatted
- ✅ Unit tests updated
- ✅ Commit messages follow convention

### CI/CD

Use GitHub Actions for:

- Automated lint + test on each PR
- Build & deploy on main branch merge
- Lighthouse performance check in CI

### Code Quality

- ESLint + Prettier for consistency
- Jest / React Testing Library for component testing
- TypeScript (optional for future scaling) to enhance maintainability
- Performance checks via React Profiler + Lighthouse CI
