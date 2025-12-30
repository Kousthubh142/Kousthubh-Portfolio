# Portfolio Color Theme Documentation

## Current Theme: Brown/Orange (Warm)

### Primary Colors
- **Base Accent Color**: `rgb(180, 91, 41)` / `#b45b29`
- **Light Accent Color**: `rgb(217, 122, 61)` / `#d97a3d`
- **Dark Accent Color**: `rgb(138, 70, 33)` / `#8a4621`
- **Background Color**: `rgb(12, 1, 0)` / `#0c0100`

### Color Usage Map

#### App.jsx
- Main background: `bg-[rgb(12,1,0)]`

#### Navbar.jsx
- Logo brackets: `text-[#b45b29]`
- Desktop menu hover/active: `text-[#b45b29]`
- Mobile menu icon: `text-[#b45b29]`
- Mobile menu active: `text-[#b45b29]`
- Social icons hover: `hover:text-[#b45b29]`
- Scrolled navbar background: `bg-[rgb(12,1,0)]`
- Mobile menu background: `bg-[rgb(12,1,0)]`

#### About.jsx
- Typing effect text: `text-[#b45b29]`
- Typing cursor: `text-[#b45b29]`
- Profile border: `border-[rgb(180,91,41)]`
- Profile shadow: `drop-shadow-[0_10px_20px_rgb(180,91,41)]`
- Download CV button gradient: `linear-gradient(90deg, #b45b29, #d97a3d)`
- Download CV button shadow: `0 0 2px #b45b29, 0 0 2px #b45b29, 0 0 40px #b45b29`

#### Skills.jsx
- Section title underline: `bg-[#b45b29]`
- Card shadow: `shadow-[0_0_20px_1px_rgba(180,91,41,0.3)]`

#### Experience.jsx
- Section title underline: `bg-[#b45b29]`
- Timeline circle border: `border-[#b45b29]`
- Card shadow: `shadow-[0_0_20px_1px_rgba(180,91,41,0.3)]`
- Skill badges background: `bg-[#b45b29]`

#### Education.jsx
- Section title underline: `bg-[#b45b29]`
- Timeline circle border: `border-[#b45b29]`
- Card shadow: `shadow-[0_0_20px_1px_rgba(180,91,41,0.3)]`

#### Work.jsx
- Section title underline: `bg-[#b45b29]`
- Project card hover shadow: `hover:shadow-[#b45b29]/50`
- Project tags text: `text-[#b45b29]`
- Modal close button hover: `hover:text-[#b45b29]`
- Modal tags text: `text-[#b45b29]`
- View Code button hover: `hover:bg-[#8a4621]`
- View Live button background: `bg-[#b45b29]`
- View Live button hover: `hover:bg-[#8a4621]`

#### Contact.jsx
- Section title underline: `bg-[#b45b29]`
- Input focus border: `focus:border-[#b45b29]`
- Send button gradient: `from-[#b45b29] to-[#d97a3d]`

#### Footer.jsx
- Name color: `text-[#b45b29]`
- Navigation links hover: `hover:text-[#b45b29]`
- Social icons hover: `hover:text-[#b45b29]`

#### BlurBlob.jsx
- Blob background: `bg-[rgb(180,91,41)]`

#### tailwind.config.js
- Skills gradient: `linear-gradient(38.73deg, rgba(180, 91, 41, 0.15) 0%, rgba(180, 91, 41, 0) 50%), linear-gradient(141.27deg, rgba(217, 122, 61, 0) 50%, rgba(217, 122, 61, 0.15) 100%)`

---

## Previous Theme: Purple/Blue (Original)

### Primary Colors
- **Base Accent Color**: `#8245ec` (purple)
- **Light Accent Color**: `#a855f7` (light purple)
- **Secondary Color**: `purple-500` / `purple-600` / `purple-800`
- **Background Color**: `#050414` (dark blue-purple)

### Color Usage Map (Original)

#### App.jsx
- Main background: `bg-[#050414]`

#### Navbar.jsx
- Logo brackets: `text-[#8245ec]`
- Desktop menu hover/active: `text-[#8245ec]`
- Mobile menu icon: `text-[#8245ec]`
- Mobile menu active: `text-[#8245ec]`
- Social icons hover: `hover:text-[#8245ec]`
- Scrolled navbar background: `bg-[#050414]`
- Mobile menu background: `bg-[#050414]`

#### About.jsx
- Typing effect text: `text-[#b45b29]` (was already changed)
- Typing cursor: `text-[#b45b29]` (was already changed)
- Profile border: `border-purple-700`
- Profile shadow: N/A (not in original)
- Download CV button gradient: `linear-gradient(90deg, #8245ec, #a855f7)`
- Download CV button shadow: `0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec`

#### Skills.jsx
- Section title underline: `bg-[#8245ec]`
- Card shadow: `shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]`

#### Experience.jsx
- Section title underline: `bg-purple-500`
- Timeline circle border: `border-[#8245ec]`
- Card shadow: `shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]`
- Skill badges background: `bg-[#8245ec]`

#### Education.jsx
- Section title underline: `bg-purple-500`
- Timeline circle border: `border-[#8245ec]`
- Card shadow: `shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]`

#### Work.jsx
- Section title underline: `bg-purple-500`
- Project card hover shadow: `hover:shadow-purple-500/50`
- Project tags text: `text-purple-500`
- Modal close button hover: `hover:text-purple-500`
- Modal tags text: `text-purple-500`
- View Code button hover: `hover:bg-purple-800`
- View Live button background: `bg-purple-600`
- View Live button hover: `hover:bg-purple-800`

#### Contact.jsx
- Section title underline: `bg-purple-500`
- Input focus border: `focus:border-purple-500`
- Send button gradient: `from-purple-600 to-pink-500`

#### Footer.jsx
- Name color: `text-purple-500`
- Navigation links hover: `hover:text-purple-500`
- Social icons hover: `hover:text-purple-500`

#### BlurBlob.jsx
- Blob background: `bg-purple-500`

#### tailwind.config.js
- Skills gradient: `linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%)`

---

## How to Switch Themes

To switch between themes, use find-and-replace across all files:

### Brown/Orange → Purple/Blue
- `rgb(180, 91, 41)` → `#8245ec`
- `#b45b29` → `#8245ec`
- `#d97a3d` → `#a855f7`
- `#8a4621` → `purple-800` (or `#6b21a8`)
- `rgb(12,1,0)` → `#050414`
- `rgba(180, 91, 41, 0.15)` → `rgba(204, 0, 187, 0.15)`
- `rgba(217, 122, 61, 0.15)` → `rgba(0, 70, 209, 0.15)`

### Purple/Blue → Brown/Orange
- `#8245ec` → `#b45b29`
- `#a855f7` → `#d97a3d`
- `purple-500` → `#b45b29`
- `purple-600` → `#b45b29`
- `purple-800` → `#8a4621`
- `#050414` → `rgb(12,1,0)`
- `rgba(204, 0, 187, 0.15)` → `rgba(180, 91, 41, 0.15)`
- `rgba(0, 70, 209, 0.15)` → `rgba(217, 122, 61, 0.15)`

---

## Notes
- All color changes should be made consistently across all components
- Remember to update tailwind.config.js for gradient backgrounds
- Test the site after theme changes to ensure all colors are updated
- The grid overlay in App.jsx uses `#4f4f4f2e` (gray) and is theme-neutral
