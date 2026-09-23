# ⚡ AARUVI BUILDS

### ✈️ Button Animation — Series 02

**What if sending a message actually felt like sending it?**
**Press. Release. Launch. Delivered.**

<p align="center">
  <a href="https://aaruvibuilds.github.io/aaruvi-builds-button-series-02/">
    <img src="https://img.shields.io/badge/🚀%20LIVE%20DEMO-7B5CFF?style=for-the-badge&logoColor=white" alt="Live Demo">
  </a>
  <a href="https://github.com/aaruvibuilds/aaruvi-builds-button-series-02">
    <img src="https://img.shields.io/badge/💻%20SOURCE%20CODE-17151B?style=for-the-badge&logo=github&logoColor=white" alt="Source Code">
  </a>
</p>

---

## ✈️ The Build

**Button Animation — Series 02** transforms a simple **Send** button into a small visual story.

Instead of immediately changing to "Sent", the interaction communicates the idea of a message physically leaving the interface.

The sequence:

```text
SEND
  ↓
PRESS
  ↓
RELEASE
  ↓
LAUNCH
  ↓
FLIGHT
  ↓
SENT
```

The goal is to make a familiar interface action feel more tactile and cinematic.

---

## 🎬 The Experience

### 01 — Compose

The interface opens as a minimal creative email workspace.

The message contains:

* Recipient
* Subject
* Message body
* ZIP attachment
* Send button

The fictional message is addressed to:

`creative@studio.co`

and includes:

`brand-system.zip — 42.8 MB`

---

### 02 — Press to Send

The user presses the **Send** button.

The button responds immediately:

* Compresses slightly
* Changes appearance
* Rotates the send icon
* Changes the label to **Release**
* Updates the status message

The interface now communicates that the action is being prepared.

---

### 03 — Release

When the user releases the button, the send sequence begins.

The button changes to:

**Sending**

The message interface starts disappearing while the flight animation takes over.

---

### 04 — Message Launch

A paper-plane style object appears and launches from the message interface.

The message fades away as the plane travels diagonally across the workspace.

A visual trail follows the plane to reinforce the sense of movement.

---

### 05 — Message Sent

Once the flight sequence completes, the interface displays a confirmation marker:

**SENT**

A check mark is drawn inside the circular confirmation indicator.

---

### 06 — Delivery Confirmation

The final state reveals:

> On its way.

The interface confirms:

`Delivered to creative@studio.co`

The user can then select:

**Compose again**

to reset the experience.

---

## ✨ Interaction System

| Interaction   | Result                         |
| ------------- | ------------------------------ |
| Hover Send    | Button lifts + purple emphasis |
| Press         | Button compresses              |
| Hold          | Label changes to Release       |
| Release       | Message begins sending         |
| Sending       | Plane launches                 |
| Flight        | Message fades + trail expands  |
| Sent          | Check mark appears             |
| Compose Again | Interface resets               |
| Escape        | Resets the interaction         |

---

## 🧠 State System

The interaction is controlled through four logical states:

```text
IDLE
 │
 │ Press
 ▼
PRESSING
 │
 │ Release
 ▼
SENDING
 │
 │ 1.55s
 ▼
SENT
 │
 │ Compose Again
 ▼
IDLE
```

## The JavaScript begins in the `idle` state, switches to `sending` after release, and changes to `sent` after the 1550ms animation sequence.

## 🖱️ Press Interaction

The Send button uses pointer events to create the press-and-release interaction.

```text
Pointer Down
     ↓
PRESS
     ↓
Pointer Up
     ↓
SEND
```

The interaction also supports:

* Mouse
* Touch
* Space
* Enter

Keyboard interaction is handled through `keydown` and `keyup` events.

---

## 🎨 Motion Details

### Button Press

The button compresses slightly during the press:

```text
Normal
  ↓
Pressed
  ↓
Release
```

The send icon also shifts and rotates to visually communicate the interaction.

---

### Message Departure

Once sending begins, the message moves downward slightly while fading away.

```text
Message
   ↓
Fade
   ↓
Departure
```

The CSS handles this through the `messageAway` animation.

---

### ✈️ Plane Flight

The paper plane starts small and becomes visible as it launches.

```text
START
  ↗
   ↗
    ↗
     ↗
      DESTINATION
```

The plane travels diagonally while rotating slightly and scaling down toward the end of its path.

---

### Trail

A growing trail follows the plane during the flight sequence.

The trail expands horizontally while fading into the background.

---

### Sent Confirmation

After the flight, a circular **SENT** marker appears.

The check mark then draws itself into the circle, creating a clean completion moment.

---

## 📩 Message Interface

The build uses a minimal email composition interface containing:

```text
NEW MESSAGE

Creative Direction

TO
creative@studio.co

SUBJECT
Brand System — Final Files

Hi team,

The final brand system is ready for review.
Sharing the complete package below.
```

The interface is intentionally designed to keep the Send interaction as the visual focus.

---

## 📦 Attachment

The message contains a fictional ZIP attachment:

```text
brand-system.zip
42.8 MB
```

This provides context for the Send interaction and makes the component feel like part of a real product interface.

---

## 🛠️ Built With

* **HTML5**
* **CSS3**
* **JavaScript**
* CSS Keyframe Animations
* Pointer Events API
* Responsive Design
* Reduced Motion Support

No frameworks or external JavaScript libraries are required.

---

## 📱 Responsive

The composition adapts to smaller screens.

On mobile:

* Email window becomes wider relative to the viewport
* Message padding decreases
* Recipient and subject spacing is reduced
* Plane flight distance is shortened
* Trail length is reduced
* Status caption becomes smaller

This preserves the core animation while fitting smaller displays.

---

## ♿ Accessibility

The interaction supports keyboard controls using:

```text
Space
Enter
Escape
```

The Send button also exposes a visible focus state for keyboard navigation.

---

## ♿ Reduced Motion

The build includes:

```css
prefers-reduced-motion: reduce
```

When enabled, animation and transition durations are reduced significantly.

---

## 📂 Project Structure

```text
aaruvi-builds-button-series-02/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🚀 Run Locally

Clone the repository:

```bash
git clone https://github.com/aaruvibuilds/aaruvi-builds-button-series-02.git
```

Enter the project:

```bash
cd aaruvi-builds-button-series-02
```

Open:

```text
index.html
```

No build process is required.

---

## 🌐 Live Demo

Experience the interaction:

**https://aaruvibuilds.github.io/aaruvi-builds-button-series-02/**

---

## 💻 Source Code

Explore the complete source:

**https://github.com/aaruvibuilds/aaruvi-builds-button-series-02**

---

## 🎯 The Idea

A normal Send button communicates:

**Click → Sent**

This build turns the same action into a visual journey:

```text
PRESS
  ↓
RELEASE
  ↓
LAUNCH
  ↓
FLIGHT
  ↓
CONFIRMATION
```

The interface makes the invisible act of sending a message visible.

The message doesn't simply disappear.

**It leaves.**

---

# ⚡ AARUVI BUILDS

**Frontend • UI • Motion**

Building modern web experiences through frontend development, creative UI and smooth motion.

### Connect

* 📸 Instagram — https://instagram.com/aaruvi_builds
* ▶️ YouTube — https://youtube.com/@AaruviBuilds
* 💻 GitHub — https://github.com/aaruvibuilds

---

### BUILD. EXPERIMENT. CREATE.

*Series 02 / Button Animation*

