"use client"

import { useState } from "react"
import { RiMapPin2Fill, RiArrowLeftRightLine, RiUser3Line, RiCalendarLine, RiTimeLine } from "@remixicon/react"
import DatePicker from "./DatePicker"
import LocationPicker from "./LocationPicker"
import TimePicker from "./TimePicker"

import config from "@/config"

interface BookingData {
  from: string
  to: string
  departureDate: Date | null
  departureTime: string | null
  passengers: number
}

export default function BookingWidgetHome() {
  const [bookingData, setBookingData] = useState<BookingData>({
    from: "Seleccionar origen",
    to: "Seleccionar destino",
    departureDate: new Date(),
    departureTime: "00:00",
    passengers: 1,
  })

  const [showDatePicker, setShowDatePicker] = useState<"departure" | null>(null)
  const [showLocationPicker, setShowLocationPicker] = useState<"from" | "to" | null>(null)
  const [showTimePicker, setShowTimePicker] = useState(false)

  const locations = [
    "Aeropuerto Internacional de Iguazú",
    "Puerto Iguazú Centro",
    "Cataratas del Iguazú",
    "Hito Tres Fronteras",
    "Ciudad del Este",
    "Foz do Iguaçu",
    "Hotel Sheraton Iguazú",
    "Gran Meliá Iguazú",
    "Terminal de Ómnibus Puerto Iguazú",
  ]

  const handleLocationSelect = (location: string, type: "from" | "to") => {
    setBookingData((prev) => ({
      ...prev,
      [type]: location,
    }))
    setShowLocationPicker(null)
  }

  const handleDateSelect = (date: Date) => {
    setBookingData((prev) => ({
      ...prev,
      departureDate: date,
    }))
    setShowDatePicker(null)
  }

  const handlePassengerChange = (increment: boolean) => {
    setBookingData((prev) => ({
      ...prev,
      passengers: increment ? Math.min(prev.passengers + 1, 8) : Math.max(prev.passengers - 1, 1),
    }))
  }

  const swapLocations = () => {
    setBookingData((prev) => ({
      ...prev,
      from: prev.to,
      to: prev.from,
    }))
  }

  const formatDate = (date: Date | null) => {
    if (!date) return ""
    const day = date.getDate()
    const month = date.toLocaleDateString("en-US", { month: "short" })
    const suffix =
      day === 1 || day === 21 || day === 31
        ? "st"
        : day === 2 || day === 22
          ? "nd"
          : day === 3 || day === 23
            ? "rd"
            : "th"
    return `${day}${suffix} ${month}`
  }

  const handleTimeSelect = (time: string) => {
    setBookingData((prev) => ({
      ...prev,
      departureTime: time,
    }))
    setShowTimePicker(false)
  }

  const sendWhatsAppMessage = () => {
    const { from, to, departureDate, departureTime, passengers } = bookingData

    if (!from || !to || !departureDate || !departureTime) {
      alert("Por favor completa todos los campos obligatorios")
      return
    }

    const message = `🚖 *RESERVA DE TAXI*

📍 *Origen:* ${from}
📍 *Destino:* ${to}
📅 *Fecha de salida:* ${formatDate(departureDate)}
🕐 *Hora de salida:* ${departureTime}
👥 *Pasajeros:* ${passengers} ${passengers === 1 ? "persona" : "personas"}

Me gustaría reservar un taxi con estos detalles. ¿Podrías confirmarme disponibilidad y tarifa?
    
${config.SITE_URL}`

    const phoneNumber = config.PHONE_NUMBER
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="booking-widget-home-container">
      <div className="booking-widget-home">
        {/* From Location */}
        <div className="home-location-field">
          <label className="home-location-label">From</label>
          <button className="home-location-input" onClick={() => setShowLocationPicker("from")}>
            <RiMapPin2Fill size={16} className="home-location-icon" />
            <span className="home-location-text">{bookingData.from}</span>
          </button>
        </div>

        {/* Swap Button */}
        <button className="home-swap-btn" onClick={swapLocations}>
          <RiArrowLeftRightLine size={20} />
        </button>

        {/* To Location */}
        <div className="home-location-field">
          <label className="home-location-label">To</label>
          <button className="home-location-input" onClick={() => setShowLocationPicker("to")}>
            <RiMapPin2Fill size={16} className="home-location-icon" />
            <span className="home-location-text">{bookingData.to}</span>
          </button>
        </div>

        {/* Departure Date */}
        <button className="home-date-input departure" onClick={() => setShowDatePicker("departure")}>
          <RiCalendarLine size={20} />
          <div className="home-date-content">
            <span className="home-date-label">Fecha</span>
            <span className="home-date-value">{formatDate(bookingData.departureDate) || "Seleccionar"}</span>
          </div>
        </button>

        {/* Return Date (Placeholder) */}
        <button className="home-date-input return" onClick={() => setShowTimePicker(true)}>
          <RiTimeLine size={20} />
          <div className="home-date-content">
            <span className="home-date-label">Hora</span>
            <span className="home-date-value">{bookingData.departureTime || "Seleccionar"}</span>
          </div>
        </button>

        {/* Passengers */}
        <div className="home-passenger-section">
          <button
            className="home-passenger-btn"
            onClick={() => handlePassengerChange(false)}
            disabled={bookingData.passengers <= 1}
          >
            -
          </button>
          <div className="home-passenger-display">
            <RiUser3Line size={16} />
            <span className="home-passenger-count">{bookingData.passengers}</span>
          </div>
          <button
            className="home-passenger-btn"
            onClick={() => handlePassengerChange(true)}
            disabled={bookingData.passengers >= 8}
          >
            +
          </button>
        </div>

        {/* Update Route Button */}
        <button className="home-update-route-btn" onClick={sendWhatsAppMessage}>
          Reservar
        </button>
      </div>

      {/* Modals */}
      {showLocationPicker && (
        <LocationPicker
          locations={locations}
          onSelect={(location) => handleLocationSelect(location, showLocationPicker)}
          onClose={() => setShowLocationPicker(null)}
          title={showLocationPicker === "from" ? "Seleccionar origen" : "Seleccionar destino"}
        />
      )}

      {showDatePicker && (
        <DatePicker
          onSelect={handleDateSelect}
          onClose={() => setShowDatePicker(null)}
          title="Fecha de salida"
          selectedDate={bookingData.departureDate}
        />
      )}

      {showTimePicker && (
        <TimePicker
          onSelect={handleTimeSelect}
          onClose={() => setShowTimePicker(false)}
          title="Hora de salida"
          selectedTime={bookingData.departureTime}
        />
      )}
    </div>
  )
}