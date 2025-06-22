"use client"

import { useState } from "react"
import { RiCloseLine, RiSearchLine, RiMapPin2Fill } from "@remixicon/react"

interface LocationPickerProps {
  locations: string[]
  onSelect: (location: string) => void
  onClose: () => void
  title: string
}

export default function LocationPicker({ locations, onSelect, onClose, title }: LocationPickerProps) {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredLocations = locations.filter((location) => location.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="location-picker-overlay">
      <div className="location-picker-modal">
        <div className="location-picker-header">
          <h3>{title}</h3>
          <button className="close-btn" onClick={onClose}>
            <RiCloseLine size={24} />
          </button>
        </div>

        <div className="search-section">
          <div className="search-input">
            <RiSearchLine size={20} />
            <input
              type="text"
              placeholder="Buscar..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="locations-list">
          {filteredLocations.map((location, index) => (
            <button key={index} className="location-item" onClick={() => onSelect(location)}>
              <RiMapPin2Fill size={16} />
              <span>{location}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}