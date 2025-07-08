
# 🧭 React Navbar Active Section Highlighting (Scroll Spy)

## 🎯 Objective

Highlight the current navbar link in blue and semi-bold as the user scrolls through sections like Home, About, Skills, etc.

---

## ✅ Logic Overview

### 1. Track Active Section with IntersectionObserver

We used `useInView` from the `react-intersection-observer` library to track which section is currently in the viewport.

Each section (e.g., `Skills.jsx`) includes:

```js
const { ref, inView } = useInView({ threshold: 0.5 });

if (inView) setActiveSection("skills");

return <section id="skills" ref={ref}>...</section>
```

This ensures the parent (`App.jsx`) always knows which section is visible.

---

### 2. Store and Pass State from `App.jsx`

We keep `activeSection` in the root component (`App.jsx`) and pass `setActiveSection` to each section:

```js
const [activeSection, setActiveSection] = useState("");

<Navbar activeSection={activeSection} />
<Skills setActiveSection={setActiveSection} />
```

Each section calls `setActiveSection("section-id")` when it's in view.

---

### 3. Compare Nav Link with Active Section

In `Navbar.jsx`, we check whether the current nav link matches the visible section:

```js
const isActive = activeSection === link.href.slice(1);
```

This removes the `#` and compares it with the actual `id` of the visible section.

Then we apply styles:

```jsx
className={\`hover:text-blue-600 \${isActive ? "text-blue-600 font-semibold" : ""}\`}
```

This adds a blue color and semi-bold font if it's the active section.

---

## 📌 Why This Works

- `useInView` automatically detects when a section becomes visible
- `activeSection` state is updated as needed
- React re-renders the navbar when `activeSection` changes
- `slice(1)` is used to remove `#` from href for accurate matching

---

## 💡 Tips

- Use `threshold: 0.5` or `0.6` for reliable section visibility detection
- Highlighting is applied only to the **desktop nav** (`lg:flex`)
- Works cleanly with modular React components

---

## 📎 Example

- Scroll to **Projects** → "Projects" in nav turns blue and bold
- Scroll to **Contact** → "Contact" gets highlighted
- No manual scroll listener is required

---

## 📦 Dependencies

Install the required package:

```bash
npm install react-intersection-observer
```

---

## ✅ Outcome

You get a professional, scroll-aware sticky navbar with active link highlighting — efficient, React-friendly, and easy to maintain.
