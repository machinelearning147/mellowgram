// src/screens/Albums.jsx
import React from "react";
import { albumMocks } from "../utils/mockdata";
import SparkleFAB from "../shared/SparkleFAB";

export default function Albums() {
  return (
    <div className="p-4">
      <div className="text-sm text-[var(--text-muted)] mb-3">Albums</div>
      <div className="space-y-3">
        {albumMocks.map((a) => (
          <div
            key={a.id}
            className="flex items-center gap-3 p-3 rounded-xl bg-white shadow-sm"
          >
            <div
              className="w-20 h-14 rounded-lg overflow-hidden"
              style={{
                background: `linear-gradient(90deg, ${a.c1}, ${a.c2})`,
              }}
            ></div>
            <div className="flex-1">
              <div className="font-semibold">{a.title}</div>
              <div className="text-xs text-[var(--text-muted)]">
                {a.mood} · {a.count} photos
              </div>
            </div>
            <div className="text-sm text-[var(--text-muted)]">›</div>
          </div>
        ))}
      </div>
      <SparkleFAB />
    </div>
  );
}
