"use client";

import { Icon, type IconName } from "./Icon";

type SegmentItem<T extends string> = {
  value: T;
  label?: string;
  icon?: IconName;
  title?: string;
};

// Segmented two-option toggle (pill split into halves). Used for lang + theme.
export function SegmentToggle<T extends string>({
  items,
  value,
  onChange,
  ariaLabel,
}: {
  items: SegmentItem<T>[];
  value: T;
  onChange: (value: T) => void;
  ariaLabel: string;
}) {
  return (
    <div className="seg" role="group" aria-label={ariaLabel}>
      {items.map((it) => {
        const active = it.value === value;
        return (
          <button
            key={it.value}
            type="button"
            className={"seg__btn" + (active ? " active" : "")}
            onClick={() => onChange(it.value)}
            aria-pressed={active}
            title={it.title}
          >
            {it.icon ? <Icon name={it.icon} size={15} /> : null}
            {it.label ? <span>{it.label}</span> : null}
          </button>
        );
      })}
    </div>
  );
}
