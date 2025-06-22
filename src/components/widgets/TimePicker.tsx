"use client"

import { useState } from "react"
import { RiCloseLine } from "@remixicon/react"

interface TimePickerProps {
  onSelect: (time: string) => void
  onClose: () => void
  title: string
  selectedTime?: string | null
}

export default function TimePicker({ onSelect, onClose, title, selectedTime }: TimePickerProps) {
  const [hour, setHour] = useState(selectedTime ? selectedTime.split(":")[0] : "")
  const [minute, setMinute] = useState(selectedTime ? selectedTime.split(":")[1] : "")

  const hours = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, "0"))
  const minutes = Array.from({ length: 12 }, (_, i) => (i * 5).toString().padStart(2, "0"))

  const handleConfirm = () => {
    const time = `${hour}:${minute}`
    onSelect(time)
  }

  return (
    <div className="time-picker-overlay">
      <div className="time-picker-modal">
        <div className="time-picker-header">
          <h3>{title}</h3>
          <button className="close-btn" onClick={onClose}>
            <RiCloseLine size={24} />
          </button>
        </div>

        <div className="time-picker-content">
          <div className="time-selectors">
            <div className="time-selector">
              <label>Hora</label>
              <select value={hour} onChange={(e) => setHour(e.target.value)} className="time-select">
                {hours.map((h) => (
                  <option key={h} value={h}>
                    {h}
                  </option>
                ))}
              </select>
            </div>

            <div className="time-separator">:</div>

            <div className="time-selector">
              <label>Minutos</label>
              <select value={minute} onChange={(e) => setMinute(e.target.value)} className="time-select">
                {minutes.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="time-display">
            {hour}:{minute}
          </div>

          <button className="confirm-time-btn" onClick={handleConfirm}>
            Confirmar Hora
          </button>
        </div>
      </div>
    </div>
  )
}