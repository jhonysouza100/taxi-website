"use client"

import { useState } from "react"
import { RiArrowLeftSLine, RiArrowRightSLine, RiCloseLine } from "@remixicon/react"

interface DatePickerProps {
  onSelect: (date: Date) => void
  onClose: () => void
  title: string
  selectedDate?: Date | null
}

export default function DatePicker({ onSelect, onClose, title, selectedDate }: DatePickerProps) {
  const [currentDate, setCurrentDate] = useState(selectedDate || new Date())

  const monthNames = [
    "ENERO",
    "FEBRERO",
    "MARZO",
    "ABRIL",
    "MAYO",
    "JUNIO",
    "JULIO",
    "AGOSTO",
    "SEPTIEMBRE",
    "OCTUBRE",
    "NOVIEMBRE",
    "DICIEMBRE",
  ]

  const dayNames = ["Lu", "Ma", "Mi", "Ju", "Vi", "Sa", "Do"]

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()

  const firstDayOfMonth = new Date(year, month, 1)
  const lastDayOfMonth = new Date(year, month + 1, 0)
  const firstDayWeekday = (firstDayOfMonth.getDay() + 6) % 7 // Adjust for Monday start
  const daysInMonth = lastDayOfMonth.getDate()

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const navigateMonth = (direction: number) => {
    setCurrentDate(new Date(year, month + direction, 1))
  }

  const selectDate = (day: number) => {
    const selected = new Date(year, month, day)
    if (selected >= today) {
      onSelect(selected)
    }
  }

  const isDateSelected = (day: number) => {
    if (!selectedDate) return false
    const date = new Date(year, month, day)
    return date.toDateString() === selectedDate.toDateString()
  }

  const isDateDisabled = (day: number) => {
    const date = new Date(year, month, day)
    return date < today
  }

  const renderCalendarDays = () => {
    const days = []

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDayWeekday; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>)
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isSelected = isDateSelected(day)
      const isDisabled = isDateDisabled(day)
      const isToday = new Date(year, month, day).toDateString() === today.toDateString()

      days.push(
        <button
          key={day}
          className={`calendar-day ${isSelected ? "selected" : ""} ${isDisabled ? "disabled" : ""} ${isToday ? "today" : ""}`}
          onClick={() => selectDate(day)}
          disabled={isDisabled}
        >
          {day}
        </button>,
      )
    }

    return days
  }

  return (
    <div className="date-picker-overlay">
      <div className="date-picker-modal">
        <div className="date-picker-header">
          <h3>{title}</h3>
          <button className="close-btn" onClick={onClose}>
            <RiCloseLine size={24} />
          </button>
        </div>

        <div className="calendar-navigation">
          <button onClick={() => navigateMonth(-1)}>
            <RiArrowLeftSLine size={24} />
          </button>
          <span className="month-year">
            {monthNames[month]} {year}
          </span>
          <button onClick={() => navigateMonth(1)}>
            <RiArrowRightSLine size={24} />
          </button>
        </div>

        <div className="calendar-grid">
          <div className="calendar-weekdays">
            {dayNames.map((day) => (
              <div key={day} className="weekday">
                {day}
              </div>
            ))}
          </div>

          <div className="calendar-days">{renderCalendarDays()}</div>
        </div>
      </div>
    </div>
  )
}