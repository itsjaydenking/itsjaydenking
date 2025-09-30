// Lightweight XP/Progress system using localStorage
// Awards XP once per unique key; computes a simple level curve.

import { useEffect, useState } from "react";

const STORAGE_KEY = "atk_xp_state_v1"; // A Tale of Two Selves XP state

function readState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : { xp: 0, awarded: {} };
  } catch {
    return { xp: 0, awarded: {} };
  }
}

function writeState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore storage errors (private mode, etc.)
  }
}

export function getLevel(xp) {
  // Simple level curve: level ups every 50 XP, with a soft cap around level 10
  return Math.min(10, Math.floor(xp / 50) + 1);
}

export function useXP() {
  const [state, setState] = useState(() => readState());

  const addXP = (amount, key) => {
    setState((prev) => {
      const awarded = { ...(prev.awarded || {}) };
      if (key && awarded[key]) return prev; // already awarded for this key
      const xp = prev.xp + Math.max(0, amount || 0);
      if (key) awarded[key] = true;
      const next = { xp, awarded };
      writeState(next);
      return next;
    });
  };

  const hasAward = (key) => !!(state.awarded && state.awarded[key]);

  return {
    xp: state.xp || 0,
    level: getLevel(state.xp || 0),
    addXP,
    hasAward,
  };
}

export function useVisitXP(uniqueKey, amount = 10) {
  const { addXP, hasAward } = useXP();
  useEffect(() => {
    if (!hasAward(uniqueKey)) addXP(amount, uniqueKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uniqueKey]);
}
