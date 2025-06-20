"use client"

import { useState } from "react"
import { RiMapPin2Fill, RiArrowUpDownLine, RiUser3Line } from "@remixicon/react"
import DatePicker from "./DatePicker"
import LocationPicker from "./LocationPicker"

interface BookingData {
  tripType: "oneWay" | "withReturn"
  from: string
  to: string
  departureDate: Date | null
  returnDate: Date | null
  passengers: number
}

export default function BookingWidget() {
  const [bookingData, setBookingData] = useState<BookingData>({
    tripType: "withReturn",
    from: "",
    to: "",
    departureDate: new Date(),
    returnDate: null,
    passengers: 1,
  })

  const [showDatePicker, setShowDatePicker] = useState<"departure" | "return" | null>(null)
  const [showLocationPicker, setShowLocationPicker] = useState<"from" | "to" | null>(null)

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

  const handleTripTypeChange = (type: "oneWay" | "withReturn") => {
    setBookingData((prev) => ({
      ...prev,
      tripType: type,
      returnDate: type === "oneWay" ? null : prev.returnDate,
    }))
  }

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

  const sendWhatsAppMessage = () => {
    const { tripType, from, to, departureDate, returnDate, passengers } = bookingData

    if (!from || !to || !departureDate) {
      alert("Por favor completa todos los campos obligatorios")
      return
    }

    const message = `🚖 *RESERVA DE TAXI*

📍 *Origen:* ${from}
📍 *Destino:* ${to}
🔄 *Tipo de viaje:* ${tripType === "oneWay" ? "Solo ida" : "Ida y vuelta"}
📅 *Fecha de salida:* ${formatDate(departureDate)}
${tripType === "withReturn" && returnDate ? `📅 *Fecha de regreso:* ${formatDate(returnDate)}` : ""}
👥 *Pasajeros:* ${passengers} ${passengers === 1 ? "persona" : "personas"}

¡Hola! Me gustaría reservar un taxi con estos detalles. ¿Podrías confirmarme disponibilidad y tarifa?`

    const phoneNumber = "5493757501633" // Reemplazar con el número real
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="booking-widget-container">
      <div className="booking-widget-card">
        {/* Trip Type Toggle */}
        <div className="trip-toggle">
          <button
            className={`toggle-button ${bookingData.tripType === "oneWay" ? "active" : ""}`}
            onClick={() => handleTripTypeChange("oneWay")}
          >
            Solo Ida
          </button>
          <button
            className={`toggle-button ${bookingData.tripType === "withReturn" ? "active" : ""}`}
            onClick={() => handleTripTypeChange("withReturn")}
          >
            Ida & Vuelta
          </button>
        </div>

        {/* Location Fields */}
        <div className="location-fields">
          <div className="location-field">
            <label className="location-label">Desde</label>
            <button className="location-input" onClick={() => setShowLocationPicker("from")}>
              <RiMapPin2Fill size={16} className="location-icon" />
              <span className="location-text">{bookingData.from}</span>
            </button>
          </div>

          <button className="swap-locations-btn" onClick={swapLocations}>
            <RiArrowUpDownLine size={20} />
          </button>

          <div className="location-field">
            <label className="location-label">Hasta</label>
            <button className="location-input" onClick={() => setShowLocationPicker("to")}>
              <RiMapPin2Fill size={16} className="location-icon" />
              <span className="location-text">{bookingData.to}</span>
            </button>
          </div>
        </div>

        {/* Date Fields */}
        <div className="date-fields">
          <button className="date-input departure-date" onClick={() => setShowDatePicker("departure")}>
            <div className="date-content">
              <span className="date-label">Partida</span>
              <span className="date-value">{formatDate(bookingData.departureDate) || "Seleccionar"}</span>
            </div>
          </button>

          {bookingData.tripType === "withReturn" && (
            <button className="date-input return-date" onClick={() => setShowDatePicker("return")}>
              <div className="date-content">
                <span className="date-label">Retorno</span>
                <span className="date-value">{formatDate(bookingData.returnDate) || "Seleccionar"}</span>
              </div>
            </button>
          )}
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
          title={showDatePicker === "departure" ? "Fecha de salida" : "Fecha de regreso"}
          selectedDate={showDatePicker === "departure" ? bookingData.departureDate : bookingData.returnDate}
        />
      )}
    </div>
  )
}