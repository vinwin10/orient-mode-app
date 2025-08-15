# Turning Your Project into a Phone-Ready App

Imagine your app as a little “mini website” that lives entirely on your phone. Here’s how you bundle everything up and get it running—even without writing a single line of code yourself.

---

## 1. How to “Upload” to a Phone

You need to host that folder somewhere online so your phone can see it:

- Use any **free static hosting** service (for example: Netlify Drop, GitHub Pages, Surge).  
- Simply drag & drop the entire **orient-mode-app** folder onto the host’s upload area.

That’s it—no coding needed. The host will give you a web link (URL) like `https://yourname.netlify.app`.

---

## 2. Running It on Your Phone

1. **Open your phone’s browser** (Chrome, Safari, etc.).  
2. **Type—or tap—the link** your host provided.  
3. You’ll see a permission request:  
   - Allow **Motion/Sensor** (so it knows how you’re tilting)  
   - Allow **Location** (for weather where you are)  
   - Allow **Notifications** (so alarms and timers can buzz in the background)  

Once you grant those, the overlay disappears and your app springs to life.

---

## 3. Installing as a “Real” App

Most modern phones will notice the `manifest.json` and offer to **Add to Home Screen**:

- On Android/Chrome: tap the menu ⋮ and choose **Add to Home Screen**.  
- On iPhone/Safari: tap the Share icon (□↑) and select **Add to Home Screen**.

This places a nice icon on your home screen. Tap it, and the app opens full-screen—just like a downloaded app.

---

## 4. Using Your Orientation App

- **Upright (portrait)** → Alarm Clock: set an alarm, and it rings even if your screen is locked.  
- **Tilt right (landscape)** → Stopwatch: start, stop, reset—your splits stick around if you leave.  
- **Upside-down (portrait)** → Countdown Timer: enter minutes, press Start, and get alerted at zero.  
- **Tilt left (landscape)** → Weather: shows your city’s temperature and updates automatically every five minutes.

All of this happens in your browser—no extra servers, no complicated installs. Just rotate your phone and your tool appears.

---