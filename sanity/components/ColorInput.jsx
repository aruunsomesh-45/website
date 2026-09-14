import React from 'react'
import { set, unset } from 'sanity'

const PRESETS = [
  { name: 'Warm Amber (Screenshot)', color: '#ffcd71' },
  { name: 'Studio Gray', color: '#f4f4f4' },
  { name: 'Muted Cream', color: '#f6f3eb' },
  { name: 'Muted Sage', color: '#dce5dd' },
  { name: 'Soft Blue', color: '#dbe5ee' },
  { name: 'Terracotta', color: '#eed8cb' },
  { name: 'Dark Charcoal', color: '#171717' },
  { name: 'Pure White', color: '#ffffff' },
]

export function ColorInput(props) {
  const { value = '#ffcd71', onChange } = props

  const handleColorChange = (e) => {
    const nextValue = e.target.value
    onChange(nextValue ? set(nextValue) : unset())
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <input
          type="color"
          value={value || '#ffcd71'}
          onChange={handleColorChange}
          style={{
            width: '44px',
            height: '44px',
            padding: '2px',
            border: '1px solid #ccc',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        />
        <input
          type="text"
          value={value || ''}
          placeholder="#ffcd71"
          onChange={handleColorChange}
          style={{
            flex: 1,
            padding: '10px 12px',
            border: '1px solid #ccc',
            borderRadius: '6px',
            fontFamily: 'monospace',
            fontSize: '14px',
          }}
        />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {PRESETS.map((preset) => (
          <button
            key={preset.color}
            type="button"
            onClick={() => onChange(set(preset.color))}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '5px 10px',
              background: '#f9f9f9',
              border: value === preset.color ? '2px solid #111' : '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '12px',
              fontWeight: value === preset.color ? '600' : '400',
              cursor: 'pointer',
            }}
          >
            <span
              style={{
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                backgroundColor: preset.color,
                border: '1px solid rgba(0,0,0,0.2)',
                display: 'inline-block',
              }}
            />
            {preset.name}
          </button>
        ))}
      </div>
    </div>
  )
}
