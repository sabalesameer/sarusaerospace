import React from 'react';

export default function MapEmbed({
  lat = 15.7751985,
  lng = 74.4628837,
  placeName = 'SARUS AEROSPACE PVT LTD',
  height = 'h-96',
}) {
  const mapSrc = `https://www.google.com/maps?q=${lat},${lng}&z=17&output=embed`;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className={`w-full ${height} md:${height} lg:h-80`}> 
          <iframe
            title={placeName}
            src={mapSrc}
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold">{placeName}</h3>
            <p className="text-sm text-gray-500">{lat}, {lng}</p>
          </div>

          <div className="flex gap-2">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-transparent text-sm font-medium shadow-sm hover:shadow-md transition"
            >
              Open in Google Maps
            </a>

            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-3xl bg-blue-600 hover:bg-amber-400 outline-2 outline-amber-400 outline-offset-4 hover:outline-blue-600   text-black text-sm font-medium shadow-md hover:opacity-95 transition-all duration-300"
            >
              Directions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
