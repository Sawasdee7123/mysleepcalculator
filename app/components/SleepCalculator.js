import { useState } from "react";  // React state hook for interactive UI
import ShareButtons from './ShareButtons';  // Social sharing buttons component
import { trackEvent } from './Analytics';  // Google Analytics event tracker utility

// Convert 12-hour time to 24-hour format (e.g., 7 PM → 19)
function to24Hour(hour, period) {
  let h = parseInt(hour, 10);
  if (period === "PM" && h !== 12) h += 12;
  if (period === "AM" && h === 12) h = 0;
  return h;
}

// Pad single digit numbers with leading zero (e.g., 7 → "07")
function pad(num) {
  return num.toString().padStart(2, "0");
}

// Format a JavaScript Date object as a 12-hour time string (e.g., "7:05 PM")
function formatTime(date) {
  let h = date.getHours();
  let m = date.getMinutes();
  const period = h >= 12 ? "PM" : "AM";
  h = h % 12 || 12;
  return `${h}:${pad(m)} ${period}`;
}

// Hours, minutes, and period options for the time picker dropdowns
const hours = Array.from({ length: 12 }, (_, i) => pad(i + 1));
const minutes = Array.from({ length: 60 }, (_, i) => pad(i));
const periods = ["AM", "PM"];

// Calculator modes: waking up or going to bed
const MODES = [
  { key: "wake", label: "Despertar" },
  { key: "sleep", label: "Acostar" }
];

/**
 * SleepCalculator component
 * - Allows user to select a time and mode (wake/acostar)
 * - Calculates and displays optimal bed/wake times for healthy sleep cycles
 * - Integrates social share buttons and Google Analytics tracking
 * - Responsive and accessible design with smooth UI transitions
 */
export default function SleepCalculator({ showAttribution = false }) {
  // State for time selection and results
  const [hour, setHour] = useState("07");                   // Selected hour
  const [minute, setMinute] = useState("00");               // Selected minute
  const [period, setPeriod] = useState("AM");               // AM/PM
  const [mode, setMode] = useState("wake");                 // Calculator mode
  const [showResults, setShowResults] = useState(false);    // Show/hide results card
  const [times, setTimes] = useState([]);                   // Calculated results
  const [resultTime, setResultTime] = useState("");         // Display time string

  // Calculate best sleep/wake times based on user input
  const handleCalculate = () => {
    trackEvent('sleep_calculator', `calculate_from_${mode}`);

    const cycles = 6;
    let options = [];
    let selectedTime = new Date();
    selectedTime.setSeconds(0);
    selectedTime.setMilliseconds(0);
    selectedTime.setHours(to24Hour(hour, period), parseInt(minute, 10), 0, 0);

    if (mode === "wake") {
      // Despertarte: count backwards from wake-up time
      let t = new Date(selectedTime.getTime());
      t.setMinutes(t.getMinutes() - 15); // Step 1: Subtract 15 min to fall asleep
      for (let i = 0; i < cycles; i++) {
        t.setMinutes(t.getMinutes() - 90); // Step 2: Subtract 90 min first
        options.unshift(formatTime(new Date(t.getTime())));
      }
    } else {
      // Acostarte: count forwards from bedtime
      let t = new Date(selectedTime.getTime());
      t.setMinutes(t.getMinutes() + 15); // Step 1: Add 15 min to fall asleep
      for (let i = 0; i < cycles; i++) {
        t.setMinutes(t.getMinutes() + 90); // Step 2: Add 90 min for each cycle
        options.push(formatTime(new Date(t.getTime())));
      }
      options.reverse(); // Show earliest wake-up time first
    }
    setResultTime(`${hour}:${minute} ${period}`);
    setTimes(options);
    setShowResults(true);
  };

  // --- UI styles for transitions ---
  // Fade card out, fade result in
  const cardTransition = {
    transition: "opacity 0.35s cubic-bezier(.53,1.2,.66,1)",
    opacity: showResults ? 0 : 1,
    pointerEvents: showResults ? "none" : "auto",
    position: showResults ? "absolute" : "static",
    width: "100%",
    left: 0,
    top: 0
  };
  const resultTransition = {
    transition: "opacity 0.35s cubic-bezier(.53,1.2,.66,1)",
    opacity: showResults ? 1 : 0,
    pointerEvents: showResults ? "auto" : "none",
    position: showResults ? "static" : "absolute",
    width: "100%",
    left: 0,
    top: 0
  };

  // Texts for headings and helper info
  const headings = {
    wake: "Hora para Acostarte",
    sleep: "Hora para Despertarte"
  };
  const infoLines = {
    wake: [
      "El tiempo promedio para conciliar el sueño es de unos 15 minutos.",
      `Para despertar a las ${resultTime}, deberías acostarte a una de estas horas:`
    ],
    sleep: [
      "El tiempo promedio para conciliar el sueño es de unos 15 minutos.",
      `Acostándote a las ${resultTime}, podrías despertarte a una de estas horas:`
    ]
  };
  const bottomLine = "Un buen descanso consiste en 5-6 ciclos de sueño completos.";

  // Indices for which times to highlight (typically first two, e.g. best options)
  const suggestedIdx = [0, 1];

  // Dynamic width based on state
  const cardWidth = showResults ? 520 : 380;

  return (
    <div style={{
      width: "100%",
      maxWidth: cardWidth,
      minHeight: 420,
      margin: "2rem auto",
      background: "rgba(56,58,90,0.82)",
      borderRadius: 28,
      padding: "2.3rem 2vw",
      boxShadow: "0 4px 32px 0 rgba(244,211,94,0.08), 0 4px 32px 0 rgba(24,26,48,0.16)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      border: "2.5px solid #f4d35e",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* ---- Time Picker Card ---- */}
      <div style={cardTransition}>
        {/* Header */}
        <div style={{
          color: "#fff",
          fontSize: "1.5rem",
          fontWeight: 800,
          marginBottom: ".7rem",
          textAlign: "center",
          letterSpacing: "0.3px"
        }}>
          ¿A qué hora te quieres...?
        </div>
        {/* Mode Toggle Chips */}
        <div style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "1.2rem"
        }}>
          {/* Mode Buttons: Wake or Sleep */}
          {MODES.map(opt => (
            <button
              key={opt.key}
              type="button"
              onClick={() => {
                setMode(opt.key);
                if (opt.key === "wake") {
                  setHour("07");
                  setMinute("00");
                  setPeriod("AM");
                } else if (opt.key === "sleep") {
                  // Set time to "now", rounded down to nearest 5 minutes
                  const now = new Date();
                  let h = now.getHours();
                  let m = now.getMinutes();
                  m = Math.ceil(m / 5) * 5; // round UP to nearest 5-min increment
                  if (m === 60) {
                    m = 0;
                    h = (h + 1) % 24;
                  }
                  let period = h >= 12 ? "PM" : "AM";
                  let hour12 = h % 12 || 12;
                  setHour(hour12.toString().padStart(2, "0"));
                  setMinute(m.toString().padStart(2, "0"));
                  setPeriod(period);
                }
              }}
              style={{
                fontWeight: 700,
                fontSize: "1.11rem",
                padding: "0.65rem 1.35rem",
                borderRadius: 12,
                border: "none",
                cursor: "pointer",
                color: mode === opt.key ? "#181a30" : "#f4d35e",
                background: mode === opt.key
                  ? "linear-gradient(120deg,#f4d35e 85%,#f8e9b1 100%)"
                  : "rgba(244,211,94,0.11)",
                boxShadow: mode === opt.key
                  ? "0 2px 16px 0 #f4d35e66"
                  : "0 1px 7px 0 #f4d35e22",
                opacity: mode === opt.key ? 1 : 0.82,
                transition: "all 0.14s cubic-bezier(.4,1.3,.55,.97)"
              }}
            >
              {opt.label}
            </button>
          ))}
        </div>
        {/* Time Selection Dropdowns (Hours, Minutes, AM/PM) */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "rgba(36,37,56,0.93)",
            borderRadius: 14,
            boxShadow: "0 2px 18px 0 rgba(24,26,48,0.10)",
            padding: "0.3rem 0.8rem",
            marginBottom: 28,
            width: "100%",
            maxWidth: 350,
            minWidth: 235,
            marginLeft: "auto",
            marginRight: "auto"
          }}
        >
          {/* Visually hidden labels for accessibility */}
          <label htmlFor="hour" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
            Hora
          </label>
          <select
            id="hour"
            value={hour}
            onChange={e => setHour(e.target.value)}
            style={{
              fontSize: "2.1rem",
              fontWeight: 700,
              background: "transparent",
              color: "#fff",
              border: "none",
              borderRight: "1.5px solid #46466c",
              borderRadius: "12px 0 0 12px",
              padding: "10px 0",
              outline: "none",
              appearance: "none",
              WebkitAppearance: "none",
              MozAppearance: "none",
              width: 68,
              textAlign: "center",
              textAlignLast: "center",
              fontFamily: "inherit",
              boxShadow: "none",
              height: "2.6em",
              minWidth: 0
            }}
          >
            {hours.map(h => <option key={h} value={h}>{h}</option>)}
          </select>
          <span style={{
            color: "#e6debb",
            fontSize: "2rem",
            padding: "0 6px",
            fontWeight: 600,
            userSelect: "none"
          }}>
            :
          </span>
          <label htmlFor="minute" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
            Minutos
          </label>
          <select
            id="minute"
            value={minute}
            onChange={e => setMinute(e.target.value)}
            style={{
              fontSize: "2.1rem",
              fontWeight: 700,
              background: "transparent",
              color: "#fff",
              border: "none",
              borderRight: "1.5px solid #46466c",
              padding: "10px 0",
              outline: "none",
              appearance: "none",
              WebkitAppearance: "none",
              MozAppearance: "none",
              width: 68,
              textAlign: "center",
              textAlignLast: "center",
              fontFamily: "inherit",
              boxShadow: "none",
              height: "2.6em"
            }}
          >
            {minutes.map(m => <option key={m} value={m}>{m}</option>)}
          </select>
          <label htmlFor="period" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
            AM o PM
          </label>
          <select
            id="period"
            value={period}
            onChange={e => setPeriod(e.target.value)}
            style={{
              fontSize: "2.1rem",
              fontWeight: 700,
              background: "transparent",
              color: "#fff",
              border: "none",
              borderRadius: "0 12px 12px 0",
              padding: "10px 0",
              outline: "none",
              appearance: "none",
              WebkitAppearance: "none",
              MozAppearance: "none",
              width: 68,
              textAlign: "center",
              textAlignLast: "center",
              fontFamily: "inherit",
              boxShadow: "none",
              height: "2.6em"
            }}
          >
            {periods.map(p => <option key={p} value={p}>{p}</option>)}
          </select>
        </div>

        {/* Calculate Button */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.6rem' }}>
          <button
            type="button"
            style={{
              background: "linear-gradient(90deg, #f4d35e 90%, #fff3b8 100%)",
              color: "#181a30",
              fontWeight: 800,
              fontSize: "1.13rem",
              padding: "1rem 2.5rem",
              borderRadius: "14px",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 4px 18px 0 #f4d35e33",
              letterSpacing: "1px",
              transition: "filter 0.16s"
            }}
            onClick={handleCalculate}
          >
            Calcular la Hora
          </button>
        </div>
      </div>

      {/* ---- Results Card ---- */}
      <div style={resultTransition}>
        {/* Results heading */}
        <div style={{
          textAlign: "center",
          color: "#f4d35e",
          fontWeight: 800,
          fontSize: "2.1rem",
          marginBottom: "0.2em"
        }}>{headings[mode]}</div>
        {/* Info lines */}
        <div style={{
          color: "#fff",
          fontSize: "1.25rem",
          margin: "0.5em 0 1.3em 0",
          lineHeight: 1.45,
          textAlign: "center"
        }}>
          {infoLines[mode].map((line, i) => (
            <div
              key={i}
              style={{
                marginBottom: i === 0 ? "0.375em" : 0
              }}
            >
              {line}
            </div>
          ))}
        </div>
        {/* Suggested times grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1.1rem",
          justifyContent: "center",
          marginBottom: "1.5rem"
        }}>
          {times.map((t, i) => (
            <div key={t}
              style={{
                background: suggestedIdx.includes(i) ? "#ffe9a8" : "#272740",
                color: suggestedIdx.includes(i) ? "#181a30" : "#fff",
                padding: "1rem 2.1rem",
                fontSize: "2rem",
                borderRadius: 14,
                fontWeight: 700,
                minWidth: 140,
                position: "relative",
                boxShadow: suggestedIdx.includes(i)
                  ? "0 0 0 3px #f4d35e99, 0 1px 20px 0 #ffe08077"
                  : "0 1px 14px 0 #191a3025",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "box-shadow 0.24s, background 0.24s, color 0.24s"
              }}>
              {t}
            </div>
          ))}
        </div>
        {/* Bottom explanation */}
        <div style={{
          color: "#fff",
          fontSize: "1.25rem",
          margin: "0.4em 0 1.3em 0",
          lineHeight: 1.45,
          textAlign: "center"
        }}>
          <div style={{ marginBottom: "0.375em" }}>
            {mode === "wake"
              ? "Si te acuestas a estas horas, podrás completar ciclos de sueño de 90 minutos."
              : "Si te despiertas a estas horas, habrás dormido varios ciclos completos de 90 minutos."}
          </div>
          <div>
            {bottomLine}
          </div>
        </div>

        {/* Social Share Buttons */}
        <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
          <ShareButtons />
        </div>

        {/* Back Button (returns to calculator card) */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            type="button"
            onClick={() => setShowResults(false)}
            style={{
              padding: "1.1rem 2.5rem",
              borderRadius: "14px",
              border: "none",
              background: "#e6debb",
              color: "#181a30",
              fontWeight: 700,
              fontSize: "1.13rem",
              boxShadow: "0 4px 18px 0 #e6debb88",
              cursor: "pointer",
              letterSpacing: "1px",
              transition: "filter 0.16s"
            }}
          >
            ← Volver
          </button>
        </div>
      </div>
    </div>
  );
}
