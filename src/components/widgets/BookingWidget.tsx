"use client"

import { useState } from "react"
import { RiMapPin2Fill, RiArrowUpDownLine, RiUser3Line, RiCalendarLine, RiTimeLine } from "@remixicon/react"
import DatePicker from "./DatePicker"
import LocationPicker from "./LocationPicker"
import TimePicker from "./TimePicker"
import "@/components/widgets/BookingWidget.css"

import config from "@/config"

interface BookingData {
  from: string
  to: string
  departureDate: Date | null
  departureTime: string | null
  passengers: number
}

export default function BookingWidget() {
  const [bookingData, setBookingData] = useState<BookingData>({
    from: "",
    to: "",
    departureDate: new Date(),
    departureTime: "00:00",
    passengers: 1,
  })

  const [showDatePicker, setShowDatePicker] = useState<"departure" | "return" | null>(null)
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

  const handleDateSelect = (date: Date, type: "departure" | "return") => {
    setBookingData((prev) => ({
      ...prev,
      [type === "departure" ? "departureDate" : "returnDate"]: date,
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
    const month = date.toLocaleDateString("es-AR", { month: "short" })
    const suffix =
      day === 1 || day === 21 || day === 31
        ? "st"
        : day === 2 || day === 22
          ? "nd"
          : day === 3 || day === 23
            ? "rd"
            : "th"
    const formattedMonth = month.charAt(0).toUpperCase() + month.slice(1)
    return `${day}${suffix} ${formattedMonth}`
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

    const message = `🚖 *RESERVA DE TRASLADO*

📍 *Origen:* ${from}
📍 *Destino:* ${to}
📅 *Fecha de salida:* ${formatDate(departureDate)}
🕐 *Hora de salida:* ${departureTime}
👥 *Pasajeros:* ${passengers} ${passengers === 1 ? "persona" : "personas"}

Me gustaría reservar un taxi con estos detalles. ¿Podrías confirmarme disponibilidad y tarifa?
    
${config.SITE_URL}`

    const phoneNumber = config.PHONE_NUMBER
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`

    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="booking-widget-container">
      <div className="booking-widget-card">
        {/* Location Fields */}
        <div className="location-fields">
          <div className="location-field">
            <label className="location-label">Desde</label>
            <button className="location-input" onClick={() => setShowLocationPicker("from")}>
              <RiMapPin2Fill size={16} className="location-icon" />
              <span className="location-text">{bookingData.from || "Seleccionar origen"}</span>
            </button>
          </div>

          <button className="swap-locations-btn" onClick={swapLocations} aria-label="Intercambiar origen y destino">
            <RiArrowUpDownLine size={20} />
          </button>

          <div className="location-field">
            <label className="location-label">Hasta</label>
            <button className="location-input" onClick={() => setShowLocationPicker("to")}>
              <RiMapPin2Fill size={16} className="location-icon" />
              <span className="location-text">{bookingData.to || "Seleccionar destino"}</span>
            </button>
          </div>
        </div>

        {/* Date and Time Fields */}
        <div className="date-time-fields">
          <button className="date-input departure-date" onClick={() => setShowDatePicker("departure")}>
            <RiCalendarLine size={20} />
            <div className="date-content">
              <span className="date-label">Fecha</span>
              <span className="date-value">{formatDate(bookingData.departureDate) || "Seleccionar"}</span>
            </div>
          </button>

          <button className="time-input" onClick={() => setShowTimePicker(true)}>
            <RiTimeLine size={20} />
            <div className="time-content">
              <span className="time-label">Hora</span>
              <span className="time-value">{bookingData.departureTime || "Seleccionar"}</span>
            </div>
          </button>
        </div>

        {/* Bottom Section */}
        <div className="bottom-section">
          <div className="passenger-controls">
            <button
              className="passenger-btn"
              onClick={() => handlePassengerChange(false)}
              disabled={bookingData.passengers <= 1}
            >
              -
            </button>
            <RiUser3Line size={16} />
            <span className="passenger-count">{bookingData.passengers}</span>
            <button
              className="passenger-btn"
              onClick={() => handlePassengerChange(true)}
              disabled={bookingData.passengers >= 8}
            >
              +
            </button>
          </div>

          <button className="update-route-button" onClick={sendWhatsAppMessage}>
            Reservar
          </button>
        </div>
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
          onSelect={(date) => handleDateSelect(date, showDatePicker)}
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