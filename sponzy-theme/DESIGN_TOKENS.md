# Design Tokens - FansFollow.me Theme

**Version:** 1.0
**Status:** Ready for Tailwind Configuration

---

## 🎨 Color Palette

### Primary Gradient (Brand Identity)
```
From: #f97316 (Orange-500)
To:   #9333ea (Purple-600)
Hover From: #ea580c (Orange-600)
Hover To:   #7e22ce (Purple-700)
```

### Dark Theme Backgrounds
| Level | Color | Hex |
|-------|-------|-----|
| **Hero/Page** | Gray-900 | `#111827` |
| **Cards** | Gray-800 | `#1f2937` |
| **Inputs** | Gray-700 | `#374151` |
| **Hover** | Gray-700/50 | `rgba(55, 65, 81, 0.5)` |

### Text Colors
| Type | Color | Hex |
|------|-------|-----|
| **Primary** | White | `#ffffff` |
| **Secondary** | Gray-300 | `#d1d5db` |
| **Tertiary** | Gray-400 | `#9ca3af` |
| **Muted** | Gray-500 | `#6b7280` |

### Status Colors
| Status | Color | Hex |
|--------|-------|-----|
| **Success** | Green-500 | `#10b981` |
| **Error** | Red-500 | `#ef4444` |
| **Warning** | Yellow-500 | `#eab308` |
| **Info** | Blue-500 | `#3b82f6` |
| **Accent** | Orange-400 | `#fb923c` |

### Accent Colors
| Name | Color | Hex |
|------|-------|-----|
| **Orange-400** | Light Orange | `#fb923c` |
| **Orange-500** | Primary Orange | `#f97316` |
| **Orange-600** | Dark Orange | `#ea580c` |
| **Purple-400** | Light Purple | `#c084fc` |
| **Purple-500** | Primary Purple | `#a855f7` |
| **Purple-600** | Dark Purple | `#9333ea` |
| **Pink-500** | Pink | `#ec4899` |

---

## 🔤 Typography

### Font Family
```
System Sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
```

### Font Sizes (Tailwind)
| Class | Size | px | Usage |
|-------|------|-----|--------|
| `text-xs` | 0.75rem | 12px | Small labels, captions |
| `text-sm` | 0.875rem | 14px | Small text, helper text |
| `text-base` | 1rem | 16px | Body text, default |
| `text-lg` | 1.125rem | 18px | Large text |
| `text-xl` | 1.25rem | 20px | Subheadings |
| `text-2xl` | 1.5rem | 24px | Section headings |
| `text-3xl` | 1.875rem | 30px | Page headings |
| `text-4xl` | 2.25rem | 36px | Large headings |
| `text-5xl` | 3rem | 48px | Hero titles |
| `text-6xl` | 3.75rem | 60px | Extra large titles |

### Font Weights
| Class | Weight | Usage |
|-------|--------|--------|
| `font-normal` | 400 | Body text |
| `font-medium` | 500 | Emphasis |
| `font-semibold` | 600 | Subheadings |
| `font-bold` | 700 | Headings |
| `font-black` | 900 | Hero text |

### Line Height
| Usage | Line Height |
|-------|-------------|
| **Body text** | 150% (1.5) |
| **Headings** | 120% (1.2) |
| **Large titles** | 110% (1.1) |

### Letter Spacing
- **Normal**: Tailwind default
- **Headings**: -0.025em (reduced for tighter look)
- **Hero text**: Slightly reduced for impact

---

## 📏 Spacing System (8px Base)

All spacing uses multiples of 8px:

| Tailwind | px | Usage |
|----------|-----|--------|
| `p-2` | 8px | Tight padding |
| `p-4` | 16px | Standard padding |
| `p-6` | 24px | Medium padding |
| `p-8` | 32px | Large padding |
| `mb-4` | 16px | Between elements |
| `mb-8` | 32px | Between sections |
| `mb-12` | 48px | Between major sections |
| `gap-4` | 16px | Grid gaps |
| `gap-6` | 24px | Medium gaps |
| `gap-8` | 32px | Large gaps |

### Section Spacing
```
py-16 = 4rem = 64px (between major sections)
py-20 = 5rem = 80px (page padding top/bottom)
section-spacing = py-20 md:py-24
```

---

## 🔲 Border Radius

| Class | Value | Usage |
|-------|-------|--------|
| `rounded-lg` | 0.5rem (8px) | Standard |
| `rounded-xl` | 0.75rem (12px) | Cards |
| `rounded-2xl` | 1rem (16px) | Large cards |
| `rounded-3xl` | 1.5rem (24px) | Hero sections |
| `rounded-full` | 9999px | Avatars, pills |

---

## 🌟 Shadows & Effects

### Box Shadows
```css
/* Standard card shadow */
shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1)

/* Orange glow (hover state) */
shadow-orange-500/30: 0 0 20px rgba(249, 115, 22, 0.3)

/* Purple glow */
shadow-purple-600/30: 0 0 20px rgba(147, 51, 234, 0.3)

/* Extra large shadow */
shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25)
```

### Backdrop Effects
```css
backdrop-blur-lg: blur(12px)
backdrop-blur-xl: blur(20px)
```

### Glass Morphism
```css
.glass-effect {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}
```

---

## ✨ Animations

### Keyframe Animations

```css
@keyframes slideInLeft {
  0% { opacity: 0; transform: translateX(-100px); }
  100% { opacity: 1; transform: translateX(0); }
}

@keyframes slideInRight {
  0% { opacity: 0; transform: translateX(100px); }
  100% { opacity: 1; transform: translateX(0); }
}

@keyframes scaleIn {
  0% { opacity: 0; transform: scale(0.8); }
  100% { opacity: 1; transform: scale(1); }
}

@keyframes fadeIn {
  0% { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0); }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes glow {
  from { box-shadow: 0 0 20px rgba(249, 115, 22, 0.4); }
  to { box-shadow: 0 0 30px rgba(249, 115, 22, 0.6); }
}

@keyframes blob {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
}
```

### Animation Classes
| Class | Duration | Easing |
|-------|----------|--------|
| `animate-slide-in-left` | 0.8s | ease-out |
| `animate-slide-in-right` | 0.8s | ease-out |
| `animate-scale-in` | 0.6s | cubic-bezier(0.25, 0.46, 0.45, 0.94) |
| `animate-fade-in` | 0.3s | ease-out |
| `animate-glow` | 2s | ease-in-out |
| `animate-float` | 6s | ease-in-out |
| `animate-bounce-subtle` | 2s | ease-in-out |
| `animate-blob` | 7s | infinite |

### Transition Effects
```css
transition-all duration-200    /* Quick transitions */
transition-all duration-300    /* Standard transitions */
transition-all duration-500    /* Slow transitions */
```

---

## 🎯 Component Styles

### Buttons

#### Primary Button (`.btn-primary`)
```css
background: linear-gradient(135deg, #f97316 0%, #9333ea 100%)
padding: 1rem 2rem (py-4 px-8)
border-radius: 1rem (rounded-2xl)
color: white
font-weight: bold
transition: all 500ms
hover:
  - Scale: 105%
  - Shadow: shadow-xl
  - Glow: shadow-orange-500/40
```

#### Secondary Button (`.btn-secondary`)
```css
background: transparent
border: 2px solid #4b5563
color: #d1d5db
padding: 1rem 2rem
border-radius: 1rem
transition: all 500ms
hover:
  - background: rgba(31, 41, 55, 0.5)
  - color: white
```

### Cards (`.feature-card`)
```css
background: rgba(255, 255, 255, 0.1)
backdrop-filter: blur(12px)
border: 1px solid rgba(255, 255, 255, 0.2)
border-radius: 1.5rem
padding: 2rem
box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4)
transition: all 500ms

hover:
  - transform: translateY(-12px)
  - box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6)
  - shadow-orange-500/20
```

### Form Inputs
```css
background: rgba(55, 65, 81, 0.5)
border: 1px solid #4b5563
border-radius: 0.5rem
padding: 0.75rem 1rem
color: white
transition: all 300ms

focus:
  - border-color: #f97316
  - outline: none
  - box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.1)

placeholder:
  - color: #6b7280
```

---

## 📱 Responsive Breakpoints

Using Tailwind's mobile-first approach:

| Breakpoint | Width | Usage |
|-----------|-------|--------|
| Mobile | 320-639px | Default styles |
| `sm:` | 640px+ | Tablets |
| `md:` | 768px+ | Small desktops |
| `lg:` | 1024px+ | Desktops |
| `xl:` | 1280px+ | Large desktops |
| `2xl:` | 1536px+ | Extra large screens |

### Grid Columns by Breakpoint
```
Mobile (default): grid-cols-1
Tablet (sm):      sm:grid-cols-2
Desktop (lg):     lg:grid-cols-3 or lg:grid-cols-4
```

---

## 🎨 Pre-built Tailwind Config Addition

Add this to your `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        orange: {
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
        },
        purple: {
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
        },
      },
      animation: {
        'blob': 'blob 7s infinite',
        'float': 'float 6s ease-in-out infinite',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'scale-in': 'scaleIn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'fade-in': 'fadeIn 0.3s ease-out',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
}
```

---

## 📊 Usage Summary

| Element | Primary Color | Accent Color | Hover Color |
|---------|---------------|--------------|-------------|
| **Buttons** | Orange-500 | Purple-600 | Orange-600/Purple-700 |
| **Links** | Orange-400 | - | Orange-500 |
| **Backgrounds** | Gray-900 | Gray-800 | - |
| **Text** | White | Gray-300 | Orange-400 |
| **Borders** | Gray-700 | - | Gray-600 |
| **Shadows** | Gray-900 | Orange-500/20 | - |

---

**Status:** ✅ Ready for Implementation
**Last Updated:** January 2026

This design token file should be referenced when:
- Customizing Tailwind configuration
- Creating new components
- Adjusting brand colors
- Adding animations
- Modifying button/card styles
