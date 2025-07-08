
# 🎨 React Icon Libraries Used in the Project

This project uses two popular icon libraries to add modern, scalable vector icons throughout the application.

---

## ✅ 1. `react-icons`

[`react-icons`](https://react-icons.github.io/react-icons/) gives you access to over 20 popular icon sets (like FontAwesome, Heroicons, etc.) using simple React components.

### 📦 Installation

```bash
npm install react-icons
```

### 🔧 Usage Examples

```jsx
import { FaBars, FaTimes } from "react-icons/fa";         // Font Awesome
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi"; // Heroicons
```

### 🛠️ Common Use Cases

- Hamburger / close buttons in the mobile nav
- Contact icons (mail, phone, location)

---

## ✅ 2. `lucide-react`

[`lucide-react`](https://lucide.dev/) provides a clean, modern set of **outline-style** icons — ideal for minimal UIs.

### 📦 Installation

```bash
npm install lucide-react
```

### 🔧 Usage Example

Instead of deprecated named imports:
```jsx
import Github from "lucide-react/dist/esm/icons/github";
import Linkedin from "lucide-react/dist/esm/icons/linkedin";
import Twitter from "lucide-react/dist/esm/icons/twitter";
```

### 🛠️ Common Use Cases

- Social links section (GitHub, LinkedIn, Twitter)
- Consistent aesthetic with thin-outline icons

---

## 🤝 When to Use Which

| Icon Library   | Best For                          | Style           |
|----------------|-----------------------------------|------------------|
| `react-icons`  | General purpose, utility icons    | Mixed (solid + outline) |
| `lucide-react` | Clean, minimal UI, social badges  | Consistent outline |

---

## 🧠 Tips

- Use Tailwind classes to style icons: `text-blue-600`, `w-5 h-5`, etc.
- Wrap icons with buttons or links as needed
- Keep icon size consistent for visual balance

---

## ✅ Outcome

You’ll have scalable, consistent, and styled icons across your app without image assets — all React-optimized and easy to customize.
